import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { BiDownload } from "react-icons/bi";

export default function Resume() {
  return (
    <div className="px-6 md:px-10 lg:px-18 pt-32 grid grid-cols-1 lg:grid-cols-2 items-start container mx-auto">
      <h2 className="text-[2.5rem] md:text-[3rem] bebasneue">About me</h2>
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-[18px] md:text-[22px] inter font-bold mb-4">
            I am a front-end developer based in Nigeria.
          </h3>
          <p className="text-[14px] font-medium">
            I'm focused on building clean and responsive web interfaces. Skilled
            in HTML, CSS, JavaScript, React, Next.js, and Tailwind. I specialize
            in translating UI designs into functional, accessible components. i'm
            always learning, improving, and exploring new frontend technologies. I also
            Focus on writing clean, maintainable code that scales.
          </p>
        </div>
        <div className="flex items-center w-full md:w-[60%] gap-4">
          <a href="/resume.pdf" download className="w-full cursor-pointer">
            <button className="inter bg-[#D3E97A] text-black text-[12px] md:text-[15px]  font-extrabold py-2 justify-center rounded-full w-full flex items-center">
              Download Resume<span className="p-2"><BiDownload /></span>
            </button>
          </a>
          <div className="bg-[#222222] rounded-full p-3 text-[#D3E97A] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <a href="https://github.com/Kandibalay" target="blank">
              <FaGithub />
            </a>
          </div>
          <div className="bg-[#222222] rounded-full p-3 text-[#D3E97A] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <a
              href="www.linkedin.com/in/chibuike-nnorom-04635923a"
              target="blank"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
