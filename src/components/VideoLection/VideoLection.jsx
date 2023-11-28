import React from "react";
import Markdown from "markdown-to-jsx";
import style from "./VideoLection.module.scss";

const VideoLection = () => {
	return (
		<main className={style.markCont}>
			<iframe
				src="https://www.youtube.com/embed/U6s9XgD_U2U?si=TQ9j1lriC2dektPk"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			></iframe>
		</main>
	);
};

export default VideoLection;
