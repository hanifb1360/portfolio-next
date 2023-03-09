import Image from "next/image";
import Link from "next/link";
import React from "react";
import tdigitalImg from "../public/assets/projects/tdigital.png";
import shiktonImg from "../public/assets/projects/shikton.jpg";

import sneakexImg from "../public/assets/projects/sneakex.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id='projects' className='mt-10 p-12  w-full'>
      <div className='max-w-[1240px] mx-auto  py-16'>
        <div className='pt-8 pb-2'>
          <p className='text-4xl mt-5  inline  text-[#3a81cd]'>PROJECTS</p>
        </div>
        <div className='grid md:grid-cols-3 pt-8 gap-8'>
          <ProjectItem
            title='tDigital'
            backgroundImg={tdigitalImg}
            projectUrl='/tdigital'
            tech='Gatsby JS and WordPress'
          />
          <ProjectItem
            title='Crypto App'
            backgroundImg={shiktonImg}
            projectUrl='/shikton'
            tech='React JS'
          />

          <ProjectItem
            title='SNEAKEX'
            backgroundImg={sneakexImg}
            projectUrl='/sneakex'
            tech='React JS'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
