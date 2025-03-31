import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

export function TeamsPage() {
  const teams = [
    {
      name: "League of Legends",
      imageUrl: "/logos/league-of-legends-logo.jpg",
      description: "Our flagship MOBA team competing in collegiate tournaments across the nation.",
      color: "bg-blue-800",
      gradient: "from-blue-900 to-indigo-900",
    },
    {
      name: "Rocket League",
      imageUrl: "/logos/rocket-league-logo.png",
      description: "High-octane vehicular soccer competition at its finest.",
      color: "bg-orange-600",
      gradient: "from-orange-700 to-red-700",
    },
    {
      name: "Overwatch",
      imageUrl: "/logos/overwatch-logo.png",
      description: "Team-based action with a focus on objectives and hero-based gameplay.",
      color: "bg-yellow-500",
      gradient: "from-yellow-600 to-orange-600",
    },
    {
      name: "Rainbow Six Siege",
      imageUrl: "/logos/rainbow-six-siege-logo.png",
      description: "Tactical shooter requiring precision, strategy, and teamwork.",
      color: "bg-slate-800",
      gradient: "from-slate-900 to-zinc-800",
    },
    {
      name: "Smash",
      imageUrl: "/logos/smash-bros-logo.png",
      description: "Platform fighting featuring iconic characters and competitive matchups.",
      color: "bg-red-600",
      gradient: "from-red-700 to-rose-700",
    },
    {
      name: "Valorant",
      imageUrl: "/logos/valorant-logo.png",
      description: "Tactical FPS blending precise gunplay with unique agent abilities.",
      color: "bg-pink-600",
      gradient: "from-pink-700 to-red-700",
    },
    {
      name: "Counter Strike 2",
      imageUrl: "/logos/counter-strike-2-logo.webp",
      description: "The premier competitive FPS with a legacy of esports excellence.",
      color: "bg-emerald-600",
      gradient: "from-emerald-700 to-teal-700",
    },
    {
      name: "Marvel Rivals",
      imageUrl: "/logos/marvel-rivals-logo.webp",
      description: "Team-based hero shooter featuring iconic Marvel characters.",
      color: "bg-purple-600", 
      gradient: "from-purple-700 to-violet-700",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Teams header section */}
      <section className="bg-elon-maroon py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat"></div>
        </div>
        <div className="container mx-auto px-6 pt-16">
          <div className="max-w-4xl relative">
            {/* Orange accent bar specifically above "Our Teams" text */}
            <div className="absolute -top-8 left-0 h-1 w-24 bg-elon-gold rounded"></div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Our Teams
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Elon Esports fields competitive teams across multiple titles. Our players represent Elon 
              University in collegiate tournaments nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Teams grid section - ENHANCED LOGO-FOCUSED DESIGN */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teams.map((team, index) => (
              <div key={index} className="flex flex-col h-full">
                <Card className="h-full border border-gray-100 rounded-xl overflow-hidden flex flex-col hover:border-gray-200 transition-colors">
                  <div className="flex-grow py-10 px-8 flex flex-col items-center justify-center">
                    <div className="mb-6 flex items-center justify-center h-36 w-36">
                      <Image 
                        src={team.imageUrl} 
                        alt={`${team.name} logo`} 
                        width={144}
                        height={144}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="px-3">
                      <h3 className="text-2xl font-bold text-center text-gray-900 mb-3">{team.name}</h3>
                      <p className="text-gray-600 text-center">
                        {team.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
            {/* Create a Team Card */}
            <div className="flex flex-col h-full">
              <Card className="h-full border border-dashed border-gray-300 rounded-xl overflow-hidden flex flex-col hover:border-gray-400 transition-colors">
                <div className="flex-grow py-10 px-8 flex flex-col items-center justify-center text-center">
                  <div className="mb-6 flex items-center justify-center h-36 w-36 rounded-full bg-elon-maroon text-white">
                    <HelpCircle className="w-20 h-20" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Create a Team!</h3>
                  <p className="text-gray-600 mb-6">
                    Want to compete in a game we don&apos;t currently support? Start your own team and join the Elon Esports family.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Join a team section */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Want to join a team?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We&apos;re always looking for dedicated players to join our competitive rosters. 
            No matter your skill level, there&apos;s a place for you in Elon Esports.
          </p>
          <div className="flex flex-wrap justify-center">
            <a 
              href="https://elon.campuslabs.com/engage/organization/esports" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-elon-maroon hover:bg-elon-maroon/90 text-white shadow-md px-6 py-3 rounded-md font-medium text-lg transition-colors"
            >
              Phoenix Connect
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}