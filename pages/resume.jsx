import React from "react";
import Head from "next/head";
import SkillBar from "../components/SkillBar";
import LanguageBar from "../components/LanguageBar";
import Education from "../components/Education";
import Experience from "../components/Experience";

const resume = () => {
  const pdfUrl = "../public/assets/hanifbahari-cv.pdf";

  return (
    <>
      <Head>
        <title>Hanif | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer with a background in design.'
        />
      </Head>
      <main className='grid grid-cols-1 md:grid-cols-3 gap-0'>
        <section className='bg-[#384550] p-6 ml-0 pt-20 w-full h-30vh col-span-1 md:col-span-3'>
          <div className='pt-10'>
            <div className='pt-8 pb-2'>
              <p className='text-4xl mt-5  inline  text-[#ffffff]'>
                HANIF BAHARI
              </p>
            </div>
            <p className='text-emerald-400 text-base pt-2 font-normal md:text-xl'>
              Front-End Developer with a background in Design
            </p>
          </div>
        </section>

        {/* left */}
        <section className='  bg-[#a1a1a1] col-span-1 md:col-span-1'>
          <div className='p-6'>
            <h2 className='text-xl font-bold mb-2'>SKILLS</h2>
            <SkillBar skill='JavaScript' percentage={70} />
            <SkillBar skill='React' percentage={70} />
            <SkillBar skill='Node.js' percentage={60} />
            <SkillBar skill='TypeScript' percentage={50} />
            <SkillBar skill='TailwindCSS' percentage={90} />
            <SkillBar skill='Firebase' percentage={70} />
            <SkillBar skill='GitHub' percentage={70} />
            <SkillBar skill='JEST' percentage={60} />
            <SkillBar skill='Gatsby JS' percentage={60} />
            <SkillBar skill='Next JS' percentage={70} />
            <SkillBar skill='StoryBook' percentage={80} />
            <SkillBar skill='Chakra UI' percentage={90} />
            <SkillBar skill='Strapi' percentage={90} />
            <SkillBar skill='Mango DB' percentage={70} />
            <SkillBar skill='Cypress JS' percentage={60} />
            <SkillBar skill='Style Component' percentage={70} />
            <SkillBar skill='SASS' percentage={100} />
            <SkillBar skill='Web Component' percentage={60} />
            <SkillBar skill='Figma' percentage={100} />
            <SkillBar skill='Adobe Photoshop' percentage={100} />
            <SkillBar skill='Adobe Illustrator' percentage={90} />
            <SkillBar skill='Adobe AfterEffects' percentage={60} />
            <SkillBar skill='Adobe XD' percentage={100} />
            <SkillBar skill='Adobe Animate' percentage={80} />
            <SkillBar skill='3D Modeling' percentage={70} />
            <SkillBar skill='Sketch' percentage={100} />
          </div>

          <div className='p-6'>
            <h2 className='text-xl font-bold mb-2'>LANGUAGE</h2>
            <LanguageBar language='Persian' percentage={100} />
            <LanguageBar language='English' percentage={70} />
            <LanguageBar language='Swedish' percentage={60} />
          </div>
        </section>

        {/* right */}

        <section className='  bg-[#616161]  col-span-1 md:col-span-2 mt-4 md:mt-0'>
          <div>
            <Education />
            <Experience />
          </div>
        </section>
      </main>
    </>
  );
};

export default resume;
