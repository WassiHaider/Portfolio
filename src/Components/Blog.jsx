import React from "react";

function Blog() {
    return (
        <>
            <div className="w-full h-[110vh] bg-[rgb(233,233,233)] p-1">

                {/* heading//////////// */}
                <p className=" text-center text-2xl text-[rgb(65,65,65)] font-bold mt-20 cursor-pointer hover:underline decoration-red-600 transition-all duration-1000">My blogs</p>

                {/* main_div/// */}
                <div className="w-[90%] h-[70vh]  mt-12 m-auto flex justify-between">

                    {/* b1//// */}
                    <div className="w-[30%] h-full rounded-lg overflow-hidden">

                        {/* b1_img/////// */}
                        <div className="w-full h-48  overflow-hidden cursor-pointer">
                            <div className="b1_img w-full h-full "></div>
                        </div>

                        {/* b1_heading/////// */}
                        <p className="text-[rgb(65,65,65)] font-bold mt-4 ml-1">How to make better user Interface!!</p>

                        {/* b1-paragraph */}
                        <p className="text-[rgb(65,65,65)] text-xs mt-2 ml-1" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi suscipit maxime optio autem enim doloremque, facilis sit at quisquam quibusdam perspiciatis voluptatum sequi illo nam deserunt, praesentium similique velit earum..</p>

                        {/* b1_click */}
                        <p className="text-red-600 text-xs ml-1 cursor-pointer font-semibold hover:text-blue-600 transition-all ease-linear duration-300">
                            <a href="https://github.com/WassiHaider"> Click here...</a> </p>

                    </div>

                    {/* b2//// */}
                    <div className="w-[30%] h-full rounded-lg overflow-hidden">

                        {/* b2_img/////// */}
                        <div className="w-full h-48  overflow-hidden cursor-pointer">
                            <div className="b2_img w-full h-full "></div>
                        </div>

                        {/* b2_heading/////// */}
                        <p className="text-[rgb(65,65,65)] font-bold mt-4 ml-1">Importance of Web Designing..</p>

                        {/* b2-paragraph */}
                        <p className="text-[rgb(65,65,65)] text-xs mt-2 ml-1" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi suscipit maxime optio autem enim doloremque, facilis sit at quisquam quibusdam perspiciatis voluptatum sequi illo nam deserunt, praesentium similique velit earum..</p>

                        {/* b2_click */}
                        <p className="text-red-600 text-xs ml-1 cursor-pointer font-semibold hover:text-blue-600 transition-all ease-linear duration-300">
                            <a href="https://github.com/WassiHaider"> Click here...</a> </p>

                    </div>

                    {/* b3//// */}
                    <div className="w-[30%] h-full rounded-lg overflow-hidden" >

                         {/* b3_img/////// */}
                         <div className="w-full h-48  overflow-hidden cursor-pointer">
                            <div className="b3_img w-full h-full "></div>
                        </div>

                        {/* b3_heading/////// */}
                        <p className="text-[rgb(65,65,65)] font-bold mt-4 ml-1">10 Web Design's Tips from Experts.</p>

                        {/* b3-paragraph */}
                        <p className="text-[rgb(65,65,65)] text-xs mt-2 ml-1" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi suscipit maxime optio autem enim doloremque, facilis sit at quisquam quibusdam perspiciatis voluptatum sequi illo nam deserunt, praesentium similique velit earum..</p>

                        {/* b3_click */}
                        <p className="text-red-600 text-xs ml-1 cursor-pointer font-semibold hover:text-blue-600 transition-all ease-linear duration-300">
                            <a href="https://github.com/WassiHaider"> Click here...</a> </p>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Blog