import React from "react";
import Image from "next/image";
import Link from "next/link";

export function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header section */}
      <section className="bg-elon-maroon py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat"></div>
        </div>
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
              <div className="sticky top-20 mt-8">
                <div className="bg-gray-50 rounded-xl p-8 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <a 
                        href="https://www.elon.edu/u/academics/communications/about-the-school/elon-esports/" 
                        className="text-elon-maroon hover:underline flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Official Elon Esports Page
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>                
                <div className="bg-elon-maroon/5 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="https://www.instagram.com/elonesports/" 
                      className="bg-white p-2 rounded-md shadow-sm hover:shadow transition-shadow"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <svg className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a 
                      href="https://twitter.com/ElonEsports" 
                      className="bg-white p-2 rounded-md shadow-sm hover:shadow transition-shadow"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <svg className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a 
                      href="https://www.twitch.tv/elonesports_" 
                      className="bg-white p-2 rounded-md shadow-sm hover:shadow transition-shadow"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitch"
                    >
                      <svg className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z" fillRule="evenodd" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a 
                      href="https://discord.gg/W7BfUNd" 
                      className="bg-white p-2 rounded-md shadow-sm hover:shadow transition-shadow"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Discord"
                    >
                      <svg className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.4058-.874-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Gaming Space</h2>
              <p className="text-gray-600 mb-6">
                Welcome to the home of Elon Esports! Our dedicated gaming space is located in Global Commons, providing a hub for both competitive and casual gamers. With high-performance PCs and a vibrant community, we've created the perfect environment for players of all skill levels.
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
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Room Hours & Schedules</h2>
              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  Our gaming room is open to all members throughout the semester, with hours varying based on staff availability and university schedules. For the most up-to-date information on when the room is open, check our Discord server where we post the current schedule each week.
                </p>
                <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
                  <h3 className="font-bold text-gray-900 mb-2">Room Schedule Information</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Current hours are posted weekly in our Discord server</li>
                    <li>Special events and tournaments may change regular hours</li>
                    <li>Extended hours are often available during game release events</li>
                    <li>Room closures during holidays and breaks are announced in advance</li>
                  </ul>
                </div>
                <p className="text-gray-600">
                  <strong>Note:</strong> The room is staffed by student volunteers, so your understanding regarding any last-minute schedule changes is appreciated.
                </p>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Discord Community</h2>
              <p className="text-gray-600 mb-6">
                Our Discord server is the central hub for all Elon Esports communication. Whether you're a current student, alumni, or visitor, you're welcome to join our online community. This is where we post room schedules, stream announcements, tournament information, and coordinate team practices.
              </p>
              
              <div className="bg-indigo-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Finding Your Way Around Discord</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
                      <h4 className="font-bold text-gray-900 mb-2">Important Channels</h4>
                      <ul className="text-gray-600 space-y-3">
                        <li>
                          <strong className="text-indigo-600">#rules</strong>: 
                          <span className="ml-2">Read our community guidelines here first</span>
                        </li>
                        <li>
                          <strong className="text-indigo-600">#channel-&-roles</strong>: 
                          <span className="ml-2">Select your games and interests</span>
                        </li>
                        <li>
                          <strong className="text-indigo-600">#community</strong>: 
                          <span className="ml-2">Introduce yourself to everyone</span>
                        </li>
                        <li>
                          <strong className="text-indigo-600">#announcements</strong>: 
                          <span className="ml-2">Room hours and important updates</span>
                        </li>
                      </ul>
                    </div>
                    <a 
                      href="https://discord.gg/W7BfUNd" 
                      className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium text-center inline-block hover:bg-indigo-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join Our Discord
                    </a>
                  </div>
                  <div>
                    <div className="rounded-xl overflow-hidden border border-indigo-100 mb-2">
                      <Image 
                        src="/about/discord-roles.png" 
                        alt="Discord Role Selection Channel" 
                        width={400} 
                        height={300}
                        className="w-full object-cover h-48"
                      />
                    </div>
                    <p className="text-sm text-gray-500 text-center">Our #channel-&-roles section</p>
                  </div>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Teams and Broadcasts</h2>
              <p className="text-gray-600 mb-6">
                At Elon Esports, we field competitive teams across multiple games and regularly stream our matches. Our broadcast schedule is posted in Discord, letting you know when to tune in and support your fellow Phoenix gamers. Whether you're interested in watching high-level gameplay or learning the ropes of esports broadcasting, there's a place for you here.
              </p>
              
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Community Events</h2>
              <p className="text-gray-600 mb-6">
                Beyond competitive play, we host regular community events that are open to everyone. From casual game nights to tournaments, viewing parties for major esports events, and industry workshops, there's always something happening in our community.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="bg-white shadow rounded-xl overflow-hidden">
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Local Tournaments</h3>
                    <p className="text-gray-600">Regular competitions for games like Smash Bros, Rocket League, and more</p>
                  </div>
                </div>
                <div className="bg-white shadow rounded-xl overflow-hidden">
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Watch Parties</h3>
                    <p className="text-gray-600">Group viewing of major esports events like Worlds, Majors, and championships</p>
                  </div>
                </div>
                <div className="bg-white shadow rounded-xl overflow-hidden">
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Industry Talks</h3>
                    <p className="text-gray-600">Guest speakers from the esports and gaming industry share insights</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Get Involved</h3>
                <p className="text-gray-600 mb-6">
                  Whether you're looking to compete at a high level, learn broadcasting skills, or just hang out and play games with friends, there are many ways to get involved with Elon Esports:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">For Competitive Players</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
                      <li>Join our Discord and express interest in team tryouts</li>
                      <li>Attend team practices and scrimmages</li>
                      <li>Participate in casual tournaments to get noticed</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">For Casual Gamers</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
                      <li>Drop by during open hours to use our facilities</li>
                      <li>Join game-specific channels in Discord</li>
                      <li>Attend community game nights and social events</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 mt-12">
                <a 
                  href="https://discord.gg/W7BfUNd" 
                  className="bg-elon-maroon text-white px-6 py-3 rounded-md font-medium text-center hover:bg-elon-maroon/90 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Our Discord
                </a>
                <Link 
                  href="/teams" 
                  className="bg-white text-elon-maroon border border-elon-maroon px-6 py-3 rounded-md font-medium text-center hover:bg-elon-maroon/5 transition-colors"
                >
                  Explore Our Teams
                </Link>
                <a 
                  href="https://www.twitch.tv/elonesports_" 
                  className="bg-purple-700 text-white px-6 py-3 rounded-md font-medium text-center hover:bg-purple-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Our Streams
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;