import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const showSidebar = useSelector((store) => store.config.isSidebarOpen);
  return (
    <div className="w-52 mr-6  my-4 p-2 ">
      {showSidebar && (
        <div className="w-full">
          <ul>
            <li className="px-8 py-2 text-lg hover:bg-gray-100 rounded-r-full ">
              Notes
            </li>
            <li className="px-8 py-2 text-lg hover:bg-gray-100 rounded-r-full">
              Reminder
            </li>
            <li className="px-8 py-2 text-lg hover:bg-gray-100 rounded-r-full">
              Archive
            </li>
            <li className="px-8 py-2 text-lg hover:bg-gray-100 rounded-r-full">
              Trash
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
