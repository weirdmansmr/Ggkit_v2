import React from "react";
import style from "./LessonItem.module.scss";
import { Link } from "react-router-dom";

const LessonItem = ({ id, type, desc }) => {
	return (
		<Link to="/lesson">
			<div className={style.lessonItem}>
				<div className={style.lessonText}>
					<h2>Урок {id}</h2>
					<p>{desc}</p>
				</div>
				<h3>{type}</h3>
			</div>
		</Link>
	);
};

export default LessonItem;
