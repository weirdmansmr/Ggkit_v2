import React, { useState } from "react";
import axios from "axios";
import style from "./Login.module.scss";
const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);

	const handleLogin = async () => {
		try {
			const response = await axios.post(
				"https://655265d95c69a7790329fd29.mockapi.io/Lesson",
				{ username, password },
			);

			if (
				response.data.username == username &&
				response.data.password == password
			) {
				console.log(username);
				console.log(password);
			}

			setLoggedIn(true);
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<main>
			<div className={style.cont}>
				{loggedIn ? (
					<h1>Добро пожаловать, {username}!</h1>
				) : (
					<div className={style.flexCont}>
						<h1>Авторизация</h1>
						<label>
							Логин:
							<input
								type="text"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</label>
						<label>
							Пароль:
							<input
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</label>
						<button onClick={handleLogin}>Войти</button>
					</div>
				)}
			</div>
		</main>
	);
};

export default Login;
