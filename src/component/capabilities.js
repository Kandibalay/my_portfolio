export default function Capabilities() {
  return (
    <div className="px-6 md:px-10 lg:px-18 py-20 grid grid-cols-1 lg:grid-cols-2 items-start container mx-auto">
      <h2 className="text-[2.5rem] md:text-[3rem] bebasneue">
        My Capabilities
      </h2>
      <div className="flex flex-col gap-6">
        <div className="text-[14px] flex flex-col gap-2 font-bold">
          <p> 
            I bring strong front-end development experience with a focus on
            modern web technologies including: 
            </p>
            <span className="flex flex-col gap-4 w-[90%] md:w-[60%] mx-auto ">
                <div className="flex w-full justify-between">
                <button type="button" className="border py-2 w-[30%] rounded-full">HTML</button>
                <button type="button" className="border py-2 w-[30%] rounded-full" >CSS</button>
                <button type="button" className="border py-2 w-[30%] rounded-full">JavaScript</button>
                </div>
                <div className="flex w-full justify-between">
                <button type="button" className="border py-2 w-[30%] rounded-full">Tailwind</button>
                <button type="button" className="border py-2 w-[30%] rounded-full">React</button>
                <button type="button" className="border py-2 w-[30%] rounded-full">Next.js</button>
                </div>
            </span>
            <p> I’m continually building on this foundation,
            exploring new tools and best practices to stay current and deepen my
            expertise in front-end and full-stack development.
          </p>
        </div>
      </div>
    </div>
  );
}
