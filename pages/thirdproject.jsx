import Image from "next/legacy/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import twitchImg from "../public/assets/projects/twitch.jpg";
import Link from "next/link";

const thirdProject = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={twitchImg}
          alt='/'
        />

        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-12'>
          <h1 className='py-2'>Twitch</h1>
          <h3>Gatsby JS / Wordpress / Web Components</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-12 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Our project utilizes the latest web technologies to create a dynamic
            and engaging website. Gatsby.js, a modern website framework that
            uses React and GraphQL, is used to generate static files that are
            lightning-fast and optimized for performance. WordPress is
            integrated with Gatsby.js to provide an easy-to-use content
            management system, making it simple to manage and publish content
            online.{" "}
          </p>
          <p>
            {" "}
            In addition, our project takes advantage of web components to create
            reusable UI elements that can be easily integrated into different
            parts of the website. Web components are a set of standardized
            browser features that enable the creation of reusable components for
            web applications. This allows for faster development times and
            improved consistency throughout the website.{" "}
          </p>
          <p>
            {" "}
            By combining Gatsby.js, WordPress, and web components, we have
            created a powerful and scalable website that provides a great user
            experience. The use of web components also allows for more efficient
            development and easier maintenance, making it a great solution for
            businesses and organizations looking to improve their online
            presence.
          </p>
          <button className='px-10 py-2 mt-4 mr-8 bg-cyan-500 hover:bg-cyan-600'>
            Demo
          </button>
          <button className='px-10 py-2 mt-4 bg-cyan-500 hover:bg-cyan-600'>
            Code
          </button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                Gatsby JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                WordPress
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                Web Components
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                JavaScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                CSS
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'><p className="underline cursor-pointer">Back</p></Link>
      </div>
    </div>
  );
};

export default thirdProject;
