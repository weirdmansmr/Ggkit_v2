import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import Route from "./Routes/Route.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<Route />
	</Provider>,
);
