import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const CloudBackupAndRecovery = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("cloudBackupAndRecovery.title")}</title>
        <meta
          name="description"
          content={t("cloudBackupAndRecovery.metaDescription")}
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
            <source src="/cloud-backup-bg-video.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-5xl font-extrabold mb-4">
              {t("cloudBackupAndRecovery.hero.title")}
            </h1>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              {t("cloudBackupAndRecovery.hero.subtitle")}
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
                  {t("cloudBackupAndRecovery.why.title")}
                </h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-xl">
                {t("cloudBackupAndRecovery.why.subtitle")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <span className="bg-blue-200 dark:bg-blue-800 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      viewBox="0 0 32 32"
                    >
                      <g fill="none">
                        <path
                          fill="url(#SVGkSGRmbrV)"
                          d="M15 7.012a1 1 0 0 0-1.047-1C7.855 6.3 3 11.333 3 17.5C3 23.851 8.149 29 14.5 29c6.168 0 11.201-4.855 11.487-10.953A1 1 0 0 0 24.988 17H17.5a2.5 2.5 0 0 1-2.5-2.5z"
                        ></path>
                        <path
                          fill="url(#SVGOonY3dQP)"
                          d="M18.047 3.013A1 1 0 0 0 17 4.012V14a1 1 0 0 0 1 1h9.988a1 1 0 0 0 1-1.047C28.71 8.037 23.962 3.29 18.046 3.013"
                        ></path>
                        <defs>
                          <linearGradient
                            id="SVGkSGRmbrV"
                            x1={25.988}
                            x2={-10.793}
                            y1={29}
                            y2={-7.781}
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6d37cd"></stop>
                            <stop offset={0.641} stopColor="#ea71ef"></stop>
                          </linearGradient>
                          <linearGradient
                            id="SVGOonY3dQP"
                            x1={27.989}
                            x2={19.398}
                            y1={12.802}
                            y2={3.012}
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#e23cb4"></stop>
                            <stop offset={1} stopColor="#ea71ef"></stop>
                          </linearGradient>
                        </defs>
                      </g>
                    </svg>
                  </span>
                  <span className="font-semibold text-blue-700 dark:text-blue-300">
                    {t("cloudBackupAndRecovery.why.dataProtection")}
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
                      <g fill="none">
                        <path
                          fill="#fff"
                          d="m18.255 9.248l-.581.29l-2.282-5.934L9.248 1.24L3.103 3.604L.74 9.748l2.363 6.144l6.145 2.363l6.144-2.363l.345-.897l2.518 1.259l3.003-1.502V10.75zM23.26 22.76v-4.004l-5.005-1.501l-5.004 1.5v4.004z"
                        ></path>
                        <path
                          fill="#bbd8ff"
                          d="M15.253 14.752V10.75l2.42-1.211l-2.281-5.934L9.248 1.24v17.014l6.144-2.363l.345-.898z"
                        ></path>
                        <path
                          fill="#bbd8ff"
                          d="m18.255 9.248l-2.276 1.138l-.026-.007l.016.012l1.786 1.359h3.503v-1.001z"
                        ></path>
                        <path
                          stroke="#092f63"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M23.26 22.76v-4.004l-5.005-1.501l-5.004 1.5v4.004m5.004-3.002v2.001"
                          strokeWidth={2}
                        ></path>
                        <path
                          stroke="#092f63"
                          strokeLinejoin="round"
                          d="M5.244 16.716V2.78m8.007 13.936V2.78"
                          strokeWidth={2}
                        ></path>
                        <path
                          stroke="#092f63"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.215 5.745H2.28m10.971 8.007H2.28m10.971-4.004H.741"
                          strokeWidth={2}
                        ></path>
                        <path
                          stroke="#092f63"
                          strokeLinejoin="round"
                          d="M9.248 18.255V1.241"
                          strokeWidth={2}
                        ></path>
                        <path
                          stroke="#092f63"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m17.022 7.844l-1.63-4.24L9.248 1.24L3.103 3.604L.74 9.748l2.363 6.144l6.145 2.363l4.859-1.868"
                          strokeWidth={2}
                        ></path>
                        <path
                          stroke="#092f63"
                          strokeMiterlimit={10}
                          d="m15.953 10.379l1.802 1.37h3.503"
                          strokeWidth={2}
                        ></path>
                        <path
                          stroke="#092f63"
                          strokeLinejoin="round"
                          d="m21.258 14.752l-3.003 1.502l-3.002-1.502V10.75l3.002-1.501l3.003 1.5z"
                          strokeWidth={2}
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span className="font-semibold text-purple-700 dark:text-purple-300">
                    {t("cloudBackupAndRecovery.why.businessContinuity")}
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
                    {t("cloudBackupAndRecovery.why.complianceTrust")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-green-200 dark:bg-green-800 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="#155dfc"
                        d="M15 24v2H7.5C3.3 26 0 22.6 0 18.5c0-3.6 2.6-6.7 6.1-7.4c0 0 .6-.1.9-.1h.2L5.6 9.4L7 8l4 4l-4 4l-1.4-1.4L7.2 13H7c-2.4.2-4.6 2.3-4.9 4.7c-.5 3.4 2.1 6.3 5.4 6.3zm3 0c-.5 0-1 .5-1 1s.5 1 1 1s1-.5 1-1s-.5-1-1-1m7.9-12.9l-.1-.1c-.8-4-3.9-7.1-7.9-7.8C17.3 3 16.6 3 16 3c-2.9 0-5.6 1.3-7.4 3.3l1.5 1.5C11.3 6.4 13 5.3 15 5.1c1-.1 1.9-.1 2.9.1c3.2.7 5.5 3.4 6.1 6.5l.2 1q0 .1.1.1l1.1.2c1.2.2 2.3.7 3.1 1.5c1.3 1.3 1.9 3.1 1.5 4.9c-.5 2.5-2.5 4.3-5 4.5l1.5-1.6L25 21l-4 4l4 4l1.4-1.4l-1.6-1.6c3.5-.2 6.4-2.7 7.1-6.1c.1-.5.1-.9.1-1.3c0-3.7-2.5-6.8-6.1-7.5"
                      ></path>
                    </svg>
                  </span>
                  <span className="font-semibold text-green-700 dark:text-green-400">
                    {t("cloudBackupAndRecovery.why.threatPrevention")}
                  </span>
                </div>
              </div>
            </div>
            {/* Right: Themed Image */}
            <div className="flex-1 flex justify-center items-center">
              <div className="relative">
                <Image
                  src="https://i.pinimg.com/736x/d1/eb/8f/d1eb8f3e2355f0483a50618f571b37c8.jpg"
                  alt={t("cloudBackupAndRecovery.why.imageAlt")}
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
              {t("cloudBackupAndRecovery.solutions.title")}
            </h2>
            {/* Zigzag Layout using array and map */}
            {(() => {
              const solutions = [
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={64}
                      height={64}
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#d1c4e9"
                        d="M38 7H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m0 12H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2m0 12H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2"
                      ></path>
                      <g fill="#2196f3">
                        <path d="m31 30l7 5.6V24.4z"></path>
                        <path d="M38 28c-.3 0-.7 0-1 .1v4c.3-.1.7-.1 1-.1c3.3 0 6 2.7 6 6s-2.7 6-6 6s-6-2.7-6-6c0-.3 0-.6.1-.9l-3.4-2.7c-.4 1.1-.7 2.3-.7 3.6c0 5.5 4.5 10 10 10s10-4.5 10-10s-4.5-10-10-10"></path>
                      </g>
                    </svg>
                  ),
                  alt: t("cloudBackupAndRecovery.solutions.0.alt"),
                  bg: "bg-blue-100 dark:bg-blue-900",
                  border: "border-blue-200 dark:border-blue-800",
                  title: t("cloudBackupAndRecovery.solutions.0.title"),
                  titleClass: "text-blue-700 dark:text-blue-300",
                  items: [
                    t("cloudBackupAndRecovery.solutions.0.items.0"),
                    t("cloudBackupAndRecovery.solutions.0.items.1"),
                    t("cloudBackupAndRecovery.solutions.0.items.2"),
                  ],
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={64}
                      height={64}
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" stroke="#155dfc" strokeWidth={1.5}>
                        <path
                          strokeLinecap="round"
                          d="M3 12c0 1.657 3.582 3 8 3q.508 0 1-.023"
                        ></path>
                        <path
                          strokeLinecap="round"
                          d="M19 5v6.5M3 5v14c0 1.657 3.582 3 8 3q.508 0 1-.023"
                        ></path>
                        <ellipse cx={11} cy={5} rx={8} ry={3}></ellipse>
                        <path strokeLinecap="round" d="M7 8v2m0 5v2"></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.987 14l.5 2.084l-.83-.518a3.5 3.5 0 0 0-2.122-.715c-1.952 0-3.535 1.6-3.535 3.575C14 20.4 15.583 22 17.535 22c1.71 0 3.137-1.228 3.465-2.86"
                        ></path>
                      </g>
                    </svg>
                  ),
                  alt: t("cloudBackupAndRecovery.solutions.1.alt"),
                  bg: "bg-purple-100 dark:bg-purple-900",
                  border: "border-purple-200 dark:border-purple-800",
                  title: t("cloudBackupAndRecovery.solutions.1.title"),
                  titleClass: "text-purple-700 dark:text-purple-300",
                  items: [
                    t("cloudBackupAndRecovery.solutions.1.items.0"),
                    t("cloudBackupAndRecovery.solutions.1.items.1"),
                    t("cloudBackupAndRecovery.solutions.1.items.2"),
                  ],
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={64}
                      height={64}
                      viewBox="0 0 16 16"
                    >
                      <g fill="#155dfc" fillRule="evenodd" clipRule="evenodd">
                        <path d="M1.5 7a6.5 6.5 0 1 1 7 6.481V14H11v1H5v-1h2.5v-.519A6.5 6.5 0 0 1 1.5 7M8 1.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11"></path>
                        <path d="M4.5 7a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M8 4.5a2.5 2.5 0 1 0 2.436 1.935a1.5 1.5 0 1 1-1.871-1.87A2.5 2.5 0 0 0 8 4.5"></path>
                      </g>
                    </svg>
                  ),
                  alt: t("cloudBackupAndRecovery.solutions.2.alt"),
                  bg: "bg-blue-100 dark:bg-blue-900",
                  border: "border-blue-200 dark:border-blue-800",
                  title: t("cloudBackupAndRecovery.solutions.2.title"),
                  titleClass: "text-blue-700 dark:text-blue-300",
                  items: [
                    t("cloudBackupAndRecovery.solutions.2.items.0"),
                    t("cloudBackupAndRecovery.solutions.2.items.1"),
                    t("cloudBackupAndRecovery.solutions.2.items.2"),
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
              width={60}
              height={60}
              viewBox="0 0 50 50"
            >
              <g
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.3}
              >
                <path
                  stroke="#306cfe"
                  d="M12.5 31.48a13.73 13.73 0 1 1 20.833-15.084a9.6 9.6 0 0 1 1.73-.167A8.73 8.73 0 0 1 37.5 33.333"
                ></path>
                <path
                  stroke="#306cfe"
                  d="M33.056 31.611h-.558a.945.945 0 0 1-.887-.633a.94.94 0 0 1 .188-1.076l.388-.388a.945.945 0 0 0 0-1.34l-1.341-1.351a.946.946 0 0 0-1.342 0l-.387.387a.94.94 0 0 1-1.076.189a.945.945 0 0 1-.652-.897v-.558a.945.945 0 0 0-.945-.944h-1.888a.945.945 0 0 0-.945.944v.558a.945.945 0 0 1-.633.887v0a.94.94 0 0 1-1.076-.188l-.388-.388a.945.945 0 0 0-1.34 0l-1.351 1.341a.946.946 0 0 0 0 1.342l.387.387a.94.94 0 0 1 .189 1.076a.945.945 0 0 1-.888.633h-.567a.945.945 0 0 0-.944.945v1.889a.945.945 0 0 0 .944.944h.558a.94.94 0 0 1 .887.633v0a.94.94 0 0 1-.188 1.076l-.388.388a.945.945 0 0 0 0 1.34l1.332 1.332a.945.945 0 0 0 1.341 0l.387-.387a.945.945 0 0 1 1.077-.189a.945.945 0 0 1 .633.888v.605a.945.945 0 0 0 .944.944h1.89a.944.944 0 0 0 .944-.944v-.558a.94.94 0 0 1 .632-.887a.94.94 0 0 1 1.077.188l.387.388a.946.946 0 0 0 1.341 0l1.332-1.332a.945.945 0 0 0 0-1.341l-.387-.387a.95.95 0 0 1-.19-1.077v0a.94.94 0 0 1 .889-.633h.614a.945.945 0 0 0 .944-.944v-1.917a.945.945 0 0 0-.944-.945"
                ></path>
                <path
                  stroke="#344054"
                  d="M25.5 36a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"
                ></path>
              </g>
            </svg>
            {t("cloudBackupAndRecovery.managed.title")}
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
                {t("cloudBackupAndRecovery.managed.cards.0.title")}
              </h3>
              <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 text-left space-y-2">
                <li>{t("cloudBackupAndRecovery.managed.cards.0.items.0")}</li>
                <li>{t("cloudBackupAndRecovery.managed.cards.0.items.1")}</li>
                <li>{t("cloudBackupAndRecovery.managed.cards.0.items.2")}</li>
              </ul>
            </div>
            {/* Cloud Services Card */}
            <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-950 dark:to-blue-950 p-10 rounded-3xl shadow-xl border-2 border-purple-200 dark:border-purple-800 flex flex-col items-center group hover:scale-105 transition-all">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-14 h-14 bg-purple-500/20 dark:bg-purple-900/30 rounded-full blur-xl"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 48 48"
              >
                <g fill="none">
                  <path
                    fill="url(#SVG3hu2RdmB)"
                    d="M24 9c-6.29 0-11.45 4.84-11.959 11H11.5a8.5 8.5 0 0 0 0 17h25a8.5 8.5 0 0 0 0-17h-.541C35.45 13.84 30.29 9 24 9"
                  ></path>
                  <path
                    fill="url(#SVGcOlLPecK)"
                    fillOpacity={0.3}
                    d="M20 28.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0"
                  ></path>
                  <path
                    fill="url(#SVGwGonHcZM)"
                    fillOpacity={0.3}
                    d="M24 33c6.627 0 12-5.373 12-12S30.627 9 24 9c-6.296 0-11.46 4.85-11.96 11.017a8.5 8.5 0 0 1 7.2 12.002C20.7 32.65 22.309 33 24 33"
                  ></path>
                  <path
                    fill="url(#SVGN8BPNKNb)"
                    d="M24 33c6.627 0 12-5.373 12-12S30.627 9 24 9c-6.296 0-11.46 4.85-11.96 11.017a8.5 8.5 0 0 1 7.2 12.002C20.7 32.65 22.309 33 24 33"
                  ></path>
                  <path
                    fill="url(#SVGgjX5EcGo)"
                    fillOpacity={0.5}
                    d="M24 9c-6.29 0-11.45 4.84-11.959 11H11.5a8.5 8.5 0 0 0 0 17h25a8.5 8.5 0 0 0 0-17h-.541C35.45 13.84 30.29 9 24 9"
                  ></path>
                  <defs>
                    <linearGradient
                      id="SVG3hu2RdmB"
                      x1={4.5}
                      x2={22.079}
                      y1={14.25}
                      y2={41.645}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0fafff"></stop>
                      <stop offset={1} stopColor="#367af2"></stop>
                    </linearGradient>
                    <linearGradient
                      id="SVGcOlLPecK"
                      x1={3}
                      x2={14.46}
                      y1={22.912}
                      y2={33.055}
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
                      id="SVGwGonHcZM"
                      x1={16.193}
                      x2={19.363}
                      y1={10.35}
                      y2={26.899}
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
                      id="SVGN8BPNKNb"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientTransform="rotate(-22.883 77.27 -17.737)scale(14.6589 13.0847)"
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
                      id="SVGgjX5EcGo"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientTransform="matrix(16.18734 31.02285 -230.48087 120.26209 22.25 7.25)"
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
                {t("cloudBackupAndRecovery.managed.cards.1.title")}
              </h3>
              <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 text-left space-y-2">
                <li>{t("cloudBackupAndRecovery.managed.cards.1.items.0")}</li>
                <li>{t("cloudBackupAndRecovery.managed.cards.1.items.1")}</li>
                <li>{t("cloudBackupAndRecovery.managed.cards.1.items.2")}</li>
              </ul>
            </div>
            {/* Managed Support Card */}
            <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 p-10 rounded-3xl shadow-xl border-2 border-blue-200 dark:border-blue-800 flex flex-col items-center group hover:scale-105 transition-all">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-14 h-14 bg-green-500/20 dark:bg-green-900/30 rounded-full blur-xl"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 16 16"
              >
                <g fill="none">
                  <path
                    fill="url(#SVGiiWppNsS)"
                    d="M7.647 2.146a.5.5 0 0 1 .708 0C9.595 3.39 10.969 4 12.5 4a.5.5 0 0 1 .5.5v3.001c0 3.219-1.641 5.407-4.842 6.473a.5.5 0 0 1-.316 0C4.642 12.908 3 10.72 3 7.501V4.5a.5.5 0 0 1 .5-.5c1.53 0 2.904-.611 4.147-1.854"
                  ></path>
                  <defs>
                    <radialGradient
                      id="SVGiiWppNsS"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientTransform="matrix(15.35727 23.24988 -19.97817 13.1962 -.929 -4.75)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={0.338} stopColor="#0fafff"></stop>
                      <stop offset={0.529} stopColor="#367af2"></stop>
                      <stop offset={0.682} stopColor="#5750e2"></stop>
                      <stop offset={0.861} stopColor="#cc23d1"></stop>
                    </radialGradient>
                  </defs>
                </g>
              </svg>
              <h3 className="text-2xl font-bold mb-3 text-green-700 dark:text-green-400">
                {t("cloudBackupAndRecovery.managed.cards.2.title")}
              </h3>
              <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 text-left space-y-2">
                <li>{t("cloudBackupAndRecovery.managed.cards.2.items.0")}</li>
                <li>{t("cloudBackupAndRecovery.managed.cards.2.items.1")}</li>
                <li>{t("cloudBackupAndRecovery.managed.cards.2.items.2")}</li>
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
                width={40}
                height={40}
                viewBox="0 0 16 16"
              >
                <path
                  fill="oklch(49.6% 0.265 301.924)"
                  d="M4.03 5.507a4 4 0 0 1 7.887-.323A5.5 5.5 0 0 0 5.207 12H4.25a3.25 3.25 0 0 1-.22-6.493M15 10.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4.854-2.353l-2 2a.5.5 0 0 0 .708.707L10 9.707V12.5a.5.5 0 0 0 1 0V9.707l1.146 1.147a.5.5 0 0 0 .708-.708l-2-2A.5.5 0 0 0 10.503 8h-.006a.5.5 0 0 0-.348.144z"
                ></path>
              </svg>
              {t("cloudBackupAndRecovery.awareness.title")}
            </h2>
            {/* Horizontal Stepper Layout using array and map */}
            {(() => {
              const { t } = useTranslation();
              const steps = [
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="oklch(48.8% 0.243 264.376)"
                        d="M4.03 5.507a4 4 0 0 1 7.887-.323A5.5 5.5 0 0 0 5.207 12H4.25a3.25 3.25 0 0 1-.22-6.493M15 10.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4.854-2.353l-2 2a.5.5 0 0 0 .708.707L10 9.707V12.5a.5.5 0 0 0 1 0V9.707l1.146 1.147a.5.5 0 0 0 .708-.708l-2-2A.5.5 0 0 0 10.503 8h-.006a.5.5 0 0 0-.348.144z"
                      ></path>
                    </svg>
                  ),
                  alt: t("cloudBackupAndRecovery.awareness.steps.0.alt"),
                  bg: "bg-blue-100 dark:bg-blue-900",
                  title: t("cloudBackupAndRecovery.awareness.steps.0.title"),
                  titleClass: "text-blue-700 dark:text-blue-300",
                  items: [
                    t("cloudBackupAndRecovery.awareness.steps.0.items.0"),
                    t("cloudBackupAndRecovery.awareness.steps.0.items.1"),
                    t("cloudBackupAndRecovery.awareness.steps.0.items.2"),
                  ],
                  connector: "bg-blue-200 dark:bg-blue-900",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="oklch(49.6% 0.265 301.924)"
                        d="M19 24h4v4h-4zm7 0h4v4h-4zm-7-7h4v4h-4zm7 0h4v4h-4z"
                      ></path>
                      <path
                        fill="oklch(49.6% 0.265 301.924)"
                        d="M17 24H4V10h24v5h2v-5a2 2 0 0 0-2-2h-6V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h13ZM12 4h8v4h-8Z"
                      ></path>
                    </svg>
                  ),
                  alt: t("cloudBackupAndRecovery.awareness.steps.1.alt"),
                  bg: "bg-purple-100 dark:bg-purple-900",
                  title: t("cloudBackupAndRecovery.awareness.steps.1.title"),
                  titleClass: "text-purple-700 dark:text-purple-300",
                  items: [
                    t("cloudBackupAndRecovery.awareness.steps.1.items.0"),
                    t("cloudBackupAndRecovery.awareness.steps.1.items.1"),
                    t("cloudBackupAndRecovery.awareness.steps.1.items.2"),
                  ],
                  connector: "bg-purple-200 dark:bg-purple-900",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      viewBox="0 0 2048 2048"
                    >
                      <path
                        fill="oklch(52.7% 0.154 150.069)"
                        d="M1168 946q38 15 74 33t70 41q-22 24-40 50t-33 56q-77-50-164-76t-179-26q-88 0-170 23t-153 64t-129 100t-100 130t-65 153t-23 170H128q0-120 35-231t101-205t156-167t204-115q-113-74-176-186t-64-248q0-106 40-199t109-163T696 40T896 0t199 40t163 109t110 163t40 200q0 66-16 129t-48 119t-75 103t-101 83M512 512q0 80 30 149t82 122t122 83t150 30q79 0 149-30t122-82t83-122t30-150q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149m1472 832q0 52-16 101t-48 91v512l-256-128l-256 128v-512q-31-42-47-91t-17-101q0-66 25-124t68-101t102-69t125-26t124 25t101 69t69 102t26 124m-320-192q-40 0-75 15t-61 41t-41 61t-15 75t15 75t41 61t61 41t75 15t75-15t61-41t41-61t15-75t-15-75t-41-61t-61-41t-75-15m128 689v-204q-60 27-128 27t-128-27v204q32-16 64-31t64-33q32 17 64 32t64 32"
                      ></path>
                    </svg>
                  ),
                  alt: t("cloudBackupAndRecovery.awareness.steps.2.alt"),
                  bg: "bg-green-100 dark:bg-green-900",
                  title: t("cloudBackupAndRecovery.awareness.steps.2.title"),
                  titleClass: "text-green-700 dark:text-green-400",
                  items: [
                    t("cloudBackupAndRecovery.awareness.steps.2.items.0"),
                    t("cloudBackupAndRecovery.awareness.steps.2.items.1"),
                    t("cloudBackupAndRecovery.awareness.steps.2.items.2"),
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
                        {step.items.map((item, i) => (
                          <li key={i}>{item}</li>
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
              {t("cloudBackupAndRecovery.cta.title")}
            </h2>
            <p className="text-lg text-white/80 dark:text-white/70 mb-8">
              {t("cloudBackupAndRecovery.cta.subtitle")}
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-blue-600 dark:bg-blue-400 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all text-lg"
            >
              {t("cloudBackupAndRecovery.cta.button")}
            </Link>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  );
};

export default CloudBackupAndRecovery;
