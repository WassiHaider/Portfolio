import React from "react";

function Contact(){
    return(
        <>
        {/* <p className="text-2xl text-red-500 mt-52">Contact</p> */}
        <div className="w-full h-[108vh] bg-[rgb(233,233,233)] p-1">

            {/* heading//////////// */}
            <p className=" text-center text-2xl text-[rgb(65,65,65)] font-bold mt-20 cursor-pointer hover:underline decoration-red-600 transition-all duration-1000">Contact Me</p>

            {/* input_main */}
            <div className="w-[55%] h-64 m-auto mt-12 p-2 pb-3">

                {/* first_main/// */}
                <div className="w-full h-12 flex justify-between items-center">
                    {/* inpt1// */}
                    <input className=" h-7 w-44 bg-transparent border-2 border-[rgb(65,65,65)] text-[rgb(65,65,65)] rounded-md pl-2" type="text" placeholder="Your Name..." />
                    {/* inpt1// */}
                    <input className=" h-7 w-44 bg-transparent border-2 border-[rgb(65,65,65)] text-[rgb(65,65,65)] rounded-md pl-2" type="text" placeholder="Your Email @" />
                    {/* inpt1// */}
                    <input className=" h-7 w-44 bg-transparent border-2 border-[rgb(65,65,65)] text-[rgb(65,65,65)] rounded-md pl-2" type="text" placeholder="Your Phone #" />
                </div>
                {/* big-inpt////////// */}
                <input className=" h-[54%] w-full bg-transparent border-2 border-[rgb(65,65,65)] text-[rgb(65,65,65)] rounded-md pl-2 mt-3" type="text" placeholder="Your Message.."/>

                {/* btn//// */}
                {/* btn//////////////////// */}
                        <button className="w-32 p-2 mt-6 ml-[40%] border rounded bg-[rgb(65,65,65)] text-xs font-bold text-white hover:text-red-600 transition-all duration-700">
                        <a href="https://www.linkedin.com/in/wassi-gujjar-a42201220/">Send Message</a></button>
            </div>

            {/* last_info/// */}
            <div className="w-[45%] h-16 m-auto mt-8 p-2 flex justify-between">
                {/* info_1 */}
                <div className="info1 w-max h-full cursor-pointer">
                    {/* heading */}
                    <p className="info1_heading text-[rgb(65,65,65)] text-sm font-semibold text-center">
                    <a href="mailto:wassigujjar177@gmail.com ">Email Me</a> </p>
                    {/* mail/// */}
                    <p className="text-[rgb(65,65,65)] text-xs mt-1">
                    <a href="mailto:wassigujjar177@gmail.com ">wassigujjar177@gmail.com</a> </p>
                </div>
                 {/* info_2 */}
                 <div className="info2 w-max h-full cursor-pointer">
                    {/* heading */}
                    <p className="info1_heading text-[rgb(65,65,65)] text-sm font-semibold text-center ">
                        <a href="tel:+92 300 7779111">Call Me</a>
                    </p>
                    {/* call/// */}
                    <p className=" text-[rgb(65,65,65)] text-xs mt-1">
                    <a href="tel:+92 300 7779111">+92 300 777911</a> </p>
                </div>
                {/* info_3 */}
                <div className="info3 w-max h-full cursor-pointer">
                    {/* heading */}
                    <p className="info1_heading text-[rgb(65,65,65)] text-sm font-semibold text-center ">
                    <a href="https://www.google.com/maps/place/Liberty+Market+Gulberg+III,+Lahore,+Punjab,+Pakistan/@31.5101854,74.3419853,17z/data=!3m1!4b1!4m6!3m5!1s0x3919045af8941833:0xd6b95f4f17c66a16!8m2!3d31.5105829!4d74.3444508!16s%2Fg%2F11gdxl4rjy?entry=ttu">Address</a>
                    </p>
                    {/* address/// */}
                    <p className="text-[rgb(65,65,65)] text-xs mt-1">
                        <a href="https://www.google.com/maps/place/Liberty+Market+Gulberg+III,+Lahore,+Punjab,+Pakistan/@31.5101854,74.3419853,17z/data=!3m1!4b1!4m6!3m5!1s0x3919045af8941833:0xd6b95f4f17c66a16!8m2!3d31.5105829!4d74.3444508!16s%2Fg%2F11gdxl4rjy?entry=ttu">Pakistan , Lahore</a>
                    </p>
                </div>
            </div>

        </div>
        </>
    )
}
export default Contact