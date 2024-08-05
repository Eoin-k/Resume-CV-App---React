import ExperienceForm from "../forms/experience-form";
import StatementForm from "../forms/statement-form";
import EducationForm from "../forms/education-form";
import PersonalInfoForm from "../forms/personal-info-form";

const data = [
	{
		heading: "Personal Info",
		component: <PersonalInfoForm />,
	},
	{
		heading: "Personal Statement",
		component: <StatementForm />,
	},
	{
		heading: "jobs",
		component: <ExperienceForm />,
	},
	{
		heading: "Education",
		component: <EducationForm />,
	},
	{
		heading: "What are these thisng",
		component: <StatementForm />,
	},
];

export default data;
