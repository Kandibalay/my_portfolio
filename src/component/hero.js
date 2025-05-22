import Image from "next/image";
import Link from "next/link";
import Img1 from "../../public/images/image 1.png";
import Img2 from "../../public/images/image 2.jpg";
import Img3 from "../../public/images/image 3.jpg";
import Img4 from "../../public/images/image 4.png";
import Img5 from "../../public/images/image 5.png";
import Img6 from "../../public/images/image 6.png"
import Img7 from "../../public/images/image 7.jpg"
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="px-6 md:px-10 lg:px-18 pb-16 pt-28 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 items-center container mx-auto">
      <div className="w-full lg:w-10/12 flex flex-col gap-8 ">
        <div>
          <h1 className="text-[3.2rem] md:text-[4rem] leading-16 mb-3 bebasneue">
            hi, i am <br /> Promise Nnorom.
          </h1>
          <p className="font-light text-[14px] poppins">
            I transform design concepts into responsive, user-friendly
            experiences with clean, efficient frontend development.
          </p>
        </div>
        <div className="flex w-[80%] md:w-[55%] justify-between items-center">
          <Link
            href="/#contact"
            className="bg-[#D3E97A] text-black w-3/5 py-2 text-center hover:bg-gray-800 hover:text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 rounded-full poppins font-bold"
          >
            Contact me
          </Link>
          <div className="bg-[#222222] rounded-full p-3 text-[#D3E97A] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <a href="https://github.com/Kandibalay" target="blank">
              <FaGithub />
            </a>
          </div>
          <div className="bg-[#222222] rounded-full p-3 text-[#D3E97A] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <a href="www.linkedin.com/in/chibuike-nnorom-04635923a" target="blank">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="rounded-lg">
        <Image src={Img6} alt="Promise Photo" className="rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" />
      </div>
    </div>
  );
}
