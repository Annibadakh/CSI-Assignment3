import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, clickSidebar }) => {
    const location = useLocation(); 

    const links = [
        { path: "home", label: "Home"},
        
    ];

  const isActive = (path) => location.pathname === path;
    return(
        <>
        
        <aside className={`absolute z-50 top-0 bottom-0 left-0 sm:relative bg-blue-600 text-white transition-all duration-200 
        ${isSidebarOpen ? "w-56 p-4" : "w-0 overflow-hidden"}`}>
            <nav className={`${isSidebarOpen ? "block" : "hidden"}`}>
                <ul>
                    {links.map(({ path, label }) => {
                        return (
                            <li
                                key={path}
                                onClick={clickSidebar}
                                className={`py-2 px-4 mb-1 rounded-full ${isActive(`/dashboard/${path}`) ? "bg-orange-400" : "hover:bg-orange-400"}`}
                            >
                                <Link to={path}>{label}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav> 
        </aside>
        
        </>
    )
};

export default Sidebar;