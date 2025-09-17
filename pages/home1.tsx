import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import {
  Cloud,
  HouseHeart,
  Lightbulb,
  Rocket,
  Shield,
  ShieldCheck,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

type Props = {};

const testimonialsData = [
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    textKey: "home1.testimonials.0.text",
    nameKey: "home1.testimonials.0.name",
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    textKey: "home1.testimonials.1.text",
    nameKey: "home1.testimonials.1.name",
  },
  {
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    textKey: "home1.testimonials.2.text",
    nameKey: "home1.testimonials.2.name",
  },
  {
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    textKey: "home1.testimonials.3.text",
    nameKey: "home1.testimonials.3.name",
  },
  {
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    textKey: "home1.testimonials.4.text",
    nameKey: "home1.testimonials.4.name",
  },
];

const Home1 = (props: Props) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 8500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <title>{t("home1.title")}</title>
        <meta name="description" content={t("home1.metaDescription")} />
      </Head>
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen caret-transparent">
        <SiteHeader />
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-900 dark:to-purple-900 overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 dark:opacity-30"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/your-background-video.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg text-center">
              {t("home1.hero.title")}
            </h1>
            <p className="text-lg md:text-2xl text-white/80 mb-8 max-w-2xl text-center">
              {t("home1.hero.subtitle")}
            </p>
          </div>
        </section>

        {/* Hero Feature Section - Reference Style */}
        <section className="py-16 px-4 bg-[#eaf2f7] dark:bg-gray-900">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Left: Overlapping Images & Stat Cards */}
            <div className="flex-1 flex justify-center items-center relative min-h-[380px]">
              {/* Main Image */}
              <div className="relative z-10">
                <Image
                  src="https://i.pinimg.com/736x/f1/37/b1/f137b1914b1b9358e9ff9c0a76b852f3.jpg"
                  alt={t("home1.featureSection.mainImageAlt")}
                  width={540}
                  height={460}
                  className="rounded-2xl shadow-2xl border-4 border-blue-200 dark:border-blue-800 object-cover"
                />
              </div>
              {/* Overlapping Circle Image */}
              <div className="absolute left-0 bottom-0 z-20">
                <Image
                  src="/feature-team.png"
                  alt={t("home1.featureSection.teamImageAlt")}
                  width={180}
                  height={180}
                  className="rounded-full border-4 border-white shadow-xl object-cover"
                />
              </div>
              {/* Stat Card 1 */}
              <div className="absolute -top-8 -left-8 z-30">
                <div className="flex items-center gap-3 bg-white rounded-2xl shadow-lg px-6 py-4 border-2 border-pink-200">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <ShieldCheck className="w-7 h-7 text-pink-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {t("home1.featureSection.stat1.value")}
                    </div>
                    <div className="text-xs text-gray-500">
                      {t("home1.featureSection.stat1.label")}
                    </div>
                  </div>
                </div>
              </div>
              {/* Stat Card 2 */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-30">
                <div className="flex items-center gap-3 bg-white rounded-2xl shadow-lg px-6 py-4 border-2 border-green-200">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Shield className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-gray-900">
                      {t("home1.featureSection.stat2.value")}
                    </div>
                    <div className="text-xs text-gray-500">
                      {t("home1.featureSection.stat2.label")}
                    </div>
                  </div>
                </div>
              </div>
              {/* Stat Card 3 */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-30">
                <div className="flex items-center gap-3 bg-white rounded-2xl shadow-lg px-6 py-4 border-2 border-purple-200">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Lightbulb className="w-7 h-7 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {t("home1.featureSection.stat3.value")}
                    </div>
                    <div className="text-xs text-gray-500">
                      {t("home1.featureSection.stat3.label")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Headline, Description, Features, CTA */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight text-left">
                {t("home1.featureSection.headline")}
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 mb-6 max-w-lg text-left">
                {t("home1.featureSection.description")}
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center gap-2 text-blue-700 font-semibold text-sm">
                  <span className=" w-4 h-4 rounded-full bg-blue-100 mr-2 flex items-center justify-center">
                    <ShieldCheck className="w-3 h-3 text-blue-600" />
                  </span>
                  {t("home1.featureSection.features.0")}
                </li>
                <li className="flex items-center gap-2 text-blue-700 font-semibold text-sm">
                  <span className=" w-4 h-4 rounded-full bg-blue-100 mr-2 flex items-center justify-center">
                    <Shield className="w-3 h-3 text-blue-600" />
                  </span>
                  {t("home1.featureSection.features.1")}
                </li>
                <li className="flex items-center gap-2 text-blue-700 font-semibold text-sm">
                  <span className=" w-4 h-4 rounded-full bg-blue-100 mr-2 flex items-center justify-center">
                    <Lightbulb className="w-3 h-3 text-blue-600" />
                  </span>
                  {t("home1.featureSection.features.2")}
                </li>
                <li className="flex items-center gap-2 text-blue-700 font-semibold text-sm">
                  <span className=" w-4 h-4 rounded-full bg-blue-100 mr-2 flex items-center justify-center">
                    <Rocket className="w-3 h-3 text-blue-600" />
                  </span>
                  {t("home1.featureSection.features.3")}
                </li>
              </ul>
              <a
                href="/about-us"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all text-base"
              >
                {t("home1.featureSection.cta")}
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-10 text-center text-blue-600 dark:text-blue-400 tracking-tight">
            {t("home1.servicesSection.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-nowrap">
            {/* IT Consulting */}
            <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 p-8 rounded-2xl shadow-lg hover:scale-105 transition group overflow-hidden">
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition">
                <Rocket className="w-16 h-16 text-blue-500 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                <span className="inline-block bg-blue-600 dark:bg-blue-400 text-white rounded-full p-2 mr-2">
                  <Rocket className="w-6 h-6" />
                </span>
                {t("home1.servicesSection.cards.0.title")}
              </h3>
              <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>{t("home1.servicesSection.cards.0.items.0")}</li>
                <li>{t("home1.servicesSection.cards.0.items.1")}</li>
                <li>{t("home1.servicesSection.cards.0.items.2")}</li>
                <li>{t("home1.servicesSection.cards.0.items.3")}</li>
              </ul>
            </div>
            {/* Cybersecurity */}
            <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-950 dark:to-blue-950 p-8 rounded-2xl shadow-lg hover:scale-105 transition group overflow-hidden">
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition">
                <Shield className="w-16 h-16 text-purple-500 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                <span className="inline-block bg-purple-600 dark:bg-purple-400 text-white rounded-full p-2 mr-2">
                  <Shield className="w-6 h-6" />
                </span>
                {t("home1.servicesSection.cards.1.title")}
              </h3>
              <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>{t("home1.servicesSection.cards.1.items.0")}</li>
                <li>{t("home1.servicesSection.cards.1.items.1")}</li>
                <li>{t("home1.servicesSection.cards.1.items.2")}</li>
                <li>{t("home1.servicesSection.cards.1.items.3")}</li>
              </ul>
            </div>
            {/* Cloud Services */}
            <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 p-8 rounded-2xl shadow-lg hover:scale-105 transition group overflow-hidden">
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition">
                <Cloud className="w-16 h-16 text-blue-500 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                <span className="inline-block bg-blue-600 dark:bg-blue-400 text-white rounded-full p-2 mr-2">
                  <Cloud className="w-6 h-6" />
                </span>
                {t("home1.servicesSection.cards.2.title")}
              </h3>
              <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>{t("home1.servicesSection.cards.2.items.0")}</li>
                <li>{t("home1.servicesSection.cards.2.items.1")}</li>
                <li>{t("home1.servicesSection.cards.2.items.2")}</li>
                <li>{t("home1.servicesSection.cards.2.items.3")}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Enhanced Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Left: Content */}
            <div className="flex-1">
              <h2 className="text-4xl font-extrabold mb-6 md:mb-10 text-left md:text-left text-blue-700 dark:text-blue-300 tracking-tight">
                {t("home1.whyChooseUsSection.title")}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl text-left">
                {t("home1.whyChooseUsSection.description")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded-full">
                    <ShieldCheck className="w-7 h-7 text-blue-600 dark:text-blue-300" />
                  </div>
                  <span className="font-semibold text-blue-700 dark:text-blue-300">
                    {t("home1.whyChooseUsSection.cards.0")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 dark:bg-purple-800 p-3 rounded-full">
                    <Lightbulb className="w-7 h-7 text-purple-600 dark:text-purple-300" />
                  </div>
                  <span className="font-semibold text-purple-700 dark:text-purple-300">
                    {t("home1.whyChooseUsSection.cards.1")}
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-2">
                  <div className="bg-white dark:bg-gray-900 p-2 rounded-full border border-gray-200 dark:border-gray-700">
                    <Shield className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {t("home1.whyChooseUsSection.expertIT")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-white dark:bg-gray-900 p-2 rounded-full border border-gray-200 dark:border-gray-700">
                    <HouseHeart className="w-5 h-5 text-purple-600 dark:text-purple-300" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {t("home1.whyChooseUsSection.callUs")}
                  </span>
                </div>
              </div>
            </div>
            {/* Right: Themed Image */}
            <div className="flex-1 flex justify-center items-center">
              <div className="relative">
                <div className="absolute -top-8 -right-8 w-56 h-56 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-2xl opacity-40"></div>
                <Image
                  src="https://i.pinimg.com/1200x/10/03/24/10032454d5eafe518d7a38a897612130.jpg"
                  alt={t("home1.whyChooseUsSection.imageAlt")}
                  width={340}
                  height={420}
                  className="relative z-10 rounded-2xl shadow-2xl border-4 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-900"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Insights & Resources Section */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-12 text-center text-blue-700 dark:text-blue-300 tracking-tight">
            {t("home1.insightsSection.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl hover:scale-105 transition group flex flex-col items-start">
              <span className="absolute top-6 right-6 bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-bold">
                {t("home1.insightsSection.cards.0.badge")}
              </span>
              <div className="mb-4">
                <ShieldCheck className="w-10 h-10 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-700 dark:text-blue-300">
                {t("home1.insightsSection.cards.0.title")}
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                {t("home1.insightsSection.cards.0.excerpt")}
              </p>
            </div>
            {/* Card 2 */}
            <div className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl hover:scale-105 transition group flex flex-col items-start">
              <span className="absolute top-6 right-6 bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-bold">
                {t("home1.insightsSection.cards.1.badge")}
              </span>
              <div className="mb-4">
                <Cloud className="w-10 h-10 text-purple-600 dark:text-purple-300" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-purple-700 dark:text-purple-300">
                {t("home1.insightsSection.cards.1.title")}
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                {t("home1.insightsSection.cards.1.excerpt")}
              </p>
            </div>
            {/* Card 3 */}
            <div className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl hover:scale-105 transition group flex flex-col items-start">
              <span className="absolute top-6 right-6 bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 px-3 py-1 rounded-full text-xs font-bold">
                {t("home1.insightsSection.cards.2.badge")}
              </span>
              <div className="mb-4">
                <Rocket className="w-10 h-10 text-green-600 dark:text-green-300" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-green-700 dark:text-green-300">
                {t("home1.insightsSection.cards.2.title")}
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                {t("home1.insightsSection.cards.2.excerpt")}
              </p>
            </div>
          </div>
        </section>

        {/* Technology Partners Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-100 dark:from-purple-950 dark:to-blue-950">
          <h2 className="text-4xl font-extrabold mb-6 text-center text-purple-700 dark:text-purple-300 tracking-tight">
            {t("home1.partnersSection.title")}
          </h2>
          <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            {t("home1.partnersSection.description")}
          </p>
          <div className="relative">
            <div className="flex overflow-x-auto no-scrollbar space-x-8 px-2 md:px-10 py-4 max-w-6xl mx-auto">
              {/* Partner Card 1 */}
              <div className="min-w-[220px] flex-shrink-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border border-purple-200 dark:border-purple-800 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center py-8 px-6 group">
                <img
                  src="/logo-stackly.png"
                  alt="Stackly"
                  className="w-16 h-16 mb-3"
                />
                <span className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-1 tracking-wide">
                  {t("home1.partnersSection.cards.0.name")}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {t("home1.partnersSection.cards.0.category")}
                </span>
              </div>
              {/* Partner Card 2 */}
              <div className="min-w-[220px] flex-shrink-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border border-purple-200 dark:border-purple-800 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center py-8 px-6 group">
                <img
                  src="/next.svg"
                  alt="Next.js"
                  className="w-16 h-16 mb-3 "
                />
                <span className="text-lg font-bold text-purple-700 dark:text-purple-300 mb-1 tracking-wide">
                  {t("home1.partnersSection.cards.1.name")}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {t("home1.partnersSection.cards.1.category")}
                </span>
              </div>
              {/* Partner Card 3 */}
              <div className="min-w-[220px] flex-shrink-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border border-blue-200 dark:border-blue-800 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center py-8 px-6 group">
                {/* Vercel */}
                <img
                  src="/vercel.svg"
                  alt="Vercel"
                  className="w-16 h-16 mb-3"
                />
                <span className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-1 tracking-wide">
                  {t("home1.partnersSection.cards.2.name")}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {t("home1.partnersSection.cards.2.category")}
                </span>
              </div>
              {/* Partner Card 4 */}
              <div className="min-w-[220px] flex-shrink-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border border-purple-200 dark:border-purple-800 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center py-8 px-6 group">
                {/* Azure */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={100}
                  height={100}
                  viewBox="0 0 128 128"
                >
                  <defs>
                    <linearGradient
                      id="SVGII9YMb3P"
                      x1={60.919}
                      x2={18.667}
                      y1={9.602}
                      y2={134.423}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#114a8b"></stop>
                      <stop offset={1} stopColor="#0669bc"></stop>
                    </linearGradient>
                    <linearGradient
                      id="SVG36ippb4k"
                      x1={74.117}
                      x2={64.344}
                      y1={67.772}
                      y2={71.077}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopOpacity={0.3}></stop>
                      <stop offset={0.071} stopOpacity={0.2}></stop>
                      <stop offset={0.321} stopOpacity={0.1}></stop>
                      <stop offset={0.623} stopOpacity={0.05}></stop>
                      <stop offset={1} stopOpacity={0}></stop>
                    </linearGradient>
                    <linearGradient
                      id="SVGj7H7V5mS"
                      x1={68.742}
                      x2={115.122}
                      y1={5.961}
                      y2={129.525}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3ccbf4"></stop>
                      <stop offset={1} stopColor="#2892df"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    fill="#0089d6"
                    d="M90.717 76.293c-2.73-.175-4.317-1.728-4.737-4.633c-.112-.773-.112-.793-.124-5.81l-.011-4.856h2.416l.009 4.697c.009 4.233.014 4.73.055 5.027c.164 1.209.491 2.022 1.049 2.605c.446.467.968.74 1.691.885c.34.069 1.311.069 1.622 0a3.6 3.6 0 0 0 1.838-.996c.591-.59 1.028-1.427 1.24-2.373l.07-.319l.008-4.736l.008-4.738h2.467V75.94h-2.441v-1.182c0-.802-.009-1.178-.028-1.172a1 1 0 0 0-.139.213a4.96 4.96 0 0 1-1.889 1.889c-.92.505-1.843.685-3.104.605m27.7-.012a6.4 6.4 0 0 1-2.807-.916c-1.748-1.08-2.782-2.86-3.084-5.308c-.105-.848-.118-1.986-.03-2.706c.195-1.61.828-3.19 1.73-4.317c.23-.29.755-.813 1.044-1.044a6.5 6.5 0 0 1 2.666-1.271c.566-.123 1.562-.181 2.163-.126c1.51.14 2.892.85 3.832 1.967c.956 1.135 1.48 2.721 1.548 4.674a26 26 0 0 1 .005 1.193l-.013.636l-5.286.006l-5.286.007v.236c0 .717.174 1.534.476 2.23c.26.599.709 1.253 1.075 1.57a4.73 4.73 0 0 0 2.68 1.132c.374.035 1.326-.002 1.751-.067c1.215-.187 2.37-.663 3.301-1.36c.11-.083.215-.16.234-.171c.027-.017.034.197.033 1.1v1.12l-.251.155a8.8 8.8 0 0 1-3.542 1.226c-.382.047-1.783.068-2.24.034zm4.6-9.455c0-1.201-.507-2.536-1.224-3.223a3.37 3.37 0 0 0-1.867-.904c-.348-.054-1.081-.033-1.448.04a3.8 3.8 0 0 0-1.977 1.05a5.4 5.4 0 0 0-1.309 2.092c-.1.29-.216.765-.253 1.029l-.017.126h8.095zm-71.705 9.08l3.989-10.467l3.978-10.434h2.556l.106.27c.324.831 7.963 20.642 7.963 20.652c0 .007-.612.012-1.36.012h-1.36l-1.1-2.928l-1.102-2.928h-8.866l-.038.1c-.021.054-.492 1.372-1.046 2.927l-1.006 2.829h-1.363c-1.078 0-1.36-.006-1.351-.033m12.861-8.057c0-.005-.74-2.011-1.646-4.46c-1.694-4.578-1.789-4.854-1.923-5.589c-.063-.344-.095-.354-.132-.04a7 7 0 0 1-.23 1.007c-.045.139-.808 2.23-1.696 4.648a732 732 0 0 0-1.615 4.42c0 .012 1.63.022 3.621.022s3.621-.004 3.621-.008m6.553 7.71v-.382l4.417-6.065l4.417-6.065l-4-.013l-3.998-.013l-.007-1.014l-.007-1.013h11.568v.684l-4.417 6.098c-2.43 3.354-4.418 6.104-4.418 6.11s1.964.013 4.364.013h4.365v2.04H70.726zm32.411.363c-.01-.01-.017-3.373-.017-7.473v-7.456h2.414v1.537c0 .846.01 1.537.022 1.537c.013 0 .072-.138.131-.307a5.3 5.3 0 0 1 1.349-2.075a3.5 3.5 0 0 1 1.907-.947c.207-.033.382-.04.796-.029c.52.014.791.052 1.107.155l.1.032V63.4l-.285-.142a3.04 3.04 0 0 0-1.599-.32c-.389.02-.644.07-.955.186a3.02 3.02 0 0 0-1.521 1.241a7.2 7.2 0 0 0-1.01 2.9c-.02.177-.031 1.622-.036 4.469l-.007 4.207h-1.189c-.654 0-1.197-.008-1.207-.018z"
                  ></path>
                  <path
                    fill="url(#SVGII9YMb3P)"
                    d="M46.09.002h40.685L44.541 125.137a6.485 6.485 0 0 1-6.146 4.413H6.733a6.48 6.48 0 0 1-5.262-2.699a6.47 6.47 0 0 1-.876-5.848L39.944 4.414A6.49 6.49 0 0 1 46.09 0z"
                    transform="translate(2.435 44.576)scale(.29986)"
                  ></path>
                  <path
                    fill="#0078d4"
                    d="M33.983 69.745H14.638a.895.895 0 0 0-.612 1.55l12.431 11.603a1.96 1.96 0 0 0 1.334.525h10.954z"
                  ></path>
                  <path
                    fill="url(#SVG36ippb4k)"
                    d="M46.09.002A6.43 6.43 0 0 0 39.93 4.5L.644 120.897a6.47 6.47 0 0 0 6.106 8.653h32.48a6.94 6.94 0 0 0 5.328-4.531l7.834-23.089l27.985 26.101a6.62 6.62 0 0 0 4.165 1.519h36.396l-15.963-45.616l-46.533.011L86.922.002z"
                    transform="translate(2.435 44.576)scale(.29986)"
                  ></path>
                  <path
                    fill="url(#SVGj7H7V5mS)"
                    d="M98.055 4.408A6.48 6.48 0 0 0 91.917.002H46.575a6.48 6.48 0 0 1 6.137 4.406l39.35 116.594a6.476 6.476 0 0 1-6.137 8.55h45.344a6.48 6.48 0 0 0 6.136-8.55z"
                    transform="translate(2.435 44.576)scale(.29986)"
                  ></path>
                </svg>
                <span className="text-lg font-bold text-purple-700 dark:text-purple-300 mb-1 tracking-wide">
                  {t("home1.partnersSection.cards.0.name")}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {t("home1.partnersSection.cards.0.category")}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 dark:bg-gray-900 py-16">
          <div className="container mx-auto px-4">
            <div className="w-full">
              <h2 className="text-4xl font-extrabold mb-10 text-center text-blue-700 dark:text-blue-300 tracking-tight">
                {t("home1.testimonials.title")}
              </h2>
              <div className="overflow-hidden">
                <div
                  className="flex justify-center items-center transition-transform duration-500 ease-in-out"
                  style={{ width: "100%", overflow: "hidden" }}
                >
                  {/* Show previous, active, and next testimonials */}
                  {(() => {
                    const prevIndex =
                      (activeIndex - 1 + testimonialsData.length) %
                      testimonialsData.length;
                    const nextIndex =
                      (activeIndex + 1) % testimonialsData.length;
                    return [prevIndex, activeIndex, nextIndex].map(
                      (indexToShow, idx) => {
                        let cardClass =
                          "flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-5 transition-all duration-300 ";
                        if (indexToShow === activeIndex) {
                          cardClass += "opacity-100 scale-105 z-10";
                        } else {
                          cardClass += "opacity-40 scale-90 z-0";
                        }
                        const testimonial = testimonialsData[indexToShow];
                        return (
                          <div key={indexToShow} className={cardClass}>
                            <div
                              className={`bg-white dark:bg-gray-800 p-5 rounded-md text-center border border-gray-200 dark:border-gray-700 shadow-xl ${
                                indexToShow === activeIndex
                                  ? "ring-2 ring-blue-500"
                                  : ""
                              }`}
                            >
                              <Image
                                className={`w-20 h-20 mx-auto mb-4 rounded-full ${
                                  indexToShow === activeIndex
                                    ? "ring-4 ring-blue-500"
                                    : ""
                                }`}
                                src={testimonial.image}
                                width={80}
                                height={80}
                                alt={`Testimonial from ${t(testimonial.nameKey)}`}
                              />
                              <p
                                className={`text-base leading-relaxed font-light mb-4 ${
                                  indexToShow === activeIndex
                                    ? "text-blue-700 dark:text-blue-300"
                                    : "text-gray-500 dark:text-gray-400"
                                }`}
                              >
                                {t(testimonial.textKey)}
                              </p>
                            </div>
                            <div
                              className={`testimonial-name -mt-4 mx-auto w-auto px-8 py-2 rounded-xl text-center shadow-lg ${
                                indexToShow === activeIndex
                                  ? "bg-blue-500 text-white font-bold"
                                  : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                              }`}
                            >
                              {t(testimonial.nameKey)}
                            </div>
                          </div>
                        );
                      },
                    );
                  })()}
                </div>
              </div>
              <div className="flex justify-center mt-6 space-x-2">
                {testimonialsData.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "bg-blue-500 w-6" : "bg-gray-400"
                    }`}
                    onClick={() => setActiveIndex(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  );
};

export default Home1;
