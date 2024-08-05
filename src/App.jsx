import "./App.css";
import Accordion from "./components/display/Accordion";
function App() {
	return (
		<>
			<div id="sidebar">
				<Accordion />
			</div>
			<div className="resume-wrapper" id="resume-wrapper">
				<div className="resume-sidebar" id="resume-sidebar"></div>
				<div className="resume-content" id="resume-content"></div>
			</div>
		</>
	);
}

export default App;
