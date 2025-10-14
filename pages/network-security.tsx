import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Link from "next/link";

import Head from "next/head";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const NetworkSecurity = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("networkSecurity.title")}</title>
        <meta
          name="description"
          content={t("networkSecurity.metaDescription")}
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
            <source src="/network-bg-video.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-5xl font-extrabold mb-4">
              {t("networkSecurity.hero.title")}
            </h1>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              {t("networkSecurity.hero.subtitle")}
            </p>
          </div>
        </section>

        {/* 2. Why Network Security Matters */}
        <section className="py-20 px-4 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            {/* Left: Modern Card with Icon & Headline */}
            <div className="flex-1 flex flex-col justify-center items-start bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 rounded-3xl shadow-2xl p-10 border-4 border-blue-100 dark:border-blue-900">
              <div className="mb-6 flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={50}
                  viewBox="0 0 48 48"
                >
                  <g fill="none" strokeLinejoin="round" strokeWidth={4}>
                    <path
                      fill="#2f88ff"
                      stroke="#000"
                      d="M6 8.25564L24.0086 3L42 8.25564V19.0337C42 30.3622 34.7502 40.4194 24.0026 44.0005C13.2521 40.4195 6 30.36 6 19.0287V8.25564Z"
                    ></path>
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      d="M23.9497 14.9497V30.9497"
                    ></path>
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      d="M15.9497 22.9497H31.9497"
                    ></path>
                  </g>
                </svg>
                <h2 className="text-4xl font-extrabold text-blue-700 dark:text-blue-300">
                  {t("networkSecurity.why.title")}
                </h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-xl">
                {t("networkSecurity.why.subtitle")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <span className="bg-blue-200 dark:bg-blue-800 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      viewBox="0 0 48 48"
                    >
                      <defs>
                        <mask id="SVGwxOyzcPc">
                          <g
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={4}
                          >
                            <path d="M44 11v27c0 3.314-8.954 6-20 6S4 41.314 4 38V11"></path>
                            <path d="M44 29c0 3.314-8.954 6-20 6S4 32.314 4 29m40-9c0 3.314-8.954 6-20 6S4 23.314 4 20"></path>
                            <ellipse
                              cx={24}
                              cy={10}
                              fill="#555555"
                              rx={20}
                              ry={6}
                            ></ellipse>
                          </g>
                        </mask>
                      </defs>
                      <path
                        fill="#1447e6"
                        d="M0 0h48v48H0z"
                        mask="url(#SVGwxOyzcPc)"
                      ></path>
                    </svg>
                  </span>
                  <span className="font-semibold text-blue-700 dark:text-blue-300">
                    {t("networkSecurity.why.dataProtection")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-purple-200 dark:bg-purple-800 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="oklch(49.6% 0.265 301.924)"
                        d="M22.505 15.503v7.002h-1v1H3.5v-1h-1v-7.002h7.002v2h6.001v-2z"
                      ></path>
                      <path
                        fill="oklch(49.6% 0.265 301.924)"
                        d="M14.503 15.503h-4v1h4zm0-2h-4v1h4z"
                      ></path>
                      <path
                        fill="oklch(49.6% 0.265 301.924)"
                        d="M22.505 5.5v-1h-6.002v-2h-1v-1H9.502v1h-1v2H2.5v1h-1v8.003h1v1h7.002v-2h6.001v2h7.002v-1h1V5.5zm-12.003-2h4.001v1h-4.001z"
                      ></path>
                    </svg>
                  </span>
                  <span className="font-semibold text-purple-700 dark:text-purple-300">
                    {t("networkSecurity.why.businessContinuity")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-orange-200 dark:bg-orange-800 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
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
                  <span className="font-semibold text-orange-700 dark:text-orange-400">
                    {t("networkSecurity.why.complianceTrust")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-green-200 dark:bg-green-800 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      viewBox="0 0 14 14"
                    >
                      <g fill="none">
                        <path
                          fill="#8fbffa"
                          fillRule="evenodd"
                          d="M3.15 13.628c-1.437-.147-2.559-1.37-2.66-2.81a39 39 0 0 1-.114-2.622c0-1.25.12-2.771.224-4.072l.009-.107A1.006 1.006 0 0 1 1.61 3.09h5.522c.524 0 .96.405 1.002.927l.008.107c.053.667.11 1.392.154 2.108l-.092.09c-1.787 1.826-2.681 3.6-3.286 5.845a2.15 2.15 0 0 0 .131 1.507a10.6 10.6 0 0 1-1.9-.046Z"
                          clipRule="evenodd"
                        ></path>
                        <path
                          fill="#2859c5"
                          fillRule="evenodd"
                          d="M2.731.303a.5.5 0 0 0-.5.5V3.09h4.28V.803a.5.5 0 0 0-.5-.5z"
                          clipRule="evenodd"
                        ></path>
                        <path
                          fill="#2859c5"
                          d="M6.106 12.493c.558-2.068 1.356-3.644 2.974-5.298a.923.923 0 0 1 1.334.015c1.554 1.655 2.334 3.188 2.944 5.253c.184.623-.296 1.234-.945 1.234H7.055c-.637 0-1.114-.59-.949-1.204"
                        ></path>
                        <path
                          fill="#8fbffa"
                          fillRule="evenodd"
                          d="M10.254 8.92a.5.5 0 0 0-1 0v1.2a.5.5 0 0 0 1 0zm0 3.248a.5.5 0 1 0-1 0v.223a.5.5 0 0 0 1 0z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span className="font-semibold text-green-700 dark:text-green-400">
                    {t("networkSecurity.why.threatPrevention")}
                  </span>
                </div>
              </div>
            </div>
            {/* Right: Themed Image */}
            <div className="flex-1 flex justify-center items-center">
              <div className="relative">
                <Image
                  src="https://i.pinimg.com/1200x/71/d4/31/71d431f4a98d470d3ae9de30eca48eaf.jpg"
                  alt={t("networkSecurity.why.imageAlt")}
                  width={340}
                  height={260}
                  className="relative z-10 rounded-2xl shadow-2xl border-4 border-blue-200 dark:border-blue-900 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Our Cybersecurity Solutions */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-14 text-purple-700 dark:text-purple-300 text-center flex items-center justify-center gap-4">
              <span className="inline-block bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={50}
                  viewBox="0 0 48 48"
                >
                  <g fill="none" strokeLinejoin="round" strokeWidth={4}>
                    <path
                      fill="#2f88ff"
                      stroke="#000"
                      d="M6 8.25564L24.0086 3L42 8.25564V19.0337C42 30.3622 34.7502 40.4194 24.0026 44.0005C13.2521 40.4195 6 30.36 6 19.0287V8.25564Z"
                    ></path>
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      d="M23.9497 14.9497V30.9497"
                    ></path>
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      d="M15.9497 22.9497H31.9497"
                    ></path>
                  </g>
                </svg>
              </span>
              {t("networkSecurity.solutions.title")}
            </h2>
            {/* Zigzag Layout using array and map */}
            {(() => {
              const solutions = [
                {
                  icon: "https://www.svgrepo.com/show/529791/radar-2.svg",
                  alt: t("networkSecurity.solutions.0.alt"),
                  bg: "bg-blue-100 dark:bg-blue-900",
                  border: "border-blue-200 dark:border-blue-800",
                  title: t("networkSecurity.solutions.0.title"),
                  titleClass: "text-blue-700 dark:text-blue-300",
                  items: [
                    t("networkSecurity.solutions.0.items.0"),
                    t("networkSecurity.solutions.0.items.1"),
                    t("networkSecurity.solutions.0.items.2"),
                  ],
                },
                {
                  icon: "data:image/png;base64,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",
                  alt: t("networkSecurity.solutions.1.alt"),
                  bg: "bg-purple-100 dark:bg-purple-900",
                  border: "border-purple-200 dark:border-purple-800",
                  title: t("networkSecurity.solutions.1.title"),
                  titleClass: "text-purple-700 dark:text-purple-300",
                  items: [
                    t("networkSecurity.solutions.1.items.0"),
                    t("networkSecurity.solutions.1.items.1"),
                    t("networkSecurity.solutions.1.items.2"),
                  ],
                },
                {
                  icon: "data:image/png;base64,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",
                  alt: t("networkSecurity.solutions.2.alt"),
                  bg: "bg-blue-100 dark:bg-blue-900",
                  border: "border-blue-200 dark:border-blue-800",
                  title: t("networkSecurity.solutions.2.title"),
                  titleClass: "text-blue-700 dark:text-blue-300",
                  items: [
                    t("networkSecurity.solutions.2.items.0"),
                    t("networkSecurity.solutions.2.items.1"),
                    t("networkSecurity.solutions.2.items.2"),
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
                        } items-center gap-10`}
                      >
                        <div
                          className={`flex-shrink-0 w-32 h-32 rounded-3xl ${sol.bg} flex items-center justify-center shadow-xl border-4 ${sol.border}`}
                        >
                          <Image
                            src={sol.icon}
                            alt={sol.alt}
                            width={64}
                            height={64}
                          />
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
                            {sol.items.map((item, i) => (
                              <li key={i}>{item}</li>
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
              width={40}
              height={40}
              viewBox="0 0 48 48"
            >
              <path
                fill="#155dfc"
                d="M24 6c-6.29 0-11.45 4.84-11.959 11H11.5a8.5 8.5 0 0 0 0 17H21c0-7.18 5.82-13 13-13c4.556 0 8.565 2.344 10.887 5.892q.112-.68.113-1.392a8.5 8.5 0 0 0-8.5-8.5h-.541C35.45 10.84 30.29 6 24 6m21 28c0 6.075-4.925 11-11 11s-11-4.925-11-11s4.925-11 11-11s11 4.925 11 11m-10.293-7.707a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L33 29.414V41a1 1 0 1 0 2 0V29.414l3.293 3.293a1 1 0 0 0 1.414-1.414z"
              ></path>
            </svg>
            {t("networkSecurity.managed.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {(() => {
              const managedCards = [
                {
                  circleBg: "bg-blue-500/20 dark:bg-blue-900/30",
                  svg: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={60}
                      height={60}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#1447e6"
                        d="M5.596 10.629L3.404 9.377q-.182-.1-.293-.29Q3 8.895 3 8.674V6.171q0-.22.111-.411t.293-.29l2.192-1.253q.18-.105.401-.105q.22 0 .407.105L8.596 5.47q.182.1.293.291t.111.41v2.504q0 .22-.111.411t-.293.291l-2.192 1.252q-.18.106-.401.106q-.22 0-.407-.106M16.27 13.5V9.777l1.923 1.129q.384.22.596.58t.212.799v4.584q0 .44-.212.8t-.596.579l-3.884 2.268q-.385.217-.811.217t-.805-.217l-3.884-2.268q-.384-.22-.596-.58T8 16.87v-4.584q0-.44.212-.8t.596-.58l1.923-1.128V13.5q0 1.163.803 1.966q.804.803 1.968.803t1.965-.803t.802-1.966M14 8v5.5q0 .213-.144.356t-.357.144t-.356-.144T13 13.5V3.808q0-.343.232-.576T13.808 3h5.683q.475 0 .712.429q.238.429-.036.833l-.523.784q-.136.205-.136.45t.136.458l.523.785q.273.403.036.832T19.491 8z"
                      ></path>
                    </svg>
                  ),
                  titleKey: "networkSecurity.managed.cards.0.title",
                  titleClass:
                    "text-2xl font-bold mb-3 text-blue-700 dark:text-blue-300",
                  circleClass:
                    "from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950",
                  borderClass: "border-blue-200 dark:border-blue-800",
                  items: [
                    "networkSecurity.managed.cards.0.items.0",
                    "networkSecurity.managed.cards.0.items.1",
                    "networkSecurity.managed.cards.0.items.2",
                  ],
                },
                {
                  circleBg: "bg-purple-500/20 dark:bg-purple-900/30",
                  svg: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={60}
                      height={60}
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#1447e6"
                        d="M24 6c-6.29 0-11.45 4.84-11.959 11H11.5a8.5 8.5 0 0 0 0 17H21c0-7.18 5.82-13 13-13c4.556 0 8.565 2.344 10.887 5.892q.112-.68.113-1.392a8.5 8.5 0 0 0-8.5-8.5h-.541C35.45 10.84 30.29 6 24 6m21 28c0 6.075-4.925 11-11 11s-11-4.925-11-11s4.925-11 11-11s11 4.925 11 11m-10.293-7.707a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L33 29.414V41a1 1 0 1 0 2 0V29.414l3.293 3.293a1 1 0 0 0 1.414-1.414z"
                      ></path>
                    </svg>
                  ),
                  titleKey: "networkSecurity.managed.cards.1.title",
                  titleClass:
                    "text-2xl font-bold mb-3 text-purple-700 dark:text-purple-300",
                  circleClass:
                    "from-purple-100 to-blue-100 dark:from-purple-950 dark:to-blue-950",
                  borderClass: "border-purple-200 dark:border-purple-800",
                  items: [
                    "networkSecurity.managed.cards.1.items.0",
                    "networkSecurity.managed.cards.1.items.1",
                    "networkSecurity.managed.cards.1.items.2",
                  ],
                },
                {
                  circleBg: "bg-green-500/20 dark:bg-green-900/30",
                  svg: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      viewBox="0 0 8 8"
                    >
                      <path
                        fill="#1447e6"
                        d="M4 4v3q2 0 3-3M4 4V1L1 2v2m3-4l4 2c0 8-8 8-8 0"
                      ></path>
                    </svg>
                  ),
                  titleKey: "networkSecurity.managed.cards.2.title",
                  titleClass:
                    "text-2xl font-bold mb-3 text-green-700 dark:text-green-400",
                  circleClass:
                    "from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950",
                  borderClass: "border-blue-200 dark:border-blue-800",
                  items: [
                    "networkSecurity.managed.cards.2.items.0",
                    "networkSecurity.managed.cards.2.items.1",
                    "networkSecurity.managed.cards.2.items.2",
                  ],
                },
              ];
              return managedCards.map((card, i) => (
                <div
                  key={i}
                  className={`relative bg-gradient-to-br ${card.circleClass} p-10 rounded-3xl shadow-xl border-2 ${card.borderClass} flex flex-col items-center group hover:scale-105 transition-all`}
                >
                  <div
                    className={`absolute -top-8 left-1/2 -translate-x-1/2 w-14 h-14 ${card.circleBg} rounded-full blur-xl`}
                  />
                  {card.svg}
                  <h4
                    className={`  font-bold mb-3 text-blue-700 dark:text-blue-300`}
                  >
                    {t(card.titleKey)}
                  </h4>
                  <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 text-left space-y-2">
                    {card.items.map((it, idx) => (
                      <li key={idx}>{t(it)}</li>
                    ))}
                  </ul>
                </div>
              ));
            })()}
          </div>
        </section>

        {/* 5. Security Awareness & Compliance */}

        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-14 text-purple-700 dark:text-purple-300 text-center flex items-center justify-center gap-3">
              <Image
                src="data:image/png;base64,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"
                alt={t("networkSecurity.awareness.titleIconAlt")}
                width={36}
                height={36}
              />
              {t("networkSecurity.awareness.title")}
            </h2>
            {/* Horizontal Stepper Layout using array and map */}
            {(() => {
              const { t } = useTranslation();
              const steps = [
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={100}
                      height={100}
                      viewBox="0 0 36 36"
                    >
                      <circle
                        cx={16.86}
                        cy={9.73}
                        r={6.46}
                        fill="#1447e6"
                      ></circle>
                      <path fill="#1447e6" d="M21 28h7v1.4h-7z"></path>
                      <path
                        fill="#1447e6"
                        d="M15 30v3a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1V23a1 1 0 0 0-1-1h-7v-1.47a1 1 0 0 0-2 0V22h-2v-3.58a32 32 0 0 0-5.14-.42a26 26 0 0 0-11 2.39a3.28 3.28 0 0 0-1.88 3V30Zm17 2H17v-8h7v.42a1 1 0 0 0 2 0V24h6Z"
                      ></path>
                    </svg>
                  ),
                  alt: t("networkSecurity.awareness.steps.0.alt"),
                  bg: "bg-blue-100 dark:bg-blue-900",
                  title: t("networkSecurity.awareness.steps.0.title"),
                  titleClass: "text-blue-700 dark:text-blue-300",
                  items: [
                    t("networkSecurity.awareness.steps.0.items.0"),
                    t("networkSecurity.awareness.steps.0.items.1"),
                    t("networkSecurity.awareness.steps.0.items.2"),
                  ],
                  connector: "bg-blue-200 dark:bg-blue-900",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={100}
                      height={100}
                      viewBox="0 0 2048 2048"
                    >
                      <path
                        fill="#1447e6"
                        d="M1033 1280q-14 30-21 62t-13 66H384v-128zm-649 384v-128h613q5 33 14 65t23 63zm-128 256h1349l127 128H128V0h1115l549 549v568q-29-26-61-47t-67-37V640h-512V128H256zM1280 219v293h293zm24 805q-109 41-187 128H384v-128zM384 512h640v128H384zm1152 256v128H384V768zm512 1216q0 26-19 45t-45 19t-45-19l-291-290q-39 26-84 39t-92 14q-66 0-124-25t-102-68t-69-102t-25-125t25-124t68-101t102-69t125-26t124 25t101 69t69 102t26 124q0 47-13 92t-40 84l290 291q19 19 19 45m-768-512q0 40 15 75t41 61t61 41t75 15t75-15t61-41t41-61t15-75t-15-75t-41-61t-61-41t-75-15t-75 15t-61 41t-41 61t-15 75"
                      ></path>
                    </svg>
                  ),
                  alt: t("networkSecurity.awareness.steps.1.alt"),
                  bg: "bg-purple-100 dark:bg-purple-900",
                  title: t("networkSecurity.awareness.steps.1.title"),
                  titleClass: "text-purple-700 dark:text-purple-300",
                  items: [
                    t("networkSecurity.awareness.steps.1.items.0"),
                    t("networkSecurity.awareness.steps.1.items.1"),
                    t("networkSecurity.awareness.steps.1.items.2"),
                  ],
                  connector: "bg-purple-200 dark:bg-purple-900",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={100}
                      height={100}
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="none"
                        stroke="#1447e6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.252 31.262A12.973 12.973 0 0 1 24 11.027m10.756 5.719A12.973 12.973 0 0 1 24 36.97"
                        strokeWidth={1}
                      ></path>
                      <path
                        fill="none"
                        stroke="#1447e6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m24 17.906l6.703-6.703L24 4.5h0zm-.001 12.188l-6.703 6.703l6.703 6.703z"
                        strokeWidth={1}
                      ></path>
                    </svg>
                  ),
                  alt: t("networkSecurity.awareness.steps.2.alt"),
                  bg: "bg-green-100 dark:bg-green-900",
                  title: t("networkSecurity.awareness.steps.2.title"),
                  titleClass: "text-green-700 dark:text-green-400",
                  items: [
                    t("networkSecurity.awareness.steps.2.items.0"),
                    t("networkSecurity.awareness.steps.2.items.1"),
                    t("networkSecurity.awareness.steps.2.items.2"),
                  ],
                  connector: "bg-green-200 dark:bg-green-900",
                },
              ];
              return (
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                  {steps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-center flex-1"
                    >
                      <span
                        className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg bg-blue-100 dark:bg-blue-900`}
                      >
                        {step.icon}
                      </span>
                      <h3
                        className={`font-bold text-lg mb-2 text-blue-700 dark:text-blue-300`}
                      >
                        {step.title}
                      </h3>
                      <ul className="text-gray-700 dark:text-gray-300 space-y-1 mb-4">
                        {step.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>

                      <span
                        className={`hidden md:block w-16 h-2 rounded-full mx-auto bg-blue-200 dark:bg-blue-900`}
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
              {t("networkSecurity.cta.title")}
            </h2>
            <p className="text-lg text-white/80 dark:text-white/70 mb-8">
              {t("networkSecurity.cta.subtitle")}
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-blue-600 dark:bg-blue-400 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all text-lg"
            >
              {t("networkSecurity.cta.button")}
            </Link>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  );
};

export default NetworkSecurity;
