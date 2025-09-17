import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Head from "next/head";
import Image from "next/image";

const ITInfrastructure = () => {
  return (
    <>
      <Head>
        <title>IT Infrastructure | IT Services, Cybersecurity & Cloud</title>
        <meta
          name="description"
          content="Empower your business with robust IT infrastructure, secure networking, and expert support."
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
            <h1 className="text-5xl font-extrabold mb-4">IT Infrastructure</h1>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Build a resilient, scalable, and secure IT foundation for your
              business success.
            </p>
          </div>
        </section>

        {/* 2. Why IT Infrastructure Matters */}
        <section className="py-20 px-4 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            {/* Left: Modern Card with Icon & Headline */}
            <div className="flex-1 flex flex-col justify-center items-start bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 rounded-3xl shadow-2xl p-10 border-4 border-blue-100 dark:border-blue-900">
              <div className="mb-6 flex items-center gap-4">
                <Image
                  src="/window.svg"
                  alt="IT Infrastructure"
                  width={48}
                  height={48}
                />
                <h2 className="text-4xl font-extrabold text-blue-700 dark:text-blue-300">
                  Why IT Infrastructure Matters
                </h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-xl">
                Modern IT infrastructure is the backbone of business operations,
                enabling performance, security, and growth in a digital world.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <span className="bg-blue-200 dark:bg-blue-800 p-3 rounded-full">
                    <Image
                      src="/window.svg"
                      alt="Network"
                      width={32}
                      height={32}
                    />
                  </span>
                  <span className="font-semibold text-blue-700 dark:text-blue-300">
                    Reliable Networking
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-purple-200 dark:bg-purple-800 p-3 rounded-full">
                    <Image
                      src="/cloud-backup.svg"
                      alt="Cloud"
                      width={32}
                      height={32}
                    />
                  </span>
                  <span className="font-semibold text-purple-700 dark:text-purple-300">
                    Scalable Cloud
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
                    Compliance & Security
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-green-200 dark:bg-green-800 p-3 rounded-full">
                    <Image
                      src="/security-awareness.svg"
                      alt="Support"
                      width={32}
                      height={32}
                    />
                  </span>
                  <span className="font-semibold text-green-700 dark:text-green-400">
                    Expert Support
                  </span>
                </div>
              </div>
            </div>
            {/* Right: Themed Image */}
            <div className="flex-1 flex justify-center items-center">
              <div className="relative">
                <Image
                  src="/it-infra-hero.png"
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
                <Image src="/window.svg" alt="IT" width={32} height={32} />
              </span>
              Our IT Infrastructure Solutions
            </h2>
            {/* Zigzag Layout using array and map */}
            {(() => {
              const solutions = [
                {
                  icon: "/window.svg",
                  alt: "Network Design",
                  bg: "bg-blue-100 dark:bg-blue-900",
                  border: "border-blue-200 dark:border-blue-800",
                  title: "Network Design & Implementation",
                  titleClass: "text-blue-700 dark:text-blue-300",
                  items: [
                    "Custom network architecture",
                    "Secure LAN/WAN solutions",
                    "Performance optimization",
                  ],
                },
                {
                  icon: "/cloud-backup.svg",
                  alt: "Cloud Integration",
                  bg: "bg-purple-100 dark:bg-purple-900",
                  border: "border-purple-200 dark:border-purple-800",
                  title: "Cloud Integration",
                  titleClass: "text-purple-700 dark:text-purple-300",
                  items: [
                    "Hybrid & multi-cloud deployments",
                    "Migration & onboarding",
                    "Scalable infrastructure",
                  ],
                },
                {
                  icon: "/globe.svg",
                  alt: "Security",
                  bg: "bg-blue-100 dark:bg-blue-900",
                  border: "border-blue-200 dark:border-blue-800",
                  title: "Security & Compliance",
                  titleClass: "text-blue-700 dark:text-blue-300",
                  items: [
                    "GDPR, HIPAA, PCI DSS, ISO 27001",
                    "Automated reporting & monitoring",
                    "Policy & audit support",
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
            <Image
              src="/cloud-backup.svg"
              alt="IT & Cloud"
              width={40}
              height={40}
            />
            Managed IT & Cloud Services
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* IT Strategy Card */}
            <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 p-10 rounded-3xl shadow-xl border-2 border-blue-200 dark:border-blue-800 flex flex-col items-center group hover:scale-105 transition-all">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-14 h-14 bg-blue-500/20 dark:bg-blue-900/30 rounded-full blur-xl"></div>
              <Image
                src="/window.svg"
                alt="IT Strategy"
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-2xl font-bold mb-3 text-blue-700 dark:text-blue-300">
                IT Strategy & Consulting
              </h3>
              <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 text-left space-y-2">
                <li>Custom IT roadmaps for secure growth</li>
                <li>Digital transformation leadership</li>
                <li>Process automation & workflow optimization</li>
              </ul>
            </div>
            {/* Cloud Services Card */}
            <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-950 dark:to-blue-950 p-10 rounded-3xl shadow-xl border-2 border-purple-200 dark:border-purple-800 flex flex-col items-center group hover:scale-105 transition-all">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-14 h-14 bg-purple-500/20 dark:bg-purple-900/30 rounded-full blur-xl"></div>
              <Image
                src="/cloud-backup.svg"
                alt="Cloud Services"
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-2xl font-bold mb-3 text-purple-700 dark:text-purple-300">
                Cloud Services
              </h3>
              <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 text-left space-y-2">
                <li>Scalable cloud hosting & infrastructure</li>
                <li>Disaster recovery & backup solutions</li>
                <li>Hybrid & multi-cloud deployments</li>
              </ul>
            </div>
            {/* Managed Support Card */}
            <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 p-10 rounded-3xl shadow-xl border-2 border-blue-200 dark:border-blue-800 flex flex-col items-center group hover:scale-105 transition-all">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-14 h-14 bg-green-500/20 dark:bg-green-900/30 rounded-full blur-xl"></div>
              <Image
                src="/shield.svg"
                alt="Managed Support"
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-2xl font-bold mb-3 text-green-700 dark:text-green-400">
                Managed IT Support
              </h3>
              <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 text-left space-y-2">
                <li>24/7 monitoring & helpdesk</li>
                <li>Proactive maintenance & updates</li>
                <li>Rapid issue resolution</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Infrastructure Awareness & Compliance */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-14 text-purple-700 dark:text-purple-300 text-center flex items-center justify-center gap-3">
              <Image
                src="/security-awareness.svg"
                alt="Awareness"
                width={36}
                height={36}
              />
              Infrastructure Awareness & Compliance
            </h2>
            {/* Horizontal Stepper Layout using array and map */}
            {(() => {
              const steps = [
                {
                  icon: "/security-awareness.svg",
                  alt: "Training",
                  bg: "bg-blue-100 dark:bg-blue-900",
                  title: "Infrastructure Training & Awareness",
                  titleClass: "text-blue-700 dark:text-blue-300",
                  items: [
                    "Workshops & e-learning",
                    "Simulated network drills",
                    "Employee engagement",
                  ],
                  connector: "bg-blue-200 dark:bg-blue-900",
                },
                {
                  icon: "/globe.svg",
                  alt: "Compliance",
                  bg: "bg-purple-100 dark:bg-purple-900",
                  title: "Compliance Management",
                  titleClass: "text-purple-700 dark:text-purple-300",
                  items: [
                    "GDPR, HIPAA, PCI DSS, ISO 27001",
                    "Automated reporting",
                    "Policy & audit support",
                  ],
                  connector: "bg-purple-200 dark:bg-purple-900",
                },
                {
                  icon: "/window.svg",
                  alt: "Culture",
                  bg: "bg-green-100 dark:bg-green-900",
                  title: "Resilient Culture",
                  titleClass: "text-green-700 dark:text-green-400",
                  items: [
                    "Leadership buy-in",
                    "Continuous improvement",
                    "Celebrating successful projects",
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
                        <Image
                          src={step.icon}
                          alt={step.alt}
                          width={40}
                          height={40}
                        />
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
              Ready to Upgrade Your IT Infrastructure?
            </h2>
            <p className="text-lg text-white/80 dark:text-white/70 mb-8">
              Contact our IT infrastructure experts for a free assessment and
              discover how we can empower your business.
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

export default ITInfrastructure;
