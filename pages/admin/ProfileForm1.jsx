import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const ProfileForm1 = () => {
  const { t } = useTranslation("");
  const boxes = [
    <Link href="/admin/customer" key="box1">
      <div className="bg-pink-200 hover:bg-gray-300 rounded-lg shadow-md pt-16 w-96 h-60 text-center cursor-pointer text-3xl font-semibold">
        <div className="text-5xl">👨🏻‍👩🏻‍👦🏻‍👦🏻</div> <br />
        <span>{t("admin.sidebar.customers")}</span>
      </div>
    </Link>,
    <Link href="/admin/templatelist" key="box2">
      <div className="bg-pink-500 hover:bg-gray-300 hover:text-black rounded-lg shadow-md pt-16 w-96 h-60 text-center text-white cursor-pointer text-3xl font-semibold">
        <div className="text-5xl">📋</div>
        <br />
        <span>{t("admin.sidebar.templates")}</span>
      </div>
    </Link>,
    <Link href="/admin/addreferall1" key="box3">
      <div className="bg-pink-500 hover:bg-gray-300 rounded-lg shadow-md pt-16 w-96 h-60 text-center cursor-pointer text-white text-3xl font-semibold">
        <div className="text-5xl"> 📊</div>
        <br /> <span>{t("admin.sidebar.leads")}</span>
      </div>
    </Link>,
    <Link href="/admin/payment1" key="box4">
      <div className="bg-pink-500 hover:bg-gray-300 hover:text-black rounded-lg shadow-md pt-16 w-96 h-60 text-center text-white cursor-pointer text-3xl font-semibold">
        <div className="text-5xl">💷</div>
        <br />
        <span>{t("admin.sidebar.payment")}</span>
      </div>
    </Link>,
  ];

  return (
    <div className="p-2 md:p-6 flex flex-wrap justify-center gap-10">
      {boxes.map((box, index) => box)}
    </div>
  );
};

export default ProfileForm1;
