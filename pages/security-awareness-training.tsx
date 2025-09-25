import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const SecurityAwarenessTraining = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("securityAwarenessTraining.title")}</title>
        <meta
          name="description"
          content={t("securityAwarenessTraining.metaDescription")}
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
            <source src="/security-awareness-bg.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-5xl font-extrabold mb-4">
              {t("securityAwarenessTraining.hero.title")}
            </h1>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              {t("securityAwarenessTraining.hero.subtitle")}
            </p>
          </div>
        </section>

        {/* 2. Why Security Awareness Matters */}
        <section className="py-20 px-4 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            {/* Left: Modern Card with Icon & Headline */}
            <div className="flex-1 flex flex-col justify-center items-start bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 rounded-3xl shadow-2xl p-10 border-4 border-blue-100 dark:border-blue-900">
              <div className="mb-6 flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={48}
                  height={48}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 12h7c-.53 4.11-3.28 7.78-7 8.92zH5V6.3l7-3.11M12 1L3 5v6c0 5.55 3.84 10.73 9 12c5.16-1.27 9-6.45 9-12V5z"
                  ></path>
                </svg>
                <h2 className="text-4xl font-extrabold text-blue-700 dark:text-blue-300">
                  {t("securityAwarenessTraining.why.title")}
                </h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-xl">
                {t("securityAwarenessTraining.why.subtitle")}
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
                      <g fill="currentColor">
                        <path d="M3 3h18v4.385h-2V5H5v9h4.333v2H3z"></path>
                        <path d="M12.684 10.287C13.558 11.212 14.303 12 16 12h2a2 2 0 0 1 2 2v1a2 2 0 0 1-1 1.732V22h-3v-8c-2.617 0-3.956-1.45-4.84-2.405a14 14 0 0 0-.367-.388l1.414-1.414q.249.25.477.494M19 9.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></path>
                      </g>
                    </svg>
                  </span>
                  <span className="font-semibold text-blue-700 dark:text-blue-300">
                    {t("securityAwarenessTraining.why.training")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-purple-200 dark:bg-purple-800 p-3 rounded-full">
                    <Image
                      src="/globe.svg"
                      alt={t("securityAwarenessTraining.why.simulations")}
                      width={32}
                      height={32}
                    />
                  </span>
                  <span className="font-semibold text-purple-700 dark:text-purple-300">
                    {t("securityAwarenessTraining.why.simulations")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-orange-200 dark:bg-orange-800 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={48}
                      height={48}
                      viewBox="0 0 2048 2048"
                    >
                      <path
                        fill="currentColor"
                        d="M1033 1280q-14 30-21 62t-13 66H384v-128zm-649 384v-128h613q5 33 14 65t23 63zm-128 256h1349l127 128H128V0h1115l549 549v568q-29-26-61-47t-67-37V640h-512V128H256zM1280 219v293h293zm24 805q-109 41-187 128H384v-128zM384 512h640v128H384zm1152 256v128H384V768zm512 1216q0 26-19 45t-45 19t-45-19l-291-290q-39 26-84 39t-92 14q-66 0-124-25t-102-68t-69-102t-25-125t25-124t68-101t102-69t125-26t124 25t101 69t69 102t26 124q0 47-13 92t-40 84l290 291q19 19 19 45m-768-512q0 40 15 75t41 61t61 41t75 15t75-15t61-41t41-61t15-75t-15-75t-41-61t-61-41t-75-15t-75 15t-61 41t-41 61t-15 75"
                      ></path>
                    </svg>
                  </span>
                  <span className="font-semibold text-orange-700 dark:text-orange-400">
                    {t("securityAwarenessTraining.why.compliance")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-green-200 dark:bg-green-800 p-3 rounded-full">
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
                  <span className="font-semibold text-green-700 dark:text-green-400">
                    {t("securityAwarenessTraining.why.culture")}
                  </span>
                </div>
              </div>
            </div>
            {/* Right: Themed Image */}
            <div className="flex-1 flex justify-center items-center">
              <div className="relative">
                <Image
                  src="https://i.pinimg.com/736x/23/60/53/236053b63147eca3d16b5dafa3ebb788.jpg"
                  alt="Security Awareness Hero"
                  width={340}
                  height={260}
                  className="relative z-10 rounded-2xl shadow-2xl border-4 border-blue-200 dark:border-blue-900 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Our Security Awareness Solutions */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-14 text-purple-700 dark:text-purple-300 text-center flex items-center justify-center gap-4">
              <span className="inline-block bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={48}
                  height={48}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="oklch(49.6% 0.265 301.924)"
                    d="M12 12h7c-.53 4.11-3.28 7.78-7 8.92zH5V6.3l7-3.11M12 1L3 5v6c0 5.55 3.84 10.73 9 12c5.16-1.27 9-6.45 9-12V5z"
                  ></path>
                </svg>
              </span>
              {t("securityAwarenessTraining.solutions.title")}
            </h2>
            {/* Zigzag Layout using array and map */}
            {(() => {
              const solutions = [
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={60}
                      height={60}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="oklch(49.6% 0.265 301.924)"
                        d="M12 12h7c-.53 4.11-3.28 7.78-7 8.92zH5V6.3l7-3.11M12 1L3 5v6c0 5.55 3.84 10.73 9 12c5.16-1.27 9-6.45 9-12V5z"
                      ></path>
                    </svg>
                  ),
                  alt: t("securityAwarenessTraining.solutions.0.title"),
                  bg: "bg-blue-100 dark:bg-blue-900",
                  border: "border-blue-200 dark:border-blue-800",
                  title: t("securityAwarenessTraining.solutions.0.title"),
                  titleClass: "text-blue-700 dark:text-blue-300",
                  items: [
                    t("securityAwarenessTraining.solutions.0.items.0"),
                    t("securityAwarenessTraining.solutions.0.items.1"),
                    t("securityAwarenessTraining.solutions.0.items.2"),
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
                        fill="none"
                        stroke="oklch(49.6% 0.265 301.924)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4.974 19.375a2.625 2.625 0 1 0 0-5.25a2.625 2.625 0 0 0 0 5.25m4.226 3.75a4.473 4.473 0 0 0-8.449 0m18.275-3.75a2.625 2.625 0 1 0 0-5.25a2.625 2.625 0 0 0 0 5.25m4.224 3.75a4.473 4.473 0 0 0-8.449 0M5 8.875v2m14-2v2m-14-1h14m-10-7l2 2l4-4"
                      ></path>
                    </svg>
                  ),
                  alt: t("securityAwarenessTraining.solutions.1.title"),
                  bg: "bg-purple-100 dark:bg-purple-900",
                  border: "border-purple-200 dark:border-purple-800",
                  title: t("securityAwarenessTraining.solutions.1.title"),
                  titleClass: "text-purple-700 dark:text-purple-300",
                  items: [
                    t("securityAwarenessTraining.solutions.1.items.0"),
                    t("securityAwarenessTraining.solutions.1.items.1"),
                    t("securityAwarenessTraining.solutions.1.items.2"),
                  ],
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={48}
                      height={48}
                      viewBox="0 0 14 14"
                    >
                      <g fill="none">
                        <path
                          fill="#2859c5"
                          fillRule="evenodd"
                          d="M12.561 1.267c0-.577-.484-1.142-1.118-1.152h-.004L3.096.121a1.25 1.25 0 0 0-.741.243l-.96.707a.25.25 0 0 0 0 .403l.96.706c.214.159.474.244.742.244l8.342-.005h.004c.634-.01 1.118-.575 1.118-1.152"
                          clipRule="evenodd"
                        ></path>
                        <path
                          fill="#8fbffa"
                          d="M1.723 4.118a.5.5 0 0 0-.5.5v7.188a.5.5 0 0 0 .5.5c1.617 0 2.678.243 3.413.538c.66.265 1.078.577 1.444.851l.122.091a.5.5 0 0 0 .596 0l.121-.09c.367-.274.785-.587 1.445-.852c.736-.295 1.796-.538 3.413-.538a.5.5 0 0 0 .5-.5V4.618a.5.5 0 0 0-.5-.5c-1.72 0-2.91.259-3.785.61A6.6 6.6 0 0 0 7 5.573a6.6 6.6 0 0 0-1.492-.845c-.875-.351-2.065-.61-3.785-.61"
                        ></path>
                        <path
                          fill="#2859c5"
                          d="M6.375 13.543V5.155l.015.01a1.19 1.19 0 0 0 1.235-.01v8.388a20 20 0 0 0-.327.244a.5.5 0 0 1-.596 0l-.122-.092z"
                        ></path>
                      </g>
                    </svg>
                  ),
                  alt: t("securityAwarenessTraining.solutions.2.title"),
                  bg: "bg-blue-100 dark:bg-blue-900",
                  border: "border-blue-200 dark:border-blue-800",
                  title: t("securityAwarenessTraining.solutions.2.title"),
                  titleClass: "text-blue-700 dark:text-blue-300",
                  items: [
                    t("securityAwarenessTraining.solutions.2.items.0"),
                    t("securityAwarenessTraining.solutions.2.items.1"),
                    t("securityAwarenessTraining.solutions.2.items.2"),
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
              viewBox="0 0 16 16"
            >
              <g fill="none">
                <path
                  fill="url(#SVGvye7Ocvj)"
                  d="M4.03 5.507a4 4 0 0 1 7.94 0A3.25 3.25 0 0 1 11.75 12h-7.5a3.25 3.25 0 0 1-.22-6.493"
                ></path>
                <path
                  fill="url(#SVGplNOQedF)"
                  fillOpacity={0.3}
                  d="M7.5 8.75a3.25 3.25 0 1 1-6.5 0a3.25 3.25 0 0 1 6.5 0"
                ></path>
                <path
                  fill="url(#SVGl0DDYcSn)"
                  fillOpacity={0.3}
                  d="M8 10a4 4 0 1 0-3.97-4.493q.11-.007.22-.007a3.25 3.25 0 0 1 3.027 4.435Q7.63 10 8 10"
                ></path>
                <path
                  fill="url(#SVGenx0EdAm)"
                  d="M8 10a4 4 0 1 0-3.97-4.493q.11-.007.22-.007a3.25 3.25 0 0 1 3.027 4.435Q7.63 10 8 10"
                ></path>
                <path
                  fill="url(#SVGliSTmcLR)"
                  fillOpacity={0.5}
                  d="M4.03 5.507a4 4 0 0 1 7.94 0A3.25 3.25 0 0 1 11.75 12h-7.5a3.25 3.25 0 0 1-.22-6.493"
                ></path>
                <defs>
                  <linearGradient
                    id="SVGvye7Ocvj"
                    x1={1.5}
                    x2={7.948}
                    y1={3.875}
                    y2={13.254}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0fafff"></stop>
                    <stop offset={1} stopColor="#367af2"></stop>
                  </linearGradient>
                  <linearGradient
                    id="SVGplNOQedF"
                    x1={1}
                    x2={5.382}
                    y1={6.613}
                    y2={10.492}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff"></stop>
                    <stop offset={1} stopColor="#fcfcfc" stopOpacity={0}></stop>
                  </linearGradient>
                  <linearGradient
                    id="SVGl0DDYcSn"
                    x1={5.412}
                    x2={6.47}
                    y1={2.45}
                    y2={7.965}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff"></stop>
                    <stop offset={1} stopColor="#fcfcfc" stopOpacity={0}></stop>
                  </linearGradient>
                  <radialGradient
                    id="SVGenx0EdAm"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(4.49228 -1.9 1.69846 4.01577 4.342 8.55)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset={0.412} stopColor="#2c87f5"></stop>
                    <stop offset={1} stopColor="#2c87f5" stopOpacity={0}></stop>
                  </radialGradient>
                  <radialGradient
                    id="SVGliSTmcLR"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(5.39581 11.07954 -79.00581 38.47637 7.417 1.375)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset={0.5}
                      stopColor="#dd3ce2"
                      stopOpacity={0}
                    ></stop>
                    <stop offset={1} stopColor="#dd3ce2"></stop>
                  </radialGradient>
                </defs>
              </g>
            </svg>
            {t("securityAwarenessTraining.managed.title")}
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
                {t("securityAwarenessTraining.managed.cards.0.title")}
              </h3>
              <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 text-left space-y-2">
                <li>
                  {t("securityAwarenessTraining.managed.cards.0.items.0")}
                </li>
                <li>
                  {t("securityAwarenessTraining.managed.cards.0.items.1")}
                </li>
                <li>
                  {t("securityAwarenessTraining.managed.cards.0.items.2")}
                </li>
              </ul>
            </div>
            {/* Cloud Services Card */}
            <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-950 dark:to-blue-950 p-10 rounded-3xl shadow-xl border-2 border-purple-200 dark:border-purple-800 flex flex-col items-center group hover:scale-105 transition-all">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-14 h-14 bg-purple-500/20 dark:bg-purple-900/30 rounded-full blur-xl"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={60}
                height={60}
                viewBox="0 0 16 16"
              >
                <g fill="none">
                  <path
                    fill="url(#SVGvye7Ocvj)"
                    d="M4.03 5.507a4 4 0 0 1 7.94 0A3.25 3.25 0 0 1 11.75 12h-7.5a3.25 3.25 0 0 1-.22-6.493"
                  ></path>
                  <path
                    fill="url(#SVGplNOQedF)"
                    fillOpacity={0.3}
                    d="M7.5 8.75a3.25 3.25 0 1 1-6.5 0a3.25 3.25 0 0 1 6.5 0"
                  ></path>
                  <path
                    fill="url(#SVGl0DDYcSn)"
                    fillOpacity={0.3}
                    d="M8 10a4 4 0 1 0-3.97-4.493q.11-.007.22-.007a3.25 3.25 0 0 1 3.027 4.435Q7.63 10 8 10"
                  ></path>
                  <path
                    fill="url(#SVGenx0EdAm)"
                    d="M8 10a4 4 0 1 0-3.97-4.493q.11-.007.22-.007a3.25 3.25 0 0 1 3.027 4.435Q7.63 10 8 10"
                  ></path>
                  <path
                    fill="url(#SVGliSTmcLR)"
                    fillOpacity={0.5}
                    d="M4.03 5.507a4 4 0 0 1 7.94 0A3.25 3.25 0 0 1 11.75 12h-7.5a3.25 3.25 0 0 1-.22-6.493"
                  ></path>
                  <defs>
                    <linearGradient
                      id="SVGvye7Ocvj"
                      x1={1.5}
                      x2={7.948}
                      y1={3.875}
                      y2={13.254}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0fafff"></stop>
                      <stop offset={1} stopColor="#367af2"></stop>
                    </linearGradient>
                    <linearGradient
                      id="SVGplNOQedF"
                      x1={1}
                      x2={5.382}
                      y1={6.613}
                      y2={10.492}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff"></stop>
                      <stop
                        offset={1}
                        stopColor="#fcfcfc"
                        stopOpacity={0}
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="SVGl0DDYcSn"
                      x1={5.412}
                      x2={6.47}
                      y1={2.45}
                      y2={7.965}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff"></stop>
                      <stop
                        offset={1}
                        stopColor="#fcfcfc"
                        stopOpacity={0}
                      ></stop>
                    </linearGradient>
                    <radialGradient
                      id="SVGenx0EdAm"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientTransform="matrix(4.49228 -1.9 1.69846 4.01577 4.342 8.55)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={0.412} stopColor="#2c87f5"></stop>
                      <stop
                        offset={1}
                        stopColor="#2c87f5"
                        stopOpacity={0}
                      ></stop>
                    </radialGradient>
                    <radialGradient
                      id="SVGliSTmcLR"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientTransform="matrix(5.39581 11.07954 -79.00581 38.47637 7.417 1.375)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset={0.5}
                        stopColor="#dd3ce2"
                        stopOpacity={0}
                      ></stop>
                      <stop offset={1} stopColor="#dd3ce2"></stop>
                    </radialGradient>
                  </defs>
                </g>
              </svg>
              <h3 className="text-2xl font-bold mb-3 text-purple-700 dark:text-purple-300">
                {t("securityAwarenessTraining.managed.cards.1.title")}
              </h3>
              <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 text-left space-y-2">
                <li>
                  {t("securityAwarenessTraining.managed.cards.1.items.0")}
                </li>
                <li>
                  {t("securityAwarenessTraining.managed.cards.1.items.1")}
                </li>
                <li>
                  {t("securityAwarenessTraining.managed.cards.1.items.2")}
                </li>
              </ul>
            </div>
            {/* Managed Support Card */}
            <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 p-10 rounded-3xl shadow-xl border-2 border-blue-200 dark:border-blue-800 flex flex-col items-center group hover:scale-105 transition-all">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-14 h-14 bg-green-500/20 dark:bg-green-900/30 rounded-full blur-xl"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={60}
                height={60}
                viewBox="0 0 48 48"
              >
                <path fill="#bf360c" d="M13 30h22v12H13z"></path>
                <g fill="#ffa726">
                  <circle cx={10} cy={26} r={4}></circle>
                  <circle cx={38} cy={26} r={4}></circle>
                </g>
                <path
                  fill="#ffb74d"
                  d="M39 19c0-12.7-30-8.3-30 0v10c0 8.3 6.7 15 15 15s15-6.7 15-15z"
                ></path>
                <g fill="#784719">
                  <circle cx={30} cy={26} r={2}></circle>
                  <circle cx={18} cy={26} r={2}></circle>
                </g>
                <path
                  fill="#ff5722"
                  d="M24 2C15.5 2 3 7.8 3 35.6L13 42V24l16.8-9.8L35 21v21l10-8.2c0-5.6-.9-29-15.4-29L28.2 2z"
                ></path>
                <path
                  fill="#757575"
                  d="M45 24c-.6 0-1 .4-1 1v-7c0-8.8-7.2-16-16-16h-9c-.6 0-1 .4-1 1s.4 1 1 1h9c7.7 0 14 6.3 14 14v10c0 .6.4 1 1 1s1-.4 1-1v2c0 3.9-3.1 7-7 7H24c-.6 0-1 .4-1 1s.4 1 1 1h13c5 0 9-4 9-9v-5c0-.6-.4-1-1-1"
                ></path>
                <g fill="#37474f">
                  <path d="M45 22h-1c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2"></path>
                  <circle cx={24} cy={38} r={2}></circle>
                </g>
              </svg>
              <h3 className="text-2xl font-bold mb-3 text-green-700 dark:text-green-400">
                {t("securityAwarenessTraining.managed.cards.2.title")}
              </h3>
              <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 text-left space-y-2">
                <li>
                  {t("securityAwarenessTraining.managed.cards.2.items.0")}
                </li>
                <li>
                  {t("securityAwarenessTraining.managed.cards.2.items.1")}
                </li>
                <li>
                  {t("securityAwarenessTraining.managed.cards.2.items.2")}
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Security Awareness & Compliance */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-14 text-purple-700 dark:text-purple-300 text-center flex items-center justify-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={48}
                viewBox="0 0 24 24"
              >
                <path
                  fill="oklch(49.6% 0.265 301.924)"
                  d="M12 12h7c-.53 4.11-3.28 7.78-7 8.92zH5V6.3l7-3.11M12 1L3 5v6c0 5.55 3.84 10.73 9 12c5.16-1.27 9-6.45 9-12V5z"
                ></path>
              </svg>
              {t("securityAwarenessTraining.awareness.title")}
            </h2>
            {/* Horizontal Stepper Layout using array and map */}
            {(() => {
              const steps = [
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={50}
                      height={50}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="oklch(48.8% 0.243 264.376)"
                        d="M12 12h7c-.53 4.11-3.28 7.78-7 8.92zH5V6.3l7-3.11M12 1L3 5v6c0 5.55 3.84 10.73 9 12c5.16-1.27 9-6.45 9-12V5z"
                      ></path>
                    </svg>
                  ),
                  alt: t("securityAwarenessTraining.awareness.steps.0.title"),
                  bg: "bg-blue-100 dark:bg-blue-900",
                  title: t("securityAwarenessTraining.awareness.steps.0.title"),
                  titleClass: "text-blue-700 dark:text-blue-300",
                  items: [
                    t("securityAwarenessTraining.awareness.steps.0.items.0"),
                    t("securityAwarenessTraining.awareness.steps.0.items.1"),
                    t("securityAwarenessTraining.awareness.steps.0.items.2"),
                  ],
                  connector: "bg-blue-200 dark:bg-blue-900",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={50}
                      height={50}
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="oklch(49.6% 0.265 301.924)"
                        d="M30 24v-2h-2.101a5 5 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A5 5 0 0 0 24 18.101V16h-2v2.101a5 5 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A5 5 0 0 0 18.101 22H16v2h2.101a5 5 0 0 0 .732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a5 5 0 0 0 1.753.732V30h2v-2.101a5 5 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A5 5 0 0 0 27.899 24Zm-7 2a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3"
                      ></path>
                      <path
                        fill="oklch(49.6% 0.265 301.924)"
                        d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10v-2H4V12h24v3h2V6a2 2 0 0 0-2-2m0 6H4V6h24Z"
                      ></path>
                      <circle
                        cx={20}
                        cy={8}
                        r={1}
                        fill="oklch(49.6% 0.265 301.924)"
                      ></circle>
                      <circle
                        cx={23}
                        cy={8}
                        r={1}
                        fill="oklch(49.6% 0.265 301.924)"
                      ></circle>
                      <circle
                        cx={26}
                        cy={8}
                        r={1}
                        fill="oklch(49.6% 0.265 301.924)"
                      ></circle>
                    </svg>
                  ),
                  alt: t("securityAwarenessTraining.awareness.steps.1.title"),
                  bg: "bg-purple-100 dark:bg-purple-900",
                  title: t("securityAwarenessTraining.awareness.steps.1.title"),
                  titleClass: "text-purple-700 dark:text-purple-300",
                  items: [
                    t("securityAwarenessTraining.awareness.steps.1.items.0"),
                    t("securityAwarenessTraining.awareness.steps.1.items.1"),
                    t("securityAwarenessTraining.awareness.steps.1.items.2"),
                  ],
                  connector: "bg-purple-200 dark:bg-purple-900",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={50}
                      height={50}
                      viewBox="0 0 2048 2048"
                    >
                      <path
                        fill="oklch(52.7% 0.154 150.069)"
                        d="M1168 946q38 15 74 33t70 41q-22 24-40 50t-33 56q-77-50-164-76t-179-26q-88 0-170 23t-153 64t-129 100t-100 130t-65 153t-23 170H128q0-120 35-231t101-205t156-167t204-115q-113-74-176-186t-64-248q0-106 40-199t109-163T696 40T896 0t199 40t163 109t110 163t40 200q0 66-16 129t-48 119t-75 103t-101 83M512 512q0 80 30 149t82 122t122 83t150 30q79 0 149-30t122-82t83-122t30-150q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149m1472 832q0 52-16 101t-48 91v512l-256-128l-256 128v-512q-31-42-47-91t-17-101q0-66 25-124t68-101t102-69t125-26t124 25t101 69t69 102t26 124m-320-192q-40 0-75 15t-61 41t-41 61t-15 75t15 75t41 61t61 41t75 15t75-15t61-41t41-61t15-75t-15-75t-41-61t-61-41t-75-15m128 689v-204q-60 27-128 27t-128-27v204q32-16 64-31t64-33q32 17 64 32t64 32"
                      ></path>
                    </svg>
                  ),
                  alt: t("securityAwarenessTraining.awareness.steps.2.title"),
                  bg: "bg-green-100 dark:bg-green-900",
                  title: t("securityAwarenessTraining.awareness.steps.2.title"),
                  titleClass: "text-green-700 dark:text-green-400",
                  items: [
                    t("securityAwarenessTraining.awareness.steps.2.items.0"),
                    t("securityAwarenessTraining.awareness.steps.2.items.1"),
                    t("securityAwarenessTraining.awareness.steps.2.items.2"),
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
              {t("securityAwarenessTraining.cta.title")}
            </h2>
            <p className="text-lg text-white/80 dark:text-white/70 mb-8">
              {t("securityAwarenessTraining.cta.subtitle")}
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-blue-600 dark:bg-blue-400 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all text-lg"
            >
              {t("securityAwarenessTraining.cta.button")}
            </Link>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  );
};

export default SecurityAwarenessTraining;
