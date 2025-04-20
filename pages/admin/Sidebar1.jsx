import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Sidebar1 = ({ onClose }) => {
  const router = useRouter();
  const location = router.pathname;
  const { t } = useTranslation("");
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token
    router.push("/adminlogin"); // Redirect to login after logout
  };

  const getLinkClassName = (path) => {
    return location === path
      ? "flex items-center p-2 bg-pink-600 border-b-2 rounded font-semibold text-white"
      : "flex items-center p-2 hover:bg-pink-600 border-b-2 rounded font-semibold";
  };
  return (
    <div className="bg-white h-screen p-4 border-r border-gray-200 md:block">
      {/* Sidebar links */}
      <ul className="space-y-2 mt-4">
        <li>
          <Link href="" className={getLinkClassName("/")} onClick={onClose}>
            <span className="mr-2">🏠</span>
            <span>{t("admin.sidebar.home")}</span>
          </Link>
        </li>
        <li>
          <Link
            href="profile"
            className={getLinkClassName("/admin/profile")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">🛡️</span>
            <span>{t("admin.sidebar.admin")}</span>
          </Link>
        </li>

        <li>
          <Link
            href="customer"
            className={getLinkClassName("/admin/customer")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">👨🏻‍👩🏻‍👦🏻‍👦🏻</span>
            <span>
              <span>{t("admin.sidebar.customers")}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="templatelist"
            className={getLinkClassName("/admin/templatelist")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">📋</span>
            <span>{t("admin.sidebar.templates")}</span>
          </Link>
        </li>

        <li>
          <Link
            href="addreferall1"
            className={getLinkClassName("/admin/addreferall1")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">📊</span>
            <span>{t("admin.sidebar.leads")}</span>
          </Link>
        </li>
        <li>
          <Link
            href="payment1"
            className={getLinkClassName("/admin/payment1")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">💷</span>
            <span>{t("admin.sidebar.payment")}</span>
          </Link>
        </li>
        <li>
          <Link
            href="subscriberslist"
            className={getLinkClassName("/admin/subscriberslist")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">🔔</span>
            <span>{t("admin.sidebar.subscribers")}</span>
          </Link>
        </li>
        {/* <li>
          <Link
            href="reffreraluser"
            className={getLinkClassName("/admin/reffreraluser")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">💷</span>
            <span>Referral User</span>
          </Link>
        </li>
        <li>
          <Link
            href="addreferalladmin"
            className={getLinkClassName("/admin/addreferalladmin")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">💷</span>
            <span>Add Referral </span>
          </Link>
        </li>
        <li>
          <Link
            href="reffreraladmin"
            className={getLinkClassName("/admin/reffreraladmin")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">💷</span>
            <span>Referral </span>
          </Link>
        </li> */}

        <li>
          <Link
            href="/"
            className="flex items-center p-2 hover:bg-pink-600  border-b-2 rounded font-semibold"
            onClick={() => {
              handleLogout();
            }}
          >
            <span className="mr-2 ">🔓</span>
            <span>{t("admin.sidebar.logout")}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar1;
