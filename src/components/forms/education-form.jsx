import { useState } from "react";
import { createPortal } from "react-dom";
import Education from "../display/education";
export default function EducationForm() {
	const [inputFields, setInputFields] = useState([
		{
			title: "",
			institution: "",
			description: "",
			datefrom: "",
			datetill: "Present",
		},
	]);
	const [loading, setLoading] = useState(true);
	const handleFormChange = (index, event) => {
		let data = [...inputFields];
		data[index][event.target.name] = event.target.value;
		setInputFields(data);
	};
	const addFields = (e) => {
		e.preventDefault();
		let newfield = {
			title: "",
			institution: "",
			description: "",
			datefrom: "",
			datetill: "Present",
		};
		setInputFields([...inputFields, newfield]);
	};

	const removeFields = (index) => {
		let data = [...inputFields];
		data.splice(index, 1)
		setInputFields(data);
	}

	setTimeout(() => {
		setLoading(false);
	}, 5);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<div>
				<form action="">
					{inputFields.map((input, index) => {
						return (
							<div key={index}>
								<label>
									<span>Title</span>
									<input
										value={input.title}
										name="title"
										placeholder="Title"
										onChange={(event) => handleFormChange(index, event)}
									/>
								</label>
								<label>
									<span>College / institute</span>
									<input
										value={input.company}
										name="company"
										placeholder="College / institute"
										onChange={(event) => handleFormChange(index, event)}
									/>
								</label>
								<label>
									<span>Description</span>
									<textarea
										value={input.description}
										name="description"
										placeholder="Course description"
										onChange={(event) => handleFormChange(index, event)}
									/>
								</label>
								<label>
									<span>Date From:</span>
									<input
										type="date"
										name="datefrom"
										value={input.datefrom}
										onChange={(event) => handleFormChange(index, event)}
									/>
								</label>
								<label>
									<span>Date to:</span>
									<input
										type="date"
										name="datetill"
										value={input.datetill}
										onChange={(event) => handleFormChange(index, event)}
									/>
								</label>
								<button onClick={ () => removeFields(index)}>Remove</button>
							</div>
						);
					})}

					<button onClick={addFields}>Add more education</button>
				</form>

				{createPortal(
					<Education schools={inputFields} />,
					document.getElementById("resume-content"),
				)}
			</div>
		</>
	);
}
