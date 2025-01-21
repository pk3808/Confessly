"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
// import "./signup.css";
import Image from "next/image";
import { Google, Facebook } from "@mui/icons-material";

const SignUpPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
    router.push("/login");
  };

  return (
    <main className="h-screen w-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center px-4">
      <section className="bg-gradient-to-br from-blue-200 to-purple-200 shadow-2xl rounded-3xl flex flex-col md:flex-row w-full max-w-4xl p-4 md:p-8 transition-transform duration-500 hover:scale-105">
        {/* Left Section - Image */}
        <div className="flex-1 flex items-center justify-center overflow-hidden relative">
          <Image
            src="/images/signup.png"
            alt="Welcome to the community"
            width={500}
            height={500}
            className="rounded-lg"
            priority
          />
        </div>

        {/* Right Section - Form */}
        <div className="flex-1 flex flex-col justify-center mt-6 md:mt-0 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4">
            Create Your Account
          </h2>
          <p className="text-gray-600 mb-6">
            Join the community and share your thoughts securely.
          </p>
          <div className="space-y-4">
            <div className="flex items-center border-b border-purple-400 pb-2">
              <input
                type="text"
                placeholder="Username"
                className="flex-1 bg-transparent outline-none text-gray-700 text-lg"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex items-center border-b border-purple-400 pb-2">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 bg-transparent outline-none text-gray-700 text-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center border-b border-purple-400 pb-2">
              <input
                type="password"
                placeholder="Password"
                className="flex-1 bg-transparent outline-none text-gray-700 text-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center border-b border-purple-400 pb-2">
              <input
                type="password"
                placeholder="Confirm Password"
                className="flex-1 bg-transparent outline-none text-gray-700 text-lg"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-all duration-500 focus:ring focus:ring-purple-300"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
          <div className="mt-6 flex items-center justify-center space-x-4">
            <button
              className="flex items-center space-x-2 py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-full transition-all duration-500 focus:ring focus:ring-red-300"
              onClick={handleGoogleLogin}
            >
              <Google />
              <span>Google</span>
            </button>
            <button
              className="flex items-center space-x-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-500 focus:ring focus:ring-blue-300"
              onClick={handleFacebookLogin}
            >
              <Facebook />
              <span>Facebook</span>
            </button>
          </div>
          <div className="mt-6 text-center">
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
