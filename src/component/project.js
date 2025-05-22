import Image from "next/image";
import NRC from "../../public/images/NRC Project.png";
import Trad from "../../public/images/tradExpress (1).png";
import UrlApp from "../../public/images/Url Shortening app.png";
import restApi from "../../public/images/restApi.png";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa6";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";

export default function Projects() {
    const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === "dark" ? "bg-black": "bg-gray-300 text-gray-700"} border-y border-y-gray-300`}>
        <div className="px-6 md:px-10 lg:px-18 py-10 container mx-auto " >
      <div className="py-10 w-full lg:w-[50%]">
        <h2 className="bebasneue text-[2.5rem] md:text-[3rem] ">Featured Projects</h2>
        <p className="poppins text-[14px]">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </div>
      <div className="flex flex-col pt-5 lg:pt-0 gap-10 lg:gap-18" >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 relative items-center justify-center py-4">
          <div className="px-20 py-14 bg-[#1A1A1A] w-full h-full rounded-lg flex items-center hover:px-10  hover:py-8 hover:transition delay-150 duration-300 ease-in-out">
            <button type="button" className="absolute top-6 lg:top-8 left-3 lg:left-4 poppins text-[8px] md:text[10px] bg-[#0A0A0A] w-[30%] md:w-[20%] lg:w-[10%] py-2 md:py-3 rounded-full">Conceptual Work</button>
            <Image src={NRC} alt="Nigerian Railway Corporation redesign" className="rounded-lg" />
          </div>
          <div className="flex flex-col gap-5 py-8 lg:py-16">
            <div>
              <h2 className="font-bold text-[22px] inter">Redesigned The Nigerian Railway Corp. Web App</h2>
              <p className="text-[14px] mt-4">
              Helped rebuild the Nigerian Railway Corporation's website with a team of designers and developers. Created a modern, easy-to-use interface that works well on phones and computers. Built a simple booking system that helps more people successfully buy tickets. Made the website load faster and look better than before. Improved the digital experience for thousands of daily travelers across Nigeria.
              </p>
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="uppercase text-[15px] font-bold">Project Info</h3>
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between text-[14px]">
                        <p className="font-semibold">Year</p>
                        <span className="text-[14px]">2025</span>
                    </div>
                    <div className="flex justify-between text-[14px]">
                        <p className="font-semibold">Role </p>
                        <span className="text-[14px]">Front-end Developer</span>
                    </div>
                </div>
            </div>
            <div className={`flex gap-5 text-[14px] uppercase  ${theme === "dark" ? "text-[#D3E97A]" : "text-orange-700 font-bold"}`}>
                <a href="https://nrc-gray.vercel.app/" target="_blank" className={`flex items-center gap-2 border-b ${theme  === "dark" ? " hover:text-orange-500":"hover:text-orange-900" }`}>Live Demo <span><GoArrowUpRight /></span></a>
                <a href="https://github.com/gharneeyart/NRC.git" target="_blank" className={`flex items-center gap-2 border-b ${theme  === "dark" ? " hover:text-orange-500":"hover:text-orange-900" }`}>See on Github <span><FaGithub /></span></a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 lg:gap-8 relative items-center justify-center py-4">
          <div className="px-20 py-14 bg-[#1A1A1A] w-full h-full rounded-lg flex items-center hover:px-10  hover:py-8 hover:transition delay-150 duration-300">
          <button type="button" className="absolute top-6 lg:top-8 left-3 lg:left-4 poppins text-[8px] md:text[10px] bg-[#0A0A0A] w-[30%] md:w-[20%] lg:w-[10%] py-2 md:py-3 rounded-full">Challenge</button>
            <Image src={Trad} alt="tradExpress Crypto Exchange" className="rounded-lg" />
          </div>
          <div className="flex flex-col gap-5 py-8 lg:py-16">
            <div>
              <h2 className="font-bold text-[22px] inter">Crypto Exchange for a Test Merchant </h2>
              <p className="text-[14px] mt-4">
              Developed a cryptocurrency exchange interface using pure React, focusing on essential frontend components. Created responsive trading views and user dashboard elements. Built intuitive navigation and trading forms with clean, maintainable code. Implemented mobile-friendly layouts ensuring seamless user experience across devices. Established the foundation for future feature integration while maintaining performance standards.
              </p>
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="uppercase text-[15px] font-bold">Project Info</h3>
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between text-[14px]">
                        <p className="font-semibold">Year</p>
                        <span className="text-[14px]">2025</span>
                    </div>
                    <div className="flex justify-between text-[14px]">
                        <p className="font-semibold">Role </p>
                        <span className="text-[14px]">Front-end Developer</span>
                    </div>
                </div>
            </div>
            <div className={`flex gap-5 text-[14px] uppercase  ${theme === "dark" ? "text-[#D3E97A]" : "text-orange-700 font-bold"}`}>
                <a href="https://tradxpress-exchange.vercel.app/" target="_blank" className={`flex items-center gap-2 border-b ${theme  === "dark" ? " hover:text-orange-500":"hover:text-orange-900" }`}>Live Demo <span><GoArrowUpRight /></span></a>
                <a href="https://github.com/Kandibalay/Tradxpress-Exchange.git" target="_blank" className={`flex items-center gap-2 border-b ${theme  === "dark" ? " hover:text-orange-500":"hover:text-orange-900" }`}>See on Github <span><FaGithub /></span></a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 lg:gap-8 relative items-center justify-center py-4">
          <div className="px-20 py-14 bg-[#1A1A1A] w-full h-full rounded-lg flex items-center hover:px-10  hover:py-8 hover:transition delay-150 duration-300">
            <Image src={UrlApp} alt="Url Shortening App" className="rounded-lg" />
          </div>
          <div className="flex flex-col gap-7 py-8 lg:py-16">
            <div>
              <h2 className="font-bold text-[22px] inter">URL Shortening Web App</h2>
              <p className="text-[14px] mt-4">
              Developed a full-featured URL shortening application with Next.js, delivering key functionality in a polished interface. Created a persistent link management system that maintains user history across browser sessions. Implemented one-click clipboard copying functionality for user convenience.
              </p>
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="uppercase text-[15px] font-bold">Project Info</h3>
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between text-[14px]">
                        <p className="font-semibold">Year</p>
                        <span>2025</span>
                    </div>
                    <div className="flex justify-between text-[14px]">
                        <p className="font-semibold">Role </p>
                        <span>Front-end Developer</span>
                    </div>
                </div>
            </div>
            <div className={`flex gap-5 text-[14px] uppercase  ${theme === "dark" ? "text-[#D3E97A]" : "text-orange-700 font-bold"}`}>
                <a href="https://url-shortening-app-yiw6.vercel.app/" target="_blank" className={`flex items-center gap-2 border-b ${theme  === "dark" ? " hover:text-orange-500":"hover:text-orange-900" }`}>Live Demo <span><GoArrowUpRight /></span></a>
                <a href="https://github.com/Kandibalay/url-shortening-app.git" target="_blank" className={`flex items-center gap-2 border-b ${theme  === "dark" ? " hover:text-orange-500":"hover:text-orange-900" }`}>See on Github <span><FaGithub /></span></a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 lg:gap-8 relative items-center justify-center pt-4 pb-8 lg:pb-16">
          <div className="px-20 py-14 bg-[#1A1A1A] w-full h-full rounded-lg flex items-center hover:px-10  hover:py-8 hover:transition delay-150 duration-300">
            <Image src={restApi} alt="REST Countries API " className="rounded-lg" />
          </div>
          <div className="flex flex-col gap-7 py-8 lg:py-16">
            <div>
              <h2 className="font-bold text-[22px] inter">REST Countries Catalogue</h2>
              <p className="text-[14px] mt-4">
              Implemented RESTful operations in a React application using Axios to consume a Countries API endpoint, integrating dynamic query-based filtering and search functionalities for optimized client-side data handling.
              </p>
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="uppercase text-[15px] font-bold">Project Info</h3>
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between text-[14px]">
                        <p className="font-semibold">Year</p>
                        <span>2025</span>
                    </div>
                    <div className="flex justify-between text-[14px]">
                        <p className="font-semibold">Role </p>
                        <span>Front-end Developer</span>
                    </div>
                </div>
            </div>
            <div className={`flex gap-5 text-[14px] uppercase  ${theme === "dark" ? "text-[#D3E97A]" : "text-orange-700 font-bold"}`}>
                <a href="https://rest-countries-rho-mauve.vercel.app/" target="_blank" className={`flex items-center gap-2 border-b ${theme  === "dark" ? " hover:text-orange-500":"hover:text-orange-900" }`}>Live Demo <span><GoArrowUpRight /></span></a>
                <a href="https://github.com/Kandibalay/rest-countries.git" target="_blank" className={`flex items-center gap-2 border-b ${theme  === "dark" ? " hover:text-orange-500":"hover:text-orange-900" }`}>See on Github <span><FaGithub /></span></a>
            </div>
          </div>
        </div>
      </div> 
    </div>
    </div>
  );
}
