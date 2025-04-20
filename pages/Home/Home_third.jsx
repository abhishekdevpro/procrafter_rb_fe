
import Link from "next/link";
import Image from "next/image";
import image from "./Images/homeimage1.jpg";
import icon1 from "./Images/video_icon1.png";
import icon2 from "./Images/video_icon2.gif";
import icon3 from "./Images/video_icon3.gif";
import icon4 from "./Images/video_icon4.gif";
import { useTranslation } from "react-i18next";
import { AiOutlineCheck } from "react-icons/ai";
import image1 from "./Images/homeimage1.jpg";
import image2 from "./Images/homeimage2.jpg";
import image3 from "./Images/homeimage3.jpg";
import image4 from "./Images/homeimage4.jpg";
import CV1 from "./Images/FrenchCV1.jpg";
import CV2 from "./Images/FrenchCV2.jpg";
import CV3 from "./Images/FrenchCV3.png";
import frenchimage1 from "./Images/frenchresume1.jpg";
import frenchimage2 from "./Images/frenchresume2.jpg";
// import frenchimage3 from "./Images/frenchresume3.png";
import cvimage1 from "./Images/cv4.jpg";
import cvimage2 from "./Images/homeimage3.jpg";
import cvimage3 from "./Images/cv3.jpg";
import Home_fourth from "./Home_fourth";
import video from "./Images/video2.mp4";

function Home_third() {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-gray-100 py-10">
        <div className="flex justify-center">
          <div
            className="md:w-[78%] rounded-xl py-5 px-4 bg-pink-600"
            id="home_third"
          >
            <div className="flex flex-col gap-2 justify-evenly md:flex-row rounded-xl px-5 text-black">
              <div>
                <Image
                  src={image}
                  alt="logo"
                  className="h-[400px] w-[400px] rounded-xl shadow-lg shadow-gray-600"
                />
              </div>
              <div className="flex flex-col font-semibold px-3 gap-5">
                <h2 className="text-center font-bold text-4xl py-2 text-black">
                  {t("how_ai_works")}
                </h2>
                <div>
                  {[
                    {
                      icon: icon1,
                      text: "check_resume_score",
                    },
                    {
                      icon: icon2,
                      text: "ai_suggests_edits",
                    },
                    {
                      icon: icon3,
                      text: "land_abroad_jobs",
                    },
                    {
                      icon: icon4,
                      text: "improve_resume_ai",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center shadow-lg rounded-2xl px-3 py-2 shadow-gray-600 hover:border-b-2 hover:border-slate-500 hover:rounded-lg gap-2"
                    >
                      <div>
                        <Image
                          src={item.icon}
                          alt="logo"
                          className="h-16 w-16"
                        />
                      </div>
                      <div className="text-xl">
                        <p>{t(item.text)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5  my-8 rounded-xl items-center justify-center px-5 py-10  md:mx-auto md:w-full">
          <div className="flex flex-col items-center justify-center max-w-6xl">
            <h2 className=" text-3xl md:text-5xl font-bold text-pink-600 text-center py-6">
              {t("explore_templates")}
            </h2>

            <div className="flex flex-col md:flex-row gap-4 ">
              <div className="text-lg text-left flex flex-col gap-1">
                <div className="flex gap-2">
                  <AiOutlineCheck className="border-2 px-2 py-2 rounded-full text-white bg-pink-600" />
                  {t("chosen_by_experts")}
                </div>
                <div className="flex gap-2">
                  <AiOutlineCheck className="border-2 px-2 py-2 rounded-full text-white bg-pink-600" />
                  {t("backed_by_technology")}
                </div>
              </div>

              <div className="text-lg text-left flex flex-col gap-1">
                <div className="flex gap-2">
                  <AiOutlineCheck className="border-2 px-2 py-2 rounded-full text-white bg-pink-600" />
                  {t("powered_by_ai")}
                </div>
                <div className="flex gap-2">
                  <AiOutlineCheck className="border-2 px-2 py-2 rounded-full text-white bg-pink-600" />
                  {t("ready_in_15_minutes")}
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col justify-center gap-5 items-center md:flex-row md:gap-10">
            {[
              {
                src: frenchimage1,
                alt: "alt1_h3",
                title: "title1_h3",
              },
              {
                src: frenchimage2,
                alt: "alt2_h3",
                title: "title2_h3",
              },
              {
                src: image3,
                alt: "alt3_h3",
                title: "title1_h3",
              },
              {
                src: image4,
                alt: "alt1_h3",
                title: "title2_h3",
              },
              // {
              //   src: image2,
              //   alt: "alt2_h3",
              //   title: "title2_h3",
              // },
              // {
              //   src: image3,
              //   alt: "alt3_h3",
              //   title: "title3_h3",
              // },
            ].map((template, index) => (
              <div key={index} className="relative group">
                <Image
                  src={template.src}
                  alt={t(template.alt)}
                  className="h-96 w-full rounded-xl"
                />
                <h2
                  className="font-bold text-xl text-center mt-2"
                  id="homecard"
                >
                  {t(template.title)}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-6 border-2 mb-3 bg-gray-100">
        <div className="flex gap-2 justify-center bg-pink-600 text-white py-4 text-lg md:text-4xl align-middle items-center font-bold px-2">
          {t("certified_by_recruiters")}
        </div>
        <div className="flex justify-center items-center px-2 py-3">
          <div className="relative w-[100%] h-[300px] md:w-[80%] md:h-[675px] rounded-xl shadow-lg shadow-gray-600 overflow-hidden">
            <video
              className="absolute top-0 left-0 w-full h-full"
              src={video}
              title="Embedded Video"
              autoPlay
              loop
              muted
              playsInline
              // style={{objectFit: 'cover'}}
            ></video>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 px-5 py-10 md:mx-auto md:w-[70%]">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold text-pink-600 rounded-xl text-center py-6">
            {t("looking_cover_letter")}
          </h2>
          <p className=" text-lg">{t("explore_cover_letters")}</p>
        </div>
        <div className="flex flex-col justify-center gap-5 items-center md:flex-row">
          {[
            {
              src: CV1,
              alt: "Assistant Editor Resume Example",
              title: "title_h4",
            },
            {
              src: CV2,
              alt: "Farmer Resume Template",
              title: "title_h4",
            },
            {
              src: CV3,
              alt: "Farmer Resume Template",
              title: "title_h4",
            },
            {
              src: image4,
              alt: "Farmer Resume Template",
              title: "title_h4",
            },
          ].map((template, index) => (
            <div key={index} className="relative group">
              <Image
                src={template.src}
                alt={template.alt}
                className=" h-[340px] w-full border-2 rounded-lg shadow-xl shadow-gray-500"
              />
              <h2 className="font-bold  text-xl text-center mt-2" id="homecard">
                {t(template.title)}
              </h2>
              <Link href="/dashboard/cv-builder">
                <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit bg-pink-600 text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t("create_cv")}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Home_fourth />
    </>
  );
}

// Tick icon as an SVG component
const TickIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="pink"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    className="inline-block"
  >
    <path d="M9 16.2l-3.5-3.5c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4 4c.4.4 1 .4 1.4 0l9-9c.4-.4.4-1 0-1.4s-1-.4-1.4 0L9 16.2z" />
  </svg>
);

export default Home_third;
