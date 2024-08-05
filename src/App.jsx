import "./App.css";
import Accordion from "./components/display/Accordion";
function App() {
	return (
		<>
			<div id="sidebar">
				<Accordion />
			</div>
			<div id="resume-wrapper">
				<div id="resume-sidebar"></div>
				<div id="resume-content"></div>
			</div>
		</>
	);
}

export default App;
