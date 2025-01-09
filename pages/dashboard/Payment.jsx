import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import resumeImg from "./PaymentImages/GraphicDesignerResume.jpg";
import poweredbypaypal from "./PaymentImages/poweredbypaypal.png";
import paypal from "./PaymentImages/paypal.png";
import logo from "./PaymentImages/logo.jpg";
import applepay from "./PaymentImages/apple-pay.png";
function Payment() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // Fixed price

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const [showModal1, setShowModal1] = useState(false);
  const [name1, setName1] = useState("");
  const [email1, setEmail1] = useState("");
  const [phone1, setPhone1] = useState("");
  // Fixed price

  const handleCloseModal1 = () => setShowModal1(false);
  const handleShowModal1 = () => setShowModal1(true);

  const [showModal2, setShowModal2] = useState(false);
  const [name2, setName2] = useState("");
  const [email2, setEmail2] = useState("");
  const [phone2, setPhone2] = useState("");
  // Fixed price

  const handleCloseModal2 = () => setShowModal2(false);
  const handleShowModal2 = () => setShowModal2(true);

  const handleChoosePlan2 = () => {
    const amount = 49; // Fixed price
    const token = localStorage.getItem("token"); // Retrieve token from localStorage

    const payload = {
      amount,
      ResumeId: "9CN06189KH259320999", // Ensure the field name matches the API expectation
      Token: token || "", // Ensure the field name matches the API expectation
    };

    axios
      .post(
        "https://api.resumeintellect.com/api/user/paypal/create-payment",
        payload,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          }, // Use JSON content type
        }
      )
      .then((response) => {
        const data = response.data;
        if (data && data.data) {
          // Redirect to the PayPal URL provided in the response
          console.log(data.data,"data");
          window.location.href = data.data;
        }
      })
      .catch((error) => console.error("Payment Error:", error));
  };

  const handleChoosePlan3 = (e) => {
    e.preventDefault()
    const amount = 269; // Fixed price
    const token = localStorage.getItem("token"); // Retrieve token from localStorage

    const payload = {
      amount,
      ResumeId: "9CN06189KH259320999", // Ensure the field name matches the API expectation
      Token: token || "", // Ensure the field name matches the API expectation
    };

    axios
      .post(
        "https://api.resumeintellect.com/api/user/paypal/create-payment",
        payload,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          }, // Use JSON content type
        }
      )
      .then((response) => {
        const data = response.data;
        if (data && data.data) {
          console.log(data.data,"dataurl");
          // Redirect to the PayPal URL provided in the response
          window.location.href = data.data;
        }
      })
      .catch((error) => console.error("Payment Error:", error));
  };

  const handleChoosePlan4 = () => {
    const amount = 349; // Fixed price
    const token = localStorage.getItem("token"); // Retrieve token from localStorage

    if (!token) {
      window.location.href = "/login2";
      return;
    }

    const payload = {
      amount,
      ResumeId: "9CN06189KH259320999", // Ensure the field name matches the API expectation
      Token: token || "", // Ensure the field name matches the API expectation
    };

    axios
      .post(
        "https://api.resumeintellect.com/api/user/paypal/create-payment",
        payload,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          }, // Use JSON content type
        }
      )
      .then((response) => {
        const data = response.data;
        if (data && data.data) {
          // Redirect to the PayPal URL provided in the response
          console.log(data.data,"data.data");
          window.location.href = data.data;
        }
      })
      .catch((error) => console.error("Payment Error:", error));
  };

  return (
    <div className="min-h-screen flex w-full p-2">
      <div className="bg-white shadow-md rounded-lg  w-full">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
                <div className="text-center mt-4">
                  <p className="text-lg font-bold">Resume Builder</p>
                  <span className=" text-violet-900 ">Starting </span>
                  <span className=" text-violet-900 font-bold text-lg">
                    {" "}
                    $0
                  </span>{" "}
                  <br />
                  <Link href={"/dashboard/aibuilder"}>
                    <button className="bg-red-200 text-blue-900 p-2 px-6 rounded-lg m-4  disabled:">
                      Your Plan
                    </button>
                  </Link>
                </div>
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600  tracking-wider">
                <div className="text-center">
                  <p className="text-lg font-bold ">AI resume writer</p>
                  <span className=" text-violet-900 font-bold text-lg">
                    {" "}
                    $49
                  </span>{" "}
                  <span className=" text-violet-900 ">/One Time Purchase</span>
                  <br />
                  <button
                    className="bg-blue-900 text-white p-2 rounded-lg m-2 mt-3"
                    onClick={handleShowModal}
                  >
                    Choose This Plan
                  </button>
                </div>
                {showModal && (
                  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className=" w-full max-w-[90%] sm:max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden max-h-[90vh] overflow-y-auto ">
                      {/* Logo */}
                      <div className="flex justify-between items-center p-2 ">
                        <Image
                          src={logo}
                          alt="logo"
                          className="h-10 w-auto sm:h-8"
                        />
                        {/* Close Button */}
                        <button
                          className=" text-gray-600 hover:text-gray-800 z-20"
                          onClick={handleCloseModal}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="flex flex-col md:flex-row">
                        {/* Image Section */}
                        <div className="md:w-1/2 w-full p-4 flex justify-center ">
                          <div className="w-[400px] h-[400px] ">
                            <Image
                              src={resumeImg}
                              alt="resumeimg"
                              className="w- full h-full rounded-lg"
                            />
                          </div>
                        </div>

                        {/* Right Section: Form */}
                        <div className="md:w-1/2 w-full p-4 ">
                          <div className="text-left mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">
                              $49
                            </h2>
                            <p className="text-sm text-gray-500">
                              Total Amount
                            </p>
                          </div>

                          <form>
                            <div className="mb-4">
                              <label className="block text-gray-800 mb-2">
                                👨🏻‍💼 Name
                              </label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                              />
                            </div>
                            <div className="mb-4">
                              <label className="block text-gray-800 mb-2">
                                📧 Email
                              </label>
                              <input
                                type="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                            </div>
                            <div className="mb-4">
                              <label className="block text-gray-800 mb-2">
                                ☎️ Phone
                              </label>
                              <input
                                type="tel"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                              />
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center mt-6">
                              <button
                                type="submit"
                                className="w-full bg-yellow-400 text-blue-800 font-bold  rounded-[50px] hover:bg-yellow-500 transition duration-200"
                                onClick={handleChoosePlan2}
                              >
                                <Image
                                  src={paypal}
                                  alt="paypal"
                                  className="h-10 w-auto m-auto"
                                />
                              </button>
                            </div>
                            <div className="flex justify-center mt-6">
                              <button className="w-full bg-black text-white font-bold  rounded-[50px] transition duration-200  ">
                                <Image
                                  src={applepay}
                                  alt="apple pay"
                                  className=" w-auto m-auto h-10"
                                />
                              </button>
                            </div>
                            <div className="flex justify-center mt-6 ">
                              <Image
                                src={poweredbypaypal}
                                alt="poweredbypaypal"
                                className="h-10 w-auto"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600  tracking-wider">
                <div className="text-center">
                  <p className="text-lg font-bold">Expert human writer</p>
                  <span className=" text-violet-900 font-bold text-lg">
                    {" "}
                    $269
                  </span>{" "}
                  <span className=" text-violet-900 ">/Resume </span>
                  <br />
                  <button
                    className="bg-green-700 text-white p-2 px-5 rounded-lg m-4 disabled:"
                    onClick={handleShowModal1}
                  >
                    Choose this plan
                  </button>
                </div>
                {showModal1 && (
                  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className=" w-full max-w-[90%] sm:max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden max-h-[90vh] overflow-y-auto ">
                      {/* Logo */}
                      <div className="flex justify-between items-center p-2 ">
                        <Image
                          src={logo}
                          alt="logo"
                          className="h-10 w-auto sm:h-8"
                        />
                        {/* Close Button */}
                        <button
                          className=" text-gray-600 hover:text-gray-800 z-20"
                          onClick={handleCloseModal1}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="flex flex-col md:flex-row">
                        {/* Image Section */}
                        <div className="md:w-1/2 w-full p-4 flex justify-center ">
                          <div className="w-[400px] h-[400px] ">
                            <Image
                              src={resumeImg}
                              alt="resumeimg"
                              className="w- full h-full rounded-lg"
                            />
                          </div>
                        </div>

                        {/* Right Section: Form */}
                        <div className="md:w-1/2 w-full p-4 ">
                          <div className="text-left mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">
                              $269
                            </h2>
                            <p className="text-sm text-gray-500">
                              Total Amount
                            </p>
                          </div>

                          <form>
                            <div className="mb-4">
                              <label className="block text-gray-800 mb-2">
                                👨🏻‍💼 Name
                              </label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                value={name1}
                                onChange={(e) => setName1(e.target.value)}
                                required
                              />
                            </div>
                            <div className="mb-4">
                              <label className="block text-gray-800 mb-2">
                                📧 Email
                              </label>
                              <input
                                type="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                value={email1}
                                onChange={(e) => setEmail1(e.target.value)}
                                required
                              />
                            </div>
                            <div className="mb-4">
                              <label className="block text-gray-800 mb-2">
                                ☎️ Phone
                              </label>
                              <input
                                type="tel"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                value={phone1}
                                onChange={(e) => setPhone1(e.target.value)}
                                required
                              />
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center mt-6">
                              <button
                                type="submit"
                                onClick={handleChoosePlan3}
                                className="w-full bg-yellow-400 text-blue-800 font-bold  rounded-[50px] hover:bg-yellow-500 transition duration-200"
                              >
                                <Image
                                  src={paypal}
                                  alt="paypal"
                                  className="h-10 w-auto m-auto"
                                />
                              </button>
                            </div>
                            <div className="flex justify-center mt-6">
                              <button className="w-full bg-black text-white font-bold  rounded-[50px] transition duration-200  ">
                                <Image
                                  src={applepay}
                                  alt="apple pay"
                                  className=" w-auto m-auto h-10"
                                />
                              </button>
                            </div>
                            <div className="flex justify-center mt-6 ">
                              <Image
                                src={poweredbypaypal}
                                alt="poweredbypaypal"
                                className="h-10 w-auto"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </th>

              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600  tracking-wider">
                <div className="text-center">
                  <p className="text-lg font-bold">French English Combo</p>
                  <span className=" text-violet-900 font-bold text-lg">
                    {" "}
                    $369
                  </span>{" "}
                  <span className=" text-violet-900 ">/Resume </span>
                  <br />
                  <button
                    className="bg-yellow-500 text-white p-2 px-5 rounded-lg m-4 disabled:"
                    onClick={handleShowModal2}
                  >
                    Choose this plan
                  </button>
                </div>
                {showModal2 && (
                  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className=" w-full max-w-[90%] sm:max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden max-h-[90vh] overflow-y-auto ">
                      {/* Logo */}
                      <div className="flex justify-between items-center p-2 ">
                        <Image
                          src={logo}
                          alt="logo"
                          className="h-10 w-auto sm:h-8"
                        />
                        {/* Close Button */}
                        <button
                          className=" text-gray-600 hover:text-gray-800 z-20"
                          onClick={handleCloseModal2}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="flex flex-col md:flex-row">
                        {/* Image Section */}
                        <div className="md:w-1/2 w-full p-4 flex justify-center ">
                          <div className="w-[400px] h-[400px] ">
                            <Image
                              src={resumeImg}
                              alt="resumeimg"
                              className="w- full h-full rounded-lg"
                            />
                          </div>
                        </div>

                        {/* Right Section: Form */}
                        <div className="md:w-1/2 w-full p-4 ">
                          <div className="text-left mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">
                              $369
                            </h2>
                            <p className="text-sm text-gray-500">
                              Total Amount
                            </p>
                          </div>

                          <form>
                            <div className="mb-4">
                              <label className="block text-gray-800 mb-2">
                                👨🏻‍💼 Name
                              </label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                value={name2}
                                onChange={(e) => setName2(e.target.value)}
                                required
                              />
                            </div>
                            <div className="mb-4">
                              <label className="block text-gray-800 mb-2">
                                📧 Email
                              </label>
                              <input
                                type="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                value={email2}
                                onChange={(e) => setEmail2(e.target.value)}
                                required
                              />
                            </div>
                            <div className="mb-4">
                              <label className="block text-gray-800 mb-2">
                                ☎️ Phone
                              </label>
                              <input
                                type="tel"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                value={phone2}
                                onChange={(e) => setPhone2(e.target.value)}
                                required
                              />
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center mt-6">
                              <button
                                type="submit"
                                onClick={handleChoosePlan4}
                                className="w-full bg-yellow-400 text-blue-800 font-bold  rounded-[50px] hover:bg-yellow-500 transition duration-200"
                              >
                                <Image
                                  src={paypal}
                                  alt="paypal"
                                  className="h-10 w-auto m-auto"
                                />
                              </button>
                            </div>
                            <div className="flex justify-center mt-6">
                              <button className="w-full bg-black text-white font-bold  rounded-[50px] transition duration-200  ">
                                <Image
                                  src={applepay}
                                  alt="apple pay"
                                  className=" w-auto m-auto h-10"
                                />
                              </button>
                            </div>
                            <div className="flex justify-center mt-6 ">
                              <Image
                                src={poweredbypaypal}
                                alt="poweredbypaypal"
                                className="h-10 w-auto"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-center ">
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  <p className="text-gray-600">Create optimized resumes</p>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  <p className="text-gray-600">Create optimized resumes</p>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  <p className="text-gray-600">Create optimized resumes</p>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  <p className="text-gray-600">Create optimized resumes</p>
                </div>
              </td>
            </tr>

            <tr className="text-center">
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  <p className="text-gray-600">
                    Copy and paste content from site
                  </p>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  <p className="text-gray-600">
                    Copy and paste content from site
                  </p>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  <p className="text-gray-600">
                    Receive resume in pdf and docs
                  </p>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  <p className="text-gray-600">
                    Receive resume in pdf and docs
                  </p>
                </div>
              </td>
            </tr>

            <tr className="text-center">
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  <p className="text-gray-600">Unlimited resume edits</p>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  <p className="text-gray-600">Unlimited resume edits</p>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  <p className="text-gray-600">Cover letter included</p>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  <p className="text-gray-600">Cover letter included</p>
                </div>
              </td>
            </tr>

            <tr className="text-center">
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-red-500 mr-2">✖️</span>
                  <p className="text-gray-600"></p>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  <p className="text-gray-600">Save resume as pdf and docs</p>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  <p className="text-gray-600">3 revisions included</p>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  <p className="text-gray-600">3 revisions included</p>
                </div>
              </td>
            </tr>

            <tr className="text-center">
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-red-500 mr-2">✖️</span>
                  <p className="text-gray-600"></p>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  <p className="text-gray-600">
                    Download fully formatted Resume
                  </p>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  <p className="text-gray-600">Speak one on one with writer</p>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  <p className="text-gray-600">Speak one on one with writer</p>
                </div>
              </td>
            </tr>

            <tr className="text-center">
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-red-500 mr-2">✖️</span>
                  <p className="text-gray-600"></p>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-red-500 mr-2">✖️</span>
                  <p className="text-gray-600"></p>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  <p className="text-gray-600">Final Delivery 1 week</p>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  <p className="text-gray-600">Final Delivery 1 week</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Payment;
