import React from "react";
import style from "./SubjCard.module.scss";
import { Link } from "react-router-dom";

const SubjCard = ({ name, img }) => {
	return (
		<Link to='/lessons'>
			<div className={style.subjEl}>
				<img src={img} alt="" />
				<div className={style.subjCover}>
					<h2>{name}</h2>
				</div>
			</div>
		</Link>
	);
};

export default SubjCard;
