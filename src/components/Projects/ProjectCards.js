import '../../styles/Project.css';


function ProjectCard(props) {
    const toolsList = props.tools.join(', ');

    return (
        <section className="ProjectCard">
            <figure className="ProjectCard-figure">
                <img src={props.imgSrc} alt={props.name} />
                <figcaption className='ProjectCard-title'>{props.name}</figcaption>
            </figure>
            <article className='ProjectCard-article'>
                <p>Description: {props.description}</p>
                <p>Role: {props.role}</p>
                <p>Tools: {toolsList} </p>
            </article>
        </section>
        
    )
}

export default ProjectCard;