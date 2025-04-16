"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Google,
  Facebook,
  Person,
  Email,
  Visibility,
  VisibilityOff,
  Key,
  Help,

} from "@mui/icons-material";
import Otp from "@/app/components/otp/OtpPage";

const SignUpPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isOtpScreen, setIsOtpScreen] = useState(false);
  const router = useRouter();

  const handleSignUp = () => {
    console.log("Sign Up with", { username, email, password, confirmPassword });

    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setIsOtpScreen(true); // Proceed to OTP screen
  };

  const handleGoogleLogin = () => {
    console.log("Login with Google");
  };

  const handleFacebookLogin = () => {
    console.log("Login with Facebook");
  };

  const handleLoginRedirect = () => {
    router.push("login");
  };

  return (
    <main className="h-screen w-screen bg-gradient-to-br from-[#F7F7F8] to-[#FFFFFF] flex items-center justify-center px-4">
      {/* Branding & Help */}
      <h1 className="absolute top-4 left-4 text-xl md:text-2xl font-serif font-bold text-[#000000]">
        Confessly
      </h1>
      <button
        onClick={handleFacebookLogin}
        className="absolute top-4 right-4 hidden md:flex items-center space-x-2 px-3 py-1.5 text-black hover:bg-gray-800 hover:text-white border-2 border-black rounded-md shadow-md transition-all duration-300"
      >
        <Help />
        <span>Help</span>
      </button>

      {/* Main Card */}
      <section className="bg-white shadow-2xl rounded-2xl flex flex-col md:flex-row w-full max-w-4xl p-3 md:p-6 transition-transform duration-500">
        {isOtpScreen ? (
          <Otp />
        ) : (
          <>
            {/* Left Image */}
            <div className="flex-1 flex items-center justify-center overflow-hidden relative">
              <Image
                src="/images/signup.png"
                alt="Welcome to the community"
                width={400}
                height={400}
                className="rounded-lg w-56 h-56 sm:w-60 sm:h-60 md:w-[325px] md:h-[375px]"
                priority
              />
            </div>

            {/* Right Form */}
            <div className="flex-1 flex flex-col justify-center mt-4 md:mt-0 px-3">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-black to-black bg-clip-text text-transparent mb-3">
                Create Your Account
              </h2>
              <p className="text-gray-600 mb-4">
                Join the community and share your thoughts securely.
              </p>

              {/* Input Fields */}
              <div className="space-y-4">
                {/* Username */}
                <div className="relative w-full">
                  <Person className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-300"
                  />
                </div>

                {/* Email */}
                <div className="relative w-full">
                  <Email className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-300"
                  />
                </div>

                {/* Password */}
                <div className="relative w-full">
                  <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-300"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </button>
                </div>

                {/* Confirm Password */}
                <div className="relative w-full">
                  <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-300"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </button>
                </div>

                {/* Sign Up Button */}
                <button
                  className="w-full py-2 bg-orange-300 hover:bg-orange-600 text-white rounded-[10px] shadow-md transition duration-300 focus:ring-2 focus:ring-orange-300"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
              </div>

              {/* Social Auth Buttons */}
              <div className="mt-4 flex items-center justify-center space-x-3">
                <button
                  className="flex items-center w-[135px] text-center space-x-2 px-5 py-1.5 border-2 border-black text-black hover:bg-red-700 hover:text-white rounded-md transition duration-300"
                  onClick={handleGoogleLogin}
                >
                  <Google />
                  <span className="text-center">Google</span>
                </button>
                <button
                  className="flex items-center w-[135px] text-center space-x-2 px-3 py-1.5 border-2 border-black text-black hover:bg-blue-700 hover:text-white rounded-md transition duration-300"
                  onClick={handleFacebookLogin}
                >
                  <Facebook />
                  <span>Facebook</span>
                </button>
              </div>

              {/* Login Link */}
              <div className="mt-4 text-center">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <span
                    className="text-orange-700 font-bold hover:underline cursor-pointer"
                    onClick={handleLoginRedirect}
                  >
                    Login here
                  </span>
                </p>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default SignUpPage;
