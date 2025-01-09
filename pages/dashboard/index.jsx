
// import React, { useState } from 'react';
  
// import Sidebar from './Sidebar';
// import ProfilePage from './Profile';
// import { FaBars } from 'react-icons/fa'; // Import hamburger icon

// const DashboardLayout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const closeSidebar = () => {
//     setIsSidebarOpen(false);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gray-100">
//       <div className="w-full shadow-md">
//         <ProfilePage />
//       </div>
//       <div className="flex flex-1 w-full  mt-4 bg-white shadow-md rounded-lg overflow-hidden">
//         {/* Hamburger icon for mobile view */}
        

//         {/* Content area */}
//         <div className="flex-1 w-full max-w-8xl p-4 overflow-auto">
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from './Sidebar';
import ProfilePage from './Profile';
import {
  FileText,
  PlusCircle,
  BookOpen,
  History
} from 'lucide-react';
import { FaBars } from 'react-icons/fa';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleNavigation = (path) => {
    router.push(path);
    closeSidebar(); // Close sidebar after navigation on mobile
  };

  const DashboardButton = ({ icon: Icon, text, path }) => (
    <button
      onClick={() => handleNavigation(path)}
      className="flex items-center justify-center space-x-2 w-full md:w-64 p-4 bg-white hover:bg-gray-50 rounded-lg shadow-md transition-all duration-300 border border-gray-200 hover:border-blue-500"
    >
      <Icon className="w-6 h-6 text-blue-600" />
      <span className="text-gray-700 font-medium">{text}</span>
    </button>
  );

  const dashboardButtons = [
    {
      icon: PlusCircle,
      text: "Build Your Resume",
      path: "/dashboard/resume-builder"
    },
    {
      icon: FileText,
      text: "My Resume",
      path: "/dashboard/resumelist"
    },
    {
      icon: BookOpen,
      text: "Skill Test",
      path: "/dashboard/skilltest"
    },
    {
      icon: History,
      text: "Skill History",
      path: "/dashboard/skillhistorylist"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="w-full shadow-md">
        <ProfilePage />
      </div>
      
      <div className="flex flex-1 w-full mt-4 bg-white shadow-md rounded-lg overflow-hidden">
        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="p-4 focus:outline-none">
            <FaBars className="text-2xl" />
          </button>
        </div>

        {/* Sidebar */}
        <div className={`md:w-64 flex-shrink-0 md:block ${isSidebarOpen ? 'block' : 'hidden'}`}>
          <Sidebar onClose={closeSidebar} />
        </div>

        {/* Content area */}
        <div className="flex-1 w-full max-w-8xl p-4 overflow-auto">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-8">Dashboard</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {dashboardButtons.map((button, index) => (
                <DashboardButton
                  key={index}
                  icon={button.icon}
                  text={button.text}
                  path={button.path}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;