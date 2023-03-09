import Image from "next/image";
import React from "react";
import shiktonImg from "../public/assets/projects/shikton.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const shikton = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={shiktonImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Shikton Webshop</h2>
          <h3>React JS / SASS / Strapi / Stripe</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            The project I worked on is a web application built with React JS as
            the frontend framework, Strapi as the backend CMS, and Stripe as the
            payment gateway. The application is styled using Sass, a CSS
            preprocessor that provides a more efficient and flexible way to
            write CSS. The backend of the application is deployed on Render.com,
            a cloud platform that simplifies the deployment process with a
            user-friendly interface. The frontend is deployed on Firebase, a
            scalable and secure platform for web and mobile applications. The
            application allows users to create an account, browse through a list
            of products, and purchase them using Stripe as the payment method.
            The products are managed through Strapi, which provides an
            easy-to-use interface for content creation and management. The user
            interface is designed to be responsive, accessible, and
            user-friendly, with a clean and modern design. The application also
            includes features such as user authentication, cart management, and
            order tracking. Overall, this project demonstrates the use of modern
            web development technologies to build a scalable, secure, and
            functional web application that provides a seamless user experience.
          </p>
          <a
            href='https://github.com/hanifb1360/e-commerce-shikton'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://shikton-webshop.web.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> SASS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Strapi
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Stripe
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default shikton;
