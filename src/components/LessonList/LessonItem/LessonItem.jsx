import React from "react";
import style from "./LessonItem.module.scss";


const LessonItem = ({ id, type, desc }) => {
	return (
		<div className={style.lessonItem}>
			<div className={style.lessonText}>
				<h2>Урок {id}</h2>
				<p>{desc}</p>
			</div>
			<h3>{type}</h3>
		</div>
	);
};

export default LessonItem;
