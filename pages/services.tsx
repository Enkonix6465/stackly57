import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Facebook, Mail, Twitch, Twitter } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const services = (props: Props) => {
  const serviceList = [
    {
      name: "Network Security",
      desc: "Protect your business from cyber threats with advanced firewall, intrusion detection, and monitoring solutions.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          viewBox="0 0 24 24"
        >
          <path
            fill="#0066d1"
            d="M13 19h1a1 1 0 0 1 1 1h7v2h-7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1H2v-2h7a1 1 0 0 1 1-1h1v-1.66C8.07 16.13 6 13 6 9.67v-4L12 3l6 2.67v4c0 3.33-2.07 6.46-5 7.67zM12 5L8 6.69V10h4zm0 5v6c1.91-.47 4-2.94 4-5v-1z"
          ></path>
        </svg>
      ),
      color: "from-blue-200 to-blue-100 dark:from-blue-900 dark:to-blue-800",
    },
    {
      name: "Cloud Backup and Recovery",
      desc: "Ensure your data is safe and recoverable with automated cloud backups and disaster recovery planning.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          viewBox="0 0 48 48"
        >
          <path
            fill="#0066d1"
            d="M24 8.5a9.5 9.5 0 0 0-9.497 9.721a1.25 1.25 0 0 1-1.25 1.279H11.5a6 6 0 0 0 0 12h9.74c-.157.809-.24 1.645-.24 2.5h-9.5a8.5 8.5 0 0 1 0-17h.541C12.55 10.84 17.71 6 24 6s11.45 4.84 11.959 11h.541a8.5 8.5 0 0 1 8.387 9.892a13 13 0 0 0-2.575-2.888A6 6 0 0 0 36.5 19.5h-1.753a1.25 1.25 0 0 1-1.25-1.279q.003-.11.003-.221A9.5 9.5 0 0 0 24 8.5M45 34c0 6.075-4.925 11-11 11s-11-4.925-11-11s4.925-11 11-11s11 4.925 11 11m-10.293-7.707a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L33 29.414V41a1 1 0 1 0 2 0V29.414l3.293 3.293a1 1 0 0 0 1.414-1.414z"
          ></path>
        </svg>
      ),
      color:
        "from-purple-200 to-purple-100 dark:from-purple-900 dark:to-purple-800",
    },
    {
      name: "IT Infrastructure",
      desc: "Build a robust IT foundation with scalable servers, networking, and virtualization tailored to your needs.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          viewBox="0 0 14 14"
        >
          <g fill="none">
            <path
              fill="#d7e0ff"
              fillRule="evenodd"
              d="M.65 8.074v3.62l3.167 1.357l3.167-1.357l3.166 1.357l3.167-1.357v-3.62l-.008-.003l-3.159 1.353l-3.166-1.357l3.166-1.35l.002-3.621l-.002.026L6.983 4.48L3.82 3.123l-.002 3.594l3.167 1.35l-3.167 1.359z"
              clipRule="evenodd"
            ></path>
            <path
              fill="#fff"
              d="m6.985 1.738l3.167 1.357l-.002.027l-3.167 1.357l-3.166-1.357l.002-.027zm3.165 4.979l3.158 1.354l-3.158 1.353l-3.166-1.357l-3.167 1.359L.65 8.074l3.167-1.357l3.167 1.35z"
            ></path>
            <path
              stroke="#4147d5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m.65 8.067l3.167 1.357l3.167-1.357M3.817 3.122l3.166 1.357l3.167-1.357"
              strokeWidth={1}
            ></path>
            <path
              stroke="#4147d5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m6.983 8.067l3.167 1.357l3.167-1.357M.65 11.694v-3.62l3.167-1.357l3.167 1.357v3.62L3.817 13.05z"
              strokeWidth={1}
            ></path>
            <path
              stroke="#4147d5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.819 6.715v-3.62l3.166-1.357l3.167 1.357v3.62L6.985 8.072zm3.164 4.979v-3.62l3.167-1.357l3.167 1.357v3.62L10.15 13.05zM3.817 9.426v3.625m6.335-3.625v3.625M6.983 4.48v3.624"
              strokeWidth={1}
            ></path>
          </g>
        </svg>
      ),
      color:
        "from-orange-200 to-orange-100 dark:from-orange-900 dark:to-orange-800",
    },
    {
      name: "Endpoint Protection",
      desc: "Safeguard devices with antivirus, anti-malware, and device management for secure remote work.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          viewBox="0 0 48 48"
        >
          <g fill="none">
            <path
              fill="#2f88ff"
              d="M16 10C16 12.7614 13.7614 15 11 15C8.23858 15 6 12.7614 6 10C6 7.23858 8.23858 5 11 5C13.7614 5 16 7.23858 16 10Z"
            ></path>
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={4}
              d="M16 10C16 12.7614 13.7614 15 11 15C8.23858 15 6 12.7614 6 10C6 7.23858 8.23858 5 11 5C13.7614 5 16 7.23858 16 10ZM16 10H27M27 10L23 6M27 10L23 14"
            ></path>
            <path
              fill="#2f88ff"
              d="M32 38C32 40.7614 34.2386 43 37 43C39.7614 43 42 40.7614 42 38C42 35.2386 39.7614 33 37 33C34.2386 33 32 35.2386 32 38Z"
            ></path>
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={4}
              d="M32 38C32 40.7614 34.2386 43 37 43C39.7614 43 42 40.7614 42 38C42 35.2386 39.7614 33 37 33C34.2386 33 32 35.2386 32 38ZM32 38H21M21 38L25 34M21 38L25 42"
            ></path>
            <path
              fill="#2f88ff"
              d="M33 11C33 13.7614 35.2386 16 38 16C40.7614 16 43 13.7614 43 11C43 8.23858 40.7614 6 38 6C35.2386 6 33 8.23858 33 11Z"
            ></path>
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={4}
              d="M38 16C35.2386 16 33 13.7614 33 11C33 8.23858 35.2386 6 38 6C40.7614 6 43 8.23858 43 11C43 13.7614 40.7614 16 38 16ZM38 16V27M38 27L42 23M38 27L34 23"
            ></path>
            <path
              fill="#2f88ff"
              d="M5 37C5 34.2386 7.23858 32 10 32C12.7614 32 15 34.2386 15 37C15 39.7614 12.7614 42 10 42C7.23858 42 5 39.7614 5 37Z"
            ></path>
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={4}
              d="M10 32C7.23858 32 5 34.2386 5 37C5 39.7614 7.23858 42 10 42C12.7614 42 15 39.7614 15 37C15 34.2386 12.7614 32 10 32ZM10 32V21M10 21L14 25M10 21L6 25"
            ></path>
          </g>
        </svg>
      ),
      color:
        "from-green-200 to-green-100 dark:from-green-900 dark:to-green-800",
    },
    {
      name: "Security Awareness Training",
      desc: "Empower your team with training to recognize and avoid phishing, social engineering, and cyber risks.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          viewBox="0 0 24 24"
        >
          <path
            fill="#0066d1"
            d="M12 3.19L5 6.3V12h7v8.93c3.72-1.15 6.47-4.82 7-8.94h-7z"
            opacity={0.3}
          ></path>
          <path
            fill="#0066d1"
            d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm0 19.93V12H5V6.3l7-3.11v8.8h7c-.53 4.12-3.28 7.79-7 8.94"
          ></path>
        </svg>
      ),
      color:
        "from-yellow-200 to-yellow-100 dark:from-yellow-900 dark:to-yellow-800",
    },
    {
      name: "Vulnerability Assessment",
      desc: "Identify and remediate security gaps with expert vulnerability scanning and risk analysis.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="#0066d1"
            strokeWidth={2}
            d="M12 0v24zM0 12h24zm17 0c0-2.757-2.243-5-5-5s-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5Zm-5 9c-4.962 0-9-4.037-9-9s4.038-9 9-9s9 4.037 9 9s-4.038 9-9 9Z"
          ></path>
        </svg>
      ),
      color: "from-red-200 to-red-100 dark:from-red-900 dark:to-red-800",
    },
  ];
  return (
    <>
      <Head>
        <title>Our Services</title>
        <meta name="description" content="Learn more about our services." />
      </Head>
      <main className="bg-[#f7fafd] dark:bg-[#101624] text-gray-900 dark:text-white caret-transparent">
        <SiteHeader />
        {/* Hero Section */}
        <section className="relative h-[100vh] flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-900 dark:to-purple-900 overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 dark:opacity-30"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/services-bg-video.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support the video tag */}
          </video>
          {/* Overlay for readability */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
              Our Services
            </h1>
            <p className="text-lg max-w-xl mx-auto mb-6 text-white/80 dark:text-white/70">
              Discover our full range of IT solutions, cybersecurity expertise,
              and cloud services designed to empower your business.
            </p>
          </div>
        </section>

        {/* Services List Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950">
          <div className="mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-8 text-blue-700 dark:text-blue-300">
              Our Service Offerings
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {serviceList.map((service, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-br ${service.color} rounded-2xl shadow-2xl p-8 border border-blue-100 dark:border-blue-900 backdrop-blur-lg relative overflow-hidden transition-all duration-300 hover:shadow-blue-400 dark:hover:shadow-blue-900 hover:-translate-y-2 min-h-[220px]`}
                >
                  <div className="absolute top-4 right-4 opacity-30 scale-150 pointer-events-none">
                    {service.icon}
                  </div>
                  <div className="flex flex-col items-start z-10 relative">
                    <span className="mb-4">{service.icon}</span>
                    <h3 className="font-bold text-xl mb-2 text-blue-700 dark:text-blue-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 text-left text-sm">
                      {service.desc}
                    </p>
                    <Link
                      href={`/${service.name
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                      className="inline-block mt-2 text-sm text-purple-600 dark:text-purple-300 font-semibold hover:underline"
                    >
                      Know More &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Milestones Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-100 to-blue-50 dark:from-purple-900 dark:to-blue-950">
          <div className="  mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-10 text-blue-700 dark:text-blue-300 tracking-tight drop-shadow-lg">
              Our Milestones
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8 relative">
              {[
                {
                  year: "2015",
                  title: "Founded",
                  desc: "Started as a small startup with a vision for innovative IT solutions.",
                  icon: (
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="#38bdf8"
                        strokeWidth="2"
                      />
                    </svg>
                  ),
                  color: "bg-blue-100/70 dark:bg-blue-900/70",
                  highlight: "border-blue-400",
                },
                {
                  year: "2018",
                  title: "First Major Award",
                  desc: "Recognized for excellence in software development and client service.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={50}
                      height={50}
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path
                          fill="#ffef5e"
                          d="M12 6.74A2.87 2.87 0 1 0 12 1a2.87 2.87 0 0 0 0 5.74"
                        ></path>
                        <path
                          fill="#fff9bf"
                          d="M9.13 3.87c.001.27.04.54.116.8A2.87 2.87 0 0 0 13.8 1.634A2.87 2.87 0 0 0 9.13 3.87"
                        ></path>
                        <path
                          fill="#ffbc44"
                          d="m9.02 11.285l-2.431 1.14a1.598 1.598 0 0 0-.67 2.402l4.169 6.24h3.826l4.168-6.24a1.6 1.6 0 0 0-.67-2.402l-2.614-1.227z"
                        ></path>
                        <path
                          fill="#ffef5e"
                          d="M15.61 9.569a.477.477 0 0 0-.64-.554a7.94 7.94 0 0 1-5.943-.008a.478.478 0 0 0-.638.554l2.655 11.505h1.913z"
                        ></path>
                        <path
                          fill="#fff9bf"
                          d="M12 9.588a8.3 8.3 0 0 1-2.973-.581a.478.478 0 0 0-.638.554l2.655 11.505H12z"
                        ></path>
                        <path
                          stroke="#191919"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.467 22.629a4.26 4.26 0 0 0-3.045-1.542H9.639a4.4 4.4 0 0 0-3.076 1.519L6.262 23H17.74zM15.61 9.569a.477.477 0 0 0-.64-.554a7.94 7.94 0 0 1-5.943-.008a.478.478 0 0 0-.638.554l2.655 11.505h1.913zM12 6.74A2.87 2.87 0 1 0 12 1a2.87 2.87 0 0 0 0 5.74m4.528 5.27l.884.415a1.598 1.598 0 0 1 .67 2.403l-4.169 6.24m-6.44-9.058l-.884.415a1.598 1.598 0 0 0-.67 2.403l4.169 6.24"
                          strokeWidth={1}
                        ></path>
                      </g>
                    </svg>
                  ),
                  color: "bg-purple-100/70 dark:bg-purple-900/70",
                  highlight: "border-purple-400",
                },
                {
                  year: "2021",
                  title: "100+ Projects",
                  desc: "Delivered over 100 successful projects for clients worldwide.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={50}
                      height={50}
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#0066d1"
                        fillRule="evenodd"
                        d="m85.333 160.617l128-74l.043.025L256 62l-42.667-24.666L42.667 136v197.333L85.333 358zm87.581 23.701l104.419-60.367l104.43 60.373l-104.419 60.368zm-23.581 35.651V346.05L256 407.716v-126.08zm256 126.081l-106.667 61.666V281.649l106.667-61.667zm-128-271.383L448 173.333v197.334l-170.667 98.667l-170.666-98.667V173.333z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  ),
                  color: "bg-orange-100/70 dark:bg-orange-900/70",
                  highlight: "border-orange-400",
                },
                {
                  year: "2025",
                  title: "Global Expansion",
                  desc: "Expanded our reach to serve clients in 15+ countries.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={50}
                      height={50}
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="#5c6bc0"
                        d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"
                      ></path>
                      <path
                        fill="#c5cae9"
                        d="M22 10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m8 10a8 8 0 0 1-.263 2H26l-2-2v-2h-4v-4h4v2h2v-2.918A8 8 0 0 1 30 20m-16 0a8 8 0 0 1 .123-1.347L18 20h4l2 2l-2 2v4a8.01 8.01 0 0 1-8-8"
                      ></path>
                      <path fill="#c5cae9" d="M26 17h2v1h-2z"></path>
                    </svg>
                  ),
                  color: "bg-green-100/70 dark:bg-green-900/70",
                  highlight: "border-green-400",
                },
              ].map((milestone, idx, arr) => (
                <div
                  key={idx}
                  className={`relative z-10 flex flex-col items-center md:w-1/4 w-full mb-12 md:mb-0 min-h-[320px] p-4 justify-between `}
                >
                  {idx !== arr.length - 1 && (
                    <span
                      className={`md:hidden absolute left-1/2 bottom-0 w-2 h-8 bg-gradient-to-b from-blue-300 via-purple-300 to-orange-300 dark:from-blue-900 dark:via-purple-900 dark:to-orange-900 rounded-full animate-pulse`}
                      style={{ zIndex: 1, transform: "translateX(-50%)" }}
                    ></span>
                  )}
                  <div
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl mb-4 ${milestone.color} backdrop-blur-lg border-4 ${milestone.highlight} transition-all duration-300 hover:scale-105`}
                  >
                    {milestone.icon}
                  </div>
                  <div className="flex flex-col flex-1 items-center justify-center w-full">
                    <h3 className="font-bold text-xl mb-2 text-blue-700 dark:text-blue-300 drop-shadow-md text-center text-nowrap">
                      <span className="text-2xl font-extrabold mr-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 dark:from-blue-300 dark:via-purple-300 dark:to-orange-300">
                        {milestone.year}
                      </span>
                      {milestone.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-base px-2 mb-2 text-center">
                      {milestone.desc}
                    </p>
                  </div>
                  {/* Highlight effect for current milestone */}
                  {idx === arr.length - 1 && (
                    <span className="inline-block mt-2 px-4 py-1 rounded-full bg-gradient-to-r from-green-400 to-blue-400 text-white text-xs font-semibold shadow-md animate-pulse">
                      Latest Achievement
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-100 dark:from-purple-950 dark:to-blue-900">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Left Side: Heading, Description, Button */}
            <div className="flex-1 flex flex-col items-start justify-center mb-10 md:mb-0">
              <h3 className="text-lg text-blue-600 dark:text-blue-300 font-semibold mb-2 underline underline-offset-4">
                Our Expert Team
              </h3>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6  dark:text-white leading-tight">
                Our Dedicated
                <br />
                Team Is Committed
                <br />
                To Safeguarding
                <br />
                Your Digital Future.
              </h2>
            </div>
            {/* Right Side: Team Cards */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Justin Kingdony",
                  role: "UI/UX Designer",
                  photo: "/logo-stackly.png",
                  socials: [
                    {
                      icon: <Twitch color="#fff" />,
                      link: "https://www.twitch.tv/",
                    },
                    {
                      icon: <Twitter color="#fff" />,
                      link: "https://twitter.com/",
                    },
                    {
                      icon: <Mail color="#fff" />,
                      link: "mailto:example@example.com",
                    },
                    {
                      icon: <Facebook color="#fff" />,
                      link: "https://www.facebook.com/",
                    },
                  ],
                },
                {
                  name: "Michael Johnson",
                  role: "UI/UX Designer",
                  photo: "/globe.svg",
                  socials: [
                    {
                      icon: <Twitch color="#fff" />,
                      link: "https://www.twitch.tv/",
                    },
                    {
                      icon: <Twitter color="#fff" />,
                      link: "https://twitter.com/",
                    },
                    {
                      icon: <Mail color="#fff" />,
                      link: "mailto:example@example.com",
                    },
                    {
                      icon: <Facebook color="#fff" />,
                      link: "https://www.facebook.com/",
                    },
                  ],
                },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="relative bg-[#0d1b2a] rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center justify-end min-h-[420px] pb-8 pt-0"
                >
                  <Image
                    src={member.photo}
                    width={320}
                    height={320}
                    alt={member.name + " photo"}
                    className="w-full h-[320px] object-cover object-center mb-0"
                  />
                  <div className="absolute bottom-0 left-0 w-full px-6 py-6 bg-gradient-to-t from-[#0d1b2a]/90 to-transparent flex flex-col items-center">
                    <h3 className="font-bold text-2xl text-white mb-1 text-center">
                      {member.name}
                    </h3>
                    <span className="text-base text-blue-300 font-semibold mb-3 text-center">
                      {member.role}
                    </span>
                    <div className="flex gap-4 justify-center mb-2">
                      {member.socials.map((social, sidx) => (
                        <Link
                          key={sidx}
                          href={social.link}
                          className="w-8 h-8 flex items-center justify-center rounded-full p-2 bg-[#112240] hover:bg-blue-600 transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {social.icon}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Success Stories Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-10 text-purple-700 dark:text-purple-300 tracking-tight drop-shadow-lg">
              Client Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Lee",
                  company: "TechNova Inc.",
                  logo: "/logo-stackly.png",
                  feedback:
                    "Enkonix delivered a robust IT infrastructure for us. Their team was responsive, knowledgeable, and truly cared about our business goals.",
                },
                {
                  name: "Michael Chen",
                  company: "Cloudify Solutions",
                  logo: "/globe.svg",
                  feedback:
                    "The security awareness training transformed our team's approach to cyber threats. Highly recommended for any growing company!",
                },
                {
                  name: "Priya Patel",
                  company: "SafeNet Corp.",
                  logo: "/window.svg",
                  feedback:
                    "Their vulnerability assessment was thorough and actionable. We now feel confident in our security posture thanks to Enkonix.",
                },
              ].map((client, idx) => (
                <div
                  key={idx}
                  className={`relative bg-white/60 dark:bg-gray-900/60 rounded-3xl shadow-2xl p-8 border-2 border-transparent bg-clip-padding backdrop-blur-xl flex flex-col items-center justify-between min-h-[260px] transition-all duration-300 hover:scale-105 hover:shadow-purple-400 dark:hover:shadow-purple-900 ${
                    idx % 2 === 0
                      ? "hover:-translate-y-2"
                      : "hover:translate-y-2"
                  }`}
                >
                  {/* Floating quote icon */}
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl text-purple-400 dark:text-purple-300 opacity-60 pointer-events-none">
                    &#10077;
                  </span>
                  <div className="w-full flex flex-col items-center">
                    <Image
                      src={client.logo}
                      width={56}
                      height={56}
                      alt={client.company + " logo"}
                      className="w-14 h-14 mb-4 rounded-full object-contain shadow-lg border-2 border-purple-200 dark:border-purple-700 bg-white dark:bg-gray-800"
                    />
                    <p className="text-gray-800 dark:text-gray-200 text-base mb-4 text-center italic font-medium px-2">
                      {client.feedback}
                    </p>
                  </div>
                  <div className="mt-auto w-full flex flex-col items-center">
                    <span className="font-bold text-lg text-purple-700 dark:text-purple-300 drop-shadow-md">
                      {client.name}
                    </span>
                    <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {client.company}
                    </span>
                  </div>
                  {/* Gradient border effect */}
                  <span className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-gradient-to-r from-purple-400 via-blue-300 to-orange-300 dark:from-purple-700 dark:via-blue-900 dark:to-orange-900 opacity-30"></span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contact"
          className="py-20 px-4 flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900 text-white"
        >
          <div className="max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold mb-6 drop-shadow-lg">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Let our experts help you secure, optimize, and scale your IT,
              cybersecurity, and cloud infrastructure. Take the next step toward
              digital transformation today!
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-blue-100 transition text-xl"
            >
              Get Your Free Consultation
            </Link>
            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-semibold">No obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-semibold">Quick response</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-semibold">Expert advice</span>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
};
export default services;
