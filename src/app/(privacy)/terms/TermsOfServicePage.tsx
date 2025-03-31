import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-elon-maroon">Terms of Service</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using the Elon Esports website and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
          </p>
          <p>
            These Terms of Service apply to all users of the website, including without limitation users who are browsers, participants, members, or contributors of content.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Club Membership</h2>
          <p className="mb-4">
            Elon Esports is a student-run organization at Elon University. Membership is primarily open to current Elon University students. Members must adhere to Elon University's Student Conduct Code as well as the specific rules established by Elon Esports.
          </p>
          <p>
            Membership in specific competitive teams may be subject to tryouts, skill evaluations, and ongoing participation requirements as determined by team captains and club leadership.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Community Standards</h2>
          <p className="mb-4">As an Elon Esports member or website user, you agree to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Treat all members, opponents, and community participants with respect</li>
            <li>Refrain from harassment, hate speech, or discrimination of any kind</li>
            <li>Maintain good sportsmanship during all competitions and events</li>
            <li>Represent Elon University and Elon Esports in a positive manner</li>
            <li>Comply with game-specific terms of service for all games played under our organization</li>
          </ul>
          <p>
            Violation of these standards may result in removal from events, teams, or the organization as a whole, at the discretion of club leadership.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Website Use and Content</h2>
          <p className="mb-4">
            The content on our website, including text, graphics, logos, images, and software, is owned by or licensed to Elon Esports and is protected by copyright and trademark laws.
          </p>
          <p className="mb-4">When using our website, you agree not to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Use our website in any way that violates applicable laws or regulations</li>
            <li>Attempt to gain unauthorized access to any part of our website or systems</li>
            <li>Engage in any activity that disrupts or interferes with our website's functioning</li>
            <li>Collect or harvest user data without permission</li>
            <li>Upload or transmit viruses or malicious code</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Events and Competitions</h2>
          <p className="mb-4">
            By registering for or participating in Elon Esports events and competitions, you agree to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Follow all rules specific to each event as communicated by organizers</li>
            <li>Arrive on time for scheduled matches and events</li>
            <li>Notify team captains or organizers in advance if you cannot attend</li>
            <li>Allow Elon Esports to use photographs or recordings from events for promotional purposes</li>
            <li>Accept the final decisions of event administrators regarding disputes</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Social Media and Communication Platforms</h2>
          <p>
            Elon Esports maintains a presence on various platforms including Discord, Twitch, Instagram, and others. Use of these platforms in connection with Elon Esports is subject to both these Terms of Service and the terms of service of the respective platforms. Communications on these platforms should adhere to our Community Standards outlined above.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Limitation of Liability</h2>
          <p className="mb-4">
            Elon Esports, its officers, members, and volunteers will not be liable for any indirect, incidental, special, or consequential damages arising out of or relating to your use of our services or participation in our events.
          </p>
          <p>
            We do not guarantee that our website will be secure or free from errors or viruses. You are responsible for configuring your technology to access our site and should use your own virus protection software.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Elon Esports, Elon University, and their respective officers, directors, members, employees, and agents from any claims, liabilities, damages, costs, and expenses arising from your use of our services or your violation of these Terms of Service.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes indicates your acceptance of the updated terms.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Governing Law</h2>
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of North Carolina, without regard to its conflict of law principles. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of North Carolina.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">11. Contact Information</h2>
          <p className="mb-4">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p>
            Elon Esports<br />
            School of Communications<br />
            Elon University<br />
            Email: elonesports@elon.edu
          </p>
        </div>
      </div>
      
      <div className="mt-12 flex justify-center">
        <Button asChild>
          <Link href="/" className="bg-elon-maroon hover:bg-elon-maroon/90 text-white font-medium">
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}