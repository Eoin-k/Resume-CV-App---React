import { useState } from "react";
import { createPortal } from "react-dom";
import Hardskills from "../display/hard-skills";

export default function HardSkillsForm() {
	const [fieldvalue, setFieldValue] = useState([
		{
			title: "Microsoft Excel",
			value: "80",
			text: "",
		},
	]);
	const handleFormChange = (index, event) => {
		let data = [...fieldvalue];
		data[index][event.target.name] = event.target.value;
		setFieldValue(data);
	};
	const addFields = (e) => {
		e.preventDefault();
		let newfield = {
			title: "",
			value: "",
			text: "",
		};
		setFieldValue([...fieldvalue, newfield]);
	};

	const removeFields = (index) => {
		let data = [...fieldvalue];
		data.splice(index, 1);
		setFieldValue(data);
	};
	const [loading, setLoading] = useState(true);
	setTimeout(() => {
		setLoading(false);
	}, 5);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<form action="">
				{fieldvalue.map((input, index) => {
					return (
						<div key={index}>
							<label>
								<span>Skill Title</span>
								<input
									type="text"
									value={input.title}
									name="title"
									placeholder="Title"
									onChange={(event) => handleFormChange(index, event)}
								/>
							</label>
							<label>
								<span>Select Skill level</span>
								<input
									type="range"
									step="20"
									name="value"
									value={input.value}
									onChange={(event) => handleFormChange(index, event)}
								/>
							</label>

							<button className="delete-btn" onClick={() => removeFields(index)}>Remove</button>
						</div>
					);
				})}
				<button className="add-btn" onClick={addFields}>Add More Skills</button>
			</form>
			{createPortal(
				<Hardskills skills={fieldvalue} />,
				document.getElementById("resume-sidebar"),
			)}
		</div>
	);
}
