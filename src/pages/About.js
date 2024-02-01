// Import AboutCard, SkillsetCard, and ToolsCard
import AboutCard from "../components/About/AboutCard";
import SkillsetCard from "../components/About/SkillsetCard";
import ToolsetCard from "../components/About/ToolsetCard";
import '../styles/About.css';

function About() {

    return (
        <main>
            <AboutCard />
            <SkillsetCard />
            <ToolsetCard />
            {/* <h2>Tools</h2>
            <section className='ToolsCard-Container'>
                {tools.map((tool) => (
                    <ToolsCard key={tool.tool} imgSrc={tool.imgSrc} tool={tool.tool} />
                ))}
            </section> */}
        </main>
    );
}

export default About;