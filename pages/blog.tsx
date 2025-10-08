import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import {
  BoltIcon,
  CloudAlert,
  EyeIcon,
  ServerIcon,
  ShieldAlertIcon,
  Timer,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

type Props = {};

const blog = (props: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("blog.title")}</title>
        <meta name="description" content={t("blog.metaDescription")} />
      </Head>
      <main className="bg-[#101624] text-white min-h-screen caret-transparent">
        <SiteHeader />
        {/* Hero Section */}
        <section className="relative h-[100vh] flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-700 to-purple-800 overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{ pointerEvents: "none" }}
          >
            <source src="/blog-background-video.mp4" type="video/mp4" />
            {/* Optionally add a webm source for better browser support */}
            {/* <source src="/background-video.webm" type="video/webm" /> */}
            Your browser does not support the video tag.
          </video>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-800 opacity-70 z-10"></div>
          <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg z-20">
            {t("blog.hero.title")}
          </h1>
          <p className="text-lg max-w-xl mx-auto mb-6 text-white/80 z-20">
            {t("blog.hero.subtitle")}
          </p>
        </section>

        {/* Featured Blogs Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold mb-10 text-blue-700 dark:text-blue-300">
              {t("blog.featured.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: t("blog.featured.articles.0.title"),
                  desc: t("blog.featured.articles.0.desc"),
                  image:
                    "https://i.pinimg.com/736x/e8/6e/33/e86e33d24afe5dc58ea326ec64912130.jpg",
                  link: "/secure-your-business-network",
                },
                {
                  title: t("blog.featured.articles.1.title"),
                  desc: t("blog.featured.articles.1.desc"),
                  image:
                    "https://i.pinimg.com/736x/d1/eb/8f/d1eb8f3e2355f0483a50618f571b37c8.jpg",
                  link: "/cloud-backup",
                },
                {
                  title: t("blog.featured.articles.2.title"),
                  desc: t("blog.featured.articles.2.desc"),
                  image:
                    "https://i.pinimg.com/736x/4a/09/20/4a0920f1e8e2926dbac936225f3be230.jpg",
                  link: "/security-awareness",
                },
              ].map((blog, idx) => (
                <div
                  key={idx}
                  className="group bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl pb-8  border border-blue-100 dark:border-blue-900 backdrop-blur-lg flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-blue-400 dark:hover:shadow-blue-900"
                >
                  <Image
                    src={blog.image}
                    width={80}
                    height={80}
                    alt={blog.title}
                    className="mb-4 w-full h-50 object-cover object-top shadow-md"
                  />
                  <h3 className="font-bold text-xl mb-2 text-blue-700 dark:text-blue-300 group-hover:underline text-center ">
                    {blog.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3 text-center text-sm">
                    {blog.desc}
                  </p>
                  <Link
                    href={blog.link}
                    className="inline-block mt-2 text-sm text-purple-600 dark:text-purple-300 font-semibold"
                  >
                    <span className="inline-block mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-md hover:scale-105 transition-all cursor-pointer">
                      {t("blog.featured.readMore")}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About the Blog Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-100 to-blue-50 dark:from-purple-900 dark:to-blue-950 flex justify-center items-center">
          <div className="max-w-3xl w-full mx-auto">
            <div className="relative rounded-3xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-4 border-transparent bg-clip-padding shadow-2xl p-10 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] hover:border-gradient-to-r hover:from-purple-400 hover:to-blue-400">
              <h2 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-300 dark:to-blue-300 drop-shadow-lg">
                {t("blog.about.title")}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-2">
                {t("blog.about.description.0")}
                <span className="font-semibold text-purple-600 dark:text-purple-300">
                  {t("blog.about.description.1")}
                </span>
                ,
                <span className="font-semibold text-blue-600 dark:text-blue-300">
                  {t("blog.about.description.2")}
                </span>
                , {t("blog.about.description.3")}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 text-white text-xs font-bold shadow-md">
                  {t("blog.about.tags.0")}
                </span>
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 text-white text-xs font-bold shadow-md">
                  {t("blog.about.tags.1")}
                </span>
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold shadow-md">
                  {t("blog.about.tags.2")}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-100 to-purple-50 dark:from-blue-900 dark:to-purple-950 flex flex-col items-center">
          <div className="  w-full mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-300 dark:to-purple-300 drop-shadow-lg flex items-center justify-center gap-3">
                <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-full">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                    <path
                      fill="white"
                      d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 14h2v-2h-2v2zm0-4h2V7h-2v5z"
                    />
                  </svg>
                </span>
                {t("blog.categories.title")}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg max-w-xl mx-auto">
                {t("blog.categories.subtitle")}
              </p>
            </div>
            <div className=" pb-2">
              <div className="flex  gap-8 flex-wrap justify-center px-2">
                {[
                  {
                    name: t("blog.categories.items.0"),
                    icon: <ShieldAlertIcon color="blue" />,
                  },
                  {
                    name: t("blog.categories.items.1"),
                    icon: <CloudAlert color="blue" />,
                  },
                  {
                    name: t("blog.categories.items.2"),
                    icon: <ServerIcon color="blue" />,
                  },
                  {
                    name: t("blog.categories.items.3"),
                    icon: <EyeIcon color="blue" />,
                  },
                  {
                    name: t("blog.categories.items.4"),
                    icon: <Timer color="blue" />,
                  },
                  {
                    name: t("blog.categories.items.5"),
                    icon: <BoltIcon color="blue" />,
                  },
                ].map((cat, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg px-8 py-6 min-w-[180px] border-2 border-blue-200 dark:border-purple-700 backdrop-blur-lg hover:scale-105 transition-all cursor-pointer"
                  >
                    <span className="mb-3">{cat.icon}</span>
                    <span className="font-bold text-blue-700 dark:text-purple-300 text-base text-center">
                      {cat.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recent Comments Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold mb-4 text-purple-700 dark:text-purple-300">
              {t("blog.comments.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              {[
                {
                  name: t("blog.comments.items.0.name"),
                  comment: t("blog.comments.items.0.comment"),
                },
                {
                  name: t("blog.comments.items.1.name"),
                  comment: t("blog.comments.items.1.comment"),
                },
                {
                  name: t("blog.comments.items.2.name"),
                  comment: t("blog.comments.items.2.comment"),
                },
                {
                  name: t("blog.comments.items.3.name"),
                  comment: t("blog.comments.items.3.comment"),
                },
              ].map((cmt, idx) => {
                // Get initials from name
                const initials = cmt.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase();
                return (
                  <div
                    key={idx}
                    className="relative bg-gradient-to-br from-purple-50 to-blue-100 dark:from-purple-900 dark:to-blue-950 rounded-3xl shadow-xl p-8 border border-purple-200 dark:border-purple-800 backdrop-blur-lg flex flex-col items-center text-center hover:scale-105 transition-all"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900">
                      <span className="text-white text-2xl font-bold select-none">
                        {initials}
                      </span>
                    </div>
                    <div className="pt-10">
                      <span className="block font-extrabold text-lg mb-2 text-purple-700 dark:text-purple-300">
                        {cmt.name}
                      </span>
                      <p className="text-gray-700 dark:text-gray-300 text-base mt-2">
                        {cmt.comment}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Newsletter Signup Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-100 dark:from-purple-950 dark:to-blue-900 flex justify-center items-center">
          <div className="max-w-2xl w-full mx-auto">
            <div className="relative rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-4 border-transparent bg-clip-padding shadow-2xl p-10 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] hover:border-gradient-to-r hover:from-purple-400 hover:to-blue-400">
              <h2 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-300 dark:to-blue-300 drop-shadow-lg">
                {t("blog.newsletter.title")}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                {t("blog.newsletter.subtitle")}
              </p>
              <form className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                <input
                  type="email"
                  placeholder={t("blog.newsletter.placeholder")}
                  className="px-6 py-3 rounded-2xl border-2 border-purple-200 dark:border-blue-800 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 w-full sm:w-auto shadow-md"
                />
                <button
                  type="submit"
                  className="px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold shadow-lg hover:scale-105 transition-all"
                >
                  {t("blog.newsletter.button")}
                </button>
              </form>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
};

export default blog;
