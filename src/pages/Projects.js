import ProjectCard from "../components/Projects/ProjectCards";
import placeholder from "../images/placeholder.jpg";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "The Village",
      description: "",
      role: "Backend",
      tools: ["React", "Material UI"],
      imgSrc: `${placeholder}`,
      link: ``,
    },
    {
      id: 2,
      name: "BookHub",
      description: "",
      role: "Frontend JavaScript",
      tools: ["HTML", "CSS", "JavaScript"],
      imgSrc: ``,
      link: ``,
    },
  ];

  return (
    <div>
      <p>Project Page</p>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          imgSrc={project.imgSrc}
          name={project.name}
          description={project.description}
          role={project.role}
          tools={project.tools}
        />
      ))}
      <section></section>
    </div>
  );
}

export default Projects;
