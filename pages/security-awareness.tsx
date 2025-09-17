import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import React from "react";

const SecurityAwareness = () => {
  return (
    <main className="bg-[#101624] text-white min-h-screen caret-transparent">
      <SiteHeader />
      <section className="relative py-20 px-4 flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-700 to-purple-800">
        <h1 className="text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
          Building a Culture of Security Awareness
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-white/80">
          How to empower your team to recognize and avoid cyber risks.
        </p>
        <img
          src="/logo-stackly.png"
          alt="Security Awareness"
          className="w-32 h-32 mx-auto mb-8"
        />
      </section>

      <section className="mx-auto py-10 px-4 bg-white/80 dark:bg-gray-900/80  shadow-xl border border-blue-100 dark:border-blue-900 backdrop-blur-lg">
        <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300">
          Introduction
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Technology alone can’t protect your business from cyber threats—your
          people play a critical role. Building a culture of security awareness
          means every employee understands the risks and knows how to respond.
          This blog explores practical steps to foster a security-minded
          workplace.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-purple-700 dark:text-purple-300">
          Why Security Awareness Matters
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Most cyberattacks target human error, not just technical
          vulnerabilities. Phishing, social engineering, and accidental data
          leaks can be prevented if your team is alert and informed. A strong
          security culture reduces risk and builds trust with customers and
          partners.
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
          <li>Employees are the first line of defense</li>
          <li>Security awareness helps prevent costly breaches</li>
          <li>Promotes compliance with regulations and standards</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-purple-700 dark:text-purple-300">
          Key Steps to Build Security Awareness
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Creating a culture of security awareness requires ongoing effort and
          leadership support. Here are essential steps to get started:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
          <li>Provide regular training on cyber threats and safe practices</li>
          <li>Share real-world examples of attacks and how to avoid them</li>
          <li>Encourage open communication about security concerns</li>
          <li>
            Recognize and reward employees who demonstrate good security habits
          </li>
          <li>Make security part of onboarding for new hires</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-purple-700 dark:text-purple-300">
          Practical Tips for Everyday Security
        </h2>
        <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
          <li>Think before clicking links or downloading attachments</li>
          <li>Use strong, unique passwords and enable MFA</li>
          <li>Report suspicious emails or activity immediately</li>
          <li>Lock your computer when away from your desk</li>
          <li>Keep software and devices updated</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-purple-700 dark:text-purple-300">
          Real-World Example
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          In 2024, a financial services firm reduced phishing incidents by 80%
          after launching a monthly security newsletter and interactive training
          sessions. Employees became more confident in spotting threats and
          reporting issues, saving the company time and money.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-blue-700 dark:text-blue-300">
          Conclusion
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Building a culture of security awareness is an investment in your
          company’s future. Empower your team, keep security top of mind, and
          celebrate successes. Together, you can create a safer, more resilient
          organization.
        </p>
      </section>
      <SiteFooter />
    </main>
  );
};

export default SecurityAwareness;
