import React, { useEffect, useState } from "react";
import axios from "axios";

import { useRouter } from "next/router";
import { BASE_URL } from "../components/Constant/constant";
const Gauth = () => {
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  // useEffect(() => {
  //   // Function to extract query parameters from the URL
  //   const getQueryParams = (url) => {
  //     const params = new URLSearchParams(new URL(url).search);
  //     return Object.fromEntries(params.entries());
  //   };

  //   // Extract the code from the URL
  //   const queryParams = getQueryParams(window.location.href);
  //   const code = queryParams.code;

  //   if (code) {
  //     // Send the code to the API endpoint
  //     const sendAuthCode = async () => {
  //       try {
  //         const response = await axios.get(
  //           `${BASE_URL}/api/user/auth/callback?code=${code}`
  //         );
  //         const token = response.data.data.token;
  //          console.log(response,"gauth");
  //         // Save the token in localStorage
  //         localStorage.setItem("token", token);

  //         // Redirect to the success URL with the token
  //         router.push("/dashboard");
  //       } catch (error) {
  //         console.error("Error while sending auth code:", error);

  //         // Redirect to the login page on error
  //         // navigate("/");
  //       } finally {
  //         setLoading(false); // Stop the loader
  //       }
  //     };

  //     sendAuthCode();
  //   } else {
  //     console.error("Code parameter is missing in the URL");
  //     setLoading(false);

  //     // navigate(""); // Redirect to the login page if code is missing
  //   }
  // }, []);
  useEffect(() => {
    const getQueryParams = (url) => {
      const params = new URLSearchParams(new URL(url).search);
      return Object.fromEntries(params.entries());
    };

    const queryParams = getQueryParams(window.location.href);
    const code = queryParams.code;
    console.log(code);

    if (code) {
      const sendAuthCode = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/api/user/auth/callback?code=${code}`);
          console.log(response);
          const token = response.data.data.token;

          localStorage.setItem('token', token);

          router.push(`/dashboard`);
        } catch (error) {
          console.error('Error while sending auth code:', error);

          router.push('/login2'); // Redirect to the login page on error
        } finally {
          setLoading(false); // Stop the loader
        }
      };

      sendAuthCode();
    } else {
      console.error('Code parameter is missing in the URL');
      setLoading(false);
      router.push('/login2'); // Redirect to the login page if code is missing
    }
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="loader border-t-4 border-green-500 rounded-full w-12 h-12 animate-spin"></div>
          <p className="mt-4 text-gray-600">Loading, please wait...</p>
        </div>
      ) : (
        <div className="text-gray-600">Redirecting...</div>
      )}
    </div>
  );
};

export default Gauth;
