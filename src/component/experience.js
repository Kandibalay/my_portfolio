export default function Experience() {
  return (
    <div>
      <div className="px-6 md:px-10 lg:px-18 py-16 grid grid-cols-1 lg:grid-cols-2 items-start h-screen container mx-auto">
        <h2 className="text-[2.5rem] md:text-[3rem] bebasneue">
          My Experience
        </h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col ">
            <div className="flex justify-between">
              <h3 className="text-[18px] md:text-[22px] inter font-bold">
                Front-end Intern
              </h3>
              <p className="text-[14px] font-bold">April 2025 - Date </p>
            </div>
            <h4 className="text-orange-700 font-bold text-[14px]">
              Tech Studio Academy
            </h4>
          </div>
         <div>
         <p className="text-[14px] font-bold ">
            Worked on team-based projects in a collaborative environment with
            UI/UX designers and backend engineers.</p>
            <ul className="flex flex-col gap-2 mt-2 text-[14px] font-bold">
              <li>
                Developed responsive and accessible front-end interfaces using
                HTML, CSS, JavaScript, Tailwind CSS, and React
              </li>
              <li>
                Collaborated closely with designers to bring wireframes and
                mockups to life, ensuring pixel-perfect implementation
              </li>
              <li>
                Integrated front-end components with backend APIs, working
                alongside backend engineers to ensure smooth data flow and
                functionality
              </li>
              <li>
                Participated in code reviews, stand-ups, and sprint planning,
                following agile methodologies
              </li>
              <li>
                Built user-facing features with performance, usability, and
                scalability in mind
              </li>
            </ul>
         </div>
        </div>
      </div>
    </div>
  );
}
