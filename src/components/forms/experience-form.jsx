import { useState } from "react";
import { createPortal } from "react-dom";
import Experience from "../display/experience";
export default function ExperienceForm() {
	const [inputFields, setInputFields] = useState([
		{
			title: "Head Manager",
			company: "Coca-Cola",
			description: "Done a lot of cool stuff here",
			datefrom: "Aug 2022",
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
			company: "",
			description: "",
			datefrom: "",
			datetill: "Present",
		};
		setInputFields([...inputFields, newfield]);
	};

	const removeFields = (index) => {
		let data = [...inputFields];
		data.splice(index, 1);
		setInputFields(data);
	};

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
									<span>Company</span>
									<input
										value={input.company}
										name="company"
										placeholder="Company"
										onChange={(event) => handleFormChange(index, event)}
									/>
								</label>
								<label>
									<span>Job Description</span>
									<textarea
										value={input.description}
										name="description"
										placeholder="Job Description"
										onChange={(event) => handleFormChange(index, event)}
									/>
								</label>
								<label>
									<span>Date From:</span>
									<input
										type="text"
										name="datefrom"
										value={input.datefrom}
										onChange={(event) => handleFormChange(index, event)}
									/>
								</label>
								<label>
									<span>Date to:</span>
									<input
										type="text"
										name="datetill"
										value={input.datetill}
										onChange={(event) => handleFormChange(index, event)}
									/>
								</label>
								<button className="delete-btn" onClick={() => removeFields(index)}>Remove</button>
							</div>
						);
					})}
				</form>
				<button className="add-btn" onClick={addFields}>Add Another Job</button>
				{createPortal(
					<Experience jobs={inputFields} />,
					document.getElementById("resume-content"),
				)}
			</div>
		</>
	);
}
