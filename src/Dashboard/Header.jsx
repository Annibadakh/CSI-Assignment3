import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <nav className='flex justify-between gap-2 px-5 md:px-20 py-4 sm:py-1 items-center shadow-xl min-h-18 bg-gray-200'>
            <div>
                {/* <img src={logo} className='hidden sm:block h-16' alt="logo" /> */}
                <h1>Logo</h1>
            </div>
            
            <div>
                <h1 className='text-lg sm:text-2xl font-bold'>CSI Assignment 3 Dashboard</h1>
            </div>
            
            <div>
                <button onClick={handleLogout} className="bg-red-500 text-white cursor-pointer px-4 py-2 rounded">Logout</button>
            </div>
        </nav>
    );
};

export default Header;
