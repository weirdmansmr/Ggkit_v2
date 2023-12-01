import { useState, useEffect } from "react";
import style from "./LessonList.module.scss";
import LessonItem from "./LessonItem/LessonItem";
import axios from 'axios'

const LessonList = () => {
	const [lessonList, setLectionList] = useState([]);

	useEffect(() => {
		const fetchLessonList = async () => {
			const { data } = await axios.get(
				"https://655265d95c69a7790329fd29.mockapi.io/LessonList",
			);
			setLectionList(data);
		};
		fetchLessonList();
	}, []);

	return (
		<main>
			<div className={style.container}>
				{lessonList.map((el, id) => (
					<LessonItem key={id} id={id + 1} type={el.type} desc={el.desc} date={el.date} />
				))}
			</div>
		</main>
	);
};

export default LessonList;
