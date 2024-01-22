import '../../styles/Project.css';


function ProjectCard(props) {

    return (
        <figure className="ProjectCard">
            <img src={props.imgSrc} alt={props.name} />
            <figcaption className='ProjectCard-title'>{props.name}</figcaption>
        </figure>
    )
}

export default ProjectCard;