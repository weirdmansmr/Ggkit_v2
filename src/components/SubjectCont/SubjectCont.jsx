import React from "react";
import Math from "../../assets/subjects/Math.png";
import Eng from "../../assets/subjects/English.png";
import Inform from "../../assets/subjects/CS.png";
import style from "./SubjectCont.module.scss";
import SubjCard from "./SubjCard/SubjCard";

const subjects = [
	{
		name: "Математика",
		img: Math,
	},
	{
		name: "Английский",
		img: Eng,
	},
	{
		name: "Информатика",
		img: Inform,
	},
];

const SubjectCont = () => {
	return (
		<main>
			<div className={style.container}>
				{subjects.map((el) => (
					<SubjCard name={el.name} img={el.img} />
				))}
				{subjects.reverse().map((el) => (
					<SubjCard name={el.name} img={el.img} />
				))}
				{subjects.reverse().map((el) => (
					<SubjCard name={el.name} img={el.img} />
				))}
			</div>
		</main>
	);
};

export default SubjectCont;
