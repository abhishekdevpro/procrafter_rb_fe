import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ResumeContext } from "../components/context/ResumeContext"; // Adjust path as needed
import { BASE_URL } from "../components/Constant/constant";

const allFonts = [
  "font",
  "Ubuntu",
  "Calibri",
  "Georgia",
  "Roboto",
  "Poppins",
  "Arial",
  "Times New Roman",
  "Helvetica",
  "Courier New",
  "Tahoma",
  "Verdana",
  "Trebuchet MS",
  "Lucida Console",
  "Comic Sans MS",
  "Source Sans Pro",
  "Inter",
];
const freeFonts = ["Ubuntu", "Calibri"]; // Restricted fonts for free users

const FontSelector = () => {
  const { selectedFont, setSelectedFont } = useContext(ResumeContext);
  const [userPlan, setUserPlan] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("Unauthorized. Please log in.");
          return;
        }

        const response = await axios.get(`${BASE_URL}/api/user/user-profile`, {
          headers: { Authorization: token },
        });

        if (response.data?.status === "success") {
          setUserPlan(response.data.data.plan_id);
        }
      } catch (err) {
        console.error("Error fetching user profile:", err);
      }
    };

    fetchUserProfile();
  }, []);

  const fonts = userPlan === 1 ? freeFonts : allFonts; // Restrict fonts for free users

  return (
    <select
      value={selectedFont}
      onChange={(e) => setSelectedFont(e.target.value)}
      // className="w-40 h-10 rounded-lg border-2 border-pink-600 px-4 font-bold text-black bg-white focus:ring-2 focus:ring-purple-600 hover:bg-pink-50"
      className=" rounded-lg border-2 border-pink-600 px-4 py-2 bg-white text-black font-medium 
    transition-transform duration-200 ease-in-out hover:scale-[1.02] hover:bg-pink-50 hover:text-pink-600"
    >
      {fonts.map((font) => (
        <option key={font} value={font}>
          {font}
        </option>
      ))}
    </select>
  );
};

export default FontSelector;
