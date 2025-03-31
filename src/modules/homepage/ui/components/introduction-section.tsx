import React from "react";
import { Gamepad2, Users, Trophy, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/container"; // Add this import

export function IntroSection() {
  return (
    <section className="bg-white py-24">
      {/* Hero section with angled design */}
      <Container>
        <div className="relative mb-6 pb-8">
          {/* Accent line */}
          <div className="absolute top-0 left-0 h-1 w-24 bg-elon-gold"></div>
          
          {/* Gaming badge */}
          <div className="mb-4 inline-flex items-center rounded-full bg-elon-maroon/5 px-3 py-1 text-sm font-medium text-elon-maroon">
            <Gamepad2 className="mr-2 h-4 w-4" />
            LEVEL UP YOUR COLLEGE EXPERIENCE
          </div>
          
          {/* Main heading with gradient effect */}
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-6xl">
            <span className="text-elon-maroon">ELON</span>{" "}
            <span className="bg-gradient-to-r from-elon-gold to-amber-500 bg-clip-text text-transparent">
              EEEESPORTS
            </span>
          </h1>
          
          <p className="max-w-2xl text-lg text-gray-700">
            Elon Club Esports provides a community for gamers and esports enthusiasts on campus.
            Compete against other universities across the country or join our community events
            to connect with fellow gamers who share your passion.
          </p>
        </div>

        {/* Feature cards in a clean grid */}
        <div className="grid gap-8 md:grid-cols-4">
          <Card className="group border-gray-100 bg-white transition-all hover:border-elon-gold/30 hover:shadow-md">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-elon-maroon/5 p-3">
                <Trophy className="h-8 w-8 text-elon-maroon group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Compete</h3>
              <p className="text-gray-600">
                Join our competitive teams and represent Elon in national tournaments
              </p>
            </CardContent>
          </Card>

          <Card className="group border-gray-100 bg-white transition-all hover:border-elon-gold/30 hover:shadow-md">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-elon-maroon/5 p-3">
                <Users className="h-8 w-8 text-elon-maroon group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Connect</h3>
              <p className="text-gray-600">
                Make friends and build connections with fellow gamers on campus
              </p>
            </CardContent>
          </Card>

          <Card className="group border-gray-100 bg-white transition-all hover:border-elon-gold/30 hover:shadow-md">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-elon-maroon/5 p-3">
                <Gamepad2 className="h-8 w-8 text-elon-maroon group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Play</h3>
              <p className="text-gray-600">
                Game with others across multiple popular titles in a fun environment
              </p>
            </CardContent>
          </Card>

          <Card className="group border-gray-100 bg-white transition-all hover:border-elon-gold/30 hover:shadow-md">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-elon-maroon/5 p-3">
                <Calendar className="h-8 w-8 text-elon-maroon group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Events</h3>
              <p className="text-gray-600">
                Attend viewing parties, tournaments, and social gatherings
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}