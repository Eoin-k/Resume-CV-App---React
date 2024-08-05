export default function Hardskills(props) {
	let barWidth;

	props.skills.forEach((skill) => {
		if (skill.value == "0") {
			skill.text = "Beginner";
			barWidth = skill.value;
		}
		if (skill.value == "20") {
			skill.text = "Knowledgable";
			barWidth = skill.value;
		}
		if (skill.value == "40") {
			skill.text = "Competent";
			barWidth = skill.value;
		}
		if (skill.value == "60") {
			skill.text = "Intermediate";
			barWidth = skill.value;
		}
		if (skill.value == "80") {
			skill.text = "Advanced";
			barWidth = skill.value;
		} else if (skill.value == "100") {
			skill.text = "Expert";
			barWidth = skill.value;
		}
	});
	return (
		<div id="hard-skills" className="hard-skills">
			<div className="sidebar-header">
				<h4>Hard Skills</h4>
			</div>
			{props.skills.map((skill, index) => (
				<div key={index} className="sidebar-item">
					<div className="item-inner-wrapper">
						<span className="item-heading">{skill.title}</span>
						<div
							style={{
								backgroundImage: `linear-gradient(90deg, white 0% ${skill.value}%, #012E58 ${skill.value}% 100%)`,
								height: "10px",
							}}
						></div>
						<p className="skill-level">
							{skill.text == "" ? "Intermediate" : skill.text}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
