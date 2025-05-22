export default function About() {
  return (
    <div className="px-6 md:px-10 lg:px-18 py-16 grid grid-cols-1 lg:grid-cols-2 items-start h-screen border-b border-b-gray-600 container mx-auto">
      <h2 className="text-[2.5rem] md:text-[3rem] bebasneue">About me</h2>
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-[18px] md:text-[22px] inter font-bold mb-4">I am a front-end developer based in Nigeria.</h3>
          <p className="text-[14px]">
            I'm focused on building clean and responsive web interfaces. Skilled
            in HTML, CSS, JavaScript, React, Next.js, and Tailwind. I
            specialize in translating UI designs into functional, accessible
            components. I'm always learning, improving, and exploring new frontend
            technologies. I also focus on writing clean, maintainable code that
            scales.
          </p>
        </div>
        <a href="/about" className="underline font-bold uppercase text-[#D3E97A]">More about me</a>
      </div>
    </div>
  );
}
