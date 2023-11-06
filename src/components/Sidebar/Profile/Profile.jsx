import React from "react";
import style from "./Profile.module.scss";
import avtr from "../../../assets/avtr.jpg";
import { useSelector } from "react-redux";

const Profile = () => {
	const open = useSelector((state) => state.sideBar.value);

	return (
		<div className={style.profile}>
			<img src={avtr} alt="" />
			{open ? (
				<div className={style.profileText}>
					<h4>Сайханов М.</h4>
					<h5>администратор</h5>
				</div>
			) : (
				``
			)}
		</div>
	);
};

export default Profile;
