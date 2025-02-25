"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Google, Facebook, Person, Email, Visibility, VisibilityOff, Key, Help } from "@mui/icons-material";
import Otp from "@/app/components/otp/otp";

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
    // Add sign-up logic here
    setIsOtpScreen(true);
  };

  const handleGoogleLogin = () => {
    console.log("Login with Google");
    // Add Google login logic here
  };

  const handleFacebookLogin = () => {
    console.log("Login with Facebook");
    // Add Facebook login logic here
  };

  const handleLoginRedirect = () => {
    router.push("login");
  };

  return (
    <main className="h-screen w-screen overflow-hidden bg-gradient-to-br from-[#f1ebe3] to-[#f3ebe2] flex items-center justify-center px-4">
      {/* <Logo /> */}
      <h1 className="absolute top-4 left-4 text-xl md:text-2xl font-serif font-bold text-[#000000] tracking-wide">Confessly</h1>
      <button
        className="absolute top-4 hidden justify-center md:flex right-4  items-center space-x-2 py-1.5 px-3 hover:bg-gray-800 text-black hover:text-white rounded-md shadow-md transition-all duration-500 focus:ring-2 focus:ring-blue-300 border-2 border-black w-[130px]"
        onClick={handleFacebookLogin}
      >
        <Help className="text-inheret" />
        <span className="text-inherit">Help</span>
      </button>
      <section className="bg-gradient-to-br from-[#fcfbfa] to-[#e2ddd7] shadow-2xl rounded-2xl flex flex-col md:flex-row w-full max-w-4xl p-3 md:p-6 transition-transform duration-500 ">
        {/* Left Section - Image */}
        {isOtpScreen ? (
          <Otp />
        ) : (<>
          <div className="flex-1 flex items-center justify-center overflow-hidden relative">
            <Image
              src="/images/signup.png"
              alt="Welcome to the community"
              width={400}
              height={400}
              className="rounded-lg w-56 h-56 sm:w-60 sm:h-60 md:w-[325px] md:h-[375px] lg:w-90 lg:h-90"
              priority
            />

          </div>

          {/* Right Section - Form */}
          <div className="flex-1 flex flex-col justify-center mt-4 md:mt-0 px-3">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-black via-black to-black bg-clip-text text-transparent mb-3">
              Create Your Account
            </h2>
            <p className="text-gray-600 mb-4">
              Join the community and share your thoughts securely.
            </p>
            <div className="space-y-4">
              <div className="flex items-center border  rounded-md shadow-sm px-2 py-1 focus-within:ring-2 focus-within:ring-orange-300">
                <Person className="text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Username"
                  className="flex-1 bg-transparent outline-none text-gray-700 text-base"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
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
              <div className="flex items-center border rounded-md shadow-sm px-2 py-1 focus-within:ring-2 focus-within:ring-orange-300">
                <Key className="text-gray-500 mr-2" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="flex-1 bg-transparent outline-none text-gray-700 text-base"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="ml-2"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? <VisibilityOff className="text-gray-500" /> : <Visibility className="text-gray-500" />}
                </button>
              </div>
              <button
                className="w-full py-2 px-3 bg-orange-300 hover:bg-orange-600 text-white rounded-[10px] shadow-md transition-all duration-500 focus:ring-2 focus:ring-purple-300"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>
            <div className="mt-4 flex items-center justify-center space-x-3">
              <button
                className="flex items-center space-x-2 py-1.5 px-3 hover:bg-red-700 text-black hover:text-white rounded-md shadow-md transition-all duration-500 focus:ring-2 focus:ring-red-300 border-2 border-black w-[130px]"
                onClick={handleGoogleLogin}
              >
                <Google className="text-inheret" />
                <span className="text-inherit">Google</span>
              </button>

              <button
                className="flex items-center space-x-2 py-1.5 px-3 hover:bg-blue-700 text-black hover:text-white rounded-md shadow-md transition-all duration-500 focus:ring-2 focus:ring-blue-300 border-2 border-black w-[130px]"
                onClick={handleFacebookLogin}
              >
                <Facebook className="text-inheret" />
                <span className="text-inherit">Facebook</span>
              </button>

            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Already have an account? {" "}
                <span
                  className="text-orange-700 hover:underline font-bold cursor-pointer"
                  onClick={handleLoginRedirect}
                >
                  Login here
                </span>
              </p>
            </div>
          </div>
        </>)}

      </section>
    </main>
  );
};

export default SignUpPage;
