/* eslint-disable react/no-unescaped-entities */


import React from "react";
import tdigitalImg from "../public/assets/projects/tdigital.jpg";
import nvidiaImg from "../public/assets/projects/nvidia.png";
import twitchImg from "../public/assets/projects/twitch.jpg";
import kodexImg from "../public/assets/projects/kodex.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#1e81b0]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
         
          <ProjectItem
            title="tdigital"
            tech="Gatsby JS and Wordpress pro"
            backgroundImg={tdigitalImg}
            projectUrl="https://www.tdigital.se/"
          />

          <ProjectItem
            title="Nvidia"
            tech="React JS"
            backgroundImg={nvidiaImg}
            projectUrl="/"
          />

          <ProjectItem
            title="Twitch"
            tech="React JS"
            backgroundImg={twitchImg}
            projectUrl="/"
          />

          <ProjectItem
            title="Kodex"
            tech="React JS"
            backgroundImg={kodexImg}
            projectUrl="/"
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
