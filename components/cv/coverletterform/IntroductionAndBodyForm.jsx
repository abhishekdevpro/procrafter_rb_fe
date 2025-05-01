// import React, { useContext } from "react";
// import { CoverLetterContext } from "../../context/CoverLetterContext";
// import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
// const IntroductionAndBodyForm = () => {
//   const { coverLetterData, setCoverLetterData } =
//     useContext(CoverLetterContext);

//   const handleIntroductionChange = (value) => {
//     setCoverLetterData((prevData) => ({
//       ...prevData,
//       introduction: value,
//     }));
//   };

//   const handleBodyChange = (index, value) => {
//     setCoverLetterData((prevData) => {
//       const updatedBody = [...prevData.body];
//       updatedBody[index] = value;
//       return {
//         ...prevData,
//         body: updatedBody,
//       };
//     });
//   };

//   const addBodyParagraph = () => {
//     setCoverLetterData((prevData) => ({
//       ...prevData,
//       body: [...prevData.body, ""], // Add a new empty paragraph
//     }));
//   };

//   const removeBodyParagraph = (index) => {
//     setCoverLetterData((prevData) => {
//       const updatedBody = prevData.body.filter((_, i) => i !== index);
//       return {
//         ...prevData,
//         body: updatedBody,
//       };
//     });
//   };

//   return (
//     <div className="p-4 md:p-8   rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6 text-black">
//         Introduction & Body
//       </h2>

//       {/* Introduction Section */}
//       <div className="mb-6">
//         <label className="block text-black font-medium mb-2">
//           Introduction
//         </label>
//         <textarea
//           value={coverLetterData.introduction}
//           onChange={(e) => handleIntroductionChange(e.target.value)}
//           className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           rows="4"
//           placeholder="Write your introduction here"
//         ></textarea>
//       </div>

//       {/* Body Section */}
//       <h3 className="text-xl font-semibold mb-4 text-black">Body Paragraphs</h3>
//       {coverLetterData.body.map((paragraph, index) => (
//         <div key={index} className="mb-4">
//           <div className="flex justify-between items-center">
//             <label className="block text-black font-medium mb-2">
//               Paragraph {index + 1}
//             </label>
//             <button
//               type="button"
//               onClick={() => removeBodyParagraph(index)}
//               aria-label="Remove"
//               className="p-2 text-white bg-red-700 rounded-lg text-xl mb-2"
//             >
//               <MdRemoveCircle />
//             </button>
//           </div>

//           <textarea
//             value={paragraph}
//             onChange={(e) => handleBodyChange(index, e.target.value)}
//             className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             rows="4"
//             placeholder={`Write paragraph ${index + 1}`}
//           ></textarea>
//         </div>
//       ))}

//       {/* Add Paragraph Button */}

//       <button
//         type="button"
//         aria-label="Add"
//         className="p-2 text-white bg-black rounded-lg text-sm"
//         onClick={addBodyParagraph}
//       >
//         <span> ✙ Add section</span>
//       </button>
//     </div>
//   );
// };

// export default IntroductionAndBodyForm;

// import React, { useContext } from "react";
// import { CoverLetterContext } from "../../context/CoverLetterContext";
// import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
// import { useTranslation } from "react-i18next";

// const IntroductionAndBodyForm = () => {
//   const { t } = useTranslation();
//   const { coverLetterData, setCoverLetterData } =
//     useContext(CoverLetterContext);

//   const handleIntroductionChange = (value) => {
//     setCoverLetterData((prevData) => ({
//       ...prevData,
//       introduction: value,
//     }));
//   };

//   const handleBodyChange = (index, value) => {
//     setCoverLetterData((prevData) => {
//       const updatedBody = [...prevData.body];
//       updatedBody[index] = value;
//       return {
//         ...prevData,
//         body: updatedBody,
//       };
//     });
//   };

//   const addBodyParagraph = () => {
//     setCoverLetterData((prevData) => ({
//       ...prevData,
//       body: [...prevData.body, ""], // Add a new empty paragraph
//     }));
//   };

//   const removeBodyParagraph = (index) => {
//     setCoverLetterData((prevData) => {
//       const updatedBody = prevData.body.filter((_, i) => i !== index);
//       return {
//         ...prevData,
//         body: updatedBody,
//       };
//     });
//   };

//   return (
//     <div className="p-4 md:p-8 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6 text-black">
//         {t("introductionBody.title")}
//       </h2>

//       {/* Introduction Section */}
//       <div className="mb-6">
//         <label className="block text-black font-medium mb-2">
//           {t("introductionBody.introduction")}
//         </label>
//         <textarea
//           value={coverLetterData.introduction}
//           onChange={(e) => handleIntroductionChange(e.target.value)}
//           className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           rows="4"
//           placeholder={t("introductionBody.introductionPlaceholder")}
//         ></textarea>
//       </div>

//       {/* Body Section */}
//       <h3 className="text-xl font-semibold mb-4 text-black">
//         {t("introductionBody.bodyParagraphs")}
//       </h3>
//       {coverLetterData.body.map((paragraph, index) => (
//         <div key={index} className="mb-4">
//           <div className="flex justify-between items-center">
//             <label className="block text-black font-medium mb-2">
//               {t("introductionBody.paragraph")} {index + 1}
//             </label>
//             <button
//               type="button"
//               onClick={() => removeBodyParagraph(index)}
//               aria-label={t("introductionBody.remove")}
//               className="p-2 text-white bg-red-700 rounded-lg text-xl mb-2"
//             >
//               <MdRemoveCircle />
//             </button>
//           </div>

//           <textarea
//             value={paragraph}
//             onChange={(e) => handleBodyChange(index, e.target.value)}
//             className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             rows="4"
//             placeholder={t("introductionBody.paragraphPlaceholder", {
//               index: index + 1,
//             })}
//           ></textarea>
//         </div>
//       ))}

//       {/* Add Paragraph Button */}
//       <button
//         type="button"
//         aria-label={t("introductionBody.addSection")}
//         className="p-2 text-white bg-black rounded-lg text-sm"
//         onClick={addBodyParagraph}
//       >
//         <span>{t("introductionBody.addSection")}</span>
//       </button>
//     </div>
//   );
// };

// export default IntroductionAndBodyForm;

import React, { useContext } from "react";
import { useTranslation } from "next-i18next";
import { CoverLetterContext } from "../../context/CoverLetterContext";
import dynamic from "next/dynamic";
// adjust based on your button component

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const IntroductionAndBodyForm = () => {
  const { t } = useTranslation();
  const { coverLetterData, setCoverLetterData } =
    useContext(CoverLetterContext);

  const sectionTitles = t("coverLetterSection.sections", {
    returnObjects: true,
  });

  const handleBodyChange = (index, value) => {
    setCoverLetterData((prevData) => {
      const updatedBody = [...prevData.body];
      updatedBody[index] = value;
      return {
        ...prevData,
        body: updatedBody,
      };
    });
  };

  const handleAIAssist = (index) => {
    // Placeholder for AI logic - Replace this with real OpenAI or other integration
    const aiGeneratedText = `<p><strong>AI Suggested Content for:</strong> ${sectionTitles[index]}</p><p>This is a placeholder suggestion generated by AI.</p>`;
    handleBodyChange(index, aiGeneratedText);
  };

  return (
    <div className="p-4 md:p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-black">
        {t("coverLetterSection.title")}
      </h2>

      {sectionTitles.map((title, index) => (
        <div key={index} className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-black font-medium">{title}</label>
            <button
              onClick={() => handleAIAssist(index)}
              className=" p-2 text-white bg-black rounded-lg text-sm mb-2"
              type="button"
            >
              ✙ {t("coverLetterSection.aiAssist", { sectionTitle: title })}
            </button>
          </div>

          <ReactQuill
            value={coverLetterData.body[index] || ""}
            onChange={(value) => handleBodyChange(index, value)}
            theme="snow"
            placeholder={t("coverLetterSection.placeholder", {
              sectionTitle: title,
            })}
          />
        </div>
      ))}
    </div>
  );
};

export default IntroductionAndBodyForm;
