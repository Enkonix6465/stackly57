import i18n from "@/i18n";
import { ChevronDown, Globe, LogOut, Menu, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ModeToggle } from "./theme/ModeToggle";

const services = [
  { name: "hedder.services.0", link: " /network-security" },
  { name: "hedder.services.1", link: " /cloud-backup-and-recovery" },
  { name: "hedder.services.2", link: " /it-infrastructure" },
  { name: "hedder.services.3", link: " /endpoint-protection" },
  { name: "hedder.services.4", link: " /security-awareness-training" },
  { name: "hedder.services.5", link: " /vulnerability-assessment" },
];

const languages = [
  { code: "en", label: "English" },
  { code: "ar", label: "Arabic" },
  { code: "he", label: "Hebrew" },
];

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [homeOpen, setHomeOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [currentUser, setCurrentUser] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      loginTime: "",
      logoutTime: "",
      registerTime: "",
      role: "",
    }) || null;

  const router = useRouter();
  const { t } = useTranslation();

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Current_User") || "null");
    setCurrentUser(user);
  }, []);
  console.log("Current User:", currentUser);

  // Restore language from localStorage on mount and on route change
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const setLangFromStorage = () => {
        const savedLang = localStorage.getItem("selectedLanguage");
        if (savedLang) {
          //   setSelectedLanguage(savedLang);
          if (savedLang === "English" && i18n.language !== "en")
            i18n.changeLanguage("en");
          else if (savedLang === "Arabic" && i18n.language !== "ar")
            i18n.changeLanguage("ar");
          else if (savedLang === "Hebrew" && i18n.language !== "he")
            i18n.changeLanguage("he");
          // Set document direction
          if (savedLang === "Arabic" || savedLang === "Hebrew") {
            document.documentElement.dir = "rtl";
          } else {
            document.documentElement.dir = "ltr";
          }
        }
      };
      setLangFromStorage();

      // Listen for route changes to re-apply language
      const handleRouteChange = () => {
        setLangFromStorage();
      };
      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router.events, i18n.language]);

  const handleLanguageChange = (langLabel: string) => {
    // setSelectedLanguage(langLabel);
    const langObj = languages.find((l) => l.label === langLabel);
    if (langObj) {
      i18n.changeLanguage(langObj.code);
      if (typeof window !== "undefined") {
        localStorage.setItem("selectedLanguage", langLabel);
        if (langObj.code === "ar" || langObj.code === "he") {
          document.documentElement.dir = "rtl";
        } else {
          document.documentElement.dir = "ltr";
        }
      }
    }
  };

  // Responsive mobile menu toggle
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  console.log("Current route:", window.location.pathname);

  function handleLogout(): void {
    // Clear user session data (e.g., tokens, user info)
    if (typeof window !== "undefined") {
      const users = JSON.parse(localStorage.getItem("All_Users") || "[]");
      const userLogin = JSON.parse(
        localStorage.getItem("Current_User") || "null",
      );
      const user = users.find((u: any) => u.email === userLogin.email);
      user.logoutTime = new Date().toISOString();
      // Redirect to login page or homepage
      localStorage.setItem("All_Users", JSON.stringify(users));
      window.location.href = "/auth";

      localStorage.removeItem("Current_User");
    }
  }

  return (
    <header
      className={`w-full sticky top-0 left-0 z-50 -colors duration-300 max-w-screen bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white shadow-2xl  border-blue-100 dark:border-gray-800`}
      style={{ fontFamily: "Segoe UI, Roboto, Arial, sans-serif" }}
    >
      <nav className="mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/home1" className=" w-auto h-auto">
          <Image
            src="/logo-stackly.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-auto h-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden text-nowrap lg:flex items-center gap-6 text-base font-semibold">
          {/* Home Dropdown */}
          <li className="relative group ">
            <button
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800 "
              onClick={() => {
                setHomeOpen((prev) => !prev);
                setServicesOpen(false);
                setLangOpen(false);
                setProfileOpen(false);
              }}
            >
              {t("hedder.navbar.Home")} <ChevronDown size={16} />
            </button>
            {homeOpen && (
              <ul className="absolute left-0 mt-2 w-36 bg-white dark:bg-gray-800 shadow-xl rounded-lg py-2 border border-blue-100 dark:border-gray-700">
                <li>
                  <Link
                    href="/home1"
                    className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700"
                  >
                    {t("hedder.navbar.Home")}1
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home2"
                    className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700"
                  >
                    {t("hedder.navbar.Home")}2
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              href="/about-us"
              className="px-3 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800"
            >
              {t("hedder.navbar.About_Us")}
            </Link>
          </li>
          {/* Services Dropdown */}
          <li className="relative group">
            <button
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800 "
              onClick={() => {
                setServicesOpen((prev) => !prev);
                setHomeOpen(false);
                setLangOpen(false);
                setProfileOpen(false);
              }}
            >
              {t("hedder.navbar.Services")} <ChevronDown size={16} />
            </button>
            {servicesOpen && (
              <ul className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 shadow-xl rounded-lg py-2 border border-blue-100 dark:border-gray-700">
                <li>
                  <Link
                    href="/services"
                    className="block px-4 border-b py-2 hover:bg-blue-50 dark:hover:bg-gray-700"
                  >
                    {t("hedder.navbar.All_Services")}
                  </Link>
                </li>
                {services.map((service) => (
                  <li key={service.name} className="flex ">
                    <Link
                      href={`${service.link}`}
                      className="flex items-center w-full gap-2 px-4 py-2 rounded hover:bg-blue-50 dark:hover:bg-gray-700 "
                    >
                      {t(service.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link
              href="/blog"
              className="px-3 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800"
            >
              {t("hedder.navbar.Blog")}
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className="px-3 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800"
            >
              {t("hedder.navbar.Contact_Us")}
            </Link>
          </li>
          {/* Languages Dropdown */}
          <li className="relative group">
            <button
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800 "
              onClick={() => {
                setLangOpen((prev) => !prev);
                setHomeOpen(false);
                setServicesOpen(false);
                setProfileOpen(false);
              }}
            >
              <Globe size={18} /> <ChevronDown size={16} />
            </button>
            {langOpen && (
              <ul className="absolute left-0 mt-2 w-32 bg-white dark:bg-gray-800 shadow-xl rounded-lg py-2 border border-blue-100 dark:border-gray-700">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700"
                      onClick={() => {
                        handleLanguageChange(lang.label);
                        setLangOpen(false);
                      }}
                    >
                      {lang.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {/* Profile Dropdown */}
          <li className="relative group">
            <button
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800 "
              onClick={() => {
                setProfileOpen((prev) => !prev);
                setHomeOpen(false);
                setServicesOpen(false);
                setLangOpen(false);
              }}
            >
              {currentUser && (
                <>
                  {typeof currentUser.firstName === "string" &&
                  currentUser.firstName.length > 0
                    ? currentUser.firstName[0]
                    : "A"}
                  {typeof currentUser.lastName === "string" &&
                  currentUser.lastName.length > 0
                    ? currentUser.lastName[0]
                    : "D"}
                </>
              )}{" "}
              <ChevronDown size={16} />
            </button>
            {profileOpen && (
              <ul className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 shadow-xl rounded-lg py-2 border border-blue-100 dark:border-gray-700">
                {currentUser.role === "admin" &&
                  window.location.pathname != "/admin-dashboard" && (
                    <li>
                      <Link
                        href="/admin-dashboard"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 w-full"
                      >
                        <User size={16} /> Admin Panel
                      </Link>
                    </li>
                  )}
                <li>
                  <button
                    className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 w-full"
                    onClick={() => handleLogout()}
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </li>
              </ul>
            )}
          </li>
          {/* Theme Mode Toggle */}
          <li>
            <div className="ml-2">
              <ModeToggle />
            </div>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-full border border-blue-100 dark:border-gray-700 bg-blue-50 dark:bg-gray-800 shadow hover:bg-blue-200 dark:hover:bg-gray-700 "
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 shadow-2xl px-4 py-4 rounded-b-2xl border-b border-blue-100 dark:border-gray-800">
          <ul className="flex flex-col gap-3">
            <li>
              <button
                className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800 "
                onClick={() => setHomeOpen((prev) => !prev)}
              >
                {t("hedder.navbar.Home")} <ChevronDown size={16} />
              </button>
              {homeOpen && (
                <ul className="ml-6 mt-1">
                  <li>
                    <Link href="/home1" className="block py-1">
                      {t("hedder.navbar.Home")}1
                    </Link>
                  </li>
                  <li>
                    <Link href="/home2" className="block py-1">
                      {t("hedder.navbar.Home")}2
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/about-us"
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800 "
              >
                <span>{t("hedder.navbar.About_Us")}</span>
              </Link>
            </li>
            <li>
              <button
                className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800 "
                onClick={() => setServicesOpen((prev) => !prev)}
              >
                {t("hedder.navbar.Services")} <ChevronDown size={16} />
              </button>
              {servicesOpen && (
                <ul className="ml-6 mt-1">
                  <li>
                    <Link
                      href="/services"
                      className="block px-4 border-b py-2 hover:bg-blue-50 dark:hover:bg-gray-700"
                    >
                      {t("hedder.navbar.All_Services")}
                    </Link>
                  </li>
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={`${service.link}`}
                        className="flex items-center gap-2 py-1 rounded hover:bg-blue-50 dark:hover:bg-gray-700 "
                      >
                        {t(service.name)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/blog"
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800 "
              >
                {t("hedder.navbar.Blog")}
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800 "
              >
                {t("hedder.navbar.Contact_Us")}
              </Link>
            </li>
          </ul>
          <div className="mt-6 flex justify-between gap-4 border-t pt-6">
            <div className="flex items-center gap-4 w-full justify-between bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-lg rounded-xl px-4 py-3">
              {/* Language Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-gray-900 hover:bg-blue-200 dark:hover:bg-gray-700 shadow "
                  onClick={() => setLangOpen((prev) => !prev)}
                >
                  <Globe size={18} /> <ChevronDown size={16} />
                </button>
                {langOpen && (
                  <ul className="absolute left-0 mt-2 w-32 bg-white dark:bg-gray-800 shadow-xl rounded-lg py-2 border border-blue-100 dark:border-gray-700 z-10">
                    {languages.map((lang) => (
                      <li key={lang.code}>
                        <button
                          className="block px-3 py-1 w-full text-left rounded hover:bg-blue-100 dark:hover:bg-gray-700  font-semibold text-blue-700 dark:text-blue-200"
                          onClick={() => {
                            handleLanguageChange(lang.label);
                            setLangOpen(false);
                          }}
                        >
                          {t(lang.label)}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-gray-900 hover:bg-blue-200 dark:hover:bg-gray-700 shadow "
                  onClick={() => setProfileOpen((prev) => !prev)}
                >
                  {currentUser && (
                    <>
                      {typeof currentUser.firstName === "string" &&
                      currentUser.firstName.length > 0
                        ? currentUser.firstName[0]
                        : "A"}
                      {typeof currentUser.lastName === "string" &&
                      currentUser.lastName.length > 0
                        ? currentUser.lastName[0]
                        : "D"}
                    </>
                  )}{" "}
                  <ChevronDown size={16} />
                </button>
                {profileOpen && (
                  <ul className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 shadow-xl rounded-lg py-2 border border-blue-100 dark:border-gray-700 z-10">
                    {currentUser.role === "admin" &&
                      window.location.pathname != "/admin-dashboard" && (
                        <li>
                          <Link
                            href="/admin-dashboard"
                            className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 w-full"
                          >
                            <User size={16} /> Admin Panel
                          </Link>
                        </li>
                      )}
                    <li>
                      <button
                        className="flex items-center gap-2 py-1 w-full rounded hover:bg-blue-100 dark:hover:bg-gray-700  font-semibold text-red-600 dark:text-red-400"
                        onClick={() => handleLogout()}
                      >
                        <LogOut size={16} /> Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
              {/* Theme Toggle */}
              <div className="ml-2">
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
