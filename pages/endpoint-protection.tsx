import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const EndpointProtection = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("endpointProtection.title")}</title>
        <meta
          name="description"
          content={t("endpointProtection.metaDescription")}
        />
      </Head>
      <main className="bg-[#f7fafd] dark:bg-[#101624] text-gray-900 dark:text-white caret-transparent">
        <SiteHeader />
        {/* 1. Hero Section */}
        <section className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-900 dark:to-purple-900 text-white text-center overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 dark:opacity-30"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/endpoint-bg.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-5xl font-extrabold mb-4">
              {t("endpointProtection.hero.title")}
            </h1>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              {t("endpointProtection.hero.subtitle")}
            </p>
          </div>
        </section>

        {/* 2. Why Endpoint Protection Matters */}
        <section className="py-20 px-4 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            {/* Left: Modern Card with Icon & Headline */}
            <div className="flex-1 flex flex-col justify-center items-start bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 rounded-3xl shadow-2xl p-10 border-4 border-blue-100 dark:border-blue-900">
              <div className="mb-6 flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={48}
                  height={48}
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
                <h2 className="text-4xl font-extrabold text-blue-700 dark:text-blue-300">
                  {t("endpointProtection.why.title")}
                </h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-xl">
                {t("endpointProtection.why.subtitle")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <span className="bg-blue-200 dark:bg-blue-800 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={48}
                      height={48}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="oklch(48.8% 0.243 264.376)"
                        d="M8 22a1 1 0 0 1 0-2h.616l.25-2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4.867l.25 2H16a1 1 0 0 1 0 2zm5.116-4h-2.233l-.25 2h2.733z"
                      ></path>
                    </svg>
                  </span>
                  <span className="font-semibold text-blue-700 dark:text-blue-300">
                    {t("endpointProtection.why.deviceSecurity")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-purple-200 dark:bg-purple-800 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={48}
                      height={48}
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path
                          fill="#0500ff"
                          d="M3.9 5.6L12 3v18c-5.786-2.4-8.1-7-8.1-9.6z"
                        ></path>
                        <path
                          fill="url(#SVGcWCQxbLx)"
                          d="M20.1 5.6L12 3v18c5.786-2.4 8.1-7 8.1-9.6z"
                        ></path>
                        <defs>
                          <linearGradient
                            id="SVGcWCQxbLx"
                            x1={17.948}
                            x2={11.967}
                            y1={1.74}
                            y2={20.797}
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset={0.02} stopColor="#00f"></stop>
                            <stop offset={0.08} stopColor="#0094ff"></stop>
                            <stop offset={0.16} stopColor="#48ff91"></stop>
                            <stop offset={0.42} stopColor="#0094ff"></stop>
                            <stop offset={0.68} stopColor="#0038ff"></stop>
                            <stop offset={0.9} stopColor="#0500ff"></stop>
                          </linearGradient>
                        </defs>
                      </g>
                    </svg>
                  </span>
                  <span className="font-semibold text-purple-700 dark:text-purple-300">
                    {t("endpointProtection.why.cloudIntegration")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-orange-200 dark:bg-orange-800 p-3 rounded-full">
                    <Image
                      src="/globe.svg"
                      alt="Compliance"
                      width={32}
                      height={32}
                    />
                  </span>
                  <span className="font-semibold text-orange-700 dark:text-orange-400">
                    {t("endpointProtection.why.complianceTrust")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-green-200 dark:bg-green-800 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={48}
                      height={48}
                      viewBox="0 0 32 32"
                    >
                      <circle
                        cx={22}
                        cy={23.887}
                        r={2}
                        fill="oklch(52.7% 0.154 150.069)"
                      ></circle>
                      <path
                        fill="oklch(52.7% 0.154 150.069)"
                        d="M29.777 23.479A8.64 8.64 0 0 0 22 18a8.64 8.64 0 0 0-7.777 5.479L14 24l.223.522A8.64 8.64 0 0 0 22 30a8.64 8.64 0 0 0 7.777-5.478L30 24zM22 28a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m3-18H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h21a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M4 4v4h21V4zm8 24H4v-4h8v-2H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8z"
                      ></path>
                      <path
                        fill="oklch(52.7% 0.154 150.069)"
                        d="M28 12H7a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5v-2H7v-4h21v2h2v-2a2 2 0 0 0-2-2"
                      ></path>
                    </svg>
                  </span>
                  <span className="font-semibold text-green-700 dark:text-green-400">
                    {t("endpointProtection.why.threatPrevention")}
                  </span>
                </div>
              </div>
            </div>
            {/* Right: Themed Image */}
            <div className="flex-1 flex justify-center items-center">
              <div className="relative">
                <Image
                  src="https://i.pinimg.com/736x/cd/68/84/cd68840bed1e1dfab5b9ec8cb45b7b36.jpg"
                  alt="Endpoint Hero"
                  width={340}
                  height={260}
                  className="relative z-10 rounded-2xl shadow-2xl border-4 border-blue-200 dark:border-blue-900 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Our Endpoint Protection Solutions */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-14 text-purple-700 dark:text-purple-300 text-center flex items-center justify-center gap-4">
              <span className="inline-block bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={48}
                  height={48}
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
              </span>
              {t("endpointProtection.solutions.title")}
            </h2>
            {/* Zigzag Layout using array and map */}
            {(() => {
              const solutions = [
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={48}
                      height={48}
                      viewBox="0 0 48 48"
                    >
                      <g fill="none" strokeWidth={3}>
                        <path
                          fill="#8fbffa"
                          d="M24.5 3.159v4.164a6.2 6.2 0 0 1-.749 2.929q-.395.735-.805 1.53c-1.519 2.94-2.567 5.288-3.292 7.143c-.988 2.528-.714 5.237.775 7.377c1.454 2.092 3.806 3.279 6.325 3.455c1.712.12 3.795.216 6.199.238c-.07 4.305-.209 7.541-.342 9.812c-.147 2.52-1.973 4.53-4.487 4.771C25.809 44.8 22.477 45 18 45s-7.81-.2-10.124-.422c-2.514-.24-4.34-2.25-4.487-4.771C3.2 36.583 3 31.413 3 24s.2-12.583.389-15.807c.147-2.52 1.973-4.53 4.487-4.771C10.191 3.2 13.523 3 18 3c2.523 0 4.682.064 6.5.159"
                        ></path>
                        <path
                          fill="#fff"
                          d="M27.033 25.766c-2.918-.203-4.717-2.66-3.653-5.385c.667-1.706 1.655-3.927 3.12-6.764c1.53-2.962 2.886-5.252 4.01-6.986c1.762-2.716 5.218-2.716 6.98 0c1.124 1.734 2.48 4.024 4.01 6.986c1.466 2.837 2.454 5.058 3.12 6.764c1.065 2.724-.735 5.182-3.653 5.385A100 100 0 0 1 34 26a100 100 0 0 1-6.967-.234M12.266 3.122l.406 3.25A3 3 0 0 0 15.649 9h4.703a3 3 0 0 0 2.977-2.628l.406-3.25C22.085 3.047 20.178 3 18 3c-2.177 0-4.084.047-5.734.122"
                        ></path>
                        <path
                          stroke="#2859c5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M32.935 31a229 229 0 0 1-.324 8.807c-.147 2.52-1.973 4.53-4.487 4.771C25.809 44.8 22.477 45 18 45s-7.81-.2-10.124-.422c-2.514-.24-4.34-2.25-4.487-4.771C3.2 36.583 3 31.413 3 24s.2-12.583.389-15.807c.147-2.52 1.973-4.53 4.487-4.771C10.191 3.2 13.523 3 18 3a118 118 0 0 1 8.5.285"
                        ></path>
                        <path
                          stroke="#2859c5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m12.266 3.122l.406 3.25A3 3 0 0 0 15.649 9h4.703a3 3 0 0 0 2.977-2.627l.406-3.25M16 40h4"
                        ></path>
                        <path
                          stroke="#2859c5"
                          strokeLinejoin="round"
                          d="M27.033 25.766c-2.918-.203-4.717-2.66-3.653-5.385c.667-1.706 1.655-3.927 3.12-6.764c1.53-2.962 2.886-5.252 4.01-6.986c1.762-2.716 5.218-2.716 6.98 0c1.124 1.734 2.48 4.024 4.01 6.986c1.466 2.837 2.454 5.058 3.12 6.764c1.065 2.724-.735 5.182-3.653 5.385A100 100 0 0 1 34 26a100 100 0 0 1-6.967-.234Z"
                        ></path>
                        <path
                          stroke="#2859c5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M34 11v5m0 4v1"
                        ></path>
                      </g>
                    </svg>
                  ),
                  alt: "Advanced Threat Defense",
                  bg: "bg-blue-100 dark:bg-blue-900",
                  border: "border-blue-200 dark:border-blue-800",
                  title: t("endpointProtection.solutions.0.title"),
                  titleClass: "text-blue-700 dark:text-blue-300",
                  items: [
                    t("endpointProtection.solutions.0.items.0"),
                    t("endpointProtection.solutions.0.items.1"),
                    t("endpointProtection.solutions.0.items.2"),
                  ],
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={48}
                      height={48}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="oklch(49.6% 0.265 301.924)"
                        d="M6.08 8.02a6.001 6.001 0 0 1 11.84 0a4.5 4.5 0 0 1 4.053 4.973A6.5 6.5 0 0 0 10.018 17H6.5a4.5 4.5 0 0 1-.42-8.982M22 16.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-6 3a.5.5 0 0 0 1 0v-4.793l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 .708.708L16 14.707z"
                      ></path>
                    </svg>
                  ),
                  alt: "Zero-Trust Security",
                  bg: "bg-purple-100 dark:bg-purple-900",
                  border: "border-purple-200 dark:border-purple-800",
                  title: t("endpointProtection.solutions.1.title"),
                  titleClass: "text-purple-700 dark:text-purple-300",
                  items: [
                    t("endpointProtection.solutions.1.items.0"),
                    t("endpointProtection.solutions.1.items.1"),
                    t("endpointProtection.solutions.1.items.2"),
                  ],
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={48}
                      height={48}
                      viewBox="0 0 16 16"
                    >
                      <g
                        fill="oklch(48.8% 0.243 264.376)"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      >
                        <path d="M1.5 7a6.5 6.5 0 1 1 7 6.481V14H11v1H5v-1h2.5v-.519A6.5 6.5 0 0 1 1.5 7M8 1.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11"></path>
                        <path d="M4.5 7a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M8 4.5a2.5 2.5 0 1 0 2.436 1.935a1.5 1.5 0 1 1-1.871-1.87A2.5 2.5 0 0 0 8 4.5"></path>
                      </g>
                    </svg>
                  ),
                  alt: "Automated Compliance",
                  bg: "bg-blue-100 dark:bg-blue-900",
                  border: "border-blue-200 dark:border-blue-800",
                  title: t("endpointProtection.solutions.2.title"),
                  titleClass: "text-blue-700 dark:text-blue-300",
                  items: [
                    t("endpointProtection.solutions.2.items.0"),
                    t("endpointProtection.solutions.2.items.1"),
                    t("endpointProtection.solutions.2.items.2"),
                  ],
                },
              ];
              return (
                <div className="flex flex-col gap-16">
                  {solutions.map((sol, idx) => {
                    // Alternate zigzag: even idx left, odd idx right
                    const isLeft = idx % 2 === 0;
                    return (
                      <div
                        key={sol.title}
                        className={`flex flex-col ${
                          !isLeft ? "md:flex-row-reverse" : "md:flex-row"
                        } items-center   gap-10`}
                      >
                        <div
                          className={`flex-shrink-0 w-32 h-32 rounded-3xl ${sol.bg} flex items-center justify-center shadow-xl border-4 ${sol.border}`}
                        >
                          {sol.icon}
                        </div>
                        <div
                          className={`md:${
                            isLeft ? "ml-0 order-2" : "mr-0 order-2"
                          } order-1 ${
                            isLeft ? "text-left" : "text-right"
                          } flex-1 not-md:text-center`}
                        >
                          <h3
                            className={`font-bold text-2xl mb-3 ${sol.titleClass}`}
                          >
                            {sol.title}
                          </h3>
                          <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                            {sol.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })()}
          </div>
        </section>

        {/* 4. Managed IT & Cloud Services */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-12 text-center text-blue-600 dark:text-blue-400 flex items-center justify-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={48}
              height={48}
              viewBox="0 0 24 24"
            >
              <path
                fill="oklch(54.6% 0.245 262.881)"
                d="M18 19q.825 0 1.413-.587T20 17t-.587-1.412T18 15t-1.412.588T16 17t.588 1.413T18 19m-.2 3q-.35 0-.612-.225t-.338-.575l-.15-.7q-.3-.125-.562-.262T15.6 19.9l-.725.225q-.325.1-.637-.025t-.488-.4l-.2-.35q-.175-.3-.125-.65t.325-.575l.55-.475q-.05-.3-.05-.65t.05-.65l-.55-.475q-.275-.225-.325-.562t.125-.638l.225-.375q.175-.275.475-.4t.625-.025l.725.225q.275-.2.538-.337t.562-.263l.15-.725q.075-.35.337-.562T17.8 12h.4q.35 0 .613.225t.337.575l.15.7q.3.125.562.262t.538.338l.725-.225q.325-.1.638.025t.487.4l.2.35q.175.3.125.65t-.325.575l-.55.475q.05.3.05.65t-.05.65l.55.475q.275.225.325.563t-.125.637l-.225.375q-.175.275-.475.4t-.625.025L20.4 19.9q-.275.2-.537.337t-.563.263l-.15.725q-.075.35-.337.563T18.2 22zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v1.9q0 .45-.387.675t-.813.025q-.65-.3-1.375-.45t-1.45-.15q-2.95 0-4.962 2.063T11 16.975q0 .475.063.938t.187.912t-.125.813t-.675.362z"
              ></path>
            </svg>
            {t("endpointProtection.managed.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* IT Strategy Card */}
            <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 p-10 rounded-3xl shadow-xl border-2 border-blue-200 dark:border-blue-800 flex flex-col items-center group hover:scale-105 transition-all">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-14 h-14 bg-blue-500/20 dark:bg-blue-900/30 rounded-full blur-xl"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={60}
                height={60}
                viewBox="0 0 24 24"
              >
                <path
                  fill="oklch(48.8% 0.243 264.376)"
                  d="M5.596 10.629L3.404 9.377q-.182-.1-.293-.29Q3 8.895 3 8.674V6.171q0-.22.111-.411t.293-.29l2.192-1.253q.18-.105.401-.105q.22 0 .407.105L8.596 5.47q.182.1.293.291t.111.41v2.504q0 .22-.111.411t-.293.291l-2.192 1.252q-.18.106-.401.106q-.22 0-.407-.106M16.27 13.5V9.777l1.923 1.129q.384.22.596.58t.212.799v4.584q0 .44-.212.8t-.596.579l-3.884 2.268q-.385.217-.811.217t-.805-.217l-3.884-2.268q-.384-.22-.596-.58T8 16.87v-4.584q0-.44.212-.8t.596-.58l1.923-1.128V13.5q0 1.163.803 1.966q.804.803 1.968.803t1.965-.803t.802-1.966M14 8v5.5q0 .213-.144.356t-.357.144t-.356-.144T13 13.5V3.808q0-.343.232-.576T13.808 3h5.683q.475 0 .712.429q.238.429-.036.833l-.523.784q-.136.205-.136.45t.136.458l.523.785q.273.403.036.832T19.491 8z"
                ></path>
              </svg>
              <h3 className="text-2xl font-bold mb-3 text-blue-700 dark:text-blue-300">
                {t("endpointProtection.managed.cards.0.title")}
              </h3>
              <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 text-left space-y-2">
                <li>{t("endpointProtection.managed.cards.0.items.0")}</li>
                <li>{t("endpointProtection.managed.cards.0.items.1")}</li>
                <li>{t("endpointProtection.managed.cards.0.items.2")}</li>
              </ul>
            </div>
            {/* Cloud Services Card */}
            <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-950 dark:to-blue-950 p-10 rounded-3xl shadow-xl border-2 border-purple-200 dark:border-purple-800 flex flex-col items-center group hover:scale-105 transition-all">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-14 h-14 bg-purple-500/20 dark:bg-purple-900/30 rounded-full blur-xl"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={48}
                viewBox="0 0 24 24"
              >
                <path
                  fill="oklch(49.6% 0.265 301.924)"
                  d="M23.505 17.503h-2v2h2zm-5.001 4.001h-2v2h2zm2-4v1h-2v-1h-1v-3.001h1v2h1v1zm-4.001 2v1h-2v-1h-1v-5.001h1v4h1v1.001zm-5.001-5.001v5.001h-1v1h-2v-1h1v-1h1v-4.001zm-3 7.001h-2v2h2zm-1.001-7.001v3h-1v1h-2v-1h1v-1h1v-2zm15.004-7.002v-1h-1v-1h-2v-2h-1.001v-1h-1V1.5h-5.002v1h-1v1h-1v1h-1v-1h-3v1H5.5v1h-1v2.001h-2v1h-1v3.001h1v1h1v1h18.005v-1h1v-1h1v-4zm-8.002 3.001v-1h-1v-2h1v1h1V5.5h1v3h1v-1h1v2h-1v1.001h-1v1h-1v-1zm-4.001-4v1h1v2h-1v-1h-1v3h-1v-3h-1v1h-1v-2h1v-1h1V5.5h1v1zM3.5 17.503h-2v2h2z"
                ></path>
              </svg>
              <h3 className="text-2xl font-bold mb-3 text-purple-700 dark:text-purple-300">
                {t("endpointProtection.managed.cards.1.title")}
              </h3>
              <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 text-left space-y-2">
                <li>{t("endpointProtection.managed.cards.1.items.0")}</li>
                <li>{t("endpointProtection.managed.cards.1.items.1")}</li>
                <li>{t("endpointProtection.managed.cards.1.items.2")}</li>
              </ul>
            </div>
            {/* Managed Support Card */}
            <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 p-10 rounded-3xl shadow-xl border-2 border-blue-200 dark:border-blue-800 flex flex-col items-center group hover:scale-105 transition-all">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-14 h-14 bg-green-500/20 dark:bg-green-900/30 rounded-full blur-xl"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={48}
                viewBox="0 0 24 24"
              >
                <path
                  fill="oklch(52.7% 0.154 150.069)"
                  d="m17 22l-.3-1.5q-.3-.125-.562-.262T15.6 19.9l-1.45.45l-1-1.7l1.15-1q-.05-.3-.05-.65t.05-.65l-1.15-1l1-1.7l1.45.45q.275-.2.538-.337t.562-.263L17 12h2l.3 1.5q.3.125.563.263t.537.337l1.45-.45l1 1.7l-1.15 1q.05.3.05.65t-.05.65l1.15 1l-1 1.7l-1.45-.45q-.275.2-.537.338t-.563.262L19 22zm1-3q.825 0 1.413-.587T20 17t-.587-1.412T18 15t-1.412.588T16 17t.588 1.413T18 19M2 20V4h8l2 2h10v5.275q-.875-.625-1.9-.95T17.975 10q-2.95 0-4.962 2.063T11 16.975q0 .8.175 1.55T11.7 20z"
                ></path>
              </svg>
              <h3 className="text-2xl font-bold mb-3 text-green-700 dark:text-green-400">
                {t("endpointProtection.managed.cards.2.title")}
              </h3>
              <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 text-left space-y-2">
                <li>{t("endpointProtection.managed.cards.2.items.0")}</li>
                <li>{t("endpointProtection.managed.cards.2.items.1")}</li>
                <li>{t("endpointProtection.managed.cards.2.items.2")}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Endpoint Awareness & Compliance */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-14 text-purple-700 dark:text-purple-300 text-center flex items-center justify-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={48}
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
              {t("endpointProtection.awareness.title")}
            </h2>
            {/* Horizontal Stepper Layout using array and map */}
            {(() => {
              const steps = [
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={48}
                      height={48}
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
                  alt: "Training",
                  bg: "bg-blue-100 dark:bg-blue-900",
                  title: t("endpointProtection.awareness.steps.0.title"),
                  titleClass: "text-blue-700 dark:text-blue-300",
                  items: [
                    t("endpointProtection.awareness.steps.0.items.0"),
                    t("endpointProtection.awareness.steps.0.items.1"),
                    t("endpointProtection.awareness.steps.0.items.2"),
                  ],
                  connector: "bg-blue-200 dark:bg-blue-900",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={48}
                      height={48}
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="oklch(49.6% 0.265 301.924)"
                        d="M15 20H9a3 3 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3 3 0 0 0-3-3m-3-1a4 4 0 1 0-4-4a4 4 0 0 0 4 4m0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2"
                      ></path>
                      <path
                        fill="oklch(49.6% 0.265 301.924)"
                        d="M28 19v9H4V8h12V6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-9Z"
                      ></path>
                      <path
                        fill="oklch(49.6% 0.265 301.924)"
                        d="M20 19h6v2h-6zm2 4h4v2h-4zm10-13V8h-2.101a5 5 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A5 5 0 0 0 26 4.101V2h-2v2.101a5 5 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A5 5 0 0 0 20.101 8H18v2h2.101a5 5 0 0 0 .732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a5 5 0 0 0 1.753.732V16h2v-2.101a5 5 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A5 5 0 0 0 29.899 10zm-7 2a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3"
                      ></path>
                    </svg>
                  ),
                  alt: "Compliance",
                  bg: "bg-purple-100 dark:bg-purple-900",
                  title: t("endpointProtection.awareness.steps.1.title"),
                  titleClass: "text-purple-700 dark:text-purple-300",
                  items: [
                    t("endpointProtection.awareness.steps.1.items.0"),
                    t("endpointProtection.awareness.steps.1.items.1"),
                    t("endpointProtection.awareness.steps.1.items.2"),
                  ],
                  connector: "bg-purple-200 dark:bg-purple-900",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={48}
                      height={48}
                      viewBox="0 0 2048 2048"
                    >
                      <path
                        fill="oklch(52.7% 0.154 150.069)"
                        d="M1168 946q38 15 74 33t70 41q-22 24-40 50t-33 56q-77-50-164-76t-179-26q-88 0-170 23t-153 64t-129 100t-100 130t-65 153t-23 170H128q0-120 35-231t101-205t156-167t204-115q-113-74-176-186t-64-248q0-106 40-199t109-163T696 40T896 0t199 40t163 109t110 163t40 200q0 66-16 129t-48 119t-75 103t-101 83M512 512q0 80 30 149t82 122t122 83t150 30q79 0 149-30t122-82t83-122t30-150q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149m1472 832q0 52-16 101t-48 91v512l-256-128l-256 128v-512q-31-42-47-91t-17-101q0-66 25-124t68-101t102-69t125-26t124 25t101 69t69 102t26 124m-320-192q-40 0-75 15t-61 41t-41 61t-15 75t15 75t41 61t61 41t75 15t75-15t61-41t41-61t15-75t-15-75t-41-61t-61-41t-75-15m128 689v-204q-60 27-128 27t-128-27v204q32-16 64-31t64-33q32 17 64 32t64 32"
                      ></path>
                    </svg>
                  ),
                  alt: "Culture",
                  bg: "bg-green-100 dark:bg-green-900",
                  title: t("endpointProtection.awareness.steps.2.title"),
                  titleClass: "text-green-700 dark:text-green-400",
                  items: [
                    t("endpointProtection.awareness.steps.2.items.0"),
                    t("endpointProtection.awareness.steps.2.items.1"),
                    t("endpointProtection.awareness.steps.2.items.2"),
                  ],
                  connector: "bg-green-200 dark:bg-green-900",
                },
              ];
              return (
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                  {steps.map((step, idx) => (
                    <div
                      key={step.title}
                      className="flex flex-col items-center text-center flex-1"
                    >
                      <span
                        className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg ${step.bg}`}
                      >
                        {step.icon}
                      </span>
                      <h3
                        className={`font-bold text-lg mb-2 ${step.titleClass}`}
                      >
                        {step.title}
                      </h3>
                      <ul className="text-gray-700 dark:text-gray-300 space-y-1 mb-4">
                        {step.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>

                      <span
                        className={`hidden md:block w-16 h-2 rounded-full mx-auto ${step.connector}`}
                      ></span>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        </section>

        {/* 6. CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-900 dark:to-purple-900 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white dark:text-blue-300 tracking-tight">
              {t("endpointProtection.cta.title")}
            </h2>
            <p className="text-lg text-white/80 dark:text-white/70 mb-8">
              {t("endpointProtection.cta.subtitle")}
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-blue-600 dark:bg-blue-400 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all text-lg"
            >
              {t("endpointProtection.cta.button")}
            </Link>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  );
};

export default EndpointProtection;
