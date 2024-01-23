// List of tools:
// OS: MacOs and Windows
// Communication: Slack and Discord
// Coding Tools: VSCode, Git, Insomnia, Postman, Heroku

import '../../styles/About.css';


const ToolsCard = (props) => {

    return (
        <section className='ToolsCard'>
            <div className='ToolsCard-box'>
                <img src={props.imgSrc} alt={props.tools} />
            </div>
        </section>
    )
}

export default ToolsCard;