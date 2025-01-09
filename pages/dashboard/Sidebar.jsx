import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = ({ onClose }) => {
  const router = useRouter();  
  const [userId,setUserId] = useState(0)
useEffect(()=>{
  setUserId(localStorage.getItem("user_id"));
},[])
  const handleLogout = () => {
    localStorage.removeItem('token'); 
    // setIsLoggedIn(false);
    router.push('/')
  };
  const getLinkClassName = (path) => {
    return router.pathname === path
      ? "flex items-center p-2 bg-green-600 border-b-2 rounded font-semibold text-white"
      : "flex items-center p-2 hover:bg-green-600  border-b-2 hover:text-white rounded font-semibold  ";
  };
  return (
    <div className="bg-white h-screen p-4 border-r border-gray-200 md:block">
      {/* Sidebar links */}
      <ul className="space-y-2 mt-4">
        <li>
          <Link
            href="/dashboard"
            // className="flex items-center p-2 bg-blue-900 border-b-2 border-black font-semibold text-white"
            className={getLinkClassName("/dashboard")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">🖥️</span>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/page"
            className={getLinkClassName("/dashboard/page")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">👤</span>
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/resume-builder"
            className={getLinkClassName("/dashboard/resume-builder")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">🤖</span>
            <span>AI Resume Builder</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/resumelist"
            className={getLinkClassName("/dashboard/resumelist")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">📑</span>
            <span>My Resumes</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/notification"
            className={getLinkClassName("/dashboard/notification")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">🔔</span>
            <span>Notifications</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/skilltest"
            className={getLinkClassName("/dashboard/skilltest")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">📝</span>
            <span>Skill Test</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/addrefferal"
            className={getLinkClassName("/dashboard/addrefferal")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">👥</span>
            <span>Add Referral</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/skillhistorylist"
            className={getLinkClassName("/dashboard/skillhistorylist")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">📊</span>
            <span>Skill history</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/reffrerallistpage"
            className={getLinkClassName("/dashboard/reffrerallistpage")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">👥</span>
            <span>Referral List</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/paymentpage"
            className={getLinkClassName("/dashboard/paymentpage")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">💳</span>
            <span>Payment</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/password"
            className={getLinkClassName("/dashboard/password")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">🔑</span>
            <span>Change Password</span>
          </Link>
        </li>
        {userId == 121 ? (
          <li>
            <Link
              href="/dashboard/test-payment"
              className={getLinkClassName("/dashboard/test-payment")}
              onClick={onClose} // Close sidebar on link click
            >
              <span className="mr-2">💳</span>
              <span>Test Payment</span>
            </Link>
          </li>
        ) : (
          ""
        )}
        <li>
          <button
            className="w-full flex items-center p-2 hover:bg-blue-900  border-b-2 rounded font-semibold"
            onClick={() => {
              handleLogout();
            }}
          >
            <span className="mr-2 ">🔓</span>
            <span>Log Out</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
