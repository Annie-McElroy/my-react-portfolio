import '../../styles/Project.css';


function ProjectCard(props) {
    const toolsList = props.tools.join(', ');

    return (
        <section>
            <figure className="ProjectCard">
                <img src={props.imgSrc} alt={props.name} />
                <figcaption className='ProjectCard-title'>{props.name}</figcaption>
            </figure>
            <article>
                <p>Description: {props.description}</p>
                <p>Role: {props.role}</p>
                <p>Tools: {toolsList} </p>
            </article>
        </section>
        
    )
}

export default ProjectCard;