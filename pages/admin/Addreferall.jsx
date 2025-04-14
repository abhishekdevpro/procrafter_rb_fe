import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";
function Addreferall() {
  const { t } = useTranslation();

  const boxes = [
    // <Link href="#" key="box1">
    //   <div className="bg-pink-500 hover:bg-gray-300 hover:text-black rounded-lg shadow-md pt-16 w-80 h-60 text-center text-white cursor-pointer text-3xl font-semibold">
    //     <div className="text-5xl">👥</div>
    //     <br />
    //     Referrals By Customers
    //   </div>
    // </Link>,
    // <Link href="#" key="box2">
    //   <div className="bg-pink-500 hover:bg-gray-300 hover:text-black rounded-lg shadow-md pt-16 w-80 h-60 text-center text-white cursor-pointer text-3xl font-semibold">
    //     <div className="text-5xl">🤳🏽</div>
    //     <br />
    //     Self
    //   </div>
    // </Link>,
    <Link href="#" key="box1">
      <div className="bg-pink-500 hover:bg-gray-300 hover:text-black rounded-lg shadow-md pt-16 w-80 h-60 text-center text-white cursor-pointer text-3xl font-semibold">
        <div className="text-5xl">📫</div>
        <br />
        {t("admin.leads.requestService")}
      </div>
    </Link>,
    <Link href="#" key="box2">
      <div className="bg-pink-500 hover:bg-gray-300 hover:text-black rounded-lg shadow-md pt-16 w-80 h-60 text-center text-white cursor-pointer text-3xl font-semibold">
        <div className="text-5xl">📑</div>
        <br />
        {t("admin.leads.newTemplate")}
      </div>
    </Link>,
    <Link href="#" key="box1">
      <div className="bg-pink-500 hover:bg-gray-300 hover:text-black rounded-lg shadow-md pt-16 w-80 h-60 text-center text-white cursor-pointer text-3xl font-semibold">
        <div className="text-5xl">📝</div>
        <br />
        {t("admin.leads.newCoverLetter")}
      </div>
    </Link>,
    <Link href="#" key="box2">
      <div className="bg-pink-500 hover:bg-gray-300 hover:text-black rounded-lg shadow-md pt-16 w-80 h-60 text-center text-white cursor-pointer text-3xl font-semibold">
        <div className="text-5xl">🛠️</div>
        <br />
        {t("admin.leads.support")}
      </div>
    </Link>,
    // <Link href="#" key="box2">
    //   <div className="bg-pink-500 hover:bg-gray-300 hover:text-black rounded-lg shadow-md pt-16 w-80 h-60 text-center text-white cursor-pointer text-3xl font-semibold">
    //     <div className="text-5xl">🌍</div>
    //     <br />
    //     Other
    //   </div>
    // </Link>,
  ];

  return (
    <div className="p-2 md:p-4 flex flex-wrap justify-center gap-5">
      {boxes.map((box, index) => box)}
    </div>
  );
}

export default Addreferall;
