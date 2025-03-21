"use client";
import React from 'react'
import { useState } from "react";
import { useRouter } from "next/navigation";
const Otp = () => {
    const [otp, setOtp] = useState("");
    // const router = useRouter();
    const handleOtpSubmit = () => {
        console.log("Verify OTP:", otp);
        // Add OTP verification logic here
        // router.push("welcome"); // Redirect after successful OTP verification
      };
    return (
        <div className="flex-1 flex flex-col justify-center px-3">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#000000] to-[#000000] bg-clip-text text-transparent mb-3">
                Verify OTP
            </h2>
            <p className="text-gray-600 mb-4">
                We've sent a 6-digit OTP to your email. Enter it below to verify your account.
            </p>
            <div className="flex items-center border rounded-md shadow-sm px-2 py-1 focus-within:ring-2 focus-within:ring-orange-300">
                <input
                    type="text"
                    placeholder="Enter OTP"
                    className="flex-1 bg-transparent outline-none text-gray-700 text-base"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                />
            </div>
            <button
                className="w-full mt-4 py-2 px-3 bg-orange-300 hover:bg-orange-600 text-white rounded-[10px] shadow-md transition-all duration-500 focus:ring-2 focus:ring-purple-300"
                onClick={handleOtpSubmit}
            >
                Verify OTP
            </button>
            <p className="text-gray-600 mt-4 text-center">
                Didn't receive the OTP?{" "}
                <span className="text-orange-600 hover:underline cursor-pointer">
                    Resend
                </span>
            </p>
        </div>
    )
}

export default Otp