import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useTranslation } from "react-i18next";

function AiResumeEnhancer() {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <div className="m-4 sm:mx-10 lg:mx-40 p-4 sm:p-6 shadow-2xl">
        <h1 className="my-4 text-3xl sm:text-4xl font-semibold text-center underline">
          {t("aiResumeEnhancer.title")}
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold  my-5">
          {t("aiResumeEnhancer.subtitle")}
        </h2>
        <p className="text-base sm:text-lg"> {t("aiResumeEnhancer.intro")} </p>

        <h1 className="text-xl sm:text-2xl font-semibold my-2 ">
          {t("aiResumeEnhancer.featuresTitle")}
        </h1>

        <h1 className="text-xl sm:text-2xl font-semibold my-2 ">
          {t("aiResumeEnhancer.feature1Title")}
        </h1>
        <p className="text-base sm:text-lg">
          {" "}
          {t("aiResumeEnhancer.feature1Desc")}{" "}
        </p>

        <h1 className="text-xl sm:text-2xl font-semibold my-2 ">
          {t("aiResumeEnhancer.feature2Title")}
        </h1>
        <p className="text-base sm:text-lg">
          {" "}
          {t("aiResumeEnhancer.feature2Desc")}{" "}
        </p>

        <h1 className="text-xl sm:text-2xl font-semibold my-2 ">
          {t("aiResumeEnhancer.feature3Title")}
        </h1>
        <p className="text-base sm:text-lg">
          {" "}
          {t("aiResumeEnhancer.feature3Desc")}{" "}
        </p>

        <h1 className="text-xl sm:text-2xl font-semibold my-2 ">
          {t("aiResumeEnhancer.feature4Title")}
        </h1>
        <p className="text-base sm:text-lg">
          {" "}
          {t("aiResumeEnhancer.feature4Desc")}{" "}
        </p>

        <h1 className="text-xl sm:text-2xl font-semibold my-2 ">
          {t("aiResumeEnhancer.feature5Title")}
        </h1>
        <p className="text-base sm:text-lg">
          {" "}
          {t("aiResumeEnhancer.feature5Desc")}
        </p>

        <h1 className="text-xl sm:text-2xl font-semibold my-2 ">
          {t("aiResumeEnhancer.feature6Title")}
        </h1>
        <p className="text-base sm:text-lg">
          {" "}
          {t("aiResumeEnhancer.feature6Desc")}{" "}
        </p>

        <h1 className="text-xl sm:text-2xl font-semibold my-2 ">
          {t("aiResumeEnhancer.feature7Title")}
        </h1>
        <p className="text-base sm:text-lg">
          {t("aiResumeEnhancer.feature7Desc")}
        </p>

        <h1 className="text-xl sm:text-2xl font-semibold my-2 ">
          {t("aiResumeEnhancer.feature8Title")}
        </h1>
        <p className="text-base sm:text-lg">
          {t("aiResumeEnhancer.feature8Desc")}{" "}
        </p>

        <h1 className="text-lg font-bold my-4">
          {t("aiResumeEnhancer.howItWorksTitle")}
        </h1>

        <h1 className="text-xl sm:text-2xl font-semibold my-2 ">
          {t("aiResumeEnhancer.step1Title")}
        </h1>
        <p className="text-base sm:text-lg">
          {" "}
          {t("aiResumeEnhancer.step1Desc")}{" "}
        </p>

        <h1 className="text-xl sm:text-2xl font-semibold my-2 ">
          {t("aiResumeEnhancer.step2Title")}
        </h1>
        <p className="text-base sm:text-lg">
          {t("aiResumeEnhancer.step2Desc")}{" "}
        </p>

        <h1 className="text-xl sm:text-2xl font-semibold my-2 ">
          {t("aiResumeEnhancer.step3Title")}
        </h1>
        <p className="text-base sm:text-lg">
          {" "}
          {t("aiResumeEnhancer.step3Desc")}{" "}
        </p>

        <h1 className="text-xl sm:text-2xl font-semibold my-2 ">
          {t("aiResumeEnhancer.step4Title")}
        </h1>
        <p className="text-base sm:text-lg">
          {" "}
          {t("aiResumeEnhancer.step4Desc")}{" "}
        </p>

        <h1 className="text-lg font-bold my-2">
          {t("aiResumeEnhancer.benefitsTitle")}
        </h1>

        <h1 className="text-xl sm:text-2xl font-semibold my-2 ">
          {t("aiResumeEnhancer.benefit1Title")}
        </h1>
        <p className="text-base sm:text-lg">
          {" "}
          {t("aiResumeEnhancer.benefit1Desc")}
        </p>

        <h1 className="text-xl sm:text-2xl font-semibold my-2 ">
          {t("aiResumeEnhancer.benefit2Title")}
        </h1>
        <p className="text-base sm:text-lg">
          {" "}
          {t("aiResumeEnhancer.benefit2Desc")}{" "}
        </p>

        <h1 className="text-xl sm:text-2xl font-semibold my-2 ">
          {t("aiResumeEnhancer.benefit3Title")}
        </h1>
        <p className="text-base sm:text-lg">
          {" "}
          {t("aiResumeEnhancer.benefit3Desc")}{" "}
        </p>

        <h1 className="text-xl sm:text-2xl font-semibold my-2 ">
          {t("aiResumeEnhancer.benefit4Title")}
        </h1>
        <p className="text-base sm:text-lg">
          {" "}
          {t("aiResumeEnhancer.benefit4Desc")}{" "}
        </p>

        <h1 className="text-xl sm:text-2xl font-semibold my-2 ">
          {t("aiResumeEnhancer.startEnhancingTitle")}
        </h1>
        <p className="text-base sm:text-lg">
          {" "}
          {t("aiResumeEnhancer.startEnhancingDesc")}
        </p>

        <h1 className="text-lg font-bold my-2">
          {t("aiResumeEnhancer.getStartedTitle")}
        </h1>
        <p className="text-base sm:text-lg">
          {" "}
          {t("aiResumeEnhancer.getStartedDesc")}{" "}
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default AiResumeEnhancer;
