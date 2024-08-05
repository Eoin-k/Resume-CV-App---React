export default function Experience(props) {
	return (
		<div id="experience" className="section-header">
			<h3>Work experience</h3>
			{props.jobs.map((job, index) => (
				
				<div key={index}>
					<p>{job.title}</p>
					<p>{job.company}</p>
					<p>{job.description}</p>
					<p>{job.datefrom}</p>
					<p>{job.datetill === '' ? "Present" : job.datetill}</p>
				</div>
			))}
		</div>
	);
}
