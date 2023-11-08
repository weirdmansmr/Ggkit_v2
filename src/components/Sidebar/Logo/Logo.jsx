import React from "react";
import style from "./Logo.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Logo = () => {
	const open = useSelector((state) => state.sideBar.value);
	return (
		<Link to='/'>
			<span className={style.logo}>{open ? `GGKIT` : `IT`}</span>
		</Link>
	);
};

export default Logo;
