// List of Skills:
// Learned: React, JavaScript, MongoDB/Mongoose, mySQL/Sequelize, Apollo GraphQL, Node.js, Express.js
// Studying: React
// Looking to Learning: Python, Java, and Angular

import "../../styles/About.css";
import SkillCard from "./SkillCard";
import placeholder from "../../images/placeholder.jpg";

const SkillsetCard = () => {
  // [ 'React', 'JavaScript', 'MongoDB/Mongoose', 'mySQL/Sequelize', 'Apollo GraphQL', 'Node.js', 'Next.js', 'Express.js' ]
  const skillSet = [
    {
      skill: "React",
      imgSrc: `${placeholder}`,
    },
    {
      skill: "JavaScript",
      imgSrc: `${placeholder}`,
    },
    {
      skill: "MongoDB/Mongoose",
      imgSrc: `${placeholder}`,
    },
    {
      skill: "mySQL/Sequelize",
      imgSrc: `${placeholder}`,
    },
    {
      skill: "Apollo GraphQL",
      imgSrc: `${placeholder}`,
    },
    {
      skill: "Node.js",
      imgSrc: `${placeholder}`,
    },
    {
      skill: "Next.js",
      imgSrc: `${placeholder}`,
    },
    {
      skill: "Express.js",
      imgSrc: `${placeholder}`,
    },
  ];

  const studying = [
    {
      skill: "React",
      imgSrc: `${placeholder}`,
    },
    {
      skill: "CSS",
      imgSrc: `${placeholder}`,
    },
  ];

  const toLearn = [
    {
      skill: "Python",
      imgSrc: `${placeholder}`,
    },
  ];

  return (
    <section className="SkillsetCard">
      <h2>Skill Set</h2>
      <article className="SkillsCard">
        {skillSet.map((skill) => (
          <SkillCard
            key={skill.skill}
            skill={skill.skill}
            imgSrc={skill.imgSrc}
          />
        ))}
      </article>
      <div className="StudyLearn">
        <article className="Study">
          <h3>Studying</h3>
          <div className="StudySkills">
            {studying.map((skill) => (
              <SkillCard
                key={skill.skill}
                skill={skill.skill}
                imgSrc={skill.imgSrc}
              />
            ))}
          </div>
        </article>
        <article className="toLearn">
          <h3>Looking to Learn</h3>
          <div className="toLearnSkills">
            {toLearn.map((skill) => (
              <SkillCard
                key={skill.skill}
                skill={skill.skill}
                imgSrc={skill.imgSrc}
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default SkillsetCard;
