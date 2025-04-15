import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useTranslation } from "react-i18next";
function AIEnhancedResumeAccuracy() {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar />
      <div className="m-4 sm:mx-10 lg:mx-40 p-4 sm:p-6 shadow-2xl">
        <h2 className="text-4xl font-semibold my-4 underline text-center">
          {t("AI-Enhanced_h")}
        </h2>
        <h2 className="font-semibold"> {t("AI-Enhanced_h2")}</h2>
        {t("AI-Enhanced_p1")}
        <h2 className="text-xl font-bold my-5">{t("AI-Enhanced_h2A")}</h2>
        <h2 className="text-sm font-semibold my-2">1. {t("AI-Enhanced_h2")}</h2>
        {t("AI-Enhanced_p2")}
        <h2 className="text-sm font-semibold my-2">2. {t("AI-Enhanced_h3")}</h2>
        {t("AI-Enhanced_p3")}
        <h2 className="text-sm font-semibold my-2">
          3. {t("AI-Enhanced_h3A")}
        </h2>
        {t("AI-Enhanced_p4")}
        <h2 className="text-sm font-semibold my-2">4. {t("AI-Enhanced_h4")}</h2>
        {t("AI-Enhanced_p5")}
        <h2 className="text-sm font-semibold my-2">5. {t("AI-Enhanced_h5")}</h2>
        {t("AI-Enhanced_p6")}
        <h2 className="text-sm font-semibold my-2">6. {t("AI-Enhanced_h6")}</h2>
        {t("AI-Enhanced_p7")}
        <h2 className="text-sm font-semibold my-2">7. {t("AI-Enhanced_h7")}</h2>
        {t("AI-Enhanced_p8")}
        <h2 className="text-lg font-bold my-4"> {t("AI-Enhanced_h8")}</h2>
        <h2 className="text-sm font-semibold my-2">{t("AI-Enhanced_h9")}</h2>
        {t("AI-Enhanced_p9")}
        <h2 className="text-sm font-semibold my-2"> {t("AI-Enhanced_h20")}</h2>
        {t("AI-Enhanced_p10")}
        <h2 className="text-sm font-semibold my-2"> {t("AI-Enhanced_h21")}</h2>
        {t("AI-Enhanced_p11")}
        <h2 className="text-sm font-semibold my-2"> {t("AI-Enhanced_h22")}</h2>
        {t("AI-Enhanced_p12")}
        <h2 className="text-sm font-semibold my-2"> {t("AI-Enhanced_h23")}</h2>
        {t("AI-Enhanced_p13")}
        <h2 className="text-lg font-bold my-4">{t("AI-Enhanced_h24")}</h2>
        <h2 className="text-sm font-semibold my-2">{t("AI-Enhanced_h25")}</h2>
        {t("AI-Enhanced_p14")}
        <h2 className="text-sm font-semibold my-2"> {t("AI-Enhanced_h26")}</h2>
        {t("AI-Enhanced_p15")}
        <h2 className="text-sm font-semibold my-2"> {t("AI-Enhanced_h27")}</h2>
        {t("AI-Enhanced_p16")}
        <h2 className="text-sm font-semibold my-2"> {t("AI-Enhanced_h28")} </h2>
        {t("AI-Enhanced_p17")}
        <h2 className="text-lg font-bold my-4">{t("AI-Enhanced_h29")}</h2>
        {t("AI-Enhanced_p18")}
      </div>
      <Footer />
    </div>
  );
}

export default AIEnhancedResumeAccuracy;
