import ExperienceCard from "./ExperienceCard";
import Skill from "./Skill";

export default function Experiences() {
  return (
    <>
      <ExperienceCard 
        duration="2018 — PRESENT"
        role="Frontend Developer"
        company="GDSC CPU-Chapter"
        description="Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more."
        skills={
        <>
          <Skill skill="MongoDB"/>
          <Skill skill="ExpressJS"/>
          <Skill skill="ReactJS"/>
          <Skill skill="Node"/>
          <Skill skill="MySQL"/>
        </>
        }
      />
      <ExperienceCard 
        duration="2018 — PRESENT"
        role="Scrum Master | Full Stack Developer"
        company="YUKIMITO"
        description="Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more."
        skills={
        <>
          <Skill skill="Sequelize"/>
          <Skill skill="PostgreSQL"/>
          <Skill skill="ReactJS"/>
          <Skill skill="Node"/>
        </>
        }
      />
    </>
  )
};