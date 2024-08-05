import ExperienceForm from "../forms/experience-form";
import StatementForm from "../forms/statement-form";
import EducationForm from "../forms/education-form";
import PersonalInfoForm from "../forms/personal-info-form";
import HardSkillsForm from "../forms/hard-skills-form";
import SoftSkillsForm from "../forms/soft-skills-form";

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
	{
		heading: "Hard Skills",
		component: <HardSkillsForm />,
	},
	{
		heading: "Soft Skills",
		component: <SoftSkillsForm />,
	},
];

export default data;
