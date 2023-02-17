import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
import meImg from '../public/assets/me.JPEG';
import SkillBar from '../components/SkillBar';


const resume = () => {
  return (
    <>
      <Head>
        <title>Hanif | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer with a background in design.'
        />
        
      </Head>
<main >
  <section className='w-1/3 pt-20 bg-[#a1a1a1]'>
    <Image src={meImg} alt='/' />

    <div className='p-6'>
    <h2 className="text-xl font-bold mb-2">Skills</h2>
      <SkillBar skill="JavaScript" percentage={80} />
      <SkillBar skill="React" percentage={70} />
      <SkillBar skill="Node.js" percentage={60} />
      <SkillBar skill="TypeScript" percentage={60} />
      <SkillBar skill="TailwindCSS" percentage={60} />
      <SkillBar skill="Firebase" percentage={60} />
      <SkillBar skill="GitHub" percentage={60} />
      <SkillBar skill="JEST" percentage={60} />
      <SkillBar skill="Gatsby JS" percentage={60} />
      <SkillBar skill="Next JS" percentage={60} />
      <SkillBar skill="StoryBook" percentage={60} />
      <SkillBar skill="Chakra UI" percentage={60} />
      <SkillBar skill="Strapi" percentage={60} />
      <SkillBar skill="Mango DB" percentage={60} />
      <SkillBar skill="Cypress JS" percentage={60} />
      <SkillBar skill="Style Component" percentage={60} />
      <SkillBar skill="SASS" percentage={60} />
      <SkillBar skill="Web Component" percentage={60} />
      <SkillBar skill="Figma" percentage={60} />
      <SkillBar skill="Adobe Photoshop" percentage={60} />
      <SkillBar skill="Adobe Illustrator" percentage={60} />
      <SkillBar skill="Adobe AfterEffects" percentage={60} />
      <SkillBar skill="Adobe XD" percentage={60} />
      <SkillBar skill="Adobe Animate" percentage={60} />
      <SkillBar skill="3D Modeling" percentage={60} />  
      <SkillBar skill="Sketch" percentage={60} />
    
      
    
    </div>
    
   

   

  </section>

  <section className='w-2/3  bg-red'>

  </section>

</main>
      
    </>
  );
};

export default resume;
