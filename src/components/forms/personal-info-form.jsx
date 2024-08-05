import { useState } from "react";
import { createPortal } from "react-dom";
import PersonalInfo from "../display/personal-info";
export default function PersonalInfoForm() {
    const [loading, setLoading] = useState(true);
	const [inputFields, setInputFields] = useState([
		{
			name: "",
			title: "",
			phone: "",
			email: "",
			linkedin: "",
			twitter: "",
		},
	]);
    const handleFormChange = (index, event) => {
		let data = [...inputFields];
		data[index][event.target.name] = event.target.value;
		setInputFields(data);
	}; 

    setTimeout(() => {
		setLoading(false);
	}, 50);

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
									<span>Name:</span>
									<input
										value={input.name}
										name="name"
										placeholder="Your name"
										onChange={(event) => handleFormChange(index, event)}
									/>
								</label>
								<label>
									<span>Job Title</span>
									<input
										value={input.title}
										name="title"
										placeholder="Current title"
										onChange={(event) => handleFormChange(index, event)}
									/>
								</label>
								<label>
									<span>Phone #</span>
									<textarea
										value={input.description}
										name="phone"
										placeholder="(555-555-5555)"
										onChange={(event) => handleFormChange(index, event)}
									/>
								</label>
								<label>
									<span>Email:</span>
									<input
										type="email"
										name="email"
										value={input.email}
										onChange={(event) => handleFormChange(index, event)}
									/>
								</label>
								<label>
									<span>Linkedin:</span>
									<input
										type="text"
										name="linkedin"
										value={input.linkedin}
										onChange={(event) => handleFormChange(index, event)}
									/>
								</label>
                                <label>
									<span>Twitter:</span>
									<input
										type="text"
										name="twitter"
										value={input.twitter}
										onChange={(event) => handleFormChange(index, event)}
									/>
								</label>
							</div>
						);
					})}
				</form>
				{createPortal(
					<PersonalInfo info={inputFields} />,
					document.getElementById("resume-sidebar"),
				)}
			</div>
		</>
	);
}
