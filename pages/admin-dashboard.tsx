import SiteHeader from "@/components/SiteHeader";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const staticStats = [
  { key: "totalITServices", value: 42 },
  { key: "cybersecurityProjects", value: 18 },
  { key: "cloudDeployments", value: 27 },
  { key: "activeUsers", value: 134 },
  { key: "incidentsResolved", value: 56 },
];

const getAllUsers = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("All_Users") || "[]");
  }
  return [];
};

const getLoginData = () => {
  if (typeof window === "undefined") return [];
  const users = JSON.parse(localStorage.getItem("All_Users") || "[]");
  // Aggregate logins by date
  const loginCounts: Record<string, number> = {};
  users.forEach((user: any) => {
    if (user.loginTime) {
      const date = new Date(user.loginTime).toISOString().slice(0, 10);
      loginCounts[date] = (loginCounts[date] || 0) + 1;
    }
  });
  // Convert to array sorted by date
  return Object.entries(loginCounts)
    .map(([date, logins]) => ({ date, logins }))
    .sort((a, b) => a.date.localeCompare(b.date));
};

const AdminDashboard = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("stats");
  const users = typeof window !== "undefined" ? getAllUsers() : [];
  const loginData = getLoginData();
  // Pie chart data
  const totalUsers = users.length;
  const loginUsers = users.filter((u: any) => !!u.loginTime).length;
  const pieData = [
    { name: t("adminDashboard.pie.loginUsers"), value: loginUsers },
    {
      name: t("adminDashboard.pie.otherUsers"),
      value: totalUsers - loginUsers,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-6 md:gap-8 max-h-screen overflow-y-auto  ">
        <SiteHeader />

        <main className="flex flex-col items-center w-full px-4 md:px-8 lg:px-16 py-6 md:py-10">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 dark:from-blue-300 dark:via-purple-300 dark:to-pink-300 drop-shadow-lg tracking-tight">
            {t("adminDashboard.title")}
          </h1>

          <div className="flex gap-4 md:gap-6 mb-6">
            {[
              {
                key: "stats",
                label: t("adminDashboard.tabs.stats"),
                icon: "📊",
                activeClass: "bg-blue-600 text-white scale-105",
                inactiveClass:
                  "bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-blue-300",
                border: "border-blue-300 dark:border-blue-700",
                hover: "hover:bg-blue-500 hover:text-white",
              },
              {
                key: "graph",
                label: t("adminDashboard.tabs.graph"),
                icon: "📈",
                activeClass: "bg-purple-600 text-white scale-105",
                inactiveClass:
                  "bg-purple-100 dark:bg-gray-800 text-purple-700 dark:text-purple-300",
                border: "border-purple-300 dark:border-purple-700",
                hover: "hover:bg-purple-500 hover:text-white",
              },
              {
                key: "users",
                label: t("adminDashboard.tabs.users"),
                icon: "👥",
                activeClass: "bg-green-600 text-white scale-105",
                inactiveClass:
                  "bg-green-100 dark:bg-gray-800 text-green-700 dark:text-green-400",
                border: "border-green-300 dark:border-green-700",
                hover: "hover:bg-green-500 hover:text-white",
              },
            ].map((tab) => (
              <button
                key={tab.key}
                className={`py-3 px-6 rounded-xl font-bold text-lg transition-all flex items-center  duration-200 shadow-md ${tab.border} ${tab.hover} ${
                  activeTab === tab.key ? tab.activeClass : tab.inactiveClass
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                <span className="inline-block align-middle mr-2">
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "stats" && (
            <section className="w-full">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-purple-700 dark:text-purple-300 tracking-wide drop-shadow-lg">
                {t("adminDashboard.stats.title")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
                {staticStats.map((stat) => (
                  <div
                    key={stat.key}
                    className="bg-white/60 dark:bg-gray-900/60 rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 flex flex-col items-center border border-blue-100 dark:border-blue-900 backdrop-blur-lg hover:scale-105 transition-transform duration-200"
                  >
                    <span className="text-2xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-2 drop-shadow-lg">
                      {stat.value}
                    </span>
                    <span className="text-base md:text-xl font-semibold text-gray-700 dark:text-gray-300 tracking-wide">
                      {t(`adminDashboard.stats.${stat.key}`)}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === "graph" && (
            <section className="flex gap-6 md:gap-10 w-full">
              <div className="bg-white/60 dark:bg-gray-900/60 rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 border border-purple-100 dark:border-purple-900 backdrop-blur-lg flex flex-col items-center w-full">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-purple-700 dark:text-purple-300 tracking-wide drop-shadow-lg">
                  {t("adminDashboard.graph.loginsTitle")}
                </h2>
                <ResponsiveContainer width="100%" height={250} minHeight={180}>
                  <BarChart
                    data={loginData}
                    margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" fontSize={10} />
                    <YAxis fontSize={10} />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="logins"
                      fill="#6366f1"
                      name={t("adminDashboard.graph.loginsBar")}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white/60 dark:bg-gray-900/60 rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 border border-pink-100 dark:border-pink-900 backdrop-blur-lg flex flex-col items-center w-full">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-pink-700 dark:text-pink-300 tracking-wide drop-shadow-lg">
                  {t("adminDashboard.graph.pieTitle")}
                </h2>
                <ResponsiveContainer width="100%" height={250} minHeight={180}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={index === 0 ? "#6366f1" : "#f472b6"}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 md:mt-8 text-base md:text-xl font-semibold text-gray-700 dark:text-gray-300">
                  <span className="font-bold text-blue-700">
                    {t("adminDashboard.graph.totalUsers")}
                  </span>{" "}
                  {totalUsers}
                  <br />
                  <span className="font-bold text-purple-700">
                    {t("adminDashboard.graph.loginUsers")}
                  </span>{" "}
                  {loginUsers}
                </div>
              </div>
            </section>
          )}

          {activeTab === "users" && (
            <section className="w-full">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-green-700 dark:text-green-400 tracking-wide drop-shadow-lg">
                {t("adminDashboard.users.title")}
              </h2>
              <div className="overflow-x-auto bg-white/60 dark:bg-gray-900/60 rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-10 border border-green-100 dark:border-green-900 backdrop-blur-lg">
                <table className="min-w-full text-left rounded-xl md:rounded-2xl overflow-hidden text-xs md:text-base">
                  <thead>
                    <tr className="border-b border-blue-200 dark:border-blue-800 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 dark:from-green-900 dark:via-blue-900 dark:to-purple-900">
                      <th className="py-2 md:py-4 px-2 md:px-6 font-bold text-xs md:text-lg">
                        {t("adminDashboard.users.firstName")}
                      </th>
                      <th className="py-2 md:py-4 px-2 md:px-6 font-bold text-xs md:text-lg">
                        {t("adminDashboard.users.lastName")}
                      </th>
                      <th className="py-2 md:py-4 px-2 md:px-6 font-bold text-xs md:text-lg">
                        {t("adminDashboard.users.email")}
                      </th>
                      <th className="py-2 md:py-4 px-2 md:px-6 font-bold text-xs md:text-lg">
                        {t("adminDashboard.users.role")}
                      </th>
                      <th className="py-2 md:py-4 px-2 md:px-6 font-bold text-xs md:text-lg">
                        {t("adminDashboard.users.registered")}
                      </th>
                      <th className="py-2 md:py-4 px-2 md:px-6 font-bold text-xs md:text-lg">
                        {t("adminDashboard.users.lastLogin")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.length === 0 ? (
                      <tr>
                        <td
                          colSpan={6}
                          className="py-4 md:py-6 text-center text-gray-500 text-xs md:text-xl"
                        >
                          {t("adminDashboard.users.noUsers")}
                        </td>
                      </tr>
                    ) : (
                      users.map((user: any, idx: number) => (
                        <tr
                          key={user.email || idx}
                          className="border-b border-gray-200 dark:border-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors duration-150 dark:text-white"
                        >
                          <td className="py-2 md:py-4 px-2 md:px-6 text-xs md:text-lg">
                            {user.firstName || "-"}
                          </td>
                          <td className="py-2 md:py-4 px-2 md:px-6 text-xs md:text-lg">
                            {user.lastName || "-"}
                          </td>
                          <td className="py-2 md:py-4 px-2 md:px-6 text-xs md:text-lg">
                            {user.email}
                          </td>
                          <td className="py-2 md:py-4 px-2 md:px-6 text-xs md:text-lg">
                            {user.role || "-"}
                          </td>
                          <td className="py-2 md:py-4 px-2 md:px-6 text-xs md:text-lg">
                            {user.registerTime
                              ? new Date(user.registerTime).toLocaleString()
                              : "-"}
                          </td>
                          <td className="py-2 md:py-4 px-2 md:px-6 text-xs md:text-lg">
                            {user.loginTime
                              ? new Date(user.loginTime).toLocaleString()
                              : "-"}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
