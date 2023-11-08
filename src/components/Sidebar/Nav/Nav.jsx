import React from "react";
import style from "./Nav.module.scss";
import { GiBookshelf } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Nav = () => {
	const open = useSelector((state) => state.sideBar.value);
	return (
		<nav className={style.navigation}>
			<ul>
				<li>
					<Link to="/subjects">
						<span className={style.icon}>
							<GiBookshelf />
						</span>
						{open ? `Предметы` : ``}
					</Link>
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
