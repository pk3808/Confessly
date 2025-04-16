"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Google,
  Facebook,
  Email,
  Visibility,
  VisibilityOff,
  Key,
  Help,
} from "@mui/icons-material";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    console.log("Login with", { email, password });
    router.push("/pages/dashBoard");
  };

  const handleGoogleLogin = () => {
    console.log("Login with Google");
  };

  const handleFacebookLogin = () => {
    console.log("Login with Facebook");
  };

  const handleSignUpRedirect = () => {
    router.push("signup");
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
    router.push("forgotPassword");
  };

  return (
    <main className="h-screen w-screen bg-gradient-to-br from-[#F7F7F8] to-[#FFFFFF] flex items-center justify-center px-4">
      <h1 className="absolute top-4 left-4 text-xl md:text-2xl font-serif font-bold text-black tracking-wide">
        Confessly
      </h1>

      <button
        className="absolute top-4 hidden md:flex right-4 items-center space-x-2 py-1.5 px-3 hover:bg-gray-800 text-black hover:text-white rounded-md shadow-md transition-all duration-500 focus:ring-2 focus:ring-blue-300 border-2 border-black w-[130px]"
        onClick={handleFacebookLogin}
      >
        <Help />
        <span>Help</span>
      </button>

      <section className="bg-white/70 backdrop-blur-sm shadow-2xl rounded-2xl flex flex-col md:flex-row w-full max-w-4xl p-3 md:p-6 transition-transform duration-500">
        {/* Left Image */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/images/loginc.png"
            alt="Welcome back!"
            width={400}
            height={400}
            className="rounded-lg w-56 h-56 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-90 lg:h-90"
            priority
          />
        </div>

        {/* Right Form */}
        <div className="flex-1 flex flex-col justify-center mt-4 md:mt-0 px-3">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-black via-black to-black bg-clip-text text-transparent">
            Welcome Back
          </h2>
          <p className="text-gray-600 mb-4">
            Please login to your account to continue.
          </p>

          <div className="space-y-5">
            {/* Email Input */}
            <div className="relative">
              <Email className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none text-gray-700 placeholder-gray-400 transition-all duration-300"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-10 py-2 w-full rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none text-gray-700 placeholder-gray-400 transition-all duration-300"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </button>
            </div>

            {/* Login Button */}
            <button
              className="w-full py-2 px-3 bg-orange-400 hover:bg-orange-600 text-white rounded-xl shadow-md transition-all duration-500 focus:ring-2 focus:ring-purple-300"
              onClick={handleLogin}
            >
              Login
            </button>

            {/* Forgot Password */}
            <div className="text-right">
              <span
                className="text-sm text-orange-600 hover:underline cursor-pointer"
                onClick={handleForgotPassword}
              >
                Forgot password?
              </span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="mt-6 flex items-center justify-center space-x-3">
            <button
              className="flex items-center space-x-2 py-1.5 px-3 hover:bg-red-700 text-black hover:text-white rounded-md shadow-md transition-all duration-500 focus:ring-2 focus:ring-red-300 border-2 border-black w-[130px]"
              onClick={handleGoogleLogin}
            >
              <Google />
              <span>Google</span>
            </button>
            <button
              className="flex items-center space-x-2 py-1.5 px-3 hover:bg-blue-700 text-black hover:text-white rounded-md shadow-md transition-all duration-500 focus:ring-2 focus:ring-blue-300 border-2 border-black w-[130px]"
              onClick={handleFacebookLogin}
            >
              <Facebook />
              <span>Facebook</span>
            </button>
          </div>

          {/* Sign up Redirect */}
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <span
                className="text-orange-700 font-bold hover:underline cursor-pointer"
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
