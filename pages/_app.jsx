import "/styles/globals.css";
// In your component or _app.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ResumeProvider } from "../components/context/ResumeContext";
import { CoverLetterProvider } from "../components/context/CoverLetterContext";
import { appWithTranslation } from "next-i18next";
import "../components/utils/i18n";
function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const adminToken = localStorage.getItem("token"); // Separate token for admin
    const isDashboardRoute = router.pathname.startsWith("/dashboard");
    const isAdminRoute = router.pathname.startsWith("/admin"); // Check for admin routes

    if (isDashboardRoute && !token) {
      // Save the attempted route for dashboard user
      localStorage.setItem("redirectAfterLogin", router.pathname);
      router.push("/login2"); // Redirect to login for dashboard user
    }

    if (isAdminRoute && !token) {
      // Save the attempted route for admin
      localStorage.setItem("redirectAfterAdminLogin", router.pathname);
      router.push("/adminlogin"); // Redirect to admin login if accessing admin route without a token
    }
  }, [router.pathname]);
  // console.log(router.pathname);
  return (
    <>
      <ResumeProvider>
        <CoverLetterProvider>
          <Component {...pageProps} />
          <ToastContainer position="top-right" autoClose={3000} pauseOnHover />
        </CoverLetterProvider>
      </ResumeProvider>
    </>
  );
}
export default appWithTranslation(App);
