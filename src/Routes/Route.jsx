import { Route, RouterProvider, Routes } from "react-router";
import Sidebar from "../components/Sidebar/Sidebar";
import Home from "../pages/Home";
import Subjects from "../pages/Subjects";
import Lessons from "../pages/Lessons";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import VideoLection from "../components/VideoLection/VideoLection";
import Lection from "../components/Lection/Lection";
import QuizPage from "../pages/QuizPage";

function App() {
	return (
		<div style={{ maxWidth: 1440, margin: "0 auto" }}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/subjects" element={<Subjects />} />
				<Route path="/lessons" element={<Lessons />} />
				<Route path="/lection" element={<Lection />} />
				<Route path="/videolection" element={<VideoLection />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/quiz" element={<QuizPage />} />
			</Routes>
			<Sidebar />
		</div>
	);
}

export default App;
