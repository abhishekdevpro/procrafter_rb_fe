import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import logo from "../Navbar/logo.png";
import Image from "next/image";
import { toast } from "react-toastify";
import axios from "axios";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isApiSuccess, setIsApiSuccess] = useState(false);
  const [user, setUser] = useState("");
  const router = useRouter();
  const axiosInstance = axios.create();

  useEffect(() => {
    const token = localStorage.getItem("token"); // Access localStorage here

    if (token) {
      setIsLoggedIn(true);

      // Check API success
      const checkApiSuccess = async () => {
        try {
          const response = await axios.get(
            "https://api.resumeintellect.com/api/user/user-profile",
            {
              headers: {
                Authorization: token,
              },
            }
          );

          if (response.data.status === "success") {
            setIsApiSuccess(true);
            setUser(response.data.data.first_name);
          } else {
            setIsApiSuccess(false);
          }
        } catch (error) {
          console.log("KSC catch err: ", error);
          setIsApiSuccess(false);
        }
      };

      checkApiSuccess();
    } else {
      setIsLoggedIn(false);
    }
  }, []); // Dependency array should be empty to run only once after the first render

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => setIsMenuOpen(false);

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => setIsHovering(false);

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   setIsLoggedIn(false);
  //   toast.success("Logout Succesfully");
  //   router.push("/");
  // };
  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    try {
      await axios.post(
        "https://api.resumeintellect.com/api/user/logout",
        { token },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.removeItem("token");
      router.push("/login2");
    } catch (error) {
      console.error(
        "Error during logout:",
        error.response?.data || error.message
      );
      // Still remove token and redirect even if logout API fails
      localStorage.removeItem("token");
      router.push("/login2");
    }
  };

  // Setup axios interceptor
  useEffect(() => {
    const interceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          handleLogout();
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.response.eject(interceptor);
    };
  }, []);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image src={logo} alt="logo" className="h-10  w-[140px]" />
            </Link>
          </div>
          <div className="hidden md:flex justify-center items-center space-x-4">
            <Link
              href="/dashboard"
              className="text-black hover:text-[#00b38d] px-3 py-2 rounded-md text-lg font-semibold"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/resumelist"
              className="text-black hover:text-[#00b38d] px-3 py-2 rounded-md text-lg font-semibold"
            >
              My Resumes
            </Link>
            <Link
              href="/dashboard/cvletterlist"
              className="text-black hover:text-[#00b38d] px-3 py-2 rounded-md text-lg font-semibold"
            >
              Cover Letter
            </Link>
            <Link
              href="/dashboard/MyJobs"
              className="text-black hover:text-[#00b38d] px-3 py-2 rounded-md text-lg font-semibold"
            >
              Jobs
            </Link>
            <Link
              href="/navbarcontent"
              className="text-black hover:text-[#00b38d] px-3 py-2 rounded-md text-lg font-semibold"
            >
              AI Resume Builder
            </Link>
            <Link
              href="https://blog.ciblijob.fr/"
              className="text-black hover:text-[#00b38d] px-3 py-2 rounded-md text-lg font-semibold"
            >
              Resources
            </Link>
            <Link
              href=""
              className="text-black hover:text-[#00b38d] px-3 py-2 rounded-md text-lg font-semibold"
            >
              CibliJob ID
            </Link>
            {/* <Link
              href="/footers/Aboutus"
              className="text-black hover:text-[#00b38d] px-3 py-2 rounded-md text-lg font-semibold"
            >
              About Us
            </Link> */}
            {/* <Link
              href="#phone"
              className="text-black hover:text-[#00b38d] px-3 py-2 rounded-md text-lg font-semibold"
            >
              📞 Contact us
            </Link> */}
          </div>
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center bg-[#00b38d] text-white px-4 py-2 text-md font-semibold border-2 rounded-xl"
                >
                  <img
                    src="https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"
                    alt="User"
                    className="w-8 h-8 rounded-full "
                  />
                  <span className="ml-2">{user ? user : "profile"}</span>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md text-black">
                    <Link
                      href="/"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Home
                    </Link>

                    <Link
                      href="/dashboard/page"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/login2"
                  className="bg-[#00b38d] text-white  px-4 py-2 text-md font-semibold border-2 rounded-xl"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="bg-[#00b38d] text-white  px-4 py-2 text-md font-semibold border-2 rounded-xl"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
          <div className="md:hidden ">
            <button
              onClick={handleMenuClick}
              className="text-black hover:text-[#00b38d] focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 relative z-30">
              <Link
                href="/dashboard"
                className="text-black hover:text-[#00b38d] block  px-3 py-2 rounded-md text-base font-semibold"
              >
                Dashboard
              </Link>
              <Link
                href="/dashboard/resumelist"
                className="text-black hover:text-[#00b38d] block  px-3 py-2 rounded-md text-base font-semibold"
              >
                My Resumes
              </Link>
              <Link
                href="/dashboard/cvletterlist"
                className="text-black hover:text-[#00b38d] block  px-3 py-2 rounded-md text-base font-semibold"
              >
                Cover Letter
              </Link>
              <Link
                href="/dashboard/MyJobs"
                className="text-black hover:text-[#00b38d] block  px-3 py-2 rounded-md text-base font-semibold"
              >
                Jobs
              </Link>
              <Link
                href="/navbarcontent"
                className="text-black hover:text-[#00b38d] block  px-3 py-2 rounded-md text-base font-semibold"
              >
                AI Resume Builder
              </Link>
              <Link
                href="https://blog.ciblijob.fr/"
                className="text-black hover:text-[#00b38d] block  px-3 py-2 rounded-md text-base font-semibold"
              >
                Resources
              </Link>
              <Link
                href=""
                className="text-black hover:text-[#00b38d] block  px-3 py-2 rounded-md text-base font-semibold"
              >
                CibliJob ID
              </Link>
              {isLoggedIn ? (
                <Link
                  href="/"
                  className="bg-[#00b38d] text-white  block px-3 py-2 rounded-md text-base font-semibold"
                  onClick={() => {
                    handleLogout();
                    handleLinkClick();
                  }}
                >
                  Logout
                </Link>
              ) : (
                <>
                  <Link
                    href="/login2"
                    className="bg-[#00b38d] text-white  block px-3 py-2 rounded-md text-base font-semibold"
                    onClick={handleLinkClick}
                  >
                    Log in
                  </Link>
                  <Link
                    href="/signup"
                    className="bg-[#00b38d] text-white  block px-3 py-2 rounded-md text-base font-semibold"
                    onClick={handleLinkClick}
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
        )} */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/dashboard"
                className="text-black hover:text-[#00b38d] block px-3 py-2 rounded-md text-base font-semibold"
              >
                Dashboard
              </Link>
              <Link
                href="/dashboard/resumelist"
                className="text-black hover:text-[#00b38d] block px-3 py-2 rounded-md text-base font-semibold"
              >
                My Resumes
              </Link>
              <Link
                href="/dashboard/cvletterlist"
                className="text-black hover:text-[#00b38d] block px-3 py-2 rounded-md text-base font-semibold"
              >
                Cover Letter
              </Link>
              <Link
                href="/dashboard/MyJobs"
                className="text-black hover:text-[#00b38d] block px-3 py-2 rounded-md text-base font-semibold"
              >
                Jobs
              </Link>
              <Link
                href="/navbarcontent"
                className="text-black hover:text-[#00b38d] block px-3 py-2 rounded-md text-base font-semibold"
              >
                AI Resume Builder
              </Link>
              <Link
                href="https://blog.ciblijob.fr/"
                className="text-black hover:text-[#00b38d] block px-3 py-2 rounded-md text-base font-semibold"
              >
                Resources
              </Link>
              <Link
                href=""
                className="text-black hover:text-[#00b38d] block px-3 py-2 rounded-md text-base font-semibold"
              >
                CibliJob ID
              </Link>
              {isLoggedIn ? (
                <Link
                  href="/"
                  className="bg-[#00b38d] text-white block px-3 py-2 rounded-md text-base font-semibold"
                  onClick={() => {
                    handleLogout();
                    handleLinkClick();
                  }}
                >
                  Logout
                </Link>
              ) : (
                <>
                  <Link
                    href="/login2"
                    className="bg-[#00b38d] text-white block px-3 py-2 rounded-md text-base font-semibold"
                    onClick={handleLinkClick}
                  >
                    Log in
                  </Link>
                  <Link
                    href="/signup"
                    className="bg-[#00b38d] text-white block px-3 py-2 rounded-md text-base font-semibold"
                    onClick={handleLinkClick}
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
