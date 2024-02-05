import "../../styles/About.css";

const SkillCard = (props) => {
  return (
    <section className="SkillCard">
      <div className="SkillCard-box">
        <img src={props.imgSrc} alt={props.skill} />
      </div>
    </section>
  );
};

export default SkillCard;
