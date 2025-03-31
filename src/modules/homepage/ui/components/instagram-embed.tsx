// modules/homepage/ui/components/instagram-embed.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { InstagramEmbed } from "react-social-media-embed";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siInstagram } from "simple-icons";

// SVG Icon component for simple-icons
const SimpleIcon = ({
  icon,
  className
}: {
  icon: { path: string },
  className?: string
}) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d={icon.path} />
    </svg>
  );
};

interface InstagramEmbedComponentProps {
  url?: string;
  width?: number | string;
}

export function InstagramEmbedComponent({
  url = "https://www.instagram.com/elonesports/",
  width = 328
}: InstagramEmbedComponentProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use effect to check if the embed has loaded correctly
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Set a timeout to check if the embed has loaded
    const timeout = setTimeout(() => {
      // If still loading after 10 seconds, consider it an error
      if (isLoading) {
        setIsLoading(false);
        setHasError(true);
      }
    }, 10000);
    
    // Check if the iframe is created (indicates successful embedding)
    const checkForEmbed = setInterval(() => {
      if (containerRef.current) {
        const iframe = containerRef.current.querySelector('iframe');
        if (iframe) {
          setIsLoading(false);
          clearInterval(checkForEmbed);
          clearTimeout(timeout);
        }
      }
    }, 1000);
    
    return () => {
      clearInterval(checkForEmbed);
      clearTimeout(timeout);
    };
  }, [isLoading]);

  return (
    <div className="w-full">
      {/* Instagram header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <SimpleIcon icon={siInstagram} className="h-5 w-5 mr-2 fill-gray-700" />
          <span className="font-medium">@elonesports</span>
        </div>
        <Button 
          size="sm" 
          variant="outline"
          className="text-xs"
          asChild
        >
          <a 
            href="https://www.instagram.com/elonesports/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Follow
          </a>
        </Button>
      </div>

      {/* Instagram embed with loading and error states */}
      <Card className={`overflow-hidden border border-gray-200 ${isLoading ? 'min-h-[400px]' : ''}`}>
        <CardContent className="p-0">
          {isLoading && (
            <div className="flex items-center justify-center min-h-[400px] bg-gray-50">
              <div className="animate-pulse text-gray-400">Loading Instagram feed...</div>
            </div>
          )}
          
          {hasError ? (
            <div className="p-8 text-center">
              <div className="text-gray-500 mb-4">
                Unable to load Instagram content
              </div>
              <Button 
                variant="outline" 
                size="sm"
                className="mx-auto"
                asChild
              >
                <a 
                  href="https://www.instagram.com/elonesports/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visit our Instagram
                </a>
              </Button>
            </div>
          ) : (
            <div 
              ref={containerRef} 
              className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}
            >
              <InstagramEmbed 
                url={url}
                width={width}
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}