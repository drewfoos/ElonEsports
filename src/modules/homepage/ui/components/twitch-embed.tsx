"use client"
import React, { useEffect, useState, useRef, ReactElement } from "react";

// TypeScript declaration for the Twitch object that gets added to window
declare global {
  interface Window {
    Twitch?: {
      Embed: new (
        elementId: string,
        options: {
          width?: string | number;
          height?: string | number;
          channel?: string;
          video?: string;
          collection?: string;
          parent?: string[];
          autoplay?: boolean;
          muted?: boolean;
          time?: string;
        }
      ) => TwitchEmbed;
    };
  }
}

// Define a type for the Twitch embed
interface TwitchEmbed {
  addEventListener: (event: string, callback: (data?: unknown) => void) => void;
  removeEventListener: (event: string, callback: (data?: unknown) => void) => void;
  getPlayer: () => TwitchPlayer;
  destroy: () => void;
}

// Define a type for the Twitch player
interface TwitchPlayer {
  play: () => void;
  pause: () => void;
  setVolume: (volume: number) => void;
  getMuted: () => boolean;
  setMuted: (muted: boolean) => void;
  // Add other methods as needed
}

// Define TypeScript interface for props
interface TwitchEmbedProps {
  channel: string;
  width?: string | number;
  height?: string | number;
  autoplay?: boolean;
  muted?: boolean;
}

export function TwitchEmbed({
  channel,
  width = "100%",
  height = 400,
  autoplay = true,
  muted = false
}: TwitchEmbedProps): ReactElement {
  const [isLoaded, setIsLoaded] = useState(false);
  const embedRef = useRef<TwitchEmbed | null>(null);
 
  // Use a static ID that won't change between renders
  const embedId = `twitch-embed-${channel.replace(/[^a-zA-Z0-9]/g, '')}`;
  
  useEffect(() => {
    // We need to check if we're in the browser
    if (typeof window === 'undefined') {
      return;
    }
   
    // Function to load the Twitch embed script
    const loadScript = (): Promise<void> => {
      return new Promise<void>((resolve) => {
        // Check if script is already loaded
        if (window.Twitch) {
          resolve();
          return;
        }
       
        const script = document.createElement("script");
        script.id = 'twitch-embed-script';
        script.src = "https://embed.twitch.tv/embed/v1.js";
        script.async = true;
        script.onload = () => resolve();
        document.body.appendChild(script);
      });
    };
   
    // Create the embed after the script is loaded
    const createEmbed = async (): Promise<void> => {
      try {
        await loadScript();
       
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          const embedElement = document.getElementById(embedId);
         
          if (window.Twitch && embedElement) {
            // Cleanup previous instance if it exists
            if (embedRef.current) {
              embedRef.current.destroy();
            }
           
            // Create new embed
            embedRef.current = new window.Twitch.Embed(embedId, {
              width,
              height,
              channel,
              autoplay,
              muted,
              // Use current hostname as parent
              parent: [window.location.hostname]
            });
           
            setIsLoaded(true);
          } else {
            console.error("Twitch API not available or element not found");
          }
        }, 100);
      } catch (error) {
        console.error("Error creating Twitch embed:", error);
      }
    };
    
    // Initialize the embed
    createEmbed().catch((error) => {
      console.error("Failed to create Twitch embed:", error);
    });
    
    // Cleanup function
    return () => {
      // Destroy embed instance
      if (embedRef.current) {
        embedRef.current.destroy();
        embedRef.current = null;
      }
    };
  }, [channel, width, height, autoplay, muted, embedId]);
  
  return (
    <div className="twitch-embed-container">
      <div
        id={embedId}
        className="w-full h-full"
      >
        {!isLoaded && (
          <div className="flex items-center justify-center w-full h-[400px] bg-gray-900 animate-pulse rounded-md">
            <p className="text-white">Loading Twitch stream...</p>
          </div>
        )}
      </div>
    </div>
  );
}