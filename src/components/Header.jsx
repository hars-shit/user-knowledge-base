import React from 'react';
import logo from '../assets/logo.webp';

const Header = () => {
    return (
        <header className="bg-white px-6 py-4 flex justify-between items-center ">
            {/* Left: Home Button */}

            <img src={logo} alt="Logo" className="h-10 w-[150px] object-contain" />
            {/* Right: Logo */}
            <button className="bg-[#1A2C40] cursor-pointer text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition">
                Home
            </button>

        </header>
    );
};

export default Header;
