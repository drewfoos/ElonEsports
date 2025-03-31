"use client"

import { useState, useEffect } from "react"
import ReactPlayer from "react-player/youtube"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Create a custom console error handler
const suppressYouTubeErrors = () => {
  // Store the original console.error
  const originalConsoleError = console.error;
  
  // Override console.error
  console.error = function(...args) {
    // Check if this is a YouTube-related error
    const errorString = args.join(' ');
    const isYouTubeError = 
      errorString.includes('twCIrrSX880') || 
      errorString.includes('unreachable code after return statement') ||
      errorString.includes('Failed to create WebGL context') ||
      errorString.includes('yCHuuWdOltD37cDbGo9hgREbyHXWERbyc4ACnEoBGlU') ||
      errorString.includes('moz-extension');
    
    // Only log errors that aren't related to YouTube
    if (!isYouTubeError) {
      originalConsoleError.apply(console, args);
    }
  };
  
  // Return a function to restore the original console.error
  return () => {
    console.error = originalConsoleError;
  };
};

type HeroVideoProps = {
  youtubeUrl?: string;
}

export function HeroYouTubeSection({
  youtubeUrl = "https://www.youtube.com/watch?v=twCIrrSX880"
}: HeroVideoProps) {
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
 
  useEffect(() => {
    setMounted(true)
    
    // Check for mobile viewport
    const checkForMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Initial check
    checkForMobile()
    
    // Add resize listener
    window.addEventListener('resize', checkForMobile)
    
    // Apply error suppression when component mounts
    const restoreConsole = suppressYouTubeErrors();
    
    // Cleanup
    return () => {
      restoreConsole();
      window.removeEventListener('resize', checkForMobile)
    };
  }, [])
 
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Video Background - with better mobile handling */}
      {mounted && (
        <div className="absolute inset-0 z-0 opacity-60">
          <div className="w-full h-full">
            {/* Gradient overlays for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent z-10" />
           
            {/* React Player for YouTube - with aspect ratio handling */}
            <div className="absolute w-full h-full overflow-hidden">
              <div className={`absolute ${isMobile ? 'w-auto min-w-[250%] max-w-none h-full left-1/2 -translate-x-1/2' : 'w-full h-full'}`}>
                <ReactPlayer
                  url={youtubeUrl}
                  playing={true}
                  loop={true}
                  muted={true}
                  width="100%"
                  height="100%"
                  config={{
                    playerVars: {
                      controls: 0,
                      showinfo: 0,
                      rel: 0,
                      iv_load_policy: 3,
                      modestbranding: 1,
                      playsinline: 1,
                      start: 5
                    }
                  }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}
                  className={isMobile ? "" : "object-cover"}
                  onError={(e) => {
                    if (process.env.NODE_ENV !== 'development') {
                      console.log('Video error handled silently');
                    } else {
                      console.log('Video player error:', e);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Additional dark overlay for mobile to ensure text readability */}
      {isMobile && (
        <div className="absolute inset-0 bg-black/50 z-5"></div>
      )}
     
      {/* Content overlay - with better mobile spacing */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4 py-16 md:py-0">
        <div className="animate-fade-in-up max-w-4xl w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter mb-3 md:mb-4 text-white">
            <span className="text-elon-maroon">ELON </span><span className="text-elon-gold">ESPORTS</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-6 md:mb-8">
            Compete. Connect. Conquer.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center w-full sm:w-auto">
            <Button size="lg" className="text-base md:text-lg px-6 py-5 md:px-8 md:py-6 bg-elon-gold hover:bg-elon-gold/90 text-black w-full sm:w-auto max-w-xs mx-auto sm:mx-0" asChild>
              <Link href="https://discord.gg/W7BfUNd" target="_blank" rel="noopener noreferrer">
                Join Our Community
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base md:text-lg px-6 py-5 md:px-8 md:py-6 border-white/50 text-white hover:bg-white/10 w-full sm:w-auto max-w-xs mx-auto sm:mx-0" asChild>
              <Link href="https://www.twitch.tv/elonesports_" target="_blank" rel="noopener noreferrer">
                Watch Us Live
              </Link>
            </Button>
          </div>
        </div>
      </div>
     
      {/* Scroll indicator - hidden on small screens */}
      <div className="absolute bottom-8 md:bottom-15 left-1/2 -translate-x-1/2 text-white/70 animate-bounce z-30 hidden sm:block">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}