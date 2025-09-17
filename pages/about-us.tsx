import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Head from "next/head";
import Image from "next/image";

const team = [
  {
    name: "Ramesh",
    role: "Founder & CEO",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit Patel",
    role: "Lead Developer",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sara Lee",
    role: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

const achievements = [
  {
    title: "100+ Projects",
    desc: "Successfully delivered over 100 projects across industries.",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="#38bdf8" strokeWidth="2" />
        <path d="M8 12h8" stroke="#38bdf8" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Award Winning",
    desc: "Recognized for innovation and excellence in software.",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          stroke="#f97316"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Global Clients",
    desc: "Trusted by clients in 15+ countries worldwide.",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <path d="M12 2v20M2 12h20" stroke="#8b5cf6" strokeWidth="2" />
      </svg>
    ),
  },
];

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us </title>
        <meta
          name="description"
          content="Learn more about Enkonix, our mission, values, and the team behind our success. Discover how we empower businesses with innovative software solutions and IT services."
        />
      </Head>
      <main className="bg-[#f7fafd] dark:bg-[#101624] text-gray-900 dark:text-white caret-transparent">
        <SiteHeader />
        {/* 1. Hero Section */}
        <section className="relative h-screen flex justify-center items-center flex-col bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-900 dark:to-purple-900 text-white text-center overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 dark:opacity-30"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/about-bg-video.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support the video tag */}
          </video>
          {/* Overlay for readability */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Empowering businesses with innovative software solutions, expert
              IT services, and a passion for technology.
            </p>
          </div>
        </section>

        {/* 2. Company Story - Timeline & Modern Card */}
        <section className="py-20 px-4 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* Timeline */}
            <div className="flex flex-col gap-8">
              <h2 className="text-4xl font-extrabold mb-6 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                Our Journey
              </h2>
              <div className="relative pl-8">
                {/* Timeline vertical line */}
                <div className="absolute left-3 top-0 h-full w-1 bg-blue-200 dark:bg-blue-900 rounded-full"></div>
                {/* Timeline items using array and map */}
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
                    title: "2015: Founded",
                    titleClass: "text-blue-700 dark:text-blue-300",
                    desc: "Started as a small startup with a vision for innovative IT solutions.",
                    mb: "mb-10",
                  },
                  {
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="4"
                          y="4"
                          width="12"
                          height="12"
                          stroke="#fff"
                          strokeWidth="2"
                        />
                      </svg>
                    ),
                    bg: "bg-purple-500 dark:bg-purple-700",
                    title: "2018: First Major Award",
                    titleClass: "text-purple-700 dark:text-purple-300",
                    desc: "Recognized for excellence in software development and client service.",
                    mb: "mb-10",
                  },
                  {
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 2v20M2 12h20"
                          stroke="#fff"
                          strokeWidth="2"
                        />
                      </svg>
                    ),
                    bg: "bg-orange-500 dark:bg-orange-700",
                    title: "2021: 100+ Projects",
                    titleClass: "text-orange-600 dark:text-orange-400",
                    desc: "Delivered over 100 successful projects for clients worldwide.",
                    mb: "mb-10",
                  },
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
                    bg: "bg-green-500 dark:bg-green-700",
                    title: "2025: Global Expansion",
                    titleClass: "text-green-700 dark:text-green-300",
                    desc: "Expanded our reach to serve clients in 15+ countries.",
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
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Modern Image Card */}
            <div className="flex justify-center">
              <div className="relative     rounded-3xl shadow-2xl overflow-hidden border-4 border-blue-100 dark:border-blue-900 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-900">
                <Image
                  src="https://i.pinimg.com/1200x/fb/bf/9d/fbbf9d982ffd71e75d4e3a79b5f83cce.jpg"
                  alt="Company Story"
                  width={300}
                  height={300}
                  className=" object-cover opacity-80"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-700/80 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Driven by Innovation
                  </h3>
                  <p className="text-white/80 text-base">
                    Our story is about growth, creativity, and a relentless
                    pursuit of excellence in technology.
                  </p>
                </div>
                <span className="absolute top-4 right-4 bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-bold shadow">
                  Since 2015
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Mission & Values - Horizontal Stepper */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-10 text-purple-700 dark:text-purple-300 flex items-center justify-center gap-2">
              Our Mission & Values
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {[
                {
                  icon: (
                    <span className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4 shadow-lg">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 2v20M2 12h20"
                          stroke="#38bdf8"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                  ),
                  title: "Innovation",
                  titleClass: "text-blue-700 dark:text-blue-300",
                  desc: "We embrace new technologies and creative solutions to drive progress for our clients.",
                  connector: "bg-blue-200 dark:bg-blue-900",
                },
                {
                  icon: (
                    <span className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4 shadow-lg">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="4"
                          y="4"
                          width="16"
                          height="16"
                          stroke="#a78bfa"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                  ),
                  title: "Integrity",
                  titleClass: "text-purple-700 dark:text-purple-300",
                  desc: "Honesty, transparency, and ethical practices are at the heart of everything we do.",
                  connector: "bg-purple-200 dark:bg-purple-900",
                },
                {
                  icon: (
                    <span className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mb-4 shadow-lg">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 2v20M2 12h20"
                          stroke="#fb923c"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                  ),
                  title: "Excellence",
                  titleClass: "text-orange-600 dark:text-orange-400",
                  desc: "We strive for excellence in every project, ensuring top-quality results and client satisfaction.",
                  connector: "",
                },
              ].map((step, idx, arr) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center relative md:w-1/3`}
                >
                  {step.icon}
                  <h3 className={`font-bold text-xl mb-2 ${step.titleClass}`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.desc}
                  </p>
                  {/* Connector */}
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
              Meet the Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900 rounded-2xl shadow-lg p-6 flex flex-col items-center"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-200 dark:border-blue-900"
                  />
                  <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    {member.role}
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
              Our Achievements
            </h2>
            {/* New vertical stepper layout for achievements */}
            <div className="relative flex flex-col items-center  mx-auto">
              {/* Vertical line */}
              <div className="absolute md:block hidden     left-1/2 transform -translate-x-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-300 via-purple-300 to-orange-300 dark:from-blue-900 dark:via-purple-900 dark:to-orange-900 rounded-full z-0"></div>
              {achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className={`relative z-10 flex flex-col items-center mb-12 last:mb-0 w-full ${
                    idx % 2 === 0 ? " md:ml-0 md:mr-auto" : "md:mr-0 md:ml-auto"
                  }`}
                  style={{
                    //   marginLeft: idx % 2 === 0 ? "0" : "auto",
                    //   marginRight: idx % 2 === 0 ? "auto" : "0",
                    maxWidth: "400px",
                  }}
                >
                  {/* Connector dot */}
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full shadow-lg mb-4 ${
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
                      {ach.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {ach.desc}
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
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-white/80 dark:text-white/70 mb-8">
              Contact our team to discuss your project, get a free consultation,
              or learn more about our services.
            </p>
            <a
              href="/contact-us"
              className="inline-block bg-blue-600 dark:bg-blue-400 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all text-lg"
            >
              Contact Us
            </a>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  );
};

export default AboutUs;
