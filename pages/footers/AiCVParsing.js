import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useTranslation } from "react-i18next";

function AiCVParsing() {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar />
      <div className="m-4 sm:mx-10 lg:mx-40 p-4 sm:p-6 shadow-2xl">
        <h2 className="text-4xl font-semibold my-4 underline text-center ">
          {t("Ai_CV_Parsing_h")}
        </h2>
        <h2 className="font-semibold"> {t("Ai_CV_Parsing_h2")}</h2>
        {t("Ai_CV_Parsing_p1")}
        <h2 className="text-xl font-bold my-5">{t("Ai_CV_Parsing_h2")}</h2>
        <h2 className="text-sm font-semibold my-2">
          1. {t("Ai_CV_Parsing_h3")}
        </h2>
        {t("Ai_CV_Parsing_p2")}
        <h2 className="text-sm font-semibold my-2">
          2. {t("Ai_CV_Parsing_h4")}
        </h2>
        {t("Ai_CV_Parsing_p3")}
        <h2 className="text-sm font-semibold my-2">
          3. {t("Ai_CV_Parsing_h5")}
        </h2>
        {t("Ai_CV_Parsing_p4")}
        <h2 className="text-sm font-semibold my-2">
          4. {t("Ai_CV_Parsing_h6")}
        </h2>
        {t("Ai_CV_Parsing_p5")}
        <h2 className="text-sm font-semibold my-2">
          5. {t("Ai_CV_Parsing_h7")}
        </h2>
        {t("Ai_CV_Parsing_p6")}
        <h2 className="text-sm font-semibold my-2">
          6. {t("Ai_CV_Parsing_h8")}
        </h2>
        {t("Ai_CV_Parsing_p7")}
        <h2 className="text-sm font-semibold my-2">
          7. {t("Ai_CV_Parsing_h9")}
        </h2>
        {t("Ai_CV_Parsing_p8")}
        <h2 className="text-lg font-bold my-4">{t("Ai_CV_Parsing_h20")}</h2>
        <h2 className="text-sm font-semibold my-2">{t("Ai_CV_Parsing_h21")}</h2>
        {t("Ai_CV_Parsing_p9")}
        <h2 className="text-sm font-semibold my-2">{t("Ai_CV_Parsing_h22")}</h2>
        {t("Ai_CV_Parsing_p10")}
        <h2 className="text-sm font-semibold my-2">{t("Ai_CV_Parsing_h23")}</h2>
        {t("Ai_CV_Parsing_p11")}
        <h2 className="text-sm font-semibold my-2">{t("Ai_CV_Parsing_h24")}</h2>
        {t("Ai_CV_Parsing_p12")}
        <h2 className="text-sm font-semibold my-2">{t("Ai_CV_Parsing_h25")}</h2>
        {t("Ai_CV_Parsing_p13")}
        <h2 className="text-lg font-bold my-4">{t("Ai_CV_Parsing_h26")}</h2>
        <h2 className="text-sm font-semibold my-2">{t("Ai_CV_Parsing_h27")}</h2>
        {t("Ai_CV_Parsing_p14")}
        <h2 className="text-sm font-semibold my-2">{t("Ai_CV_Parsing_h28")}</h2>
        {t("Ai_CV_Parsing_p15")}
        <h2 className="text-sm font-semibold my-2">{t("Ai_CV_Parsing_h29")}</h2>
        {t("Ai_CV_Parsing_p16")}
        <h2 className="text-sm font-semibold my-2">{t("Ai_CV_Parsing_h20")}</h2>
        {t("Ai_CV_Parsing_p17")}
        <h2 className="text-sm font-semibold my-2">{t("Ai_CV_Parsing_h21")}</h2>
        {t("Ai_CV_Parsing_p18")}
        <h2 className="text-sm font-semibold my-2">{t("Ai_CV_Parsing_h22")}</h2>
        {t("Ai_CV_Parsing_p19")}
      </div>
      <Footer />
    </div>
  );
}

export default AiCVParsing;
