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
    </div>
  )
}