import React from "react";
import style from "./SubjCard.module.scss";

const SubjCard = ({ name, img }) => {
	return (
		<div className={style.subjEl}>
			<img src={img} alt="" />
			<div className={style.subjCover}>
				<h2>{name}</h2>
			</div>
		</div>
	);
};

export default SubjCard;