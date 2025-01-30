'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from './logo.png'
// import ReCAPTCHA from 'react-google-recaptcha';

const LoginCode = () => {
  const [otp, setOtp] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(value ? true : false);
  };

  const handleSignIn = () => {
    if (otp.length === 6) {
      if (captchaVerified) {
        // Replace with your toast implementation
        alert('OTP Submitted Successfully!');
      } else {
        alert('Please verify the CAPTCHA.');
      }
    } else {
      alert('Please enter a 6-digit code.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Back Button */}
        <Link
          href="/login2/login-email"
          className="text-blue-600 flex items-center mb-6 hover:text-blue-700"
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
            className="h-auto"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-2">
          Sign in with login code
        </h2>
        <p className="text-gray-600 text-center mb-6">
          We have sent your one-time passcode to <br />
          <strong>abc@gmail.com</strong>. This passcode will expire after 10
          minutes.
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

        {/* CAPTCHA */}
        {/* <div className="mb-6">
          <ReCAPTCHA
            sitekey="your-recaptcha-site-key-here"
            onChange={handleCaptchaChange}
          />
        </div> */}

        {/* Success Message */}
        <div className="flex items-center bg-green-100 border border-green-500 text-green-700 p-3 rounded-md mb-6">
          <span className="mr-2">✅</span> Success!
        </div>

        {/* Resend Code */}
        <p className="text-center text-sm mb-6">
          Didn&apos;t receive your code?{' '}
          <button className="text-[#00b38d] font-semibold hover:text-[#00b38d]">
            Send new code
          </button>
        </p>

        {/* Sign In Button */}
        <button
          onClick={handleSignIn}
          className="w-full bg-[#00b38d] text-white py-2 px-4 rounded-md hover:bg-[#00b38d] flex items-center justify-center"
        >
          Sign in <span className="ml-2">→</span>
        </button>

        {/* Alternative Option */}
        <p className="mt-6 text-center text-sm text-[#00b38d] font-semibold">
          Don&apos;t have access to this email?
        </p>
      </div>
    </div>
  );
};

export default LoginCode;