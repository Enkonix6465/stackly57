import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { useTranslation } from "react-i18next";

type Props = {};

const CloudBackup = (props: Props) => {
  const { t } = useTranslation();
  return (
    <main className="min-h-screen caret-transparent">
      <SiteHeader />
      <section className="relative py-20 px-4 flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-700 to-purple-800">
        <h1 className="text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
          {t("cloudBackup.hero.title")}
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-white/80">
          {t("cloudBackup.hero.subtitle")}
        </p>
      </section>

      <section className="mx-auto py-10 px-4 bg-white/80 dark:bg-gray-900/80 shadow-xl border border-blue-100 dark:border-blue-900 backdrop-blur-lg">
        <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300">
          {t("cloudBackup.intro.title")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          {t("cloudBackup.intro.p1")}
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-purple-700 dark:text-purple-300">
          {t("cloudBackup.what.title")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {t("cloudBackup.what.p")}
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
          <li>{t("cloudBackup.what.list.0")}</li>
          <li>{t("cloudBackup.what.list.1")}</li>
          <li>{t("cloudBackup.what.list.2")}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-purple-700 dark:text-purple-300">
          {t("cloudBackup.why.title")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {t("cloudBackup.why.p")}
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
          <li>{t("cloudBackup.why.list.0")}</li>
          <li>{t("cloudBackup.why.list.1")}</li>
          <li>{t("cloudBackup.why.list.2")}</li>
          <li>{t("cloudBackup.why.list.3")}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-purple-700 dark:text-purple-300">
          {t("cloudBackup.best.title")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {t("cloudBackup.best.p")}
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
          <li>{t("cloudBackup.best.list.0")}</li>
          <li>{t("cloudBackup.best.list.1")}</li>
          <li>{t("cloudBackup.best.list.2")}</li>
          <li>{t("cloudBackup.best.list.3")}</li>
          <li>{t("cloudBackup.best.list.4")}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-purple-700 dark:text-purple-300">
          {t("cloudBackup.example.title")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          {t("cloudBackup.example.p")}
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-blue-700 dark:text-blue-300">
          {t("cloudBackup.conclusion.title")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          {t("cloudBackup.conclusion.p")}
        </p>
      </section>
      <SiteFooter />
    </main>
  );
};

export default CloudBackup;
