import Image from "next/image";

export default function SkillCard({ imageSrc, title }) {
  return (
    <div id="skillCard" className="bg-gradient-to-t from-[#ffffff] to-[#dde0e3] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className=" grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image
            src={imageSrc}
            width="32"
            height="32"
            alt={title}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}
