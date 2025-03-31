"use client"
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { siInstagram, siTwitch } from "simple-icons";
import { TwitchEmbed } from "./twitch-embed";
import { DevSafeInstagramEmbed } from "./dev-safe-instagram";
import { Container } from "@/components/container"; // Add this import

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
        <div className="mx-auto max-w-5xl">
          <Tabs defaultValue="instagram" className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList className="bg-white">
                <TabsTrigger value="instagram" className="flex items-center gap-2 px-6 text-gray-900 data-[state=active]:text-elon-maroon">
                  <SimpleIcon icon={siInstagram} className="h-4 w-4 fill-current" />
                  <span className="hidden sm:inline">Instagram</span>
                </TabsTrigger>
                <TabsTrigger value="twitch" className="flex items-center gap-2 px-6 text-gray-900 data-[state=active]:text-elon-maroon">
                  <SimpleIcon icon={siTwitch} className="h-4 w-4 fill-current" />
                  <span className="hidden sm:inline">Twitch</span>
                </TabsTrigger>
              </TabsList>
            </div>
            {/* Instagram Tab Content */}
            <TabsContent value="instagram" className="flex justify-center rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="w-full max-w-[328px]">
                <DevSafeInstagramEmbed
                  url="https://www.instagram.com/elonesports/"
                  width="100%"
                  captioned
                />
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