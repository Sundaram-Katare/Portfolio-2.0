import React from "react";
import DSAPieChart from "./DSAPieChart";

export default function About() {
    return (
        <>
            <div className="flex flex-col bg-[#E4E4E4] w-full lg:h-screen">
                <div className="flex flex-col items-center  xl:h-1/3 2xl:h-1/2">
                    <h1 className="text-3xl font-bold text-center lg:text-5xl xl:text-6xl">About Me</h1>
                    <img className="border rounded-full h-[120px] mt-10 lg:h-[200px]" src="../images/face.png" alt="" />
                </div>
                <div className="flex flex-col gap-20 m-10 mt-0 lg:flex-row">
                    <div className="flex flex-col w-full mt-10 lg:w-1/2">
                        <p className=" text-sm mt-0 md:text-md lg:text-xl">
                            I'm a second-year Computer Science Engineering student with a strong 
                            interest in development and software engineering. I specialize in building full-stack applications
                            using the MERN stack. <br />
                            With a solid academic background and a current <span className="bg-blue-200 p-1 rounded">CGPA of 8.2</span>, I enjoy combining creativity
                            with code to solve real-world problems. I’m always exploring new technologies and improving my skills through 
                            hands-on projects. Passionate about clean design, performance, and user experience, I'm open to exciting 
                            collaborations, internships, and freelance opportunities.
                        </p>
                    </div>
                    <div className="flex flex-col w-full lg:w-1/2">
                        {/* GRAPHICS */}
                        <DSAPieChart />
                    </div>
                </div>
            </div>
        </>
    )
}