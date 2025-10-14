import SiteHeader from "@/components/SiteHeader";
import { useState, useMemo } from "react";
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
import {
  BarChart3,
  LayoutGrid,
  Users,
  TrendingUp,
  ShieldCheck,
  Cloud,
  Users2,
  CheckCircle2,
} from "lucide-react"; // Using a popular icon library like lucide-react is recommended

// ============================================================================
// DATA HOOK (In a real app, this would be in its own file: hooks/useAdminData.ts)
// ============================================================================
/**
 * A custom hook to centralize data fetching and processing logic.
 * This keeps the main component clean and focused on presentation.
 */
const useAdminData = () => {
  const { t } = useTranslation();

  // Memoize data to avoid re-calculating on every render
  const data = useMemo(() => {
    // SSR Guard
    if (typeof window === "undefined") {
      return {
        users: [],
        loginData: [],
        pieData: [],
        stats: [],
        userMetrics: { total: 0, loggedIn: 0 },
      };
    }

    const allUsers = JSON.parse(localStorage.getItem("All_Users") || "[]");

    // --- Process login data for Bar Chart ---
    const loginCounts: Record<string, number> = {};
    allUsers.forEach((user: any) => {
      if (user.loginTime) {
        const date = new Date(user.loginTime).toISOString().slice(0, 10);
        loginCounts[date] = (loginCounts[date] || 0) + 1;
      }
    });
    const loginData = Object.entries(loginCounts)
      .map(([date, logins]) => ({ date, logins }))
      .sort((a, b) => a.date.localeCompare(b.date));

    // --- Process user data for Pie Chart ---
    const totalUsers = allUsers.length;
    const loginUsers = allUsers.filter((u: any) => !!u.loginTime).length;
    const pieData = [
      { name: t("adminDashboard.pie.loginUsers"), value: loginUsers },
      {
        name: t("adminDashboard.pie.otherUsers"),
        value: totalUsers - loginUsers,
      },
    ];

    // --- Static data for the statistics tab (could also come from an API) ---
    const staticStats = [
      {
        key: "totalITServices",
        value: 42,
        icon: <TrendingUp className="h-8 w-8 text-indigo-500" />,
        color: "indigo",
      },
      {
        key: "cybersecurityProjects",
        value: 18,
        icon: <ShieldCheck className="h-8 w-8 text-rose-500" />,
        color: "rose",
      },
      {
        key: "cloudDeployments",
        value: 27,
        icon: <Cloud className="h-8 w-8 text-sky-500" />,
        color: "sky",
      },
      {
        key: "activeUsers",
        value: 134,
        icon: <Users2 className="h-8 w-8 text-amber-500" />,
        color: "amber",
      },
      {
        key: "incidentsResolved",
        value: 56,
        icon: <CheckCircle2 className="h-8 w-8 text-emerald-500" />,
        color: "emerald",
      },
    ];

    return {
      users: allUsers,
      loginData,
      pieData,
      stats: staticStats,
      userMetrics: { total: totalUsers, loggedIn: loginUsers },
    };
  }, [t]);

  return data;
};

// ============================================================================
// REUSABLE UI COMPONENTS (In a real app, these would be in components/*)
// ============================================================================

// --- TabButton Component ---
const TabButton = ({ tab, activeTab, setActiveTab }: any) => (
  <button
    aria-pressed={activeTab === tab.key}
    className={`flex-shrink-0 whitespace-nowrap min-w-[110px] md:min-w-[140px] relative py-2.5 px-4 md:px-6 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 ${
      activeTab === tab.key
        ? `text-white shadow-lg ${tab.activeClass}`
        : "text-slate-600 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-700/50"
    }`}
    onClick={() => setActiveTab(tab.key)}
  >
    {tab.icon}
    {tab.label}
  </button>
);

// --- StatCard Component ---
const StatCard = ({ stat, t }: any) => {
  const colors: Record<string, string> = {
    indigo:
      "from-indigo-500/10 dark:from-indigo-500/20 border-indigo-200 dark:border-indigo-800",
    rose: "from-rose-500/10 dark:from-rose-500/20 border-rose-200 dark:border-rose-800",
    sky: "from-sky-500/10 dark:from-sky-500/20 border-sky-200 dark:border-sky-800",
    amber:
      "from-amber-500/10 dark:from-amber-500/20 border-amber-200 dark:border-amber-800",
    emerald:
      "from-emerald-500/10 dark:from-emerald-500/20 border-emerald-200 dark:border-emerald-800",
  };
  return (
    <div
      className={`bg-white/50 dark:bg-slate-800/50 rounded-2xl shadow-lg p-6 flex items-center gap-6 border backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:scale-[1.03] bg-gradient-to-br to-transparent ${
        colors[stat.color]
      }`}
    >
      <div className={`p-4 rounded-full bg-slate-200/50 dark:bg-slate-900/50`}>
        {stat.icon}
      </div>
      <div>
        <p className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
          {stat.value}
        </p>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {t(`adminDashboard.stats.${stat.key}`)}
        </p>
      </div>
    </div>
  );
};

// --- ChartCard Component ---
const ChartCard = ({ title, children }: any) => (
  <div className="bg-white/50 dark:bg-slate-800/50 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-md p-4 md:p-6 w-full">
    <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white mb-4 text-center">
      {title}
    </h3>
    <div className="w-full h-[300px] min-h-[200px]">{children}</div>
  </div>
);

// ============================================================================
// TAB CONTENT COMPONENTS
// ============================================================================

// --- Stats Tab Content ---
const StatsTabContent = ({ stats, t }: any) => (
  <section className="w-full max-w-7xl animate-fade-in">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {stats.map((stat: any) => (
        <StatCard key={stat.key} stat={stat} t={t} />
      ))}
    </div>
  </section>
);

// --- Graph Tab Content ---
const GraphTabContent = ({ loginData, pieData, userMetrics, t }: any) => {
  const PIE_COLORS = ["#6366f1", "#a78bfa"]; // Indigo-500, Purple-400

  return (
    <section className="w-full max-w-7xl flex flex-col lg:flex-row gap-6 animate-fade-in">
      {/* Bar Chart */}
      <div className="w-full lg:w-3/5">
        <ChartCard title={t("adminDashboard.graph.loginsTitle")}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={loginData}
              margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
            >
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#818cf8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0.9} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
              <XAxis
                dataKey="date"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  background: "rgba(255, 255, 255, 0.8)",
                  border: "1px solid #e2e8f0",
                  borderRadius: "0.75rem",
                  backdropFilter: "blur(4px)",
                }}
              />
              <Bar
                dataKey="logins"
                name={t("adminDashboard.graph.loginsBar")}
                fill="url(#barGradient)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Pie Chart */}
      <div className="w-full lg:w-2/5">
        <ChartCard title={t("adminDashboard.graph.pieTitle")}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={85}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry: any, index: number) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={PIE_COLORS[index % PIE_COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: "rgba(255, 255, 255, 0.8)",
                  border: "1px solid #e2e8f0",
                  borderRadius: "0.75rem",
                  backdropFilter: "blur(4px)",
                }}
              />
              <Legend iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </section>
  );
};

// --- Users Tab Content ---
const UsersTabContent = ({ users, t }: any) => (
  <section className="w-full max-w-7xl animate-fade-in">
    <div className="overflow-x-auto bg-white/50 dark:bg-slate-800/50 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-md p-2 md:p-4">
      <table className="min-w-full text-sm">
        <thead className="border-b border-slate-200/80 dark:border-slate-700/80">
          <tr>
            {[
              "firstName",
              "lastName",
              "email",
              "role",
              "registered",
              "lastLogin",
            ].map((header) => (
              <th
                key={header}
                className="py-3 px-4 text-left font-semibold text-slate-600 dark:text-slate-300 whitespace-nowrap"
              >
                {t(`adminDashboard.users.${header}`)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={6} className="py-10 text-center text-slate-500">
                {t("adminDashboard.users.noUsers")}
              </td>
            </tr>
          ) : (
            users.map((user: any, idx: number) => (
              <tr
                key={user.email || idx}
                className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-500/10 transition-colors duration-200"
              >
                <td className="py-3 px-4 text-slate-800 dark:text-slate-200 whitespace-nowrap">
                  {user.firstName || "N/A"}
                </td>
                <td className="py-3 px-4 text-slate-800 dark:text-slate-200 whitespace-nowrap">
                  {user.lastName || "N/A"}
                </td>
                <td className="py-3 px-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  {user.email}
                </td>
                <td className="py-3 px-4 text-slate-800 dark:text-slate-200 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300">
                    {user.role || "User"}
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  {user.registerTime
                    ? new Date(user.registerTime).toLocaleString()
                    : "-"}
                </td>
                <td className="py-3 px-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">
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
);

// ============================================================================
// MAIN DASHBOARD COMPONENT
// ============================================================================
const AdminDashboard = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("stats");
  const { users, loginData, pieData, stats, userMetrics } = useAdminData();

  const tabs = [
    {
      key: "stats",
      label: t("adminDashboard.tabs.stats"),
      icon: <LayoutGrid className="h-5 w-5" />,
      activeClass: "bg-indigo-600",
    },
    {
      key: "graph",
      label: t("adminDashboard.tabs.graph"),
      icon: <BarChart3 className="h-5 w-5" />,
      activeClass: "bg-indigo-600",
    },
    {
      key: "users",
      label: t("adminDashboard.tabs.users"),
      icon: <Users className="h-5 w-5" />,
      activeClass: "bg-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      <div className="flex-1 flex flex-col">
        <SiteHeader />

        <main className="flex-grow p-4 md:p-8">
          {/* Dashboard Header */}
          <div className="max-w-7xl mx-auto mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white tracking-tight">
              {t("adminDashboard.title")}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Welcome back, here's an overview of your platform.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="max-w-7xl mx-auto mb-8">
            <div className="rounded-xl bg-slate-200/80 dark:bg-slate-800/80 p-1.5">
              <div className="-mx-1 overflow-x-auto no-scrollbar">
                <div className="inline-flex items-center space-x-2 px-1">
                  {tabs.map((tab) => (
                    <TabButton
                      key={tab.key}
                      tab={tab}
                      activeTab={activeTab}
                      setActiveTab={setActiveTab}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-7xl mx-auto">
            {activeTab === "stats" && <StatsTabContent stats={stats} t={t} />}
            {activeTab === "graph" && (
              <GraphTabContent
                loginData={loginData}
                pieData={pieData}
                userMetrics={userMetrics}
                t={t}
              />
            )}
            {activeTab === "users" && <UsersTabContent users={users} t={t} />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
