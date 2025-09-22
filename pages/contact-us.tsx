import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const ContactUs: React.FC = (props) => {
  const { t } = useTranslation();
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const action = form.getAttribute("action");

    if (!action) {
      alert("Form action URL not found.");
      return;
    }

    try {
      const response = await fetch(action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setSuccess(true);
      } else {
        alert(t("contactUs.form.error"));
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert(t("contactUs.form.error"));
    }
  };
  const faqs = [
    {
      question: t("contactUs.faqs.0.question"),
      answer: (
        <>
          {t("contactUs.faqs.0.answer.0")}
          <span className="font-semibold">support@enkonix.com</span>
          {t("contactUs.faqs.0.answer.1")}
        </>
      ),
    },
    {
      question: t("contactUs.faqs.1.question"),
      answer: (
        <>
          {t("contactUs.faqs.1.answer.0")}
          <span className="font-semibold">
            1234 Enkonix Ave, Suite 100, Tech City, 56789
          </span>
          {t("contactUs.faqs.1.answer.1")}
        </>
      ),
    },
    {
      question: t("contactUs.faqs.2.question"),
      answer: (
        <>
          {t("contactUs.faqs.2.answer.0")}
          <span className="font-semibold">
            Monday to Friday, 9:00 AM – 6:00 PM
          </span>
          {t("contactUs.faqs.2.answer.1")}
        </>
      ),
    },
    {
      question: t("contactUs.faqs.3.question"),
      answer: <>{t("contactUs.faqs.3.answer")}</>,
    },
  ];
  const teamMembers = [
    {
      name: t("contactUs.team.0.name"),
      role: t("contactUs.team.0.role"),
      image: "https://randomuser.me/api/portraits/women/90.jpg",
    },
    {
      name: t("contactUs.team.1.name"),
      role: t("contactUs.team.1.role"),
      image: "https://randomuser.me/api/portraits/women/60.jpg",
    },
    {
      name: t("contactUs.team.2.name"),
      role: t("contactUs.team.2.role"),
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      name: t("contactUs.team.3.name"),
      role: t("contactUs.team.3.role"),
      image: "https://randomuser.me/api/portraits/men/40.jpg",
    },
    {
      name: t("contactUs.team.4.name"),
      role: t("contactUs.team.4.role"),
      image: "https://randomuser.me/api/portraits/men/62.jpg",
    },
    {
      name: t("contactUs.team.5.name"),
      role: t("contactUs.team.5.role"),
      image: "https://randomuser.me/api/portraits/women/56.jpg",
    },
  ];
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);
  return (
    <main className="min-h-screen  ">
      <SiteHeader />
      {/* Hero Section */}
      <section className="relative h-[100vh] flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-700 to-purple-800 overflow-hidden caret-transparent">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
          {t("contactUs.hero.videoFallback")}
        </video>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/80 to-purple-800/80 z-10"></div>
        <div className="relative z-20 flex flex-col justify-center items-center h-full w-full">
          <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
            {t("contactUs.hero.title")}
          </h1>
          <p className="text-lg max-w-xl mx-auto mb-6 text-white/80">
            {t("contactUs.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Contact Form Section */}

      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900 flex justify-center">
        <div className="max-w-2xl w-full bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-10 border border-blue-100 dark:border-blue-900 backdrop-blur-lg">
          <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300 text-center">
            {t("contactUs.form.title")}
          </h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xovlekvg"
            method="POST"
            className="flex flex-col gap-6"
          >
            <input
              type="text"
              name="name"
              placeholder={t("contactUs.form.namePlaceholder")}
              className="px-6 py-3 rounded-2xl border-2 border-purple-200 dark:border-blue-800 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-md"
            />
            <input
              type="email"
              name="email"
              placeholder={t("contactUs.form.emailPlaceholder")}
              className="px-6 py-3 rounded-2xl border-2 border-purple-200 dark:border-blue-800 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-md"
            />
            <textarea
              placeholder={t("contactUs.form.messagePlaceholder")}
              rows={5}
              name="message"
              className="px-6 py-3 rounded-2xl border-2 border-purple-200 dark:border-blue-800 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-md"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold shadow-lg hover:scale-105 transition-all"
            >
              {t("contactUs.form.button")}
            </button>
          </form>
          {success && (
            <div className="mt-6 text-green-700 dark:text-green-400 text-center text-lg font-semibold animate-fade-in">
              {t("contactUs.form.success")}
            </div>
          )}
        </div>
      </section>

      {/* Info Section: Address, Email, Phone Combined */}
      <section className="py-10 px-4 flex justify-center caret-transparent">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address Card */}
          <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-8 border border-purple-100 dark:border-purple-900 backdrop-blur-lg flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-2 text-purple-700 dark:text-purple-300">
              {t("contactUs.info.address.title")}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {t("contactUs.info.address.line1")}
              <br />
              {t("contactUs.info.address.line2")}
            </p>
          </div>
          {/* Email Card */}
          <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-8 border border-blue-100 dark:border-blue-900 backdrop-blur-lg flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-2 text-blue-700 dark:text-blue-300">
              {t("contactUs.info.email.title")}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              support@enkonix.com
              <br />
              info@enkonix.com
            </p>
          </div>
          {/* Phone Card */}
          <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-8 border border-purple-100 dark:border-purple-900 backdrop-blur-lg flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-2 text-purple-700 dark:text-purple-300">
              {t("contactUs.info.phone.title")}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              +1 (234) 567-8901
              <br />
              {t("contactUs.info.phone.hours")}
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Members Section */}
      <section className=" caret-transparent bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900  py-16 px-4 flex justify-center">
        <div className="max-w-6xl w-full">
          <h2 className="text-3xl font-bold mb-10 text-blue-700 dark:text-blue-300 text-center">
            {t("contactUs.teamTitle")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-8 border border-blue-100 dark:border-blue-900 backdrop-blur-lg flex flex-col items-center text-center hover:scale-105 transition-all"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-purple-200 dark:border-blue-700 shadow"
                />
                <h3 className="font-bold text-xl mb-1 text-blue-700 dark:text-blue-300">
                  {member.name}
                </h3>
                <span className="text-purple-700 dark:text-purple-300 font-semibold mb-2">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (Accordion) */}
      <section className="py-16 caret-transparent px-4 flex justify-center">
        <div className="w-full bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-10 border border-purple-100 dark:border-purple-900 backdrop-blur-lg">
          <h2 className="text-3xl font-bold mb-8 text-purple-700 dark:text-purple-300 text-center">
            {t("contactUs.faqTitle")}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border-b border-purple-200 dark:border-purple-700 pb-2"
              >
                <button
                  className="w-full text-left flex justify-between items-center py-3 focus:outline-none"
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                >
                  <span className="font-semibold text-lg text-blue-700 dark:text-blue-300">
                    {faq.question}
                  </span>
                  <span
                    className={`ml-2 transition-transform ${
                      openIdx === idx ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {openIdx === idx && (
                  <div className="mt-2 text-gray-700 dark:text-gray-300 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 caret-transparent px-4 flex justify-center items-center">
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-200 dark:border-purple-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d144.9537363155042!3d-37.81720974202198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f8e7fb%3A0x5045675218ce6e0!2sTech%20City!5e0!3m2!1sen!2sus!4v1633072800000!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
};

export default ContactUs;
