import React from "react";
import style from "./Nav.module.scss";
import { GiBookshelf } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Nav = () => {
	const open = useSelector((state) => state.sideBar.value);
	return (
		<nav className={style.navigation}>
			<ul>
				<li>
					<a href="#">
						<span className={style.icon}>
							<GiBookshelf />
						</span>
						{open ? `Предметы` : ``}
					</a>
				</li>
				<li>
					<a href="#">
						<span className={style.icon}>
							<FaPeopleGroup />
						</span>
						{open ? `О нас` : ``}
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
