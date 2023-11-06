import React from "react";
import style from "./LessonList.module.scss";
import LessonItem from "./LessonItem/LessonItem";

const lessonList = [
	{
		type: "Лекция",
		desc: "Основные определения",
	},
	{
		type: "Лекция",
		desc: "Основные свойства информации",
	},
	{
		type: "Лекция",
		desc: "Классификация информации",
	},
	{
		type: "Лекция",
		desc: "Количество информации как мера уменьшения неопределенности знаний",
	},
	{
		type: "Лекция",
		desc: "Алфавитный подход к определению количества информации",
	},
];

const LessonList = () => {
	return (
		<main>
			<div className={style.container}>
				{lessonList.map((el, id) => (
					<LessonItem id={id + 1} type={el.type} desc={el.desc} />
				))}
			</div>
		</main>
	);
};

export default LessonList;
