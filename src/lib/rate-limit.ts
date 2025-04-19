// src/lib/rate-limit.ts
type RateLimitOptions = {
  interval: number;
  uniqueTokenPerInterval: number;
};

type TokenRecord = {
  count: number;
  timestamp: number;
};

export function rateLimit(options: RateLimitOptions) {
  const { interval } = options;
  const tokenCache = new Map<string, TokenRecord>();
  
  // Clean up old records periodically
  const cleanup = () => {
    const now = Date.now();
    const windowStart = now - interval;
    
    tokenCache.forEach((record, token) => {
      if (record.timestamp < windowStart) {
        tokenCache.delete(token);
      }
    });
  };
  
  // Schedule cleanup every interval
  const cleanupInterval = setInterval(cleanup, interval);
  
  // Ensure cleanup interval is cleared when Node.js process exits
  if (typeof process !== 'undefined') {
    process.on('exit', () => {
      clearInterval(cleanupInterval);
    });
    
    // Cleanup for unexpected shutdowns
    ['SIGINT', 'SIGTERM'].forEach(signal => {
      process.on(signal, () => {
        clearInterval(cleanupInterval);
        process.exit();
      });
    });
  }
  
  return {
    check: async (response: Response, token: string, limit: number): Promise<true> => {
      const now = Date.now();
      
      cleanup();
      
      const tokenRecord = tokenCache.get(token) || {
        count: 0,
        timestamp: now
      };
      
      // If token record is too old, reset it
      if (now - tokenRecord.timestamp > interval) {
        tokenRecord.count = 0;
        tokenRecord.timestamp = now;
      }
      
      // Check if token exceeds limit
      if (tokenRecord.count >= limit) {
        throw new Error('Rate limit exceeded');
      }
      
      // Increment token count
      tokenCache.set(token, {
        count: tokenRecord.count + 1,
        timestamp: tokenRecord.timestamp
      });
      
      return true;
    }
  };
}