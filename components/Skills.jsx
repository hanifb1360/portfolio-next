import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <div id="skills" className="w-full md:h-screen p-12 flex items-center  py-16">
      <div className="max-w-[max-w-[1240px] mx-auto flex mt-20 flex-col justify-center h-full">
     
        <div className="grid mt-8 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard
            imageSrc="/../public/assets/skills/html.png"
            title="HTML"
          />
          <SkillCard
            imageSrc="/../public/assets/skills/css.png"
            title="CSS"
          />
          <SkillCard
            imageSrc="/../public/assets/skills/javascript.png"
            title="JavaScript"
          />
          <SkillCard
            imageSrc="/../public/assets/skills/react.png"
            title="React JS"
          />
          <SkillCard
            imageSrc="/../public/assets/skills/tailwind.png"
            title="Tailwind CSS"
          />
          <SkillCard
            imageSrc="/../public/assets/skills/firebase.png"
            title="Firebase"
          />
          <SkillCard
            imageSrc="/../public/assets/skills/github1.png"
            title="GitHub"
          />
          <SkillCard
            imageSrc="/../public/assets/skills/ts.png"
            title="TypeScript"
          />
          <SkillCard
            imageSrc="/../public/assets/skills/jest.png"
            title="Jest"
          />
          <SkillCard
            imageSrc="/../public/assets/skills/gatsby.png"
            title="Gatsby JS"
          />
          <SkillCard
            imageSrc="/../public/assets/skills/cypress.png"
            title="Cypress JS"
          />
          <SkillCard
            imageSrc="/../public/assets/skills/sass.png"
            title="SASS"
          />
          <SkillCard
            imageSrc="/../public/assets/skills/nextjs.png"
            title="Next JS"
          />
          <SkillCard
            imageSrc="/../public/assets/skills/figma.png"
            title="Figma"
          />
          <SkillCard
            imageSrc="/../public/assets/skills/photoshop.png"
            title="Adobe Photoshop"
          />
          <SkillCard
            imageSrc="/../public/assets/skills/illustrator.png"
            title="Adobe Illustrator"
          />
          <SkillCard
            imageSrc="/../public/assets/skills/sb.png"
            title="Storybook"
          />
          <SkillCard
            imageSrc="/../public/assets/skills/strapi.png"
            title="Strapi"
          />
          <SkillCard
            imageSrc="/../public/assets/skills/3d.png"
            title="3D Modeling"
          />
          <SkillCard
            imageSrc="/../public/assets/skills/wc.png"
            title="Web Components"
          />
        </div>
      </div>
    </div>
  );
}
