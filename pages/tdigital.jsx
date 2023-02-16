import Image from 'next/image';
import React from 'react';
import tdigitalImg from '../public/assets/projects/tdigital.png';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';

const tdigital = () => {
  const handleClick = (event) => {
    event.preventDefault();
    const errorMessageBox = document.getElementById('error-message-box');
    errorMessageBox.style.display = 'block';
  };
  
  return (
    <div className='w-full'>

<div id="error-message-box" className="hidden absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black/70  to-transparent z-50 ">
      <div className="bg-white p-8 rounded-lg absolute top-[50%] left-[20%] transform [-translate-x-1/2] [-translate-y-1/2]">
        
        <p className="text-gray-700">Sorry, the code is not accessible due to the privacy of the company.</p>
        <button onClick={() => {document.getElementById('error-message-box').style.display = 'none'}} className="bg-white shadow-none   rounded-full px-1 py-1 mt-1">
          <AiOutlineClose className="text-red-500  inline-block mr-1" />
          
        </button>
      </div>
    </div>

      
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={tdigitalImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-12'>
          <h2 className='py-2'>tDigital </h2>
          <h3 className='font-light'>Gatsby JS / Wordpress / Web Components</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-12  '>
        <div className='flex flex-col text-slate-700'>
          
          <div>
          <p>
            Our project utilizes the latest web technologies to create a dynamic
            and engaging website. Gatsby.js, a modern website framework that
            uses React and GraphQL, is used to generate static files that are
            lightning-fast and optimized for performance. WordPress is
            integrated with Gatsby.js to provide an easy-to-use content
            management system, making it simple to manage and publish content
            online.{" "}
          </p>
          <p className='pt-4'>
            {" "}
            In addition, our project takes advantage of web components to create
            reusable UI elements that can be easily integrated into different
            parts of the website. Web components are a set of standardized
            browser features that enable the creation of reusable components for
            web applications. This allows for faster development times and
            improved consistency throughout the website.{" "}
          </p>
          <p className='pt-4'>
            {" "}
            By combining Gatsby.js, WordPress, and web components, we have
            created a powerful and scalable website that provides a great user
            experience. The use of web components also allows for more efficient
            development and easier maintenance, making it a great solution for
            businesses and organizations looking to improve their online
            presence.
          </p>
          </div>
          <div className='py-8'>
          <a
            href=''
            target='_blank'
            rel='noreferrer'
          >
            <button onClick={handleClick} className='px-10 rounded-full py-2 mt-4  mr-8 bg-[#dde0e3] text-slate-800'>Code</button>
          </a>
          <a
            href='https://www.tdigital.se/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-10 rounded-full py-2 mt-4 bg-[#dde0e3] text-slate-800'>Demo</button>
          </a>
          </div>

          <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
          </Link>

        </div>
        
        
      </div>
      
    </div>
    
  );
};

export default tdigital;