import ToolsCard from "./ToolsCard";
import placeholder from "../../images/placeholder.jpg";

const ToolsetCard = () => {
  const tools = [
    {
      tool: "MacOS",
      imgSrc: `${placeholder}`,
    },
    {
      tool: "Windows",
      imgSrc: `${placeholder}`,
    },
    {
      tool: "Slack",
      imgSrc: `${placeholder}`,
    },
    {
      tool: "Discord",
      imgSrc: `${placeholder}`,
    },
    {
      tool: "VSCode",
      imgSrc: `${placeholder}`,
    },
    {
      tool: "Git",
      imgSrc: `${placeholder}`,
    },
    {
      tool: "Insomnia",
      imgSrc: `${placeholder}`,
    },
    {
      tool: "Postman",
      imgSrc: `${placeholder}`,
    },
    {
      tool: "Heroku",
      imgSrc: `${placeholder}`,
    },
  ];

  return (
    <section>
      <h2>Tools</h2>
      <div className="ToolsCard-Container">
        {tools.map((tool) => (
          <ToolsCard key={tool.tool} imgSrc={tool.imgSrc} tool={tool.tool} />
        ))}
      </div>
    </section>
  );
};

export default ToolsetCard;
