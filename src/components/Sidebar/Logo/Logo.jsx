import React from "react";
import style from "./Logo.module.scss";
import { useSelector } from "react-redux";

const Logo = () => {
	const open = useSelector((state) => state.sideBar.value);
	return <span className={style.logo}>{open ? `GGKIT` : `IT`}</span>;
};

export default Logo;
