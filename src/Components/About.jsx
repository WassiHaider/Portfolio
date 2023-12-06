import React from "react";

function About(){
    return(
        <>
        {/* <p className="text-2xl text-orange-600 ">About</p> */}
        <div className="w-full h-[110vh] bg-[rgb(233,233,233)] p-1">

            {/* heading//////////// */}
            <p className=" text-center text-2xl text-[rgb(65,65,65)] font-bold mt-20 cursor-pointer hover:underline decoration-red-600 transition-all duration-1000">About Me</p>
            
            {/* paragraph///////// */}
            <div className="w-[700px] m-auto mt-10">
                <p className="text-center text-[rgb(65,65,65)] text-sm leading-7 tracking-widest">I am a website designer from Pakistan, with a strong focus in Java-Script/React design. I love to get new experiences and always learn from my surroundings. I've done 300+ projects. You can check it through portfolio section on this website. I looking forward to any opportunities and challenges.</p>
            </div>

            {/* languages/////// */}
            <div className="language w-[1000px] h-60 ml-14 mt-8"></div>

        </div>
        </>
    )
}
export default About