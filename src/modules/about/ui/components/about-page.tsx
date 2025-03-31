import React from "react";
import Image from "next/image";

// Import simple-icons with lowercase imports
import {
  siDiscord,
  siTwitch,
  siInstagram,
  siX,
} from "simple-icons";

// Import Lucide icons
import { ExternalLink, Users, Calendar, AlertTriangle, MessageSquare } from "lucide-react";

// Import shadcn components
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header section */}
      <section className="bg-elon-maroon py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 pt-16">
          <div className="max-w-4xl relative">
            <div className="absolute -top-8 left-0 h-1 w-24 bg-elon-gold rounded"></div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Combine your interest in gaming with your education at Elon Esports
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Links</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <a 
                          href="https://www.elon.edu/u/academics/communications/about-the-school/elon-esports/" 
                          className="text-elon-maroon hover:underline flex items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Official Elon Esports Page
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://elon.campuslabs.com/engage/organization/esports" 
                          className="text-elon-maroon hover:underline flex items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Phoenix Connect
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://www.elon.edu/u/campus-recreation-wellness/sports-and-events/club-sports/" 
                          className="text-elon-maroon hover:underline flex items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Elon Club Sports
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-elon-maroon/5">
                  <CardHeader>
                    <CardTitle>Follow Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="bg-white rounded-md h-10 w-10"
                        asChild
                      >
                        <a 
                          href="https://www.instagram.com/elonesports/" 
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram"
                        >
                          <svg viewBox="0 0 24 24" className="h-5 w-5 text-gray-700">
                            <path fill="currentColor" d={siInstagram.path} />
                          </svg>
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="bg-white rounded-md h-10 w-10"
                        asChild
                      >
                        <a 
                          href="https://twitter.com/ElonEsports" 
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Twitter"
                        >
                          <svg viewBox="0 0 24 24" className="h-5 w-5 text-gray-700">
                            <path fill="currentColor" d={siX.path} />
                          </svg>
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="bg-white rounded-md h-10 w-10"
                        asChild
                      >
                        <a 
                          href="https://www.twitch.tv/elonesports_" 
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Twitch"
                        >
                          <svg viewBox="0 0 24 24" className="h-5 w-5 text-gray-700">
                            <path fill="currentColor" d={siTwitch.path} />
                          </svg>
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="bg-white rounded-md h-10 w-10"
                        asChild
                      >
                        <a 
                          href="https://discord.gg/W7BfUNd" 
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Discord"
                        >
                          <svg viewBox="0 0 24 24" className="h-5 w-5 text-gray-700">
                            <path fill="currentColor" d={siDiscord.path} />
                          </svg>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="space-y-12 mt-0">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Gaming Space</h2>
                  <p className="text-gray-600 mb-6">
                    Welcome to the home of Elon Esports! Our dedicated gaming space is located in Global Commons, providing a hub for both competitive and casual gamers. With high-performance PCs and a vibrant community, we&apos;ve created the perfect environment for players of all skill levels.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="rounded-xl overflow-hidden">
                      <Image 
                        src="/about/esports-room-1.jpg" 
                        alt="Elon Esports Gaming Room" 
                        width={400} 
                        height={300}
                        className="w-full object-cover h-64"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden">
                      <Image 
                        src="/about/esports-room-2.jpg" 
                        alt="Elon Esports Gaming Setup" 
                        width={400} 
                        height={300}
                        className="w-full object-cover h-64"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Room Hours & Schedules</h2>
                  <Card className="border-t-4 border-elon-maroon">
                    <CardHeader>
                      <CardTitle className="text-2xl">Room Availability</CardTitle>
                      <CardDescription>
                        Our gaming room is open to all members throughout the semester, with hours varying based on staff availability and university schedules.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-elon-maroon/5 rounded-lg p-5 border border-elon-maroon/20">
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                          <Calendar className="h-5 w-5 mr-2 text-elon-maroon" />
                          Schedule Information
                        </h4>
                        <ul className="list-disc pl-5 text-gray-600 space-y-2">
                          <li>Current hours are posted weekly in our Discord server</li>
                          <li>Special events and tournaments may change regular hours</li>
                          <li>Extended hours are often available during game release events</li>
                          <li>Room closures during holidays and breaks are announced in advance</li>
                        </ul>
                      </div>
                      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                        <p className="text-gray-700 flex items-center">
                          <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
                          <span>The room is staffed by student volunteers, so your understanding regarding any last-minute schedule changes is appreciated.</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Discord Community</h2>
                  <p className="text-gray-600 mb-6">
                    Our Discord server is the central hub for all Elon Esports communication. Whether you&apos;re a current student, alumni, or visitor, you&apos;re welcome to join our online community. This is where we post room schedules, stream announcements, tournament information, and coordinate team practices.
                  </p>
                  
                  <Card className="border border-gray-200">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2 text-gray-700">
                          <path fill="currentColor" d={siDiscord.path} />
                        </svg>
                        Finding Your Way Around Discord
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <Card className="mb-4 shadow-sm">
                            <CardContent className="pt-6">
                              <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                <MessageSquare className="h-5 w-5 mr-2 text-elon-maroon" />
                                Important Channels
                              </h4>
                              <ul className="text-gray-600 space-y-3">
                                <li>
                                  <Badge variant="outline" className="text-elon-maroon bg-white border-elon-maroon/30">#rules</Badge>
                                  <span className="ml-2">Read our community guidelines here first</span>
                                </li>
                                <li>
                                  <Badge variant="outline" className="text-elon-maroon bg-white border-elon-maroon/30">#channel-&-roles</Badge>
                                  <span className="ml-2">Select your games and interests</span>
                                </li>
                                <li>
                                  <Badge variant="outline" className="text-elon-maroon bg-white border-elon-maroon/30">#community</Badge>
                                  <span className="ml-2">Introduce yourself to everyone</span>
                                </li>
                                <li>
                                  <Badge variant="outline" className="text-elon-maroon bg-white border-elon-maroon/30">#announcements</Badge>
                                  <span className="ml-2">Room hours and important updates</span>
                                </li>
                              </ul>
                            </CardContent>
                          </Card>
                          <Button 
                            className="bg-elon-maroon hover:bg-elon-maroon/90 text-white flex items-cente"
                            asChild
                          >
                            <a 
                              href="https://discord.gg/W7BfUNd" 
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2">
                                <path fill="currentColor" d={siDiscord.path} />
                              </svg>
                              Join Our Discord
                            </a>
                          </Button>
                        </div>
                        <div>
                          <div className="rounded-xl overflow-hidden border border-gray-200 mb-2">
                            <Image 
                              src="/about/discord-roles.png" 
                              alt="Discord Role Selection Channel" 
                              width={500} 
                              height={350}
                              className="w-full object-cover h-80"
                            />
                          </div>
                          <p className="text-sm text-gray-500 text-center">Our #channel-&-roles section</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Teams and Broadcasts</h2>
                  <p className="text-gray-600 mb-6">
                    At Elon Esports, we field competitive teams across multiple games and regularly stream our matches. Our broadcast schedule is posted in Discord, letting you know when to tune in and support your fellow Phoenix gamers. Whether you&apos;re interested in watching high-level gameplay or learning the ropes of esports broadcasting, there&apos;s a place for you here.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Community Events</h2>
                  <p className="text-gray-600 mb-6">
                    Beyond competitive play, we host regular community events that are open to everyone. From casual game nights to tournaments, viewing parties for major esports events, and industry workshops, there&apos;s always something happening in our community.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    <Card className="shadow-sm hover:shadow-md transition-all duration-300 border-t-4 border-t-elon-maroon">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-gray-900 mb-2 text-lg flex items-center">
                          <span className="flex items-center justify-center bg-elon-maroon/10 text-elon-maroon p-2 rounded-full mr-3 h-10 w-10">
                            <Calendar className="h-5 w-5" />
                          </span>
                          Local Tournaments
                        </h3>
                        <p className="text-gray-600">Regular competitions for games like Smash Bros, Rocket League, and more</p>
                      </CardContent>
                    </Card>
                    <Card className="shadow-sm hover:shadow-md transition-all duration-300 border-t-4 border-t-elon-maroon">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-gray-900 mb-2 text-lg flex items-center">
                          <span className="flex items-center justify-center bg-elon-maroon/10 text-elon-maroon p-2 rounded-full mr-3 h-10 w-10">
                            <svg viewBox="0 0 24 24" className="h-5 w-5">
                              <path fill="currentColor" d={siTwitch.path} />
                            </svg>
                          </span>
                          Watch Parties
                        </h3>
                        <p className="text-gray-600">Group viewing of major esports events like Worlds, Majors, and championships</p>
                      </CardContent>
                    </Card>
                    <Card className="shadow-sm hover:shadow-md transition-all duration-300 border-t-4 border-t-elon-maroon">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-gray-900 mb-2 text-lg flex items-center">
                          <span className="flex items-center justify-center bg-elon-maroon/10 text-elon-maroon p-2 rounded-full mr-3 h-10 w-10">
                            <svg viewBox="0 0 24 24" className="h-5 w-5">
                              <path fill="currentColor" d="M21,6H3V5h18V6z M15,11H3v1h12V11z M13,16H3v1h10V16z M10,3H9v2H8v1h1v2h1V6h1V5h-1V3z M21,17h-1v-2h-1v2h-2v1h2v2h1v-2h1V17z" />
                            </svg>
                          </span>
                          Gaming Events
                        </h3>
                        <p className="text-gray-600">Fun group events where we play games like Capture the Flag in Minecraft, Mafia, and others</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="involvement">
                      <AccordionTrigger className="text-2xl font-bold text-gray-900">
                        How to Get Involved
                      </AccordionTrigger>
                      <AccordionContent>
                        <Card className="mt-4">
                          <CardContent className="pt-6">
                            <p className="text-gray-600 mb-6">
                              Whether you&apos;re looking to compete at a high level, learn broadcasting skills, or just hang out and play games with friends, there are many ways to get involved with Elon Esports:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              <Card className="border-elon-maroon/20">
                                <CardHeader className="bg-elon-maroon/5">
                                  <CardTitle className="flex items-center">
                                    <Users className="h-5 w-5 mr-2 text-elon-maroon" />
                                    For Competitive Players
                                  </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-6">
                                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                                    <li>Join our Discord and express interest in team tryouts</li>
                                    <li>Attend team practices and scrimmages</li>
                                    <li>Participate in casual tournaments to get noticed</li>
                                  </ul>
                                </CardContent>
                              </Card>
                              <Card className="border-elon-maroon/20">
                                <CardHeader className="bg-elon-maroon/5">
                                  <CardTitle className="flex items-center">
                                    <Users className="h-5 w-5 mr-2 text-elon-maroon" />
                                    For Casual Gamers
                                  </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-6">
                                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                                    <li>Drop by during open hours to use our facilities</li>
                                    <li>Join game-specific channels in Discord</li>
                                    <li>Attend community game nights and social events</li>
                                  </ul>
                                </CardContent>
                              </Card>
                            </div>
                          </CardContent>
                        </Card>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;