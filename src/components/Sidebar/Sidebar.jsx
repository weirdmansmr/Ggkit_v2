import React from "react";
import style from "./Sidebar.module.scss";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import Profile from "./Profile/Profile";
import { useSelector, useDispatch } from "react-redux";
import { setSideBar } from "../../redux/slices/sideBarSlice";

const Sidebar = () => {
	const open = useSelector((state) => state.sideBar.value);
	const dispatch = useDispatch();
	return (
		<aside
			className={`${style.sideBar} ${open ? null : `${style.sideBarClosed}`}`}
			onMouseEnter={() => dispatch(setSideBar(true))}
			onMouseLeave={() => dispatch(setSideBar(false))}
		>
			<div className={style.sideBarTop}>
				<Logo />
				<Nav />
			</div>
			<Profile />
		</aside>
	);
};

export default Sidebar;
