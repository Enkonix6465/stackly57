import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { useTranslation } from "react-i18next";

type Props = {};

const NetworkSecurity = (props: Props) => {
  const { t } = useTranslation();
  return (
    <main className="min-h-screen caret-transparent">
      <SiteHeader />
      <section className="relative py-20 px-4 flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-700 to-purple-800">
        <h1 className="text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
          {t("secureNetwork.hero.title")}
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-white/80">
          {t("secureNetwork.hero.subtitle")}
        </p>
      </section>

      <section className="mx-auto py-10 px-4 bg-white/80 dark:bg-gray-900/80 shadow-xl border border-blue-100 dark:border-blue-900 backdrop-blur-lg">
        <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300">
          {t("secureNetwork.intro.title")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          {t("secureNetwork.intro.p1")}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          {t("secureNetwork.intro.p2")}
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-purple-700 dark:text-purple-300">
          {t("secureNetwork.steps.0.title")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {t("secureNetwork.steps.0.p")}
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
          <li>{t("secureNetwork.steps.0.list.0")}</li>
          <li>{t("secureNetwork.steps.0.list.1")}</li>
          <li>{t("secureNetwork.steps.0.list.2")}</li>
          <li>{t("secureNetwork.steps.0.list.3")}</li>
          <li>{t("secureNetwork.steps.0.list.4")}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-purple-700 dark:text-purple-300">
          {t("secureNetwork.steps.1.title")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {t("secureNetwork.steps.1.p")}
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
          <li>{t("secureNetwork.steps.1.list.0")}</li>
          <li>{t("secureNetwork.steps.1.list.1")}</li>
          <li>{t("secureNetwork.steps.1.list.2")}</li>
          <li>{t("secureNetwork.steps.1.list.3")}</li>
          <li>{t("secureNetwork.steps.1.list.4")}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-purple-700 dark:text-purple-300">
          {t("secureNetwork.steps.2.title")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {t("secureNetwork.steps.2.p")}
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
          <li>{t("secureNetwork.steps.2.list.0")}</li>
          <li>{t("secureNetwork.steps.2.list.1")}</li>
          <li>{t("secureNetwork.steps.2.list.2")}</li>
          <li>{t("secureNetwork.steps.2.list.3")}</li>
          <li>{t("secureNetwork.steps.2.list.4")}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-purple-700 dark:text-purple-300">
          {t("secureNetwork.steps.3.title")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {t("secureNetwork.steps.3.p")}
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
          <li>{t("secureNetwork.steps.3.list.0")}</li>
          <li>{t("secureNetwork.steps.3.list.1")}</li>
          <li>{t("secureNetwork.steps.3.list.2")}</li>
          <li>{t("secureNetwork.steps.3.list.3")}</li>
          <li>{t("secureNetwork.steps.3.list.4")}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-purple-700 dark:text-purple-300">
          {t("secureNetwork.steps.4.title")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {t("secureNetwork.steps.4.p")}
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
          <li>{t("secureNetwork.steps.4.list.0")}</li>
          <li>{t("secureNetwork.steps.4.list.1")}</li>
          <li>{t("secureNetwork.steps.4.list.2")}</li>
          <li>{t("secureNetwork.steps.4.list.3")}</li>
          <li>{t("secureNetwork.steps.4.list.4")}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-blue-700 dark:text-blue-300">
          {t("secureNetwork.conclusion.title")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {t("secureNetwork.conclusion.p1")}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          {t("secureNetwork.conclusion.p2")}
        </p>
      </section>
      <SiteFooter />
    </main>
  );
};

export default NetworkSecurity;
