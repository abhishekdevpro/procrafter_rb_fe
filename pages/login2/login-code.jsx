"use client";

import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./logo.png";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
// import ReCAPTCHA from 'react-google-recaptcha';
import axios from "axios";
import { BASE_URL } from "../../components/Constant/constant";
import { ResumeContext } from "../../components/context/ResumeContext";
import axiosInstance from "../../components/utils/axiosInstance";
const LoginCode = () => {
  const [otp, setOtp] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const router = useRouter();
  const { selectedLang } = useContext(ResumeContext);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  useEffect(() => {
    // Get email from localStorage
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);
  const handleSignIn = async () => {
    if (otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP.");
      return;
    }

    setLoading(true);

    try {
      const response = await axiosInstance.post(
        `/api/user/auth/login-verify-otp?lang=${selectedLang}`,

        { email, otp }
      );

      const token = response.data?.data?.token;

      localStorage.setItem("token", token);
      toast.success("Login Successfully");
      router.push(`/dashboard`);
    } catch (error) {
      console.error(
        error.response?.data?.message || "Invalid OTP. Please try again."
      );
      toast.error(error.response?.data?.message || "Invalid Otp");
      // router.push("/login2"); // Redirect to the login page on error
    } finally {
      setLoading(false); // Stop the loader
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Back Button */}
        <Link
          href="/login2"
          className="text-purple-600 flex items-center mb-6 hover:text-purple-600"
        >
          <span className="mr-2">←</span> Back
        </Link>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src={logo}
            alt="Logo"
            width={200}
            height={100}
            className="h-[200px]  w-[200px]"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-2">
          Sign in with login code
        </h2>
        <p className="text-gray-600 text-center mb-6">
          We have sent your one-time passcode to <br />
          <strong>{email}</strong>. This passcode will expire after 5 minutes.
        </p>

        {/* OTP Input */}
        <div className="mb-6">
          <label className="block font-medium mb-2">
            Enter 6-digit code <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={otp}
            onChange={handleOtpChange}
            maxLength={6}
            className="w-full text-center text-xl py-2 px-4 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="______"
          />
        </div>

        <p className="text-center text-sm mb-6">
          Didn&apos;t receive your code?{" "}
          <Link href="/login2">
            {" "}
            <button className="text-purple-600 font-semibold hover:text-purple-600">
              Send new code
            </button>
          </Link>
        </p>

        {/* Sign In Button */}
        <button
          onClick={handleSignIn}
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-600 flex items-center justify-center"
        >
          Sign in <span className="ml-2">→</span>
        </button>
        <Link href="/login2">
          {/* Alternative Option */}
          <p className="mt-6 text-center text-sm text-purple-600 font-semibold">
            Don&apos;t have access to this email?
          </p>
        </Link>
      </div>
    </div>
  );
};

export default LoginCode;
