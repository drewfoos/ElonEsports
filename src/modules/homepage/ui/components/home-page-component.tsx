"use client"
import { IntroSection } from "./introduction-section"
import { HeroYouTubeSection } from "./hero-youtube-section"
import dynamic from 'next/dynamic'

// Import the social media section with dynamic import and disable SSR
const SocialMediaSection = dynamic(
  () => import('./social-media-section').then((mod) => mod.SocialMediaSection),
  { ssr: false }
)

export function HomePageComponent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section using YouTube video */}
      <HeroYouTubeSection />
      <IntroSection />
      <SocialMediaSection />
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
  )
}