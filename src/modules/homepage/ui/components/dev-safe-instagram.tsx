"use client"

import { useEffect, useState } from "react";
import { InstagramEmbed } from "react-social-media-embed";

interface DevSafeInstagramEmbedProps {
  url: string;
  width?: string | number;
  captioned?: boolean;
}

export function DevSafeInstagramEmbed({ url, width = "100%", captioned = false }: DevSafeInstagramEmbedProps) {
  const [isDev, setIsDev] = useState(false);
  
  useEffect(() => {
    // Check if we're in development
    setIsDev(window.location.hostname === 'localhost' || 
             window.location.hostname === '127.0.0.1');
  }, []);
  
  if (isDev) {
    // Mock embed for development
    return (
      <div 
        className="w-full rounded-md overflow-hidden bg-gray-100 flex items-center justify-center" 
        style={{height: "600px"}}
      >
        <div className="text-center p-4">
          <div className="text-gray-500 mb-2">
            Instagram Embed Preview (disabled in development)
          </div>
          <div className="font-medium">@elonesports</div>
          <div className="mt-2 text-sm text-gray-400">
            Instagram embeds are blocked on localhost due to X-Frame-Options
          </div>
        </div>
      </div>
    );
  }
  
  // Real embed for production
  return (
    <InstagramEmbed 
      url={url} 
      width={width}
      captioned={captioned} 
    />
  );
}