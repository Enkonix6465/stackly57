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

type Props = {};

const blog = (props: Props) => {
  return (
    <>
      <Head>
        <title>Blog | Enkonix Theme</title>
        <meta
          name="description"
          content="Latest insights, tips, and stories from Enkonix."
        />
      </Head>
      <main className="bg-[#101624] text-white min-h-screen caret-transparent">
        <SiteHeader />
        {/* Hero Section */}
        <section className="relative h-[100vh] flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-700 to-purple-800 overflow-hidden">
          <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
            Welcome to Our Blog
          </h1>
          <p className="text-lg max-w-xl mx-auto mb-6 text-white/80">
            Explore the latest insights, tips, and stories in IT, cybersecurity,
            and digital transformation.
          </p>
        </section>

        {/* Featured Blogs Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold mb-10 text-blue-700 dark:text-blue-300">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "5 Ways to Secure Your Business Network",
                  desc: "Practical strategies to protect your company from cyber threats.",
                  image: "/globe.svg",
                  link: "/secure-your-business-network",
                },
                {
                  title: "Cloud Backup: Why It Matters",
                  desc: "Discover the benefits of cloud backup and disaster recovery.",
                  image: "/window.svg",
                  link: "/cloud-backup",
                },
                {
                  title: "Building a Culture of Security Awareness",
                  desc: "How to empower your team to recognize and avoid cyber risks.",
                  image: "/logo-stackly.png",
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
                      Read More &rarr;
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
              <span className="absolute block not-md:hidden  -left-10 top-25 bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-full shadow-lg">
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="white"
                    d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                  />
                </svg>
              </span>
              <h2 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-300 dark:to-blue-300 drop-shadow-lg">
                About Our Blog
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-2">
                Our blog is dedicated to sharing{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-300">
                  expert advice
                </span>
                ,{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-300">
                  industry news
                </span>
                , and practical tips to help you stay ahead in the fast-evolving
                world of technology and security.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 text-white text-xs font-bold shadow-md">
                  #Tech
                </span>
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 text-white text-xs font-bold shadow-md">
                  #Security
                </span>
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold shadow-md">
                  #Tips
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-100 to-purple-50 dark:from-blue-900 dark:to-purple-950 flex flex-col items-center">
          <div className="  w-full mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-300 dark:to-purple-300 drop-shadow-lg flex items-center justify-center gap-3">
                <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-full">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                    <path
                      fill="white"
                      d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 14h2v-2h-2v2zm0-4h2V7h-2v5z"
                    />
                  </svg>
                </span>
                Categories
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg max-w-xl mx-auto">
                Browse our blog by category and discover tailored insights for
                every interest.
              </p>
            </div>
            <div className=" pb-2">
              <div className="flex  gap-8 flex-wrap justify-center px-2">
                {[
                  {
                    name: "Network Security",
                    icon: <ShieldAlertIcon color="blue" />,
                  },
                  {
                    name: "Cloud Solutions",
                    icon: <CloudAlert color="blue" />,
                  },
                  {
                    name: "IT Infrastructure",
                    icon: <ServerIcon color="blue" />,
                  },
                  {
                    name: "Security Awareness",
                    icon: <EyeIcon color="blue" />,
                  },
                  {
                    name: "Vulnerability Assessment",
                    icon: <Timer color="blue" />,
                  },
                  {
                    name: "Digital Transformation",
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
            <h2 className="text-2xl font-extrabold mb-4 text-purple-700 dark:text-purple-300">
              Recent Comments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              {[
                {
                  name: "Priya Patel",
                  comment:
                    "Loved the article on cloud backup! Very informative.",
                },
                {
                  name: "Sarah Lee",
                  comment:
                    "The security tips are practical and easy to implement.",
                },
                {
                  name: "Michael Chen",
                  comment:
                    "Great insights on building a security-aware culture.",
                },
                {
                  name: "David Kim",
                  comment:
                    "Looking forward to more posts on IT infrastructure.",
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
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-full shadow-lg">
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="white"
                    d="M4 4h16v16H4V4zm8 2a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8z"
                  />
                </svg>
              </span>
              <h2 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-300 dark:to-blue-300 drop-shadow-lg">
                Stay Updated
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                Subscribe to our newsletter for the latest blog updates, tips,
                and exclusive content.
              </p>
              <form className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-6 py-3 rounded-2xl border-2 border-purple-200 dark:border-blue-800 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 w-full sm:w-auto shadow-md"
                />
                <button
                  type="submit"
                  className="px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold shadow-lg hover:scale-105 transition-all"
                >
                  Subscribe
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
