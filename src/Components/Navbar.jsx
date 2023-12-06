import React from "react";
import logo from '../Assets/WH logo.png'
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <>
         <div className="w-full h-11 mt-3 bg-black opacity-75 pr-10 pl-10 flex items-center justify-between fixed z-10">
            {/* logo///////////////////////////////////////// */}
            <div className="w-20 h-10 mt-[-7px] overflow-hidden">
                <img src={logo} alt="" />
            </div>
            <ul className=" w-96 flex justify-between ">
                <Link to={"/"}>
                <li className="text-white text-sm font-semibold cursor-pointer hover:text-red-600 transition-all duration-700 ">Home</li>
                </Link>
                <Link to={"/about"}>
                <li className="text-white text-sm font-semibold cursor-pointer hover:text-red-600 transition-all duration-700">About</li>
                </Link>
                <Link to={"/portfolio"}>
                <li className="text-white text-sm font-semibold cursor-pointer hover:text-red-600 transition-all duration-700">Portfolio</li>
                </Link>
                <Link to={"/blog"}>
                <li className="text-white text-sm font-semibold cursor-pointer hover:text-red-600 transition-all duration-700">Blog</li>
                </Link>
                <Link to={"/contact"}>
                <li className="text-white text-sm font-semibold cursor-pointer hover:text-red-600 transition-all duration-700">Contact</li>
                </Link>
            </ul>
         </div>
        </>
    )
}
export default Navbar
