'use client'
import Resume from "@/component/resume";
import Nav from "@/layout/nav";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";
import Image from "next/image";
import Img1 from "../../../public/images/image 1.png"
import Img2 from "../../../public/images/image 2.jpg"
import Img3 from "../../../public/images/image 3.jpg"
import Img4 from "../../../public/images/image 4.png"
import Img5 from "../../../public/images/image 5.png"
import Img6 from "../../../public/images/image 6.png"
import Img7 from "../../../public/images/image 7.jpg"
import Capabilities from "@/component/capabilities";
import Experience from "@/component/experience";
import Contact from "@/component/contact";
import Footer from "@/layout/footer";


export default function AboutMe() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return(
        <div className={`${theme === "light" ? "bg-white text-black": "bg-black text-white"}`}>
            <Nav Click={toggleTheme} />
            <div>
            <Resume />
            <div className="px-6 md:px-10 lg:px-18 pt-14">
                <Image src={Img1} alt="Promise Pic" className="rounded-xl" />
            </div>
            <Capabilities />
            </div>
            <div className={`${theme === "dark" ? "bg-black border-y border-y-gray-600": "bg-gray-300 text-gray-700"}`}>
            <Experience  />
            </div>
            <Contact />
            <Footer />
        </div>
    )
}