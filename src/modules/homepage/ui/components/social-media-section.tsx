"use client"
import React, { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { siInstagram, siTwitch } from "simple-icons";
import { TwitchEmbed } from "./twitch-embed";
import { InstagramEmbed } from "react-social-media-embed";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";

// SVG Icon component for simple-icons
const SimpleIcon = ({
  icon,
  className
}: {
  icon: { path: string },
  className?: string
}) => {
  return (
    <svg role="img" viewBox="0 0 24 24" className={className}>
      <path d={icon.path} />
    </svg>
  );
};

// Instagram posts to display
const instagramPosts = [
  "https://www.instagram.com/p/DHeAhIGsyrP/",
  "https://www.instagram.com/p/DH2Btq_yAsz/",
  "https://www.instagram.com/p/DF8f36XsmjY/",
  "https://www.instagram.com/p/DGGlGGUPJ_x/",
  "https://www.instagram.com/p/DGuCp7bMzMt/",
  "https://www.instagram.com/p/DGdgZOJxWc1/"
];

// Instagram post card with fixed dimensions and scroll
function InstagramCard({ url }: { url: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Always render the embed so we can detect when the iframe loads.
  useEffect(() => {
    if (!containerRef.current) return;

    const timeout = setTimeout(() => {
      // If still loading after 10 seconds, remove loading overlay.
      setIsLoading(false);
    }, 10000);

    const checkForEmbed = setInterval(() => {
      if (containerRef.current && containerRef.current.querySelector('iframe')) {
        setIsLoading(false);
        clearInterval(checkForEmbed);
        clearTimeout(timeout);
      }
    }, 500);

    return () => {
      clearInterval(checkForEmbed);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Card className="overflow-hidden border border-gray-200 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Instagram header */}
      <div className="flex items-center justify-between p-3 border-b">
        <div className="flex items-center">
          <SimpleIcon icon={siInstagram} className="h-5 w-5 mr-2 fill-gray-700" />
          <span className="font-medium">@elonesports</span>
        </div>
        <Button size="sm" variant="outline" className="text-xs" asChild>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on Instagram"
          >
            View
          </a>
        </Button>
      </div>
      
      {/* Content area: render the embed and overlay a loader while waiting */}
      <CardContent className="p-0 flex-1 flex flex-col relative">
        <div
          ref={containerRef}
          className="h-[400px] overflow-auto w-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
        >
          <div className="w-full">
            <InstagramEmbed url={url} width="100%" captioned={false} />
          </div>
        </div>
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 p-6">
            <SimpleIcon icon={siInstagram} className="h-8 w-8 mb-3 animate-pulse text-gray-300" />
            <div className="text-gray-400">Loading post...</div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function SocialMediaSection() {
  return (
    <section className="bg-white py-16">
      <Container>
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            <span className="text-elon-maroon">CONNECT</span>{" "}
            <span className="text-elon-gold">WITH US</span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Follow our social media channels to stay updated on tournaments, events, and community highlights
          </p>
        </div>
        
        {/* Social Media Embed Tabs */}
        <div className="mx-auto max-w-6xl">
          <Tabs defaultValue="instagram" className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList className="bg-white">
                <TabsTrigger
                  value="instagram"
                  className="flex items-center gap-2 px-6 text-gray-900 data-[state=active]:text-elon-maroon"
                >
                  <SimpleIcon icon={siInstagram} className="h-4 w-4 fill-current" />
                  <span className="hidden sm:inline">Instagram</span>
                </TabsTrigger>
                <TabsTrigger
                  value="twitch"
                  className="flex items-center gap-2 px-6 text-gray-900 data-[state=active]:text-elon-maroon"
                >
                  <SimpleIcon icon={siTwitch} className="h-4 w-4 fill-current" />
                  <span className="hidden sm:inline">Twitch</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* Instagram Tab Content */}
            <TabsContent value="instagram" className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {instagramPosts.map((url, index) => (
                  <InstagramCard key={index} url={url} />
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button className="bg-elon-maroon hover:bg-elon-maroon/90 text-white" asChild>
                  <a
                    href="https://www.instagram.com/elonesports/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow Us on Instagram
                  </a>
                </Button>
              </div>
            </TabsContent>
            
            {/* Twitch Tab Content */}
            <TabsContent value="twitch" className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <TwitchEmbed
                channel="elonesports_"
                width="100%"
                height={400}
                autoplay={true}
                muted={true}
              />
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </section>
  );
}

// Add custom scrollbar styles
const scrollbarStyles = `
  /* For Webkit browsers (Chrome, Safari) */
  .scrollbar-thin::-webkit-scrollbar {
    width: 6px;
  }
  
  .scrollbar-thin::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  .scrollbar-thin::-webkit-scrollbar-thumb {
    background-color: #d1d1d1;
    border-radius: 3px;
  }
  
  .scrollbar-thin::-webkit-scrollbar-thumb:hover {
    background-color: #a8a8a8;
  }
  
  /* For Firefox */
  .scrollbar-thin {
    scrollbar-width: thin;
    scrollbar-color: #d1d1d1 #f1f1f1;
  }
`;

// Inject scrollbar styles into the document head
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = scrollbarStyles;
  document.head.appendChild(style);
}

export default SocialMediaSection;
