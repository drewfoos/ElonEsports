import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-elon-maroon">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Introduction</h2>
          <p className="mb-4">
            Elon Esports ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, participate in our events, or join our community.
          </p>
          <p>
            Please read this policy carefully. If you disagree with our policies and practices, your choice is to not use our services. By accessing or using our services, you agree to this Privacy Policy.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Information We Collect</h2>
          <p className="mb-4">We may collect several types of information from and about users of our services, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, social media handles, Discord username, and academic information when you register for our events or join our Discord server.
            </li>
            <li>
              <strong>Usage Information:</strong> How you interact with our website, including page views, time spent on pages, and navigation patterns.
            </li>
            <li>
              <strong>Device Information:</strong> IP address, browser type, operating system, and other technology used to access our website.
            </li>
            <li>
              <strong>Gaming Information:</strong> Game accounts, usernames, rankings, and performance statistics when you participate in our esports events.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">How We Use Your Information</h2>
          <p className="mb-4">We may use the information we collect about you for various purposes, including to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Process and manage event registrations and team formations</li>
            <li>Communicate with you about upcoming events, news, and community activities</li>
            <li>Analyze website usage to enhance user experience</li>
            <li>Comply with university policies and legal obligations</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Information Sharing and Disclosure</h2>
          <p className="mb-4">We may disclose personal information that we collect or you provide:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>To Elon University administrators and faculty for club management purposes</li>
            <li>To tournament organizers when you participate in competitive events</li>
            <li>To comply with any court order, law, or legal process</li>
            <li>To protect the rights, property, or safety of our users or others</li>
          </ul>
          <p>We do not sell or rent your personal information to third parties.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Social Media and Third-Party Services</h2>
          <p className="mb-4">
            Our website integrates with social media platforms and streaming services like Twitch, Discord, and Instagram. 
            When you interact with these features, they may collect information about you. These interactions are governed by the 
            privacy policies of those companies.
          </p>
          <p>
            We encourage you to review the privacy policies of any third-party sites or services that you access through our website.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Your Rights and Choices</h2>
          <p className="mb-4">
            You can review and change your personal information by logging into your account on our Discord server or by 
            contacting us directly. You may also opt out of receiving promotional emails from us by following the instructions 
            in those emails.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Data Security</h2>
          <p>
            We implement reasonable measures to help protect your personal information from accidental loss and unauthorized 
            access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely 
            secure, and we cannot guarantee the security of your personal information.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Changes to Our Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will post any changes on this page and update the "Last updated" 
            date. We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and 
            protect your information.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact Information</h2>
          <p className="mb-4">
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
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