// Layout.tsx
import React from "react";
import ThemeToggle from "../../components/ThemeToggle";
import {
  Home,
  Chat,
  Forum,
  People,
  Photo,
  Settings,
  GetApp,
} from "@mui/icons-material";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-full overflow-hidden text-gray-800 dark:text-gray-200">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 bg-opacity-80 text-white p-6 rounded-r-3xl shadow-lg flex flex-col justify-between">
        <div className="space-y-10">
          {/* Logo */}
          <div className="text-4xl font-bold tracking-tight text-center">
            Confessly
          </div>

          {/* Theme Toggle */}
          <div className="flex justify-center">
            <ThemeToggle />
          </div>

          {/* Nav Links */}
          <nav className="space-y-4">
            <SidebarLink icon={<Home fontSize="small" />} text="News Feed" />
            <SidebarLink icon={<Chat fontSize="small" />} text="Messages" />
            <SidebarLink icon={<Forum fontSize="small" />} text="Forums" />
            <SidebarLink icon={<People fontSize="small" />} text="Friends" />
            <SidebarLink icon={<Photo fontSize="small" />} text="Media" />
            <SidebarLink icon={<Settings fontSize="small" />} text="Settings" />
          </nav>
        </div>

        {/* Footer link */}
        <div className="text-center text-sm">
          <a
            href="#"
            className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <GetApp fontSize="small" />
            Download the App
          </a>
        </div>
      </aside>

      {/* Main content + Right Sidebar */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 shadow-md bg-white dark:bg-gray-800">
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            Welcome back <span>👋</span>
          </h1>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 shadow">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none px-2 text-sm text-gray-700 dark:text-gray-200"
              />
            </div>

            {/* Notifications */}
            <button className="relative text-gray-500 dark:text-gray-300 hover:text-blue-500 transition">
              <span className="material-icons">notifications</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* Avatar */}
            <div className="w-9 h-9 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-sm font-bold text-white cursor-pointer">
              U
            </div>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Feed Content */}
          <main className="flex-1 overflow-y-auto p-6">{children}</main>

          {/* Right Sidebar */}
          <aside className="w-80 p-4 pr-6 overflow-y-auto hidden xl:block space-y-6">
            {/* Stories */}
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <div className="font-bold text-lg text-gray-800">Stories</div>
              <div className="flex space-x-4 mt-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full" />
                <div className="w-16 h-16 bg-gray-300 rounded-full" />
                <div className="w-16 h-16 bg-gray-300 rounded-full" />
              </div>
            </div>

            {/* Suggestions */}
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <div className="font-bold text-lg text-gray-800">Suggestions</div>
              <div className="space-y-4 mt-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full" />
                  <div>
                    <div className="font-bold">Nick Shelburne</div>
                    <button className="text-blue-500">Follow</button>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full" />
                  <div>
                    <div className="font-bold">Brittni Lando</div>
                    <button className="text-blue-500">Follow</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <div className="font-bold text-lg text-gray-800">Recommendations</div>
              <div className="flex space-x-4 mt-4">
                {["UI/UX", "Music", "Cooking", "Hiking"].map((item, idx) => (
                  <div
                    key={idx}
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-white ${
                      ["bg-pink-400", "bg-indigo-400", "bg-green-400", "bg-teal-400"][idx]
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

const SidebarLink = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <a
    href="#"
    className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
  >
    <span>{icon}</span>
    <span className="text-lg font-medium">{text}</span>
  </a>
);

export default Layout;
