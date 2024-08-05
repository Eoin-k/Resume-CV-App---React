export default function Experience(props) {
	return (
		<div id="experience" className="resume-section">
			<div className="section-heading">
				<h3>Work experience</h3>
			</div>
			{props.jobs.map((job, index) => (
				<div key={index} className="section-item">
					<div className="date-container">
						<p>{job.datefrom} - </p>
						<p>{job.datetill === "" ? "Present" : job.datetill}</p>
					</div>
					<div className="section-inner">
						<h3 className="section-item-heading">{job.title}</h3>
						<p>{job.company}</p>
						<p>{job.description}</p>
					</div>
				</div>
			))}
		</div>
	);
}
