import React from "react";
import Image from "next/image";
import Link from "next/link";
import meImg from "../public/assets/me.JPEG";

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-12 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className=' mt-8 col-span-2'>
          <div className='pt-8 pb-2'>
            <p className='text-4xl mt-5  inline  text-[#3a81cd]'>ABOUT ME</p>
          </div>
          <div className='pt-10'>
            <p className='py-2 text-gray-600'>
              I am a creative professional with a passion for design and
              technology. After studying industrial design and obtaining a
              masters in inclusive design from Mid Sweden University, my
              curiosity and passion for exploring new challenges led me to the
              digital world.
            </p>
            <p className='py-2 text-gray-600'>
              In 2017, I designed my first video game as my final project and
              delved into the world of UX/UI design. Since then, I have gained
              valuable experience as a UX/UI designer through internships and
              projects.
            </p>
            <p className='py-2 text-gray-600'>
              In 2021, I decided to enhance my skills by learning front-end
              development. With a unique blend of design and technical skills, I
              am now eager to embark on a new journey as a web developer and
              bring my passion for creating intuitive user experiences and
              visually stunning interfaces to the digital world.
            </p>
          </div>
          <Link href='/#projects'>
            <p className='py-8 text-gray-600 underline cursor-pointer'>
              Some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl group relative shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={meImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
