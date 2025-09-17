import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Head from "next/head";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const team = [
  {
    nameKey: "about.team.0.name",
    roleKey: "about.team.0.role",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    nameKey: "about.team.1.name",
    roleKey: "about.team.1.role",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    nameKey: "about.team.2.name",
    roleKey: "about.team.2.role",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    nameKey: "about.team.3.name",
    roleKey: "about.team.3.role",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

const achievements = [
  {
    titleKey: "about.achievements.0.title",
    descKey: "about.achievements.0.desc",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        viewBox="0 0 24 24"
      >
        <path
          fill="#38bdf8"
          fillRule="evenodd"
          d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M9 4h2v5h9v2h-9v9H9v-9H4V9h5z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    titleKey: "about.achievements.1.title",
    descKey: "about.achievements.1.desc",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        viewBox="0 0 16 16"
      >
        <path
          fill="#f97316"
          d="M8 2.57a.5.5 0 0 1 .489.399l.389 1.89l1.92-.214l.087-.002a.5.5 0 0 1 .287.884l-.072.05l-1.68.953l.797 1.76l.028.083a.5.5 0 0 1-.19.528a.5.5 0 0 1-.56.017l-.07-.052l-1.43-1.3l-1.43 1.3a.5.5 0 0 1-.792-.576l.796-1.76l-1.68-.954a.501.501 0 0 1 .302-.932l1.92.214l.39-1.89l.025-.084a.5.5 0 0 1 .465-.315z"
        ></path>
        <path
          fill="#f97316"
          fillRule="evenodd"
          d="M8 0a6.005 6.005 0 0 1 5.127 9.12l1.7 2.55a1 1 0 0 1-.84 1.554l-2.34-.02l-.88 2.17a1.002 1.002 0 0 1-1.76.18l-1.01-1.51l-1.01 1.52a1 1 0 0 1-1.758-.18l-.88-2.17l-2.34.02a.999.999 0 0 1-.84-1.554l1.7-2.56A6.005 6.005 0 0 1 8 .01zM2 12.2l2.68-.023a.5.5 0 0 1 .469.311l1.01 2.49l2-3.01q-.08.004-.161.005c-1.79 0-3.4-.787-4.5-2.03l-1.5 2.26zm10.5-2.26a5.96 5.96 0 0 1-3 1.84l-.893 1.33l1.24 1.85l1.01-2.49a.5.5 0 0 1 .468-.312l2.68.024l-1.5-2.25zM8 .97c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    titleKey: "about.achievements.2.title",
    descKey: "about.achievements.2.desc",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        viewBox="0 0 1024 1024"
      >
        <path
          fill="#8b5cf6"
          d="M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8c-1.1-1.3-2.1-2.5-3.2-3.7c-.4-.5-.8-.9-1.2-1.4l-4.1-4.7l-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1l-4.8-4.8l-.3-.3c-1.5-1.5-3-2.9-4.5-4.3c-.5-.5-1-1-1.6-1.5c-1-1-2-1.9-3-2.8c-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1c-1 .9-2 1.9-3 2.9c-.5.5-1 1-1.6 1.5c-1.5 1.4-3 2.9-4.5 4.3l-.3.3l-4.8 4.8l-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7c-.4.5-.8.9-1.2 1.4c-1.1 1.2-2.1 2.5-3.2 3.7c-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2c1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6c80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0 0 10-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5c0-.1.1-.1.1-.2c1.4-1.5 2.8-3.1 4.1-4.7c.4-.5.8-.9 1.2-1.4a99 99 0 0 0 3.3-3.7m4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444 444 0 0 0-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3M887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6c29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 0 1 887 484M658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.7 394.7 0 0 1-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4c3.7 1.4 7.4 2.9 11 4.4m-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 0 1 115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8c-17.4 32.4-37.8 58.3-59 75.1m59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 0 1 540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4c21.2 16.7 41.6 42.6 59 75M540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445 445 0 0 0 540 640.9m0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4c-21.2-16.7-41.7-42.7-59.1-75.1c-11-20.6-20.7-43.3-29-67.8c37.2-14.6 75.9-23.3 115.8-26.1m0-370a389.1 389.1 0 0 1-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8c17.4-32.4 37.8-58.4 59.1-75.1c9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4c-23.4 31.3-43.5 70.4-59.2 115.4c-21-12-40.9-26-59.4-41.8c31.8-29.2 67.9-52.4 107.6-69.2M165.5 365.7c13.8-32.6 32-62.8 54.2-90.2c24.9 21.5 52.2 40.3 81.5 55.9c-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3M137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444 444 0 0 0-81.5 55.9A373.86 373.86 0 0 1 137 540m228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2c18.5-15.8 38.4-29.7 59.4-41.8c15.7 45 35.8 84.1 59.2 115.4c-3.7-1.4-7.4-2.9-11-4.4m292.6 0c-3.7 1.5-7.3 3-11 4.4c23.4-31.3 43.5-70.4 59.2-115.4c21 12 40.9 26 59.4 41.8a373.8 373.8 0 0 1-107.6 69.2"
        ></path>
      </svg>
    ),
  },
];

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("about.title")}</title>
        <meta name="description" content={t("about.metaDescription")} />
      </Head>
      <main className="bg-[#f7fafd] dark:bg-[#101624] text-gray-900 dark:text-white caret-transparent">
        <SiteHeader />
        {/* 1. Hero Section */}
        <section className="relative h-screen flex justify-center items-center flex-col bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-900 dark:to-purple-900 text-white text-center overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 dark:opacity-30"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/about-bg-video.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-5xl font-extrabold mb-4">
              {t("about.hero.title")}
            </h1>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              {t("about.hero.subtitle")}
            </p>
          </div>
        </section>

        {/* 2. Company Story - Timeline & Modern Card */}
        <section className="py-20 px-4 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* Timeline */}
            <div className="flex flex-col gap-8">
              <h2 className="text-4xl font-extrabold mb-6 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                {t("about.timeline.title")}
              </h2>
              <div className="relative pl-8">
                <div className="absolute left-3 top-0 h-full w-1 bg-blue-200 dark:bg-blue-900 rounded-full"></div>
                {[
                  {
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="#fff"
                          strokeWidth="2"
                        />
                      </svg>
                    ),
                    bg: "bg-blue-500 dark:bg-blue-700",
                    titleKey: "about.timeline.0.title",
                    titleClass: "text-blue-700 dark:text-blue-300",
                    descKey: "about.timeline.0.desc",
                    mb: "mb-10",
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={100}
                        height={100}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#fff"
                          d="m20.87 17.25l-2.71-4.68A6.9 6.9 0 0 0 19 9.25a7 7 0 0 0-14 0a6.9 6.9 0 0 0 .84 3.32l-2.71 4.68a1 1 0 0 0 .87 1.5h2.87l1.46 2.46a1 1 0 0 0 .18.22a1 1 0 0 0 .69.28h.14a1 1 0 0 0 .73-.49L12 17.9l1.93 3.35a1 1 0 0 0 .73.48h.14a1 1 0 0 0 .7-.28a.9.9 0 0 0 .17-.21l1.46-2.46H20a1 1 0 0 0 .87-.5a1 1 0 0 0 0-1.03M9.19 18.78l-.89-1.49a1 1 0 0 0-.85-.49H5.72l1.43-2.48a7 7 0 0 0 3.57 1.84ZM12 14.25a5 5 0 1 1 5-5a5 5 0 0 1-5 5m4.55 2.55a1 1 0 0 0-.85.49l-.89 1.49l-1.52-2.65a7.06 7.06 0 0 0 3.56-1.84l1.43 2.48Z"
                        ></path>
                      </svg>
                    ),
                    bg: "bg-purple-500 dark:bg-purple-700",
                    titleKey: "about.timeline.1.title",
                    titleClass: "text-purple-700 dark:text-purple-300",
                    descKey: "about.timeline.1.desc",
                    mb: "mb-10",
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={100}
                        height={100}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit={10}
                          strokeWidth={1.5}
                          d="M10 21V3m-7 7h18M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
                        ></path>
                      </svg>
                    ),
                    bg: "bg-orange-500 dark:bg-orange-700",
                    titleKey: "about.timeline.2.title",
                    titleClass: "text-orange-600 dark:text-orange-400",
                    descKey: "about.timeline.2.desc",
                    mb: "mb-10",
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={100}
                        height={100}
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" stroke="#fff" strokeWidth={1.5}>
                          <path
                            strokeLinecap="round"
                            d="M10.08 2C5.47 2.936 2 7.012 2 11.899C2 17.478 6.522 22 12.101 22c4.887 0 8.963-3.47 9.899-8.08"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18.938 18A3.8 3.8 0 0 0 20 17.603m-5.312-.262q.895.39 1.717.58m-5.55-2.973c.413.29.855.638 1.285.938M3 13.826c.322-.157.67-.338 1.063-.493M6.45 13c.562.062 1.192.223 1.906.523"
                          ></path>
                          <path d="M18 7.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0Z"></path>
                          <path d="M17.488 13.62a1.46 1.46 0 0 1-.988.38a1.46 1.46 0 0 1-.988-.38c-2.427-2.244-5.679-4.752-4.093-8.392C12.277 3.259 14.335 2 16.5 2s4.223 1.26 5.08 3.228c1.585 3.636-1.66 6.155-4.092 8.392Z"></path>
                        </g>
                      </svg>
                    ),
                    bg: "bg-green-500 dark:bg-green-700",
                    titleKey: "about.timeline.3.title",
                    titleClass: "text-green-700 dark:text-green-300",
                    descKey: "about.timeline.3.desc",
                    mb: "",
                  },
                ].map((item, idx) => (
                  <div className={`${item.mb} relative`} key={idx}>
                    <div
                      className={`absolute -left-5 top-0 w-8 h-8 ${item.bg} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      {item.icon}
                    </div>
                    <div className="ml-8">
                      <h3 className={`font-bold text-lg ${item.titleClass}`}>
                        {t(item.titleKey)}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {t(item.descKey)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Modern Image Card */}
            <div className="flex justify-center">
              <div className="relative rounded-3xl shadow-2xl overflow-hidden border-4 border-blue-100 dark:border-blue-900 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-900">
                <Image
                  src="https://i.pinimg.com/1200x/fb/bf/9d/fbbf9d982ffd71e75d4e3a79b5f83cce.jpg"
                  alt={t("about.story.imageAlt")}
                  width={400}
                  height={400}
                  className="object-cover opacity-80"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-700/80 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {t("about.story.cardTitle")}
                  </h3>
                  <p className="text-white/80 text-base">
                    {t("about.story.cardDesc")}
                  </p>
                </div>
                <span className="absolute top-4 right-4 bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-bold shadow">
                  {t("about.story.since")}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Mission & Values - Horizontal Stepper */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-10 text-purple-700 dark:text-purple-300 flex items-center justify-center gap-2">
              {t("about.mission.title")}
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {[
                {
                  icon: (
                    <span className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" stroke="#38bdf8" strokeWidth={1.5}>
                          <path
                            strokeLinecap="round"
                            d="M11 2C6.582 2 3 5.545 3 9.919c0 1.493.417 2.89 1.143 4.081"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 5h-2c-.943 0-1.414 0-1.707.293S13 6.057 13 7v2c0 .943 0 1.414.293 1.707S14.057 11 15 11h2c.943 0 1.414 0 1.707-.293S19 9.943 19 9V7c0-.943 0-1.414-.293-1.707S17.943 5 17 5m-2.5 6v2m3-2v2m-3-10v2m3-2v2M13 6.5h-2m2 3h-2m10-3h-2m2 3h-2"
                          ></path>
                          <path d="M6.383 17.098c-.092-.276-.138-.415-.133-.527a.6.6 0 0 1 .382-.53c.104-.041.25-.041.54-.041h7.656c.291 0 .436 0 .54.04a.6.6 0 0 1 .382.531c.005.112-.041.25-.133.527c-.17.511-.255.767-.386.974a2 2 0 0 1-1.2.869c-.238.059-.506.059-1.043.059H9.012c-.537 0-.806 0-1.043-.06a2 2 0 0 1-1.2-.868c-.131-.207-.216-.463-.386-.974ZM14 19l-.13.647c-.14.707-.211 1.06-.37 1.34a2 2 0 0 1-1.113.912C12.082 22 11.72 22 11 22s-1.082 0-1.387-.1a2 2 0 0 1-1.113-.913c-.159-.28-.23-.633-.37-1.34L8 19"></path>
                        </g>
                      </svg>
                    </span>
                  ),
                  titleKey: "about.mission.steps.0.title",
                  titleClass: "text-blue-700 dark:text-blue-300",
                  descKey: "about.mission.steps.0.desc",
                  connector: "bg-blue-200 dark:bg-blue-900",
                },
                {
                  icon: (
                    <span className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="none"
                          stroke="#a78bfa"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M24 43.5c3.883 0 14.68-7.263 15.658-19.893v-13.48L24 4.5L8.342 10.127v13.48C8.906 35.517 19.834 43.5 24 43.5"
                          strokeWidth={2}
                        ></path>
                        <circle
                          cx={24}
                          cy={24.044}
                          r={5.846}
                          fill="none"
                          stroke="#a78bfa"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        ></circle>
                        <path
                          fill="none"
                          stroke="#a78bfa"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m35.531 35.117l-7.179-7.18"
                          strokeWidth={2}
                        ></path>
                      </svg>
                    </span>
                  ),
                  titleKey: "about.mission.steps.1.title",
                  titleClass: "text-purple-700 dark:text-purple-300",
                  descKey: "about.mission.steps.1.desc",
                  connector: "bg-purple-200 dark:bg-purple-900",
                },
                {
                  icon: (
                    <span className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mb-4 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#fb923c"
                        height={50}
                        width={50}
                        version="1.1"
                        id="Capa_1"
                        viewBox="0 0 430.214 430.214"
                      >
                        <path d="M327.005,39.943H103.208L0,156.118l215.107,234.152l215.107-234.152L327.005,39.943z M148.882,145.943l-30.906-91h196.266  l-31.5,91H148.882z M277.55,160.943l-62.375,180.195l-61.198-180.195H277.55z M133.041,145.943H29.104l75.192-84.639  L133.041,145.943z M138.135,160.943l66.473,195.727L24.801,160.943H138.135z M293.423,160.943h111.99L225.711,356.555  L293.423,160.943z M298.615,145.943l28.739-83.023l73.756,83.023H298.615z" />
                      </svg>
                    </span>
                  ),
                  titleKey: "about.mission.steps.2.title",
                  titleClass: "text-orange-600 dark:text-orange-400",
                  descKey: "about.mission.steps.2.desc",
                  connector: "",
                },
              ].map((step, idx, arr) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center relative md:w-1/3`}
                >
                  {step.icon}
                  <h3 className={`font-bold text-xl mb-2 ${step.titleClass}`}>
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t(step.descKey)}
                  </p>
                  {idx < arr.length - 1 && (
                    <span
                      className={`hidden md:block absolute right-0 top-8 w-16 h-2 ${step.connector} rounded-full`}
                    ></span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Meet the Team */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-300 text-center">
              {t("about.team.title")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900 rounded-2xl shadow-lg p-6 flex flex-col items-center"
                >
                  <img
                    src={member.img}
                    alt={t(member.nameKey)}
                    className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-200 dark:border-blue-900"
                  />
                  <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">
                    {t(member.nameKey)}
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    {t(member.roleKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Achievements */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-purple-700 dark:text-purple-300">
              {t("about.achievements.title")}
            </h2>
            <div className="relative flex flex-col items-center mx-auto">
              <div className="absolute md:block hidden left-1/2 transform -translate-x-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-300 via-purple-300 to-orange-300 dark:from-blue-900 dark:via-purple-900 dark:to-orange-900 rounded-full z-0"></div>
              {achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className={`relative z-10 flex flex-col items-center mb-12 last:mb-0 w-full ${
                    idx % 2 === 0 ? " md:ml-0 md:mr-auto" : "md:mr-0 md:ml-auto"
                  }`}
                  style={{ maxWidth: "400px" }}
                >
                  <div
                    className={`w-15 h-15 flex items-center justify-center rounded-full shadow-lg mb-4 ${
                      idx === 0
                        ? "bg-blue-100 dark:bg-blue-900"
                        : idx === 1
                          ? "bg-orange-100 dark:bg-orange-900"
                          : "bg-purple-100 dark:bg-purple-900"
                    }`}
                    style={{
                      position: "absolute",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      top: "-20px",
                    }}
                  >
                    {ach.icon}
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 flex flex-col items-center border border-blue-100 dark:border-blue-900">
                    <h3 className="font-bold text-xl mb-2 text-blue-700 dark:text-blue-300">
                      {t(ach.titleKey)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t(ach.descKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Contact/CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-900 dark:to-purple-900 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white dark:text-blue-300 tracking-tight">
              {t("about.cta.title")}
            </h2>
            <p className="text-lg text-white/80 dark:text-white/70 mb-8">
              {t("about.cta.desc")}
            </p>
            <a
              href="/contact-us"
              className="inline-block bg-blue-600 dark:bg-blue-400 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all text-lg"
            >
              {t("about.cta.button")}
            </a>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  );
};

export default AboutUs;
