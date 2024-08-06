import "./App.css";
import Accordion from "./components/display/Accordion";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function App() {
	const componentRef = useRef();
	const HandlePrint = useReactToPrint({
		content: () => componentRef.current
	})
	return (
		<>
			<div id="sidebar">
				<button className="print-btn" onClick={HandlePrint}>Print CV</button>
				<Accordion />
			</div>
			<div  ref={componentRef} className="resume-wrapper" id="resume-wrapper">
				<div className="resume-sidebar" id="resume-sidebar"></div>
				<div className="resume-content" id="resume-content"></div>
			</div>
		</>
	);
}

export default App;
