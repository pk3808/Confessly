"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Google, Facebook, Person, Email, Visibility, VisibilityOff, Key } from "@mui/icons-material";

const SignUpPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleSignUp = () => {
    console.log("Sign Up with", { username, email, password, confirmPassword });
    // Add sign-up logic here
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
    <main className="h-screen w-screen  bg-gradient-to-br from-[#EADDCA] to-[#ffffff] flex items-center justify-center px-4">
      <section className="bg-gradient-to-br from-[#FFE7C7] to-purple-200 shadow-2xl rounded-2xl flex flex-col md:flex-row w-full max-w-4xl p-3 md:p-6 transition-transform duration-500 hover:scale-105">
        {/* Left Section - Image */}
        <div className="flex-1 flex items-center justify-center overflow-hidden relative">
          <Image
            src="/images/signup.png"
            alt="Welcome to the community"
            width={400}
            height={400}
            className="rounded-lg"
            priority
          />
        </div>

        {/* Right Section - Form */}
        <div className="flex-1 flex flex-col justify-center mt-4 md:mt-0 px-3">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-3">
            Create Your Account
          </h2>
          <p className="text-gray-600 mb-4">
            Join the community and share your thoughts securely.
          </p>
          <div className="space-y-4">
            <div className="flex items-center border rounded-md shadow-sm px-2 py-1 focus-within:ring-2 focus-within:ring-orange-300">
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
              className="w-full py-2 px-3 bg-orange-400 hover:bg-orange-600 text-white rounded-[10px] shadow-md transition-all duration-500 focus:ring-2 focus:ring-purple-300"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
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
              Already have an account? {" "}
              <span
                className="text-purple-600 hover:underline cursor-pointer"
                onClick={handleLoginRedirect}
              >
                Login here
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignUpPage;
