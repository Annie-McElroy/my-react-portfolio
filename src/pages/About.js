// Import AboutCard, SkillsetCard, and ToolsCard
import AboutCard from "../components/About/AboutCard";
import SkillsetCard from "../components/About/SkillsetCard";
import ToolsCard from "../components/About/ToolsCard";
import placeholder from '../images/placeholder.jpg';
import '../styles/About.css';

function About() {
    const tools = [
        {
            tool: 'MacOS',
            imgSrc: `${placeholder}`
        },
        {
            tool: 'Windows',
            imgSrc: `${placeholder}`
        },
        {
            tool: 'Slack',
            imgSrc: `${placeholder}`
        },
        {
            tool: 'Discord',
            imgSrc: `${placeholder}`
        },
        {
            tool: 'VSCode',
            imgSrc: `${placeholder}`
        },
        {
            tool: 'Git',
            imgSrc: `${placeholder}`
        },
        {
            tool: 'Insomnia',
            imgSrc: `${placeholder}`
        },
        {
            tool: 'Postman',
            imgSrc: `${placeholder}`
        },
        {
            tool: 'Heroku',
            imgSrc: `${placeholder}`
        },
    ]

    return (
        <main>
            <AboutCard />
            <SkillsetCard />
            <h2>Tools</h2>
            <section className='ToolsCard-Container'>
                {tools.map((tool) => (
                    <ToolsCard key={tool.tool} imgSrc={tool.imgSrc} tool={tool.tool} />
                ))}
            </section>
        </main>
    );
}

export default About;