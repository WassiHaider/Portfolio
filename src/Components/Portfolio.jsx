import React from "react";

function Portfolio() {
    return (
        <>
            {/* <p className="text-2xl text-red-500 mt-52">Portfolio</p> */}

            <div className="w-full h-[165vh] bg-[rgb(233,233,233)] p-1">
                {/* heading//////////// */}
                <p className=" text-center text-2xl text-[rgb(65,65,65)] font-bold mt-20 cursor-pointer hover:underline decoration-red-600 transition-all duration-1000">Portfolio</p>


                <div className="w-[350px] m-auto mt-12">
                    <p className="text-[rgb(65,65,65)] text-center text-sm tracking-widest">Here you can look at some of my projects..</p>
                </div>
                {/* projects_parent//////// */}
                <div className="w-[900px] m-auto mt-12 p-1 flex justify-between flex-wrap">
                    {/* singel_parent//// */}

                    {/* div_1///////// */}
                    <div className="w-60 h-60 rounded-lg overflow-hidden cursor-pointer">
                        {/* img_div//// */}
                        <div className="w-full h-full overflow-hidden">
                            <div className="div1_img1 w-full h-full border border-yellow-900 overflow-hidden flex flex-col justify-around  items-center">
                                <p className="AliBaba text-2xl text-[rgb(65,65,65)] font-bold tracking-wide cursor-pointer hover:text-red-600 transition-all duration-700">AliBaba </p>
                                <p className="Website text-xs border-b border-red-600 text-red-600 font-bold tracking-widest cursor-pointer hover:text-red-600 transition-all duration-700">
                                    <a href="https://github.com/WassiHaider"> website</a></p>
                            </div>
                        </div>

                    </div>

                    {/* div_2///////// */}
                    <div className="w-72 h-52 rounded-lg overflow-hidden cursor-pointer" >
                        {/* img_div//// */}
                        <div className="w-full h-full overflow-hidden">
                            <div className="div2_img1 w-full h-full border border-yellow-900 flex flex-col justify-around  items-center ">
                                <p className="Alma text-2xl text-orange-200 font-bold tracking-wide cursor-pointer hover:text-red-600 transition-all duration-700">Alma </p>
                                <p className="Website text-xs border-b border-red-600 text-red-600 font-bold tracking-widest cursor-pointer hover:text-red-600 transition-all duration-700">
                                    <a href="https://github.com/WassiHaider"> website</a></p>
                            </div>
                        </div>
                    </div>

                    {/* div_3///////// */}
                    <div className="w-60 h-60 rounded-lg overflow-hidden cursor-pointer">
                        <div className="w-full h-full overflow-hidden">
                            <div className="div3_img1 w-full h-full border border-yellow-900 flex flex-col justify-around  items-center ">
                                <p className="Flaris text-2xl text-[rgb(65,65,65)] font-bold tracking-wide cursor-pointer hover:text-red-600 transition-all duration-700">Flaris</p>
                                <p className="Website text-xs border-b border-red-600 text-red-600 font-bold tracking-widest cursor-pointer hover:text-red-600 transition-all duration-700">
                                    <a href="https://github.com/WassiHaider"> website</a></p>
                            </div>
                        </div>

                    </div>

                    {/* div_4///////// */}
                    <div className="w-60 h-60 mt-5 rounded-lg overflow-hidden cursor-pointer">
                        <div className="w-full h-full overflow-hidden">
                            <div className="div4_img1 w-full h-full border border-yellow-900 flex flex-col justify-around items-center ">
                                <p className="Qawilo text-2xl text-[rgb(65,65,65)] font-bold tracking-wide cursor-pointer hover:text-red-600 transition-all duration-700">Qwilo</p>
                                <p className="Website text-xs border-b border-red-600 text-red-600 font-bold tracking-widest cursor-pointer hover:text-red-600 transition-all duration-700">
                                    <a href="https://github.com/WassiHaider"> website</a></p>
                            </div>
                        </div>

                    </div>

                    {/* div_5///////// */}
                    <div className="w-72 h-72 mt-5 rounded-lg overflow-hidden cursor-pointer">
                        <div className="w-full h-full overflow-hidden">
                            <div className="div5_img1 w-full h-full border border-yellow-900 flex flex-col justify-around items-center ">
                                <p className="Tumi text-2xl text-[rgb(65,65,65)] font-bold tracking-wide cursor-pointer hover:text-red-600 transition-all duration-700">Tumi</p>
                                <p className="Website text-xs border-b border-red-600 text-red-600 font-bold tracking-widest cursor-pointer hover:text-red-600 transition-all duration-700">
                                    <a href="https://github.com/WassiHaider"> website</a></p>
                            </div>
                        </div>
                    </div>

                    {/* div_6///////// */}
                    <div className="w-60 h-60 mt-5 rounded-lg overflow-hidden cursor-pointer">
                    <div className="w-full h-full overflow-hidden">
                            <div className="div6_img1 w-full h-full border border-yellow-900 flex flex-col justify-around items-center ">
                                <p className="AOS text-2xl text-[rgb(65,65,65)] font-bold tracking-wide cursor-pointer hover:text-red-600 transition-all duration-700">AOS</p>
                                <p className="Website text-xs border-b border-red-600 text-red-600 font-bold tracking-widest cursor-pointer hover:text-red-600 transition-all duration-700">
                                    <a href="https://github.com/WassiHaider"> website</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Portfolio