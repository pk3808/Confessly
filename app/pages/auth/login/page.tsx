"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Google, Facebook, Email, Visibility, VisibilityOff, Key } from "@mui/icons-material";
import Logo from "@/app/components/logo/logo";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    console.log("Login with", { email, password });
    // Add login logic here
  };

  const handleGoogleLogin = () => {
    console.log("Login with Google");
    // Add Google login logic here
  };

  const handleFacebookLogin = () => {
    console.log("Login with Facebook");
    // Add Facebook login logic here
  };

  const handleSignUpRedirect = () => {
    router.push("signup");
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
    // Add forgot password logic or redirect here
    router.push("forgotPassword");
  };

  return (
    <main className="h-screen overflow-hidden w-screen bg-gradient-to-br from-[#EADDCA] to-[#ffffff] flex items-center justify-center px-4">
     <Logo />
      <section className="bg-gradient-to-br from-[#FFE7C7] to-purple-200 shadow-2xl rounded-2xl flex flex-col md:flex-row w-full max-w-3xl p-3 md:p-6 transition-transform duration-500 md:hover:scale-105">
        {/* Left Section - Image */}
        
        <div className="flex-1 flex items-center justify-center overflow-hidden relative">
          <Image
            src="/images/loginc.png"
            alt="Welcome back!"
            width={400}
            height={400}
            className="rounded-lg w-56 h-56 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-90 lg:h-90 "
            priority
          />
        </div>

        {/* Right Section - Form */}
        <div className="flex-1 flex flex-col justify-center mt-4 md:mt-0 px-3">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 via-orange-400 to-orange-500 bg-clip-text text-transparent">
            Welcome Back
          </h2>
          <p className="text-gray-600 mb-4">
            Please login to your account to continue.
          </p>
          <div className="space-y-4">
            <div className="flex items-center border rounded-md shadow-sm px-2 py-1 focus-within:ring-2 focus-within:ring-orange-300">
              <Email className="text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 bg-transparent outline-none text-gray-700 text-base"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center border rounded-md shadow-sm px-2 py-1 focus-within:ring-2 focus-within:ring-orange-300">
              <Key className="text-gray-500 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="flex-1 bg-transparent outline-none text-gray-700 text-base"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="ml-2"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <VisibilityOff className="text-gray-500" /> : <Visibility className="text-gray-500" />}
              </button>
            </div>
            <button
              className="w-full py-2 px-3 bg-orange-400 hover:bg-orange-600 text-white rounded-[10px] shadow-md transition-all duration-500 focus:ring-2 focus:ring-purple-300"
              onClick={handleLogin}
            >
              Login
            </button>
            <div className="text-right mt-2">
              <span
                className="text-sm text-purple-600 hover:underline cursor-pointer"
                onClick={handleForgotPassword}
              >
                Forgot password?
              </span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center space-x-3">
            <button
              className="flex items-center space-x-2 py-1.5 px-3 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-md transition-all duration-500 focus:ring-2 focus:ring-red-300"
              onClick={handleGoogleLogin}
            >
              <Google />
              <span>Google</span>
            </button>
            <button
              className="flex items-center space-x-2 py-1.5 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md transition-all duration-500 focus:ring-2 focus:ring-blue-300"
              onClick={handleFacebookLogin}
            >
              <Facebook />
              <span>Facebook</span>
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Don't have an account? {" "}
              <span
                className="text-purple-600 hover:underline cursor-pointer"
                onClick={handleSignUpRedirect}
              >
                Sign up here
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
