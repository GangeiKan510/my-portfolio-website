import ExperienceCard from "./ExperienceCard"
import CardImage from "./CardImage"
import Skill from "./Skill"
import firstProject  from "../../images/project-preview/1.png"
import secondProject  from "../../images/project-preview/2.png"
import thirdProject  from "../../images/project-preview/3.png"

export default function Projects() {
  return (
    <>
      <ExperienceCard 
        image=<CardImage
          source={firstProject}
        />
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
        image=<CardImage
          source={secondProject}
        />
        role="Frontend Developer"
        company="GDSC CPU-Chapter"
        description="Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients."
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
        image=<CardImage
          source={thirdProject}
        />
        role="Frontend Developer"
        company="GDSC CPU-Chapter"
        description="Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients."
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
    </>
  )
};