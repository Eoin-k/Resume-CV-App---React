export default function Softskills(props) {
	props.skills.forEach((skill) => {
		if (skill.value == "0") {
			skill.value = "Beginner";
		}
		if (skill.value == "20") {
			skill.value = "Knowledgable";
		}
		if (skill.value == "40") {
			skill.value = "Competent";
		}
		if (skill.value == "60" ){
			skill.value = "Intermediate"
		}
		if (skill.value == "80" ){
			skill.value = "Advanced"
		} else if (skill.value == "100") {
			skill.value = "Expert"
		}
	});
	return (
		<div id="personal-info" className="section-header">
			<div className="sidebar-header">
				<h4>Soft Skills</h4>
			</div>
			{props.skills.map((skill, index) => (
				<div key={index} className="sidebar-item">
					<span className="item-heading">{skill.title}</span>
					<p className="item-detail">{skill.value == "" ? "Intermediate" : skill.value}</p>
				</div>
			))}
		</div>
	);
}
