import { RouterProvider, Routes } from "react-router";
import Sidebar from "../components/Sidebar/Sidebar";
import Home from "../pages/Home";
import Subjects from "../pages/Subjects";
import Lessons from "../pages/Lessons";
import Lesson from '../pages/Lesson'

function App() {
	return (
		<div style={{ maxWidth: 1440, margin: '0 auto'}}>
			<Sidebar />
			<Lesson />
		</div>
	);
}

export default App;
