import Image from "next/image";
import React from "react";
import me from '../public/assets/me.JPEG'

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 p-4">
          <p className="uppercase text-xl tracking-widest text-[#1e81b0]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am a creative professional with a passion for design and
            technology. After studying industrial design and obtaining a masters
            in inclusive design from Mid Sweden University, my curiosity and
            passion for exploring new challenges led me to the digital world.
            </p>
            <p className="py-2 text-gray-600"> 
                In 2017, I designed my first video game as my final project and delved
            into the world of UX/UI design. Since then, I have gained valuable
            experience as a UX/UI designer through internships and projects.
            </p>
            <p className="py-2 text-gray-600">
             In 2021, I decided to enhance my skills by learning front-end
            development. With a unique blend of design and technical skills, I
            am now eager to embark on a new journey as a web developer and bring
            my passion for creating intuitive user experiences and visually
            stunning interfaces to the digital world.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects.</p>
        </div>
        <div className="w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
        <Image className="rounded-xl "
          src={me}
          alt="/"
         
        />
        </div>
      </div>
    </div>
  );
};

export default About;
