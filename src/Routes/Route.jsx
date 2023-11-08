import { Route, RouterProvider, Routes } from "react-router";
import Sidebar from "../components/Sidebar/Sidebar";
import Home from "../pages/Home";
import Subjects from "../pages/Subjects";
import Lessons from "../pages/Lessons";
import Lesson from "../pages/Lesson";

function App() {
	return (
		<div style={{ maxWidth: 1440, margin: "0 auto" }}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/subjects" element={<Subjects />} />
				<Route path="/lessons" element={<Lessons />} />
				<Route path="/lesson" element={<Lesson />} />
			</Routes>
			<Sidebar />
		</div>
	);
}

export default App;
