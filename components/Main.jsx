/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#1e81b0]"> Hanif</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            A Front-end Developer
          </h1>
          <h2 className="py-2 text-gray-700 font-normal">with a background in Design</h2>
          <p className="py-4 text-gray-500 max-w-[70%] m-auto">
            As a front-end web developer with a design background, I bring a
            unique combination of technical and creative skills to every
            project. With a passion for creating intuitive user experiences and
            visually stunning interfaces, I strive to bring the best of both
            worlds to the table. From conceptualization to implementation, I
            approach every project with an eye for detail and a commitment to
            excellence.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsFillPersonLinesFill />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
