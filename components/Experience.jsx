import React from "react";

const Experience = () => {
  return (
    <div className='flex flex-col w-full justify-start content-between p-8'>
      <h2 className='text-stone-100 tracking-widest'>Work Experiences</h2>

      <div className='p-6 w-full mt-4 bg-[#414141]'>
        <h2 className='text-stone-300 font-normal'>
          Front-End development Intern (LIA 2) 2022-2022{" "}
        </h2>
        <div className=' w-full  text-stone-200'>
          <p className='text-emerald-400 tracking-wider'>tDigital AB</p>
          <p className='text-stone-300 pt-4 '>
            During my internship, I worked on a project to develop a portfolio
            website with another intern. Our main focus was on the frontend
            development using Gatsby, web components, and WordPress. We used the
            agile methodology to develop the website.
          </p>
          <p>
            Gatsby is a popular static site generator that helped us to develop
            a fast and efficient website. We also used web components to create
            reusable and modular UI elements that can be easily added to any web
            page. With the help of WordPress, we were able to manage the content
            of the website easily.
          </p>
          <p>
            During the project, we followed the agile methodology which allowed
            us to collaborate effectively and make progress in an iterative
            manner. We divided the project into smaller tasks and set short-term
            goals, which helped us to stay on track and avoid any delays.
          </p>
          <p>
            Overall, my internship was a great learning experience that helped
            me to develop my skills in frontend development, project management,
            and collaboration.
          </p>
        </div>
      </div>

      <div className='p-6 w-full mt-4 bg-[#414141]'>
        <h2 className='text-stone-300 font-normal'>
          Front-End development Intern (LIA 1) 2022-2022{" "}
        </h2>
        <div className=' w-full  text-stone-200'>
          <p className='text-emerald-400 tracking-wider'>
            Binogi International AB
          </p>
          <p className='text-stone-300 pt-4 '>
            Binogi is a multilingual, digital learning platform for students in
            K-12. The platform consists of animated lessons and interactive
            quizzes. During the internship I learned about TypeScript with React
            JS, Cypress testing, Figmagic to automate imports of design elements
            and creating design system and Chakra UI.
          </p>
        </div>
      </div>

      <div className='p-6 w-full mt-4 bg-[#414141]'>
        <h2 className='text-stone-300 font-normal'>
          UI/UX Design Intern 2018-2019{" "}
        </h2>
        <div className=' w-full  text-stone-200'>
          <p className='text-emerald-400 tracking-wider'>Ve and Vile</p>
          <p className='text-stone-300 pt-4 '>
            Ve and Vile is a Fashion-Tech company which is working with
            jewellers and designers using advanced 3D-printing to create
            Customer-Designed Jewellery. My main tasks as UI & UX Designer were
            - UI/UX Design of website and application, - Provide input on the
            existing design, -Testing application and website to find
            improvements and bugs.
          </p>
        </div>
      </div>

      <div className='p-6 w-full mt-4 bg-[#414141]'>
        <h2 className='text-stone-300 font-normal'>
          Freelance Video Game Designer 2017-2020{" "}
        </h2>
        <div className=' w-full  text-stone-200'>
          <p className='text-stone-300 pt-4 '>
            Ve and Vile is a Fashion-Tech company which is working with
            jewellers and designers using advanced 3D-printing to create
            Customer-Designed Jewellery. I was an independent game designer with
            a published game on iTunes in which I was responsible for the entire
            end to end process from early sketches, character design, 2D
            animation, narrative and sound effects as well as launching the game
            on iTunes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
