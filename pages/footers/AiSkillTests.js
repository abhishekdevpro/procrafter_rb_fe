import React, { useTransition } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useTranslation } from "react-i18next";
function AiSkillTests() {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar />
      <div className=" m-4 sm:mx-10 lg:mx-40 p-4 sm:p-6 shadow-2xl">
        <h2 className="text-4xl font-semibold my-4 underline text-center ">
          {t("Ai_Skill_Tests")}
        </h2>
        <h2 className="text-2xl font-semibold my-2 mt-5 ">
          {t("Ai_Skill_Tests_heading1")}
        </h2>
        {t("Ai_Skill_Tests_paragraph2")}
        <h2 className="text-2xl font-semibold my-2 mt-5">
          {t("Ai_Skill_Tests_heading2")}
        </h2>
        <h2 className="text-sm font-semibold my-2">
          1. {t("Ai_Skill_Tests_heading3")}
        </h2>
        {t("Ai_Skill_Tests_paragraph2")}
        <h2 className="text-sm font-semibold my-2">
          2. {t("Ai_Skill_Tests_heading4")}
        </h2>
        {t("Ai_Skill_Tests_paragraph3")}
        <h2 className="text-sm font-semibold my-2">
          3. {t("Ai_Skill_Tests_heading5")}
        </h2>
        {t("Ai_Skill_Tests_paragraph4")}
        <h2 className="text-sm font-semibold my-2">
          4. {t("Ai_Skill_Tests_heading6")}
        </h2>
        {t("Ai_Skill_Tests_paragraph5")}
        <h2 className="text-sm font-semibold my-2">
          5. {t("Ai_Skill_Tests_heading7")}
        </h2>
        {t("Ai_Skill_Tests_paragraph6")}
        <h2 className="text-sm font-semibold my-2">
          6. {t("Ai_Skill_Tests_heading8")}
        </h2>
        {t("Ai_Skill_Tests_paragraph7")}
        <h2 className="text-sm font-semibold my-2">
          7. {t("Ai_Skill_Tests_heading9")}
        </h2>
        {t("Ai_Skill_Tests_paragraph8")}
        <h2 className="text-lg font-bold my-4">
          {" "}
          {t("Ai_Skill_Tests_heading10")}
        </h2>
        <h2 className="text-sm font-semibold my-2">
          {t("Ai_Skill_Tests_heading11")}
        </h2>
        {t("Ai_Skill_Tests_paragraph9")}
        <h2 className="text-sm font-semibold my-2">
          {" "}
          {t("Ai_Skill_Tests_heading12")}
        </h2>
        {t("Ai_Skill_Tests_paragraph20")}
        <h2 className="text-sm font-semibold my-2">
          {t("Ai_Skill_Tests_heading13")}
        </h2>
        {t("Ai_Skill_Tests_paragraph21")}
        <h2 className="text-sm font-semibold my-2">
          {" "}
          {t("Ai_Skill_Tests_heading14")}
        </h2>
        {t("Ai_Skill_Tests_paragraph22")}
        <h2 className="text-sm font-semibold my-2">
          {t("Ai_Skill_Tests_heading15")}
        </h2>
        {t("Ai_Skill_Tests_paragraph23")}
        <h2 className="text-lg font-bold my-4">
          {t("Ai_Skill_Tests_heading14")}
        </h2>
        <h2 className="text-sm font-semibold my-2">
          {t("Ai_Skill_Tests_heading17")}
        </h2>
        {t("Ai_Skill_Tests_paragraph24")}
        <h2 className="text-sm font-semibold my-2">
          {t("Ai_Skill_Tests_heading18")}
        </h2>
        {t("Ai_Skill_Tests_paragraph25")}
        <h2 className="text-sm font-semibold my-2">
          {t("Ai_Skill_Tests_heading19")}
        </h2>
        {t("Ai_Skill_Tests_paragraph26")}
        <h2 className="text-sm font-semibold my-2">
          {t("Ai_Skill_Tests_heading20")}
        </h2>
        {t("Ai_Skill_Tests_paragraph27")}
        <h2 className="text-sm font-semibold my-2">
          {t("Ai_Skill_Tests_heading21")}
        </h2>
        {t("Ai_Skill_Tests_paragraph28")}
        <h2 className="text-lg font-bold my-4">
          {t("Ai_Skill_Tests_heading22")}
        </h2>
        {t("Ai_Skill_Tests_paragraph29")}
      </div>
      <Footer />
    </div>
  );
}

export default AiSkillTests;
