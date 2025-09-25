import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>IT Services</title>
        <meta
          name="description"
          content="IT Services, Cybersecurity, and Cloud Solutions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-[100vh] flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 caret-transparent">
        <div className="w-full max-w-xl mx-auto bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-2xl p-10 flex flex-col items-center text-center backdrop-blur-md">
          <div className="mb-6">
            <svg
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="none"
              className="mx-auto text-blue-600 dark:text-blue-300"
            >
              <path
                d="M12 2L2 7v7c0 5 5 8 10 8s10-3 10-8V7l-10-5z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="12"
                r="3"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold mb-4 text-blue-700 dark:text-blue-300 drop-shadow-lg">
            Enkonix IT Services
          </h1>
          <p className="mb-8 text-lg text-gray-700 dark:text-gray-300 font-medium">
            Secure, scalable, and modern IT solutions for your business.
            <br />
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              Cybersecurity
            </span>{" "}
            |{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              Cloud Services
            </span>{" "}
            |{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              IT Consulting
            </span>
          </p>
          <Link
            className="px-8 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition text-lg font-bold tracking-wide"
            href="/auth"
          >
            Go to Login
          </Link>
        </div>
      </div>
    </>
  );
}
