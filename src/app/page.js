'use client'
import About from "@/component/about";
import Contact from "@/component/contact";
import Hero from "@/component/hero";
import Projects from "@/component/project";
import Nav from "@/layout/nav";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";
import Footer from "@/layout/footer";

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`${theme === "light" ? "bg-white text-black": "bg-black text-white"}`} >
      <Nav Click={toggleTheme} />
      <div>
        <div id="home">
          <Hero />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}
