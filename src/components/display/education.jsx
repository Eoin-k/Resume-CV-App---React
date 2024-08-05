export default function Education(props) {
	return (
		<div id="education" className="resume-section">
			<div className="section-heading">
				<h3>Education</h3>
			</div>
			{props.schools.map((school, index) => (
				<div key={index} className="section-item">
					<div className="date-container">
						<p>{school.datefrom} - </p>
						<p>{school.datetill === "" ? "Present" : school.datetill}</p>
					</div>
					<div className="section-inner">
						<h3 className="section-item-heading">{school.title}</h3>
						<p>{school.institution}</p>
						<p>{school.description}</p>
					</div>
				</div>
			))}
		</div>
	);
}
