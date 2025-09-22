import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const services = [
  { name: "hedder.services.0", link: " /network-security" },
  { name: "hedder.services.1", link: " /cloud-backup-and-recovery" },
  { name: "hedder.services.2", link: " /it-infrastructure" },
  { name: "hedder.services.3", link: " /endpoint-protection" },
  { name: "hedder.services.4", link: " /security-awareness-training" },
  { name: "hedder.services.5", link: " /vulnerability-assessment" },
];

const quickLinks = [
  { key: "hedder.navbar.Home", href: "/home1" },
  { key: "hedder.navbar.About_Us", href: "/about-us" },
  { key: "hedder.navbar.Services", href: "/services" },
  { key: "hedder.navbar.Blog", href: "/blog" },
  { key: "hedder.navbar.Contact_Us", href: "/contact-us" },
];

const SiteFooter = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white border-t border-blue-100 dark:border-gray-800 pt-10 pb-4 px-4">
      <div className=" max-w-screen   mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Image
              src="/logo-stackly.png"
              alt="Logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <p className="text-sm leading-relaxed mb-4">{t("footer.about")}</p>
          <div className="flex gap-3 mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 256 256"
              >
                <path
                  fill="#1877f2"
                  d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                ></path>
                <path
                  fill="#fff"
                  d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
                ></path>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 256 256"
              >
                <g fill="none">
                  <rect width={256} height={256} fill="#fff" rx={60}></rect>
                  <rect width={256} height={256} fill="#1d9bf0" rx={60}></rect>
                  <path
                    fill="#fff"
                    d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677q4.379.525 8.79.533a74.15 74.15 0 0 0 45.865-15.839a36.98 36.98 0 0 1-34.501-25.645a36.8 36.8 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.7 36.7 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.8 104.8 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.1 74.1 0 0 0 23.451-8.965a37.06 37.06 0 0 1-16.234 20.424A73.5 73.5 0 0 0 218 72.282a75 75 0 0 1-18.428 19.13"
                  ></path>
                </g>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 256 256"
              >
                <g fill="none">
                  <rect width={256} height={256} fill="#fff" rx={60}></rect>
                  <rect width={256} height={256} fill="#0a66c2" rx={60}></rect>
                  <path
                    fill="#fff"
                    d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                  ></path>
                </g>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 256 256"
              >
                <g fill="none">
                  <rect
                    width={256}
                    height={256}
                    fill="url(#SVGWRUqebek)"
                    rx={60}
                  ></rect>
                  <rect
                    width={256}
                    height={256}
                    fill="url(#SVGfkNpldMH)"
                    rx={60}
                  ></rect>
                  <path
                    fill="#fff"
                    d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
                  ></path>
                  <defs>
                    <radialGradient
                      id="SVGWRUqebek"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fd5"></stop>
                      <stop offset={0.1} stopColor="#fd5"></stop>
                      <stop offset={0.5} stopColor="#ff543e"></stop>
                      <stop offset={1} stopColor="#c837ab"></stop>
                    </radialGradient>
                    <radialGradient
                      id="SVGfkNpldMH"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3771c8"></stop>
                      <stop offset={0.128} stopColor="#3771c8"></stop>
                      <stop offset={1} stopColor="#60f" stopOpacity={0}></stop>
                    </radialGradient>
                  </defs>
                </g>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-base mb-3">
            {t("footer.quick_links")}
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="hover:text-blue-600 transition"
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-base mb-3">{t("footer.services")}</h3>
          <ul className="space-y-2">
            {services.map((service, index) => (
              <li key={index}>
                <Link
                  href={service.link}
                  className="hover:text-blue-600 transition"
                >
                  {t(service.name)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-base mb-3">{t("footer.contact_us")}</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={18} /> {t("footer.email")}
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> {t("footer.phone")}
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} /> {t("footer.address")}
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} Stackly. {t("footer.copyright")}
      </div>
    </footer>
  );
};

export default SiteFooter;
