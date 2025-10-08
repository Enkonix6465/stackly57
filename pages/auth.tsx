import { Eye, EyeClosed } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const ADMIN_EMAIL = "admin@enkonix.in";
const ADMIN_PASSWORD = "admin123";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("user");
  const [userAction, setUserAction] = useState("login");
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const [userRegister, setUserRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showAdminPassword, setShowAdminPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const [userForgot, setUserForgot] = useState({ email: "", password: "" });
  const [adminLogin, setAdminLogin] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  // Helper functions for localStorage
  const getAllUsers = () =>
    JSON.parse(localStorage.getItem("All_Users") || "[]");
  const setAllUsers = (users: any[]) =>
    localStorage.setItem("All_Users", JSON.stringify(users));
  const setCurrentUser = (user: any) =>
    localStorage.setItem("Current_User", JSON.stringify(user));

  // User Register
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const users = getAllUsers();
    if (users.find((u: any) => u.email === userRegister.email)) {
      setMessage("User already exists.");
      return;
    }
    const now = new Date().toISOString();
    const newUser = {
      ...userRegister,
      registerTime: now,
      loginTime: null,
      role: "user",
    };
    users.push(newUser);
    setAllUsers(users);
    setMessage("Registration successful! You can now login.");
    setUserAction("login");
  };

  // User Login
  const handleUserLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const users = getAllUsers();
    const user = users.find(
      (u: any) =>
        u.email === userLogin.email && u.password === userLogin.password,
    );
    if (!user) {
      setMessage("Invalid credentials.");
      return;
    }
    user.loginTime = new Date().toISOString();
    setCurrentUser(user);
    setMessage("Login successful!");
    // Update login time in All_Users
    setAllUsers(users.map((u: any) => (u.email === user.email ? user : u)));
    window.location.href = "/home1";
  };

  // User Forgot Password
  const handleForgot = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const users = getAllUsers();
    const idx = users.findIndex((u: any) => u.email === userForgot.email);
    if (idx === -1) {
      setMessage("User not found.");
      return;
    }
    users[idx].password = userForgot.password;
    setAllUsers(users);
    setMessage("Password updated. You can now login.");
    setUserAction("login");
  };

  // Admin Login
  const handleAdminLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      adminLogin.email === ADMIN_EMAIL &&
      adminLogin.password === ADMIN_PASSWORD
    ) {
      setCurrentUser({
        email: ADMIN_EMAIL,
        role: "admin",
        loginTime: new Date().toISOString(),
      });
      setMessage("Admin login successful!");
      window.location.href = "/admin-dashboard";
    } else {
      setMessage("Invalid admin credentials.");
    }
  };

  return (
    <div className="min-h-[100vh] flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
      <div className="w-full max-w-md mx-auto bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-2xl p-8 text-center backdrop-blur-md">
        <Image
          src="/logo-stackly.png"
          alt="Logo"
          width={100}
          height={100}
          className="mx-auto mb-4"
        />

        <div className="flex justify-center mb-8 gap-4">
          {/* Tab Switcher */}
          <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-lg p-1 flex mb-6">
            <button
              onClick={() => {
                setActiveTab("user");
                setMessage("");
              }}
              className={`w-1/2 p-2 rounded-md text-sm font-semibold transition-colors ${
                activeTab === "user"
                  ? "bg-white dark:bg-gray-700 text-blue-600 shadow"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700/50"
              }`}
            >
              User
            </button>
            <button
              onClick={() => {
                setActiveTab("admin");
                setMessage("");
              }}
              className={`w-1/2 p-2 rounded-md text-sm font-semibold transition-colors ${
                activeTab === "admin"
                  ? "bg-white dark:bg-gray-700 text-blue-600 shadow"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700/50"
              }`}
            >
              Admin
            </button>
          </div>
        </div>
        {message && (
          <div className="mt-6 text-base font-semibold text-blue-700 dark:text-blue-300">
            {message}
          </div>
        )}

        {activeTab === "user" && (
          <div>
            {userAction === "register" && (
              <>
                <div className="mb-6 text-gray-700 dark:text-gray-300 text-base font-medium">
                  Join us today! Fill in the details to create your account.
                </div>
                <form className="space-y-4" onSubmit={handleRegister}>
                  <input
                    type="text"
                    required
                    placeholder="First Name"
                    className="w-full px-4 py-2 rounded border"
                    value={userRegister.firstName}
                    onChange={(e) =>
                      setUserRegister({
                        ...userRegister,
                        firstName: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    required
                    placeholder="Last Name"
                    className="w-full px-4 py-2 rounded border"
                    value={userRegister.lastName}
                    onChange={(e) =>
                      setUserRegister({
                        ...userRegister,
                        lastName: e.target.value,
                      })
                    }
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full px-4 py-2 rounded border"
                    value={userRegister.email}
                    onChange={(e) =>
                      setUserRegister({
                        ...userRegister,
                        email: e.target.value,
                      })
                    }
                  />
                  <input
                    type={showRegisterPassword ? "text" : "password"}
                    required
                    placeholder="Password"
                    className="w-full px-4 py-2 rounded border"
                    value={userRegister.password}
                    onChange={(e) =>
                      setUserRegister({
                        ...userRegister,
                        password: e.target.value,
                      })
                    }
                  />
                  <div className="w-full flex justify-end mt-1">
                    <button
                      type="button"
                      className="text-sm  absolute       right-10 mb-0 inline-block  bottom-[195px]     text-blue-600 dark:text-blue-400 hover:underline focus:outline-none"
                      onClick={() => setShowRegisterPassword((prev) => !prev)}
                    >
                      {showRegisterPassword ? <EyeClosed /> : <Eye />}
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition"
                  >
                    Register
                  </button>
                </form>
                <div className="mt-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Already have an account?{" "}
                    <span
                      className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                      onClick={() => {
                        setUserAction("login");
                        setMessage("");
                      }}
                    >
                      Login
                    </span>
                  </span>
                  <hr className="border-t border-gray-300 dark:border-gray-700" />
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                    For admin access, switch to the Admin tab above.
                  </p>
                </div>
              </>
            )}

            {userAction === "login" && (
              <>
                <div className="mb-6 text-gray-700 dark:text-gray-300 text-base font-medium">
                  Welcome back! Please login to continue.
                </div>
                <form className="space-y-4" onSubmit={handleUserLogin}>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full px-4 py-2 rounded border"
                    value={userLogin.email}
                    onChange={(e) =>
                      setUserLogin({ ...userLogin, email: e.target.value })
                    }
                  />
                  <input
                    type={showLoginPassword ? "text" : "password"}
                    required
                    placeholder="Password"
                    className="w-full px-4 py-2 rounded border"
                    value={userLogin.password}
                    onChange={(e) =>
                      setUserLogin({ ...userLogin, password: e.target.value })
                    }
                  />

                  <button
                    type="button"
                    className="text-sm  absolute       right-10 mb-0 inline-block  bottom-[210px]     text-blue-600 dark:text-blue-400 hover:underline focus:outline-none"
                    onClick={() => setShowLoginPassword((prev) => !prev)}
                  >
                    {showLoginPassword ? <EyeClosed /> : <Eye />}
                  </button>

                  <span
                    className="text-sm w-full flex justify-end text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                    onClick={() => {
                      setUserAction("forgot");
                      setMessage("");
                    }}
                  >
                    Forgot Password?
                  </span>
                  <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition"
                  >
                    Login
                  </button>
                </form>
                <div className="mt-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Don't have an account?{" "}
                    <span
                      className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                      onClick={() => {
                        setUserAction("register");
                        setMessage("");
                      }}
                    >
                      Register
                    </span>
                  </span>
                  <hr className="border-t border-gray-300 dark:border-gray-700" />
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                    For admin access, switch to the Admin tab above.
                  </p>
                </div>
              </>
            )}

            {userAction === "forgot" && (
              <>
                <form className="space-y-4" onSubmit={handleForgot}>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full px-4 py-2 rounded border"
                    value={userForgot.email}
                    onChange={(e) =>
                      setUserForgot({ ...userForgot, email: e.target.value })
                    }
                  />
                  <input
                    type={showForgotPassword ? "text" : "password"}
                    required
                    placeholder="New Password"
                    className="w-full px-4 py-2 rounded border"
                    value={userForgot.password}
                    onChange={(e) =>
                      setUserForgot({ ...userForgot, password: e.target.value })
                    }
                  />
                  <div className="w-full flex justify-end mt-1">
                    <button
                      type="button"
                      className="text-sm  absolute       right-10 mb-0 inline-block  bottom-[155px]     text-blue-600 dark:text-blue-400 hover:underline focus:outline-none"
                      onClick={() => setShowForgotPassword((prev) => !prev)}
                    >
                      {showForgotPassword ? <EyeClosed /> : <Eye />}
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition"
                  >
                    Update Password
                  </button>
                </form>
                <div className="mt-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Remembered your password?{" "}
                    <span
                      className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                      onClick={() => {
                        setUserAction("login");
                        setMessage("");
                      }}
                    >
                      Login
                    </span>
                  </span>
                </div>
              </>
            )}
          </div>
        )}

        {activeTab === "admin" && (
          <form className="space-y-4" onSubmit={handleAdminLogin}>
            <input
              type="email"
              required
              placeholder="Admin Email"
              className="w-full px-4 py-2 rounded border"
              value={adminLogin.email}
              onChange={(e) =>
                setAdminLogin({ ...adminLogin, email: e.target.value })
              }
            />
            <input
              type={showAdminPassword ? "text" : "password"}
              required
              placeholder="Admin Password"
              className="w-full px-4 py-2 rounded border"
              value={adminLogin.password}
              onChange={(e) =>
                setAdminLogin({ ...adminLogin, password: e.target.value })
              }
            />
            <div className="w-full flex justify-end mt-1">
              <button
                type="button"
                className="text-sm  absolute       right-10 mb-0 inline-block  bottom-[115px]     text-blue-600 dark:text-blue-400 hover:underline focus:outline-none"
                onClick={() => setShowAdminPassword((prev) => !prev)}
              >
                {showAdminPassword ? <EyeClosed /> : <Eye />}
              </button>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition"
            >
              Admin Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;
