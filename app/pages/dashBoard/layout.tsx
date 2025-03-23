import React from "react";
import ThemeToggle from "../../components/ThemeToggle";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-gray-100 to-white">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-800 p-6 text-white rounded-r-xl">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-3xl font-semibold">Confessly</div>
          <ThemeToggle />
          <div className="space-y-6">
            <a href="#" className="text-gray-300 hover:text-white text-xl">
              News Feed
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-xl">
              Messages
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-xl">
              Forums
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-xl">
              Friends
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-xl">
              Media
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-xl">
              Settings
            </a>
          </div>
          <div className="mt-10 text-sm font-semibold">
            <a href="#" className="text-gray-300 hover:text-white">
              Download the App
            </a>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 bg-gray-50 p-6">
        {/* Top bar */}
      

        {/* Content */}
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
