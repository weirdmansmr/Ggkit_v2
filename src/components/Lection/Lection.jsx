import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
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
			console.log(data);
		};
		fetchLesson();
	}, []);

	return (
		<main>
			{lesson.map((el, id) => {
				let text = el.desc.replace(/\(!\)/g, `\\\n\\\n`);
				return (
					<ReactMarkdown key={id} children={text} className={style.markCont} />
				);
			})}
		</main>
	);
};

export default Lection;
