import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const ITInfrastructure = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("itInfrastructure.title")}</title>
        <meta
          name="description"
          content={t("itInfrastructure.metaDescription")}
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
            <source src="/it-infra-bg.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-5xl font-extrabold mb-4">
              {t("itInfrastructure.hero.title")}
            </h1>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              {t("itInfrastructure.hero.subtitle")}
            </p>
          </div>
        </section>

        {/* 2. Why IT Infrastructure Matters */}
        <section className="py-20 px-4 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            {/* Left: Modern Card with Icon & Headline */}
            <div className="flex-1 flex flex-col justify-center items-start bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 rounded-3xl shadow-2xl p-10 border-4 border-blue-100 dark:border-blue-900">
              <div className="mb-6 flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={60}
                  height={60}
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
                      stroke="#1447e6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m.65 8.067l3.167 1.357l3.167-1.357M3.817 3.122l3.166 1.357l3.167-1.357"
                      strokeWidth={1}
                    ></path>
                    <path
                      stroke="#1447e6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m6.983 8.067l3.167 1.357l3.167-1.357M.65 11.694v-3.62l3.167-1.357l3.167 1.357v3.62L3.817 13.05z"
                      strokeWidth={1}
                    ></path>
                    <path
                      stroke="#1447e6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.819 6.715v-3.62l3.166-1.357l3.167 1.357v3.62L6.985 8.072zm3.164 4.979v-3.62l3.167-1.357l3.167 1.357v3.62L10.15 13.05zM3.817 9.426v3.625m6.335-3.625v3.625M6.983 4.48v3.624"
                      strokeWidth={1}
                    ></path>
                  </g>
                </svg>
                <h2 className="text-4xl font-extrabold text-blue-700 dark:text-blue-300">
                  {t("itInfrastructure.why.title")}
                </h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-xl">
                {t("itInfrastructure.why.subtitle")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <span className="bg-blue-200 dark:bg-blue-800 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="currentColor"
                        d="M18 13h1c.55 0 1 .45 1 1.01v2.98c0 .56-.45 1.01-1 1.01h-4c-.55 0-1-.45-1-1.01v-2.98c0-.56.45-1.01 1-1.01h1v-2h-5v2h1c.55 0 1 .45 1 1.01v2.98c0 .56-.45 1.01-1 1.01H8c-.55 0-1-.45-1-1.01v-2.98c0-.56.45-1.01 1-1.01h1v-2H4v2h1c.55 0 1 .45 1 1.01v2.98C6 17.55 5.55 18 5 18H1c-.55 0-1-.45-1-1.01v-2.98C0 13.45.45 13 1 13h1v-2c0-1.1.9-2 2-2h5V7H8c-.55 0-1-.45-1-1.01V3.01C7 2.45 7.45 2 8 2h4c.55 0 1 .45 1 1.01v2.98C13 6.55 12.55 7 12 7h-1v2h5c1.1 0 2 .9 2 2z"
                      ></path>
                    </svg>
                  </span>
                  <span className="font-semibold text-blue-700 dark:text-blue-300">
                    {t("itInfrastructure.why.networking")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-purple-200 dark:bg-purple-800 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      viewBox="0 0 20 20"
                    >
                      <g fill="none">
                        <path
                          fill="url(#SVGzfBCudbL)"
                          d="M10 4c2.817 0 4.415 1.923 4.647 4.246h.07c1.814 0 3.283 1.512 3.283 3.377S16.53 15 14.718 15H5.282C3.469 15 2 13.488 2 11.623s1.47-3.377 3.282-3.377h.071C5.587 5.908 7.183 4 10 4"
                        ></path>
                        <path
                          fill="url(#SVG5z85RcCi)"
                          fillOpacity={0.3}
                          d="M9 11.5a3.5 3.5 0 1 1-7 0c0-1.933 1.567-3.25 3.5-3.25S9 9.567 9 11.5"
                        ></path>
                        <path
                          fill="url(#SVGxpfSzLXW)"
                          fillOpacity={0.3}
                          d="M10 14c2.761 0 4.7-2.239 4.7-5S13 4 10 4C7.276 4 5.624 5.846 5.343 8.253q.078-.003.157-.003C7.433 8.25 9 9.567 9 11.5a3.48 3.48 0 0 1-.753 2.169A4.7 4.7 0 0 0 10 14"
                        ></path>
                        <path
                          fill="url(#SVG3nwdPbIx)"
                          d="M10 14c2.761 0 4.7-2.239 4.7-5S13 4 10 4C7.276 4 5.624 5.846 5.343 8.253q.078-.003.157-.003C7.433 8.25 9 9.567 9 11.5a3.48 3.48 0 0 1-.753 2.169A4.7 4.7 0 0 0 10 14"
                        ></path>
                        <path
                          fill="url(#SVG4nYXsd7k)"
                          fillOpacity={0.5}
                          d="M10 4c2.817 0 4.415 1.923 4.647 4.246h.07c1.814 0 3.283 1.512 3.283 3.377S16.53 15 14.718 15H5.282C3.469 15 2 13.488 2 11.623s1.47-3.377 3.282-3.377h.071C5.587 5.908 7.183 4 10 4"
                        ></path>
                        <defs>
                          <linearGradient
                            id="SVGzfBCudbL"
                            x1={2.571}
                            x2={9.564}
                            y1={6.063}
                            y2={16.629}
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#0fafff"></stop>
                            <stop offset={1} stopColor="#367af2"></stop>
                          </linearGradient>
                          <linearGradient
                            id="SVG5z85RcCi"
                            x1={2}
                            x2={6.568}
                            y1={9.406}
                            y2={13.599}
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
                            id="SVGxpfSzLXW"
                            x1={6.965}
                            x2={8.367}
                            y1={4.563}
                            y2={11.424}
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
                            id="SVG3nwdPbIx"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientTransform="matrix(5.2742 -2.375 2.2155 4.92001 5.71 12.188)"
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
                            id="SVG4nYXsd7k"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientTransform="matrix(6.16666 12.1875 -88.93793 45.00101 9.333 3.313)"
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
                  </span>
                  <span className="font-semibold text-purple-700 dark:text-purple-300">
                    {t("itInfrastructure.why.cloud")}
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
                      <path
                        fill="currentColor"
                        d="M12 12h7c-.53 4.11-3.28 7.78-7 8.92zH5V6.3l7-3.11M12 1L3 5v6c0 5.55 3.84 10.73 9 12c5.16-1.27 9-6.45 9-12V5z"
                      ></path>
                    </svg>
                  </span>
                  <span className="font-semibold text-orange-700 dark:text-orange-400">
                    {t("itInfrastructure.why.compliance")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-green-200 dark:bg-green-800 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        d="M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10Zm6.643 4.696a6.75 6.75 0 0 0-1.62-2.673C11.772 11.76 10.013 11 8 11c-4 0-7 3-7 7v5h10m1-4.176L16.19 22L23 13"
                      ></path>
                    </svg>
                  </span>
                  <span className="font-semibold text-green-700 dark:text-green-400">
                    {t("itInfrastructure.why.support")}
                  </span>
                </div>
              </div>
            </div>
            {/* Right: Themed Image */}
            <div className="flex-1 flex justify-center items-center">
              <div className="relative">
                <Image
                  src="https://i.pinimg.com/736x/ef/f6/e2/eff6e2ec3446abec80b7f18ff8442cef.jpg"
                  alt="IT Infrastructure Hero"
                  width={340}
                  height={260}
                  className="relative z-10 rounded-2xl shadow-2xl border-4 border-blue-200 dark:border-blue-900 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Our IT Infrastructure Solutions */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-14 text-purple-700 dark:text-purple-300 text-center flex items-center justify-center gap-4">
              <span className="inline-block bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
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
                      stroke="#1447e6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m.65 8.067l3.167 1.357l3.167-1.357M3.817 3.122l3.166 1.357l3.167-1.357"
                      strokeWidth={1}
                    ></path>
                    <path
                      stroke="#1447e6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m6.983 8.067l3.167 1.357l3.167-1.357M.65 11.694v-3.62l3.167-1.357l3.167 1.357v3.62L3.817 13.05z"
                      strokeWidth={1}
                    ></path>
                    <path
                      stroke="#1447e6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.819 6.715v-3.62l3.166-1.357l3.167 1.357v3.62L6.985 8.072zm3.164 4.979v-3.62l3.167-1.357l3.167 1.357v3.62L10.15 13.05zM3.817 9.426v3.625m6.335-3.625v3.625M6.983 4.48v3.624"
                      strokeWidth={1}
                    ></path>
                  </g>
                </svg>
              </span>
              {t("itInfrastructure.solutions.title")}
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
                      viewBox="0 0 14 14"
                    >
                      <g fill="none">
                        <path
                          stroke="#1447e6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 10.5v3m-5 0h10"
                          strokeWidth={1}
                        ></path>
                        <path
                          fill="#d7e0ff"
                          d="M7 10.5a5 5 0 1 0 0-10a5 5 0 0 0 0 10"
                        ></path>
                        <path
                          stroke="#1447e6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 10.5a5 5 0 1 0 0-10a5 5 0 0 0 0 10m-5-5h10"
                          strokeWidth={1}
                        ></path>
                        <path
                          stroke="#1447e6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 10.5c3-3.42 3-6.76 0-10c-2.94 3.12-3 6.44 0 10"
                          strokeWidth={1}
                        ></path>
                      </g>
                    </svg>
                  ),
                  alt: "Network Design",
                  bg: "bg-blue-100 dark:bg-blue-900",
                  border: "border-blue-200 dark:border-blue-800",
                  title: t("itInfrastructure.solutions.0.title"),
                  titleClass: "text-blue-700 dark:text-blue-300",
                  items: [
                    t("itInfrastructure.solutions.0.items.0"),
                    t("itInfrastructure.solutions.0.items.1"),
                    t("itInfrastructure.solutions.0.items.2"),
                  ],
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={60}
                      height={60}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fillOpacity={0}
                        d="M7 19c-2.5 0 -4 -2 -4 -4c0 -2 1.5 -4 4 -4c0 -3.5 2 -6 5 -6c3 0 5 2.5 5 5v1c2.5 0 4 2 4 4c0 2 -1.5 4 -4 4Z"
                      >
                        <animate
                          fill="freeze"
                          attributeName="fill-opacity"
                          begin="0.8s"
                          dur="0.15s"
                          values="0;0.3"
                        ></animate>
                      </path>
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      >
                        <path
                          strokeDasharray={20}
                          strokeDashoffset={20}
                          d="M8 19h-1c-2.5 0 -4 -2 -4 -4c0 -2 1.5 -4 4 -4c1 0 1.5 0.5 1.5 0.5M16 19h1c2.5 0 4 -2 4 -4c0 -2 -1.5 -4 -4 -4c-1 0 -1.5 0.5 -1.5 0.5"
                        >
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            dur="0.4s"
                            values="20;0"
                          ></animate>
                        </path>
                        <path
                          strokeDasharray={20}
                          strokeDashoffset={20}
                          d="M7 11v-1c0 -2.5 2 -5 5 -5M17 11v-1c0 -2.5 -2 -5 -5 -5"
                        >
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="0.4s"
                            dur="0.3s"
                            values="20;0"
                          ></animate>
                        </path>
                        <path
                          strokeDasharray={8}
                          strokeDashoffset={8}
                          d="M12 20v-6"
                        >
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="1s"
                            dur="0.2s"
                            values="8;0"
                          ></animate>
                        </path>
                        <path
                          strokeDasharray={4}
                          strokeDashoffset={4}
                          d="M12 13l2 2M12 13l-2 2"
                        >
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="1.2s"
                            dur="0.2s"
                            values="4;0"
                          ></animate>
                        </path>
                      </g>
                    </svg>
                  ),
                  alt: "Cloud Integration",
                  bg: "bg-purple-100 dark:bg-purple-900",
                  border: "border-purple-200 dark:border-purple-800",
                  title: t("itInfrastructure.solutions.1.title"),
                  titleClass: "text-purple-700 dark:text-purple-300",
                  items: [
                    t("itInfrastructure.solutions.1.items.0"),
                    t("itInfrastructure.solutions.1.items.1"),
                    t("itInfrastructure.solutions.1.items.2"),
                  ],
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={60}
                      height={60}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 12h7c-.53 4.11-3.28 7.78-7 8.92zH5V6.3l7-3.11M12 1L3 5v6c0 5.55 3.84 10.73 9 12c5.16-1.27 9-6.45 9-12V5z"
                      ></path>
                    </svg>
                  ),
                  alt: "Security",
                  bg: "bg-blue-100 dark:bg-blue-900",
                  border: "border-blue-200 dark:border-blue-800",
                  title: t("itInfrastructure.solutions.2.title"),
                  titleClass: "text-blue-700 dark:text-blue-300",
                  items: [
                    t("itInfrastructure.solutions.2.items.0"),
                    t("itInfrastructure.solutions.2.items.1"),
                    t("itInfrastructure.solutions.2.items.2"),
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
              width={40}
              height={40}
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
                  stroke="#1447e6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m.65 8.067l3.167 1.357l3.167-1.357M3.817 3.122l3.166 1.357l3.167-1.357"
                  strokeWidth={1}
                ></path>
                <path
                  stroke="#1447e6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m6.983 8.067l3.167 1.357l3.167-1.357M.65 11.694v-3.62l3.167-1.357l3.167 1.357v3.62L3.817 13.05z"
                  strokeWidth={1}
                ></path>
                <path
                  stroke="#1447e6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.819 6.715v-3.62l3.166-1.357l3.167 1.357v3.62L6.985 8.072zm3.164 4.979v-3.62l3.167-1.357l3.167 1.357v3.62L10.15 13.05zM3.817 9.426v3.625m6.335-3.625v3.625M6.983 4.48v3.624"
                  strokeWidth={1}
                ></path>
              </g>
            </svg>
            {t("itInfrastructure.managed.title")}
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
                  fill="#1447e6"
                  d="M5.596 10.629L3.404 9.377q-.182-.1-.293-.29Q3 8.895 3 8.674V6.171q0-.22.111-.411t.293-.29l2.192-1.253q.18-.105.401-.105q.22 0 .407.105L8.596 5.47q.182.1.293.291t.111.41v2.504q0 .22-.111.411t-.293.291l-2.192 1.252q-.18.106-.401.106q-.22 0-.407-.106M16.27 13.5V9.777l1.923 1.129q.384.22.596.58t.212.799v4.584q0 .44-.212.8t-.596.579l-3.884 2.268q-.385.217-.811.217t-.805-.217l-3.884-2.268q-.384-.22-.596-.58T8 16.87v-4.584q0-.44.212-.8t.596-.58l1.923-1.128V13.5q0 1.163.803 1.966q.804.803 1.968.803t1.965-.803t.802-1.966M14 8v5.5q0 .213-.144.356t-.357.144t-.356-.144T13 13.5V3.808q0-.343.232-.576T13.808 3h5.683q.475 0 .712.429q.238.429-.036.833l-.523.784q-.136.205-.136.45t.136.458l.523.785q.273.403.036.832T19.491 8z"
                ></path>
              </svg>
              <h3 className="text-2xl font-bold mb-3 text-blue-700 dark:text-blue-300">
                {t("itInfrastructure.managed.cards.0.title")}
              </h3>
              <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 text-left space-y-2">
                <li>{t("itInfrastructure.managed.cards.0.items.0")}</li>
                <li>{t("itInfrastructure.managed.cards.0.items.1")}</li>
                <li>{t("itInfrastructure.managed.cards.0.items.2")}</li>
              </ul>
            </div>
            {/* Cloud Services Card */}
            <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-950 dark:to-blue-950 p-10 rounded-3xl shadow-xl border-2 border-purple-200 dark:border-purple-800 flex flex-col items-center group hover:scale-105 transition-all">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-14 h-14 bg-purple-500/20 dark:bg-purple-900/30 rounded-full blur-xl"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={48}
                viewBox="0 0 8 8"
              >
                <path
                  fill="oklch(49.6% 0.265 301.924)"
                  d="M4.5 1C3.29 1 2.23 1.86 2 3C.9 3 0 3.9 0 5s.9 2 2 2h4.5C7.33 7 8 6.33 8 5.5c0-.65-.42-1.29-1-1.5v-.5A2.5 2.5 0 0 0 4.5 1"
                ></path>
              </svg>
              <h3 className="text-2xl font-bold mb-3 text-purple-700 dark:text-purple-300">
                {t("itInfrastructure.managed.cards.1.title")}
              </h3>
              <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 text-left space-y-2">
                <li>{t("itInfrastructure.managed.cards.1.items.0")}</li>
                <li>{t("itInfrastructure.managed.cards.1.items.1")}</li>
                <li>{t("itInfrastructure.managed.cards.1.items.2")}</li>
              </ul>
            </div>
            {/* Managed Support Card */}
            <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 p-10 rounded-3xl shadow-xl border-2 border-blue-200 dark:border-blue-800 flex flex-col items-center group hover:scale-105 transition-all">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-14 h-14 bg-green-500/20 dark:bg-green-900/30 rounded-full blur-xl"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={48}
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
                {t("itInfrastructure.managed.cards.2.title")}
              </h3>
              <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 text-left space-y-2">
                <li>{t("itInfrastructure.managed.cards.2.items.0")}</li>
                <li>{t("itInfrastructure.managed.cards.2.items.1")}</li>
                <li>{t("itInfrastructure.managed.cards.2.items.2")}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Infrastructure Awareness & Compliance */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-14 text-purple-700 dark:text-purple-300 text-center flex items-center justify-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={48}
                viewBox="0 0 48 48"
              >
                <g fill="none" strokeWidth={3}>
                  <path
                    fill="#8fbffa"
                    d="M13.733 19.47c.122 1.17.87 2.141 1.937 2.632c2.217 1.019 6.11 2.648 8.33 2.648s6.113-1.63 8.33-2.648c1.067-.49 1.815-1.463 1.937-2.632c.119-1.147.233-2.862.233-5.22s-.114-4.073-.233-5.22c-.122-1.17-.87-2.141-1.938-2.632C30.113 5.379 26.221 3.75 24 3.75c-2.22 0-6.113 1.63-8.33 2.648c-1.067.49-1.815 1.463-1.937 2.632c-.119 1.147-.233 2.862-.233 5.22s.114 4.073.233 5.22"
                  ></path>
                  <path
                    fill="#fff"
                    d="M24 3.5c2.802 0 8.266 2.883 9.667 3.648A.68.68 0 0 1 34 7.75a.68.68 0 0 1-.333.601C32.267 9.116 26.802 12 24 12s-8.266-2.883-9.667-3.648A.68.68 0 0 1 14 7.75c0-.256.127-.488.333-.601C15.733 6.384 21.198 3.5 24 3.5"
                  ></path>
                  <path
                    fill="#8fbffa"
                    d="M3.233 37.72c.122 1.17.87 2.141 1.938 2.632C7.387 41.371 11.28 43 13.5 43s6.113-1.63 8.33-2.648c1.067-.49 1.815-1.463 1.937-2.632c.119-1.147.233-2.862.233-5.22s-.114-4.073-.233-5.22c-.122-1.17-.87-2.141-1.937-2.632C19.613 23.629 15.72 22 13.5 22s-6.113 1.63-8.33 2.648c-1.067.49-1.815 1.463-1.937 2.632C3.114 28.427 3 30.142 3 32.5s.114 4.073.233 5.22"
                  ></path>
                  <path
                    fill="#fff"
                    d="M13.5 22c2.803 0 8.266 2.883 9.667 3.648a.68.68 0 0 1 .333.602a.68.68 0 0 1-.333.601c-1.4.765-6.865 3.649-9.667 3.649c-2.803 0-8.266-2.883-9.667-3.648a.68.68 0 0 1-.333-.602c0-.256.127-.488.333-.601C5.233 24.884 10.698 22 13.5 22"
                  ></path>
                  <path
                    fill="#8fbffa"
                    d="M24.233 37.72c.122 1.17.87 2.141 1.937 2.632C28.388 41.371 32.28 43 34.5 43s6.113-1.63 8.33-2.648c1.067-.49 1.815-1.463 1.937-2.632c.119-1.147.233-2.862.233-5.22s-.114-4.073-.233-5.22c-.122-1.17-.87-2.141-1.938-2.632C40.613 23.629 36.722 22 34.5 22c-2.22 0-6.113 1.63-8.33 2.648c-1.067.49-1.815 1.463-1.937 2.632c-.119 1.147-.233 2.862-.233 5.22s.114 4.073.233 5.22"
                  ></path>
                  <path
                    fill="#fff"
                    d="M34.5 22c2.802 0 8.266 2.883 9.667 3.648a.68.68 0 0 1 .333.602a.68.68 0 0 1-.333.601c-1.4.765-6.865 3.649-9.667 3.649s-8.266-2.883-9.667-3.648a.68.68 0 0 1-.333-.602c0-.256.127-.488.333-.601C26.233 24.884 31.698 22 34.5 22"
                  ></path>
                  <path
                    stroke="#2859c5"
                    strokeLinejoin="round"
                    d="M13.733 19.47c.122 1.17.87 2.141 1.937 2.632c2.217 1.019 6.11 2.648 8.33 2.648s6.113-1.63 8.33-2.648c1.067-.49 1.815-1.463 1.937-2.632c.119-1.147.233-2.862.233-5.22s-.114-4.073-.233-5.22c-.122-1.17-.87-2.141-1.938-2.632C30.113 5.379 26.221 3.75 24 3.75c-2.22 0-6.113 1.63-8.33 2.648c-1.067.49-1.815 1.463-1.937 2.632c-.119 1.147-.233 2.862-.233 5.22s.114 4.073.233 5.22Z"
                  ></path>
                  <path
                    stroke="#2859c5"
                    strokeLinejoin="round"
                    d="M13.5 7.95s8.38 4.2 10.5 4.2s10.5-4.2 10.5-4.2"
                  ></path>
                  <path
                    stroke="#2859c5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M24 12.15v12.6"
                  ></path>
                  <path
                    stroke="#2859c5"
                    strokeLinejoin="round"
                    d="M3.233 37.72c.122 1.17.87 2.141 1.938 2.632C7.387 41.371 11.28 43 13.5 43s6.113-1.63 8.33-2.648c1.067-.49 1.815-1.463 1.937-2.632c.119-1.147.233-2.862.233-5.22s-.114-4.073-.233-5.22c-.122-1.17-.87-2.141-1.937-2.632C19.613 23.629 15.72 22 13.5 22s-6.113 1.63-8.33 2.648c-1.067.49-1.815 1.463-1.937 2.632C3.114 28.427 3 30.142 3 32.5s.114 4.073.233 5.22Z"
                  ></path>
                  <path
                    stroke="#2859c5"
                    strokeLinejoin="round"
                    d="M3 26.2s8.38 4.2 10.5 4.2S24 26.2 24 26.2"
                  ></path>
                  <path
                    stroke="#2859c5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 30.4V43"
                  ></path>
                  <path
                    stroke="#2859c5"
                    strokeLinejoin="round"
                    d="M24.233 37.72c.122 1.17.87 2.141 1.937 2.632C28.388 41.371 32.28 43 34.5 43s6.113-1.63 8.33-2.648c1.067-.49 1.815-1.463 1.937-2.632c.119-1.147.233-2.862.233-5.22s-.114-4.073-.233-5.22c-.122-1.17-.87-2.141-1.938-2.632C40.613 23.629 36.722 22 34.5 22c-2.22 0-6.113 1.63-8.33 2.648c-1.067.49-1.815 1.463-1.937 2.632c-.119 1.147-.233 2.862-.233 5.22s.114 4.073.233 5.22Z"
                  ></path>
                  <path
                    stroke="#2859c5"
                    strokeLinejoin="round"
                    d="M24 26.2s8.38 4.2 10.5 4.2S45 26.2 45 26.2"
                  ></path>
                  <path
                    stroke="#2859c5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M34.5 30.4V43"
                  ></path>
                </g>
              </svg>
              {t("itInfrastructure.awareness.title")}
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
                      viewBox="0 0 24 24"
                    >
                      <g fill="#1447e6">
                        <path d="M3 3h18v4.385h-2V5H5v9h4.333v2H3z"></path>
                        <path d="M12.684 10.287C13.558 11.212 14.303 12 16 12h2a2 2 0 0 1 2 2v1a2 2 0 0 1-1 1.732V22h-3v-8c-2.617 0-3.956-1.45-4.84-2.405a14 14 0 0 0-.367-.388l1.414-1.414q.249.25.477.494M19 9.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></path>
                      </g>
                    </svg>
                  ),
                  alt: "Training",
                  bg: "bg-blue-100 dark:bg-blue-900",
                  title: t("itInfrastructure.awareness.steps.0.title"),
                  titleClass: "text-blue-700 dark:text-blue-300",
                  items: [
                    t("itInfrastructure.awareness.steps.0.items.0"),
                    t("itInfrastructure.awareness.steps.0.items.1"),
                    t("itInfrastructure.awareness.steps.0.items.2"),
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
                        fill="#8200db"
                        d="M30 24v-2h-2.101a5 5 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A5 5 0 0 0 24 18.101V16h-2v2.101a5 5 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A5 5 0 0 0 18.101 22H16v2h2.101a5 5 0 0 0 .732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a5 5 0 0 0 1.753.732V30h2v-2.101a5 5 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A5 5 0 0 0 27.899 24Zm-7 2a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3"
                      ></path>
                      <path
                        fill="#8200db"
                        d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10v-2H4V12h24v3h2V6a2 2 0 0 0-2-2m0 6H4V6h24Z"
                      ></path>
                      <circle cx={20} cy={8} r={1} fill="#8200db"></circle>
                      <circle cx={23} cy={8} r={1} fill="#8200db"></circle>
                      <circle cx={26} cy={8} r={1} fill="#8200db"></circle>
                    </svg>
                  ),
                  alt: "Compliance",
                  bg: "bg-purple-100 dark:bg-purple-900",
                  title: t("itInfrastructure.awareness.steps.1.title"),
                  titleClass: "text-purple-700 dark:text-purple-300",
                  items: [
                    t("itInfrastructure.awareness.steps.1.items.0"),
                    t("itInfrastructure.awareness.steps.1.items.1"),
                    t("itInfrastructure.awareness.steps.1.items.2"),
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
                        fill="#008236"
                        d="M1168 946q38 15 74 33t70 41q-22 24-40 50t-33 56q-77-50-164-76t-179-26q-88 0-170 23t-153 64t-129 100t-100 130t-65 153t-23 170H128q0-120 35-231t101-205t156-167t204-115q-113-74-176-186t-64-248q0-106 40-199t109-163T696 40T896 0t199 40t163 109t110 163t40 200q0 66-16 129t-48 119t-75 103t-101 83M512 512q0 80 30 149t82 122t122 83t150 30q79 0 149-30t122-82t83-122t30-150q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149m1472 832q0 52-16 101t-48 91v512l-256-128l-256 128v-512q-31-42-47-91t-17-101q0-66 25-124t68-101t102-69t125-26t124 25t101 69t69 102t26 124m-320-192q-40 0-75 15t-61 41t-41 61t-15 75t15 75t41 61t61 41t75 15t75-15t61-41t41-61t15-75t-15-75t-41-61t-61-41t-75-15m128 689v-204q-60 27-128 27t-128-27v204q32-16 64-31t64-33q32 17 64 32t64 32"
                      ></path>
                    </svg>
                  ),
                  alt: "Culture",
                  bg: "bg-green-100 dark:bg-green-900",
                  title: t("itInfrastructure.awareness.steps.2.title"),
                  titleClass: "text-green-700 dark:text-green-400",
                  items: [
                    t("itInfrastructure.awareness.steps.2.items.0"),
                    t("itInfrastructure.awareness.steps.2.items.1"),
                    t("itInfrastructure.awareness.steps.2.items.2"),
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
              {t("itInfrastructure.cta.title")}
            </h2>
            <p className="text-lg text-white/80 dark:text-white/70 mb-8">
              {t("itInfrastructure.cta.subtitle")}
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-blue-600 dark:bg-blue-400 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all text-lg"
            >
              {t("itInfrastructure.cta.button")}
            </Link>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  );
};

export default ITInfrastructure;
