export default function Experience(props) {
    return(
        <>
        <div id="experience" className="section-header">
        <h3>Work experience</h3>
                <div>
                <p>{props.title}</p>
                <p>{props.company}</p>
                <p>{props.description}</p>
                <p>{props.datefrom}</p>
                <p>{props.datetill}</p>
                </div>
                </div>
        </>
        )
}