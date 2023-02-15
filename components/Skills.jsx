import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#1e81b0]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            imageSrc="/../public/assets/skills/storybook.png"
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
            imageSrc="/../public/assets/skills/sc.png"
            title="Style Components"
          />
        </div>
      </div>
    </div>
  );
}
