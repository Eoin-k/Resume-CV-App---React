import { RiArrowDropDownLine } from "react-icons/ri";
import { useRef } from "react";

const AccordionItem = ({ heading, component, isOpen, onClick }) => {
	const contentHeight = useRef();
	return (
		<div className="wrapper">
			<button
				className={`question-container ${isOpen ? "active" : ""}`}
				onClick={onClick}
			>
				<p className="question-content">{heading}</p>
				<RiArrowDropDownLine className={`arrow ${isOpen ? "active" : ""}`} />
			</button>

			<div
				ref={contentHeight}
				className="answer-container"
				style={
					isOpen
						? { height: contentHeight.current.scrollHeight }
						: { height: "0px" }
				}
			>
				<div className="answer-content">{component}</div>
			</div>
		</div>
	);
};
export default AccordionItem;
