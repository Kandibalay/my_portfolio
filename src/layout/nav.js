'use client'
import { ThemeContext } from "@/context/themeContext";
import Link from "next/link";
import { useContext } from "react";
import { MdLightMode } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

export default function Nav({ Click }) {
  const { theme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);


  const closeMenubar = () => {
    setMenuOpen(false)
}
const openMenubar = () =>{
    if (window.innerWidth < 1024) { // Check if the screen width is less than 1024px (mobile devices)
        setMenuOpen(!menuOpen);
      }
}
const handleClickOutside = (event) => {
    if(navRef.current && !navRef.current.contains(event.target)){
        closeMenubar()
    }
}

useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeMenubar();
      }
    };
  
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("resize", handleResize);
    }
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black" : "bg-white"
      }  fixed left-0 right-0 z-50 py-2`}
    >
      <div className="flex justify-between items-center px-6 md:px-10 lg:px-18 container mx-auto">
      <Link href="/">
        <h1 className="uppercase text-[18px] md:text-[28px] lg:text-[32px] font-medium bebasneue">
          Promise Nnorom
        </h1>
      </Link>
      <div className="flex gap-3">
      <button
        type="button"
        onClick={Click}
        className="flex items-center gap-1 text-[12px] cursor-pointer"
      >
        {theme === "dark" ? <MdLightMode /> : <IoMdMoon />}
        {theme === "dark" ? "Light" : "Dark"}
      </button>
      <div
        className="lg:hidden flex text-2xl cursor-pointer"
        onClick={openMenubar}
      >
        {menuOpen ? (
          <IoCloseOutline className="text-gray-300 text-right" />
        ) : (
          <RxHamburgerMenu className="text-gray-300 text-right" />
        )}
      </div>
        <div
        className={`lg:static absolute top-12 inter ${
          menuOpen
            ? "block opacity-100 w-[100%] bg-[#222222] gap-2 p-8 rounded-b-md right-0"
            : "hidden opacity-0 "
        } lg:opacity-100 lg:flex lg:justify-end z-50 lg:gap-8`} ref={navRef}
        
      > 
        <div className="flex flex-col lg:flex-row text-center gap-2"  >
          <Link
            href="/#projects"
            onClick={() => {
              closeMenubar();
            }}
            className="w-1/3  mx-auto hover:text-white hover:bg-gray-800 bg-[#D3E97A] px-4 py-1 text-black rounded-full"
          >
            Work
          </Link>
          <Link
            href="/#about"
            onClick={() => {
              closeMenubar();
            }}
            className="w-2/5 mx-auto hover:text-white hover:bg-gray-800 bg-[#D3E97A] px-4 py-1 text-black rounded-full"
          >
            About
          </Link>
          <Link
            href="/#contact"
            onClick={() => {
              closeMenubar();
            }}
            className="w-1/2  mx-auto hover:text-white hover:bg-gray-800 bg-[#D3E97A] px-4 py-1 text-black rounded-full"
          >
            Contact
          </Link>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}
