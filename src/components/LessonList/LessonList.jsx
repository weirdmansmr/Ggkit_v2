// import { useState, useEffect } from "react";
import style from "./LessonList.module.scss";
import LessonItem from "./LessonItem/LessonItem";
// import axios from "axios";

const LessonList = () => {
	// const [lessonList, setLectionList] = useState([]);

	// // useEffect(() => {
	// // 	const fetchLessonList = async () => {
	// // 		const { data } = await axios.get(
	// // 			"https://655265d95c69a7790329fd29.mockapi.io/LessonList",
	// // 		);
	// // 		setLectionList(data);
	// // 	};
	// // 	fetchLessonList();
	// // }, []);

	const lessonList = [
		{
			type: "Лекция",
			desc: "Основные определения",
			date: "2023-11-21T00:00",
		},
		{
			type: "Лекция",
			desc: "Основные свойства информации",
			date: "2023-11-24T00:00",
		},
		{
			type: "Видеоурок",
			desc: "Классификация информации",
			date: "2023-11-27T00:00",
		},
		{
			type: "Видеоурок",
			desc: "Количество информации как мера уменьшения неопределенности знаний",
			date: "2023-12-03T00:00",
		},
		{
			type: "Лекция",
			desc: "Алфавитный подход к определению количества информации",
			date: "2023-12-05T00:00",
		},
	];

	return (
		<main>
			<div className={style.container}>
				{lessonList.map((el, id) => (
					<LessonItem
						key={id}
						id={id + 1}
						type={el.type}
						desc={el.desc}
						date={el.date}
					/>
				))}
			</div>
		</main>
	);
};

export default LessonList;
