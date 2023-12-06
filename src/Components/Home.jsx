import React from "react";
import { Link } from "react-router-dom";

import { FaGithub ,FaLinkedin } from "react-icons/fa";
import {BsTwitterX} from "react-icons/bs";


function Home() {
    return (
        <div>
            {/* <p className="text-2xl text-red-500 ">Home</p> */}

            {/* bg-image/////////// */}
            <div className="bg_img w-full h-[101vh] pl-10 pr-10 overflow-hidden flex justify-between items-center">

                {/* left_side///////////////// */}
                <div className="w-[450px] h-80">
                    <p className="text-[rgb(65,65,65)] text-xs mt-6 tracking-widest">Welcome to my portfolio...</p>
                    <p className="text-[rgb(65,65,65)] text-3xl mt-6"><span className="text-5xl">H</span><span className="font-semibold">i,</span> <br />  I'm   <span className="font-bold">   Wassi Haider <span className="cursor-pointer hover:text-red-600 transition-all duration-500 "> /> </span> </span> </p>

                    {/* edited_txt///////////// */}
                    <div>
                        <div className="text_container w-96 ">
                            <h1 className="text t1 text-[rgb(65,65,65)] font-semibold text-3xl">I am a <span className="font-bold"> Photographer..</span></h1>
                            <h1 className="text t2 text-[rgb(65,65,65)] font-semibold text-3xl">I am a <span className="font-bold"> FreeLancer..</span></h1>
                            <h1 className="text t3 text-[rgb(65,65,65)] font-semibold text-3xl">I am a <span className="font-bold"> designer..</span></h1>
                        </div>
                    </div>

                    {/* adress_parent////////////// */}
                    <div className="w-20 h-8 mt-4  flex justify-between items-center">
                        {/* github_icon////// */}
                        <p className="text-[rgb(65,65,65)] text-base cursor-pointer hover:text-red-600 transition-all duration-700 ">
                            <a href="https://github.com/WassiHaider"><FaGithub /></a>
                        </p>
                        {/* linkedin_icon//////// */}
                        <p className="text-[rgb(65,65,65)] text-base cursor-pointer hover:text-red-600 transition-all duration-700 ">
                            <a href="https://www.linkedin.com/in/wassi-gujjar-a42201220/"><FaLinkedin /></a>
                        </p>
                        {/* twiter_icon/////// */}
                        <p className="text-[rgb(65,65,65)] text-base cursor-pointer hover:text-red-600 transition-all duration-700 ">
                            <a href="https://twitter.com/"><BsTwitterX /></a>
                        </p>
                    </div>

                    {/* btn//////////////////// */}
                    <Link to={"/about"}>
                        <button className="w-24 p-2 mt-6 border rounded bg-[rgb(65,65,65)] text-xs font-bold text-white hover:text-red-600 transition-all duration-700">About Me</button>
                    </Link>
                </div>


                {/* right_side/////////////// */}
                <div className="right_img w-[520px] h-80 border rounded-lg rotate-"></div>


            </div>
        </div>
    )
}
export default Home