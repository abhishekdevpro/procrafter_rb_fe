
import React, { useContext, useState } from "react";
import FormButton from "./FormButton";
// import { ResumeContext } from "../../pages/builder";
import axios from 'axios';
import { ResumeContext } from "../context/ResumeContext";

const WorkExperience = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const token = localStorage.getItem("token")
   const [showSuggestions, setShowSuggestions] = useState(false);
   const toggleSuggestions = () => {
    setShowSuggestions((prev) => !prev);
  };

  const handleWorkExperience = (e, index) => {
    const newWorkExperience = [...resumeData.workExperience];
    newWorkExperience[index][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, workExperience: newWorkExperience });
  };

  const addWorkExperience = () => {
    setResumeData({
      ...resumeData,
      workExperience: [
        ...resumeData.workExperience,
        {
          company: "",
          position: "",
          description: "",
          keyAchievements: "",
          startYear: "",
          endYear: "",
          startYear: "Aug,2020",
          endYear: "Jul,2024",
          location: "",
        },
      ],
    });
  };
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const years = Array.from(
    { length: 50 },
    (_, i) => new Date().getFullYear() - i
  );

  const handleMonthChange = (e, index, field) => {
    const newWorkExperience = [...resumeData.workExperience];
    const currentDate = newWorkExperience[index][field] || "Aug,2020";
    const [_, year] = currentDate.split(",");
    const newMonth = e.target.value;
    newWorkExperience[index][field] = `${newMonth},${year || ""}`;
    setResumeData({ ...resumeData, workExperience: newWorkExperience });
  };
  
  const handleYearChange = (e, index, field) => {
    const newWorkExperience = [...resumeData.workExperience];
    const currentDate = newWorkExperience[index][field] || "Aug,2020";
    const [month, _] = currentDate.split(",");
    const newYear = e.target.value;
    newWorkExperience[index][field] = `${month || ""},${newYear}`;
    setResumeData({ ...resumeData, workExperience: newWorkExperience });
  };
  

  const removeWorkExperience = (index) => {
    const newWorkExperience = [...resumeData.workExperience];
    newWorkExperience[index] = newWorkExperience[newWorkExperience.length - 1];
    newWorkExperience.pop();
    setResumeData({ ...resumeData, workExperience: newWorkExperience });
  };

  const handleAIAssist = async (index) => {
    setIsLoading(true);
    try {
      const response = await axios.post('https://api.resumeintellect.com/api/user/ai-resume-profexp-data', {
        key: "professional_experience",
        keyword: "Genrate professional summary and Checklist of professional experience in manner of content and information",
        content: resumeData.workExperience[index].position,
      },{
        headers:{
          Authorization:token
        }
      });
      
      handleDescriptionChange(response.data.data.resume_analysis.professional_summary, index);
      handleResponsibilitiesChange(response.data.data.resume_analysis.responsibilities, index);

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDescriptionChange = (value, index) => {
    handleWorkExperience({ target: { name: 'description', value } }, index);
  };

  const handleResponsibilitiesChange = (responsibilities, index) => {
    handleWorkExperience({ target: { name: 'keyAchievements', value: responsibilities.join('\n') } }, index);
  };

  return (
    <div className="flex-col-gap-2 p-2">
      <div className="flex justify-between items-center">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
        Work Experience
      </h2>
      <div className="relative">
              {resumeData.education_suggestions?.length > 0 && (
                <div
                  className="text-red-500 font-medium cursor-pointer hover:text-red-600"
                  onClick={toggleSuggestions} // Toggle on click
                >
                  {`${resumeData.workExperience_suggestions.length} suggestions`}

                  {showSuggestions && (
                    <div className="absolute right-0 bottom-full mb-2 w-64 bg-white border border-red-200 rounded-lg shadow-lg p-4 z-10">
                                            <div className="text-red-600 font-medium mb-2">Suggested Improvements</div>

                      <ul className="text-sm text-gray-800 list-disc pl-5">
                        {resumeData.workExperience_suggestions.map(
                          (suggestion, index) => (
                            <li key={index} className="mb-1">
                              {suggestion}
                            </li>
                          )
                        )}
                      </ul>
                      <div className="absolute bottom-[-8px] right-4 w-4 h-4 bg-white border-b border-r border-red-200 transform rotate-45"></div>
                    </div>
                  )}
                </div>
              )}
            </div>
      </div>


      {resumeData.workExperience.map((workExperience, index) => (
        <div key={index} className="f-col">
          <label className="mt-2">Company</label>
          <input
            type="text"
            placeholder="Company"
            name="company"
            className="w-full other-input border-black border"
            value={workExperience.company}
            onChange={(e) => handleWorkExperience(e, index)}
          />
          <label className="mt-2">Job Title</label>
          <input
            type="text"
            placeholder="Job Title"
            name="position"
            className="w-full other-input border-black border"
            value={workExperience.position}
            onChange={(e) => handleWorkExperience(e, index)}
          />
          {/* <div className="flex-wrap-gap-2">
            <input
              type="date"
              placeholder="Start Year"
              name="startYear"
              className="other-input border-black border"
              value={workExperience.startYear}
              onChange={(e) => handleWorkExperience(e, index)}
            />
            <input
              type="date"
              placeholder="End Year"
              name="endYear"
              className="other-input border-black border"
              value={workExperience.endYear}
              onChange={(e) => handleWorkExperience(e, index)}
            />
          </div> */}
            <div className="">
  <label className="text-black">Start Date</label>
  <div className="flex-wrap-gap-2">
    <select
      className="border-black border other-input flex-1"
      value={(workExperience.startYear || "Aug,2020").split(",")[0]}
      onChange={(e) => handleMonthChange(e, index, "startYear")}
    >
      <option value="">Month</option>
      {months.map((month, idx) => (
        <option key={idx} value={month}>
          {month}
        </option>
      ))}
    </select>
    <select
      className="other-input border-black border flex-1"
      value={(workExperience.startYear || "Aug,2020").split(",")[1]}
      onChange={(e) => handleYearChange(e, index, "startYear")}
    >
      <option value="">Year</option>
      {years.map((year, idx) => (
        <option key={idx} value={year}>
          {year}
        </option>
      ))}
    </select>
  </div>
  <label className="text-black">End Date</label>
  <div className="flex-wrap-gap-2">
    <select
      className="other-input border-black border flex-1"
      value={(workExperience.endYear || "Jul,2024").split(",")[0]}
      onChange={(e) => handleMonthChange(e, index, "endYear")}
    >
      <option value="">Month</option>
      {months.map((month, idx) => (
        <option key={idx} value={month}>
          {month}
        </option>
      ))}
    </select>
    <select
      className="other-input border-black border flex-1"
      value={(workExperience.endYear || "Jul,2024").split(",")[1]}
      onChange={(e) => handleYearChange(e, index, "endYear")}
    >
      <option value="">Year</option>
      {years.map((year, idx) => (
        <option key={idx} value={year}>
          {year}
        </option>
      ))}
    </select>
  </div>
</div>

          <label className="mt-2 text-black">Location</label>
          <input
            type="text"
            placeholder="Location"
            name="location"
            className="w-full other-input border-black border"
            value={workExperience.location}
            onChange={(e) => handleWorkExperience(e, index)}
          />
          <div className="flex justify-between mb-2">
            <label className="mt-2">Description</label>
            <button
              type="button"
              className="border bg-black text-white px-3 rounded-3xl"
              onClick={() => handleAIAssist(index)}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : '+ AI Assist'}
            </button>
          </div>
          <textarea
            type="text"
            placeholder="Description"
            name="description"
            className="w-full other-input border-black border h-32"
            value={workExperience.description}
            maxLength="250"
            onChange={(e) => handleWorkExperience(e, index)}
          />
          <label className="mt-2">Key Achievements</label>
          <textarea
            type="text"
            placeholder="Key Achievements"
            name="keyAchievements"
            className="w-full other-input border-black border h-40"
            value={workExperience.keyAchievements}
            onChange={(e) => handleWorkExperience(e, index)}
          />
        </div>
      ))}
      <FormButton
        size={resumeData.workExperience.length}
        add={addWorkExperience}
        remove={removeWorkExperience}
      />
    </div>
  );
};

export default WorkExperience;

// import React, { useContext, useState } from "react";
// import dynamic from 'next/dynamic';

// // Dynamically load ReactQuill
// const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });import "react-quill/dist/quill.snow.css";
// import { ResumeContext } from "../../pages/builder";
// import { Plus, Minus, Loader2 } from "lucide-react";
// import axios from "axios";

// const WorkExperience = () => {
//   const { resumeData, setResumeData } = useContext(ResumeContext);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const token = localStorage.getItem("token");

//   const quillModules = {
//     toolbar: [
//       ["bold", "italic", "underline", "strike"],
//       [{ list: "ordered" }, { list: "bullet" }],
//       ["clean"]
//     ]
//   };

//   const handleWorkExperience = (e, index, isQuill = false) => {
//     const newWorkExperience = [...resumeData.workExperience];
//     if (isQuill) {
//       newWorkExperience[index][e.target] = e.value;
//     } else {
//       newWorkExperience[index][e.target.name] = e.target.value;
//     }
//     setResumeData({ ...resumeData, workExperience: newWorkExperience });
//   };

//   const addWorkExperience = () => {
//     setResumeData({
//       ...resumeData,
//       workExperience: [
//         ...resumeData.workExperience,
//         {
//           company: "",
//           position: "",
//           description: "",
//           keyAchievements: "",
//           startYear: "",
//           endYear: "",
//         },
//       ],
//     });
//   };

//   const removeWorkExperience = (index) => {
//     const newWorkExperience = [...resumeData.workExperience];
//     newWorkExperience.splice(index, 1);
//     setResumeData({ ...resumeData, workExperience: newWorkExperience });
//   };

//   const handleAIAssist = async (index) => {
//     setIsLoading(true);
//     try {
//       const response = await axios.post(
//         "https://api.resumeintellect.com/api/user/ai-resume-profexp-data",
//         {
//           key: "professional_experience",
//           keyword: "Generate professional summary and Checklist of professional experience in manner of content and information",
//           content: resumeData.workExperience[index].position,
//         },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );

//       handleDescriptionChange(response.data.data.resume_analysis.professional_summary, index);
//       handleResponsibilitiesChange(response.data.data.resume_analysis.responsibilities, index);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDescriptionChange = (value, index) => {
//     handleWorkExperience({ target: "description", value }, index, true);
//   };

//   const handleResponsibilitiesChange = (responsibilities, index) => {
//     handleWorkExperience(
//       { target: "keyAchievements", value: responsibilities.join("\n") },
//       index,
//       true
//     );
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-6">
//       <div className="mb-8">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">Work Experience</h2>
//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//             {error}
//           </div>
//         )}
//       </div>

//       <div className="space-y-8">
//         {resumeData.workExperience.map((workExp, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Company
//                 </label>
//                 <input
//                   type="text"
//                   name="company"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   value={workExp.company}
//                   onChange={(e) => handleWorkExperience(e, index)}
//                   placeholder="Enter company name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Job Title
//                 </label>
//                 <input
//                   type="text"
//                   name="position"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   value={workExp.position}
//                   onChange={(e) => handleWorkExperience(e, index)}
//                   placeholder="Enter job title"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Start Date
//                 </label>
//                 <input
//                   type="date"
//                   name="startYear"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   value={workExp.startYear}
//                   onChange={(e) => handleWorkExperience(e, index)}
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   End Date
//                 </label>
//                 <input
//                   type="date"
//                   name="endYear"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   value={workExp.endYear}
//                   onChange={(e) => handleWorkExperience(e, index)}
//                 />
//               </div>
//             </div>

//             <div className="mb-4">
//               <div className="flex justify-between items-center mb-1">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Description
//                 </label>
//                 <button
//                   type="button"
//                   onClick={() => handleAIAssist(index)}
//                   disabled={isLoading}
//                   className="inline-flex items-center px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
//                 >
//                   {isLoading ? (
//                     <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
//                   ) : (
//                     "AI Assist"
//                   )}
//                 </button>
//               </div>
//               <ReactQuill
//                 theme="snow"
//                 value={workExp.description}
//                 onChange={(value) =>
//                   handleWorkExperience({ target: "description", value }, index, true)
//                 }
//                 modules={quillModules}
//                 className="h-48 mb-12"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Key Achievements
//               </label>
//               <ReactQuill
//                 theme="snow"
//                 value={workExp.keyAchievements}
//                 onChange={(value) =>
//                   handleWorkExperience(
//                     { target: "keyAchievements", value },
//                     index,
//                     true
//                   )
//                 }
//                 modules={quillModules}
//                 className="h-48 mb-12"
//               />
//             </div>

//             <div className="flex justify-end">
//               <button
//                 type="button"
//                 onClick={() => removeWorkExperience(index)}
//                 className="hidden md:inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//               >
//                 <Minus className="h-4 w-4 mr-2" />
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-6">
//         <button
//           type="button"
//           onClick={addWorkExperience}
//           className="inline-flex items-center px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//         >
//           <Plus className="h-4 w-4 mr-2" />
//           Add Work Experience
//         </button>
//       </div>
//     </div>
//   );
// };

// export default WorkExperience;