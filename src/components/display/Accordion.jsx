{
	/* similar to react docs implementation */
}
import { useState } from "react";
import data from "./accordiondata";
import AccordionItem from "./accordionitem";

const Accordion = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleItemClick = (index) => {
		setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	return (
		<div className="container">
			<h3 className="sidebar-head">Use the inputs below to edit resume / CV</h3>
			{data.map((item, index) => (
				<AccordionItem
					key={index}
					heading={item.heading}
					component={item.component}
					isOpen={activeIndex === index}
					onClick={() => handleItemClick(index)}
				/>
			))}
		</div>
	);
};

export default Accordion;
