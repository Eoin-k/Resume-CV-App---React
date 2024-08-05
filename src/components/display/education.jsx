export default function Education (props) {
    return (
		<div id="education" className="section-header">
			<h3>Education</h3>
			{props.schools.map((school, index) => (
				
				<div key={index}>
					<p>{school.title}</p>
					<p>{school.company}</p>
					<p>{school.description}</p>
					<p>{school.datefrom}</p>
					<p>{school.datetill === '' ? "Present" : school.datetill}</p>
				</div>
			))}
		</div>
	);
}