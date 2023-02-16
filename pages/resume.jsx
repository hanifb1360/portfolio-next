import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
import meImg from '../public/assets/me.JPEG';


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
  <section className='w-1/3 pt-20 bg-[#b2b2b2]'>
    <Image src={meImg} alt='/' />
   

   

  </section>

  <section className='w-2/3  bg-red'>

  </section>

</main>
      
    </>
  );
};

export default resume;
