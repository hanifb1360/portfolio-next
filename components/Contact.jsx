/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import contactImg from "../public/assets/contact.jpg";

const Contact = () => {
  return (
    <div className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#1e81b0]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full rounded-xl'>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={contactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className="py-4">Hanif Bahari</h2>
                <p>Front-End Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let's talk
                </p>
              </div>
            

            <div>
                
                <div className="flex items-center justify-between py-8">
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaGithub />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                <AiOutlineMail />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
                </div>
                </div>
            </div>
          </div>
          {/* right */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
