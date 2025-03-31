import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siInstagram, siTwitch, siX, siYoutube, siDiscord } from "simple-icons";

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

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Teams", path: "/teams" },
    { name: "About", path: "/about" },
  ];
  
  const socialLinks = [
    { name: "Instagram", icon: siInstagram, url: "https://www.instagram.com/elonesports/" },
    { name: "Twitch", icon: siTwitch, url: "https://www.twitch.tv/elonesports_" },
    { name: "X", icon: siX, url: "https://twitter.com/ElonEsports" },
    { name: "YouTube", icon: siYoutube, url: "https://www.youtube.com/channel/UCQx4X9RTOOsxkawAbFNJS-w" },
    { name: "Discord", icon: siDiscord, url: "https://discord.gg/W7BfUNd" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main footer content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8">
                <Image 
                  src="/logo.svg" 
                  alt="Elon Esports Logo" 
                  width={40} 
                  height={40}
                  className="h-8 w-8"
                />
              </div>
              <span className="font-bold text-xl">
                <span className="text-elon-maroon">ELON</span>
                <span className="text-elon-gold">ESPORTS</span>
              </span>
            </div>
            <p className="text-gray-600 mb-6">
              Elon Club Esports provides a community for gamers and esports enthusiasts on campus.
            </p>
            <Button 
              variant="outline" 
              size="sm"
              className="border-elon-maroon text-elon-maroon hover:bg-elon-maroon/5"
              asChild
            >
              <Link href="/join">Join The Team</Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path}
                    className="text-gray-600 hover:text-elon-maroon transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                    href="https://elon.campuslabs.com/engage/organization/esports"
                    className="text-gray-600 hover:text-elon-maroon transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Phoenix Connect
                  </a>
              </li>
              <li>
                <a 
                  href="https://www.elon.edu/u/academics/communications/about-the-school/elon-esports/"
                  className="text-gray-600 hover:text-elon-maroon transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Elon University Esports
                </a>
              </li>
              <li>
                <a 
                  href="https://www.elon.edu/"
                  className="text-gray-600 hover:text-elon-maroon transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Elon University
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-gray-900 mb-4">Connect With Us</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <SimpleIcon 
                    icon={social.icon} 
                    className="h-5 w-5 fill-gray-700"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between">
          <div className="text-sm text-gray-600">
            © {currentYear} Elon Esports. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 text-sm text-gray-600 flex items-center gap-6">
            <Link 
              href="/privacy"
              className="hover:text-elon-maroon transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms"
              className="hover:text-elon-maroon transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}