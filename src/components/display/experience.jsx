export default function Experience(props) {
    const experienceDiv = document.getElementById('experience')
    return(
        <div id="experience" className="section-header">
        <h3>Work experience</h3>
              {console.log(props.jobs)}
                {props.jobs.map((job,index) => ( 
                 <div key={index}>
                <p>{job.title}</p>
                <p>{job.company}</p>
                <p>{job.description}</p>
                <p>{job.datefrom}</p>
                <p>{job.datetill}</p>
                </div>
                ))}
                </div>
        )
}