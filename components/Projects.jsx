import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import tdigitalImg from '../public/assets/projects/tdigital.png';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='mt-10 p-12  w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
       
        <h2 className='py-4 tracking-widest uppercase text-[#3a81cd]'>PROJECTS</h2>
        <div className='grid md:grid-cols-2 pt-8 gap-8'>
          <ProjectItem
            title='tDigital'
            backgroundImg={tdigitalImg}
            projectUrl='/tdigital'
            tech='Gatsby JS and WordPress'
          />
          <ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS'

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
