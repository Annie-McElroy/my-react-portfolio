// List of Skills:
// Learned: React, JavaScript, MongoDB/Mongoose, mySQL/Sequelize, Apollo GraphQL, Node.js, Express.js
// Studying: React
// Looking to Learning: Python, Java, and Angular

import "../../styles/About.css";
import SkillCard from "./SkillCard";
import placeholder from "../../images/placeholder.jpg";
import {
  A_GQL_Logo,
  JS_Logo,
  Ex_Logo,
  MonDB_Logo,
  NodeJS_Logo,
  React_Logo,
  SQL_Logo,
  Train_Dev_Logo,
  CSS_Logo,
  Python_Logo,
} from "../../images/index";

const SkillsetCard = () => {
  // [ 'React', 'JavaScript', 'MongoDB/Mongoose', 'mySQL/Sequelize', 'Apollo GraphQL', 'Node.js', 'Express.js' ]
  const skillSet = [
    {
      skill: "React",
      imgSrc: `${React_Logo}`,
    },
    {
      skill: "JavaScript",
      imgSrc: `${JS_Logo}`,
    },
    {
      skill: "MongoDB/Mongoose",
      imgSrc: `${MonDB_Logo}`,
    },
    {
      skill: "mySQL/Sequelize",
      imgSrc: `${SQL_Logo}`,
    },
    {
      skill: "Apollo GraphQL",
      imgSrc: `${A_GQL_Logo}`,
    },
    {
      skill: "Node.js",
      imgSrc: `${NodeJS_Logo}`,
    },
    {
      skill: "Training",
      imgSrc: `${Train_Dev_Logo}`,
    },
    {
      skill: "Express.js",
      imgSrc: `${Ex_Logo}`,
    },
  ];

  const studying = [
    {
      skill: "React",
      imgSrc: `${React_Logo}`,
    },
    {
      skill: "CSS",
      imgSrc: `${CSS_Logo}`,
    },
  ];

  const toLearn = [
    {
      skill: "Python",
      imgSrc: `${Python_Logo}`,
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
