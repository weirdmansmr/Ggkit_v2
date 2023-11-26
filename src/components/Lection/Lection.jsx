import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import style from "./Lection.module.scss";
import axios from "axios";

const Lection = () => {
	const [lesson, setLection] = useState([]);

	useEffect(() => {
		const fetchLesson = async () => {
			const { data } = await axios.get(
				"https://655265d95c69a7790329fd29.mockapi.io/Lesson",
			);
			setLection(data);
		};
		fetchLesson();
	}, []);

	return (
		<main>
			{lesson.map((el, id) => {
				return (
					<Markdown
						key={id}
						children={el.desc}
						className={style.markCont}
						options={{ wrapper: "article" }}
					/>
				);
			})}
		</main>
	);
};

export default Lection;
