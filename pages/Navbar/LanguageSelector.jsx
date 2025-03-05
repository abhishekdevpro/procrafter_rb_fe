// import { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { Globe } from "lucide-react"; // Icon for the toggle button

// function LanguageSelector() {
//   const { i18n } = useTranslation();
//   const [isOpen, setIsOpen] = useState(false);

//   const changeLanguage = (event) => {
//     i18n.changeLanguage(event.target.value);
//     setIsOpen(false); // Close dropdown after selecting a language
//   };

//   return (
//     <div className="fixed top-4 right-4 z-50">
//       {/* Toggle Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="bg-white shadow-lg p-2 rounded-full border hover:bg-gray-100 transition"
//       >
//         <Globe className="w-6 h-6 text-gray-700" />
//       </button>

//       {/* Language Dropdown (Shows only when isOpen is true) */}
//       {isOpen && (
//         <div className="absolute top-12 right-0 bg-white shadow-lg p-2 rounded-md border transition-opacity animate-fadeIn">
//           <select
//             onChange={changeLanguage}
//             defaultValue={i18n.language}
//             className="border p-2 rounded text-black w-32"
//           >
//             <option value="en">🇺🇸 English</option>
//             <option value="fr">🇫🇷 French</option>
//           </select>
//         </div>
//       )}
//     </div>
//   );
// }

// export default LanguageSelector;
// import { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { Globe } from "lucide-react"; // Icon for the toggle button

// function LanguageSelector() {
//   const { i18n } = useTranslation();
//   const [isOpen, setIsOpen] = useState(false);

//   const changeLanguage = (lang) => {
//     i18n.changeLanguage(lang);
//     setIsOpen(false); // Close menu after selection
//     localStorage.setItem("savedLanguage",lang)
//   };

//   return (
//     <div className="fixed top-12 right-4 z-50">
//       {/* Toggle Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="bg-white shadow-lg p-2 rounded-full border hover:bg-gray-100 transition"
//       >
//         <Globe className="w-6 h-6 text-gray-700" />
//       </button>

//       {/* Language Options (Dropdown) */}
//       {isOpen && (
//         <div className="absolute top-12 right-0 bg-white shadow-lg p-2 rounded-md border transition-opacity animate-fadeIn flex justify-between items-center">
//           <button
//             onClick={() => changeLanguage("en")}
//             className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
//               i18n.language === "en"
//                 ? "font-bold text-blue-600"
//                 : "text-gray-700"
//             }`}
//           >
//             🇺🇸 English
//           </button>
//           <button
//             onClick={() => changeLanguage("fr")}
//             className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
//               i18n.language === "fr"
//                 ? "font-bold text-blue-600"
//                 : "text-gray-700"
//             }`}
//           >
//             🇫🇷 French
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default LanguageSelector;
// import { useState, useContext } from "react";
// import { useTranslation } from "react-i18next";
// import { Globe } from "lucide-react";
// import { ResumeContext } from "../../components/context/ResumeContext";


// function LanguageSelector() {
//   const { i18n } = useTranslation();
//   const { selectedLang, setSelectedLang } = useContext(ResumeContext);
//   const [isOpen, setIsOpen] = useState(false);

//   const changeLanguage = (lang) => {
//     i18n.changeLanguage(lang);
//     setSelectedLang(lang);
//     setIsOpen(false);
//   };

//   return (
//     <div className="fixed top-12 right-4 z-50">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="bg-white shadow-lg p-2 rounded-full border hover:bg-gray-100 transition"
//       >
//         <Globe className="w-6 h-6 text-gray-700" />
//       </button>

//       {isOpen && (
//         <div className="absolute top-12 right-0 bg-white shadow-lg p-2 rounded-md border transition-opacity animate-fadeIn flex gap-2">
//           <button
//             onClick={() => changeLanguage("en")}
//             className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
//               selectedLang === "en" ? "font-bold text-blue-600" : "text-gray-700"
//             }`}
//           >
//             🇺🇸 English
//           </button>
//           <button
//             onClick={() => changeLanguage("fr")}
//             className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
//               selectedLang === "fr" ? "font-bold text-blue-600" : "text-gray-700"
//             }`}
//           >
//             🇫🇷 French
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default LanguageSelector;
import { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { ResumeContext } from "../../components/context/ResumeContext";

function LanguageSelector() {
  const { i18n } = useTranslation();
  const { selectedLang, setSelectedLang } = useContext(ResumeContext);
  const [isOpen, setIsOpen] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    const storedLang = localStorage.getItem("selectedLang");
    if (storedLang) {
      i18n.changeLanguage(storedLang);
      setSelectedLang(storedLang);
    }
  }, [i18n, setSelectedLang]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
    localStorage.setItem("selectedLang", lang); // Save language to localStorage
    setIsOpen(false);
  };

  return (
    <div className="fixed top-12 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white shadow-lg p-2 rounded-full border hover:bg-gray-100 transition"
      >
        <Globe className="w-6 h-6 text-gray-700" />
      </button>

      {isOpen && (
        <div className="absolute top-12 right-0 bg-white shadow-lg p-2 rounded-md border transition-opacity animate-fadeIn flex gap-2">
          <button
            onClick={() => changeLanguage("en")}
            className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
              selectedLang === "en" ? "font-bold text-blue-600" : "text-gray-700"
            }`}
          >
            🇺🇸 English
          </button>
          <button
            onClick={() => changeLanguage("fr")}
            className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
              selectedLang === "fr" ? "font-bold text-blue-600" : "text-gray-700"
            }`}
          >
            🇫🇷 French
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;

