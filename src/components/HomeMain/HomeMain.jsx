import React from "react";
import style from "./HomeMain.module.scss";
import mainImg from "../../assets/MainPhoto.png";

const HomeMain = () => {
	return (
		<main className={style.main}>
			<h1>
				Современная и простая система обучения по всероссийским стандартам
			</h1>
			<div className={style.circle1}></div>
			<div className={style.circle2}></div>
			<div className={style.circle3}></div>
			<img src={mainImg} alt="" />
		</main>
	);
};

export default HomeMain;
