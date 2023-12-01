import React, { useEffect, useState } from "react";
import style from "./LessonItem.module.scss";
import { Link } from "react-router-dom";

const LessonItem = ({ id, type, desc, date }) => {
	const openDate = new Date(date).toLocaleDateString("ru", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
	const [dateCheck, setDateCheck] = useState(Date.parse(date) >= +Date.now());
	dateCheck &&
		setInterval(() => {
			setDateCheck(Date.parse(date) >= +Date.now());
			console.log(dateCheck);
		}, 60000);
	return (
		<Link
			to="/lesson"
			className={`${style.lessonItem} ${dateCheck ? style.disabled : ""}`}
		>
			<div className={style.lessonText}>
				<h2>Урок {id}</h2>
				<p>{dateCheck ? `Урок будет доступен ${openDate}` : desc}</p>
			</div>
			<h3>{dateCheck ? "Закрыт" : type}</h3>
		</Link>
	);
};

export default LessonItem;
