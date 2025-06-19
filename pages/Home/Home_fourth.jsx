import Link from "next/link";
import blog3 from "./Images/blog3.jpg";
import Home_five from "./Home_five";
import { useTranslation } from "react-i18next";
import Home_six from "./Home_six";
const Home_fourth = () => {
  const { t } = useTranslation();
  const course = [
    {
      img: "https://blog.procraftrresumebuilder.com/wp-content/uploads/2025/06/Copy-of-Procraftr-Blog-10-Salary-Negotiation-Secrets.jpg",
      title:
        "Salary Negotiation Secrets: How Your Resume Can Help You Earn More in the US",
      link: "https://blog.procraftrresumebuilder.com/2025/06/19/salary-negotiation-secrets-how-your-resume-can-help-you-earn-more-in-the-us/",
    },
    {
      img: "https://blog.procraftrresumebuilder.com/wp-content/uploads/2025/06/Copy-of-Procraftr-Blog-9-Navigating-the-Remote-Job-Market.jpg",
      title:
        "Navigating the Remote Job Market: Optimizing Your Resume for US Virtual Roles",
      link: "https://blog.procraftrresumebuilder.com/2025/06/19/navigating-the-remote-job-market-optimizing-your-resume-for-us-virtual-roles/",
    },

    {
      img: "https://blog.procraftrresumebuilder.com/wp-content/uploads/2025/06/Copy-of-Procraftr-Blog-8-Targeted-Resumes.jpg",
      title:
        "Targeted Resumes: Tailoring Your Application for Specific Industries in the USA",
      link: "https://blog.procraftrresumebuilder.com/2025/06/19/targeted-resumes-tailoring-your-application-for-specific-industries-in-the-usa/",
    },

    {
      img: "https://blog.procraftrresumebuilder.com/wp-content/uploads/2025/06/Copy-of-Procraftr-Blog-7-The-Ultimate-Guide.jpg",
      title:
        "The Ultimate Guide to US Resume Formatting: Dos and Don’ts for 2025",
      link: "https://blog.procraftrresumebuilder.com/2025/06/19/32/",
    },
  ];
  return (
    <>
      <div id="course" className="bg-gray-100 py-10 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold px-4 lg:px-0 py-5 text-center text-purple-600">
            {t("neweststratigies")}
          </h2>
          <p className="mx-auto px-4 lg:px-0 text-lg lg:text-base text-gray-700 max-w-4xl text-center mb-8">
            {t("paragraphhome_fourth")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {course.map((card, index) => (
              <a
                key={index}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-between h-full bg-white rounded-xl shadow-md overflow-hidden transition duration-300 transform hover:scale-105"
              >
                <img
                  src={card.img}
                  alt="Course"
                  className="w-full h-auto border-2 rounded-t-md"
                />
                <div className="p-4">
                  <h2 className="text-lg lg:text-lg font-bold mb-2">
                    {t(card.title)}
                  </h2>
                  {/* <p className="text-sm text-gray-600">{card.name}</p> */}
                </div>
              </a>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link href={"https://blog.procraftrresumebuilder.com/"}>
              <button className="px-6 py-3 text-lg font-semibold text-white bg-purple-600 hover:bg-purple-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600">
                {t("get_moreadvice")}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Home_six />
      {/* <Home_five /> */}
    </>
  );
};

export default Home_fourth;
