import { useState } from "react";
import { createPortal } from "react-dom";

export default function HardSkillsForm() {
	const [fieldvalue, setFieldValue] = useState([
		{
			name: "",
			value: "",
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
			name: "",
			value: "",
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
								<input type="range" list = "values" onChange={(event) => handleFormChange(index,event)} />
							</label>
							<datalist id="values">
								<option value="0" label="Beginner"></option>
								<option value="25" label="Knowledgeable"></option>
								<option value="50" label="Intermediate"></option>
								<option value="75" label="Advanced"></option>
								<option value="100" label="Expert"></option>
							</datalist>

							<button onClick={() => removeFields(index)}>Remove</button>
						</div>
					);
				})}
				<button onClick={addFields}>Add More Skills</button>
			</form>
		</div>
	);
}
