import React, { useState } from "react";
import style from './Quiz.module.scss'

const Quiz = () => {
	const [questions, setQuestions] = useState([
		{ id: 1, question: "Вопрос 1", userAnswer: null },
		{ id: 2, question: "Вопрос 2", userAnswer: null },
		// Добавьте другие вопросы
	]);

	const [userResponses, setUserResponses] = useState([]);

	const handleAnswerSelect = (questionId, selectedAnswer) => {
		setQuestions((prevQuestions) =>
			prevQuestions.map((question) =>
				question.id === questionId
					? { ...question, userAnswer: selectedAnswer }
					: question,
			),
		);
	};
	

	const submitQuiz = () => {
		const userAnswers = questions.map((q) => q.userAnswer);
		setUserResponses(userAnswers.filter(Boolean)); // Фильтруем null-значения
	};

	return (
		<main className={style.listContainer}>
			{questions.map((question) => (
				<div key={question.id}>
					<p>{question.question}</p>
					<label>
						<input
							type="text"
							placeholder="Введите ваш ответ"
							value={question.userAnswer || ""}
							onChange={(e) => handleAnswerSelect(question.id, e.target.value)}
						/>
					</label>
				</div>
			))}
			<button onClick={submitQuiz}>Завершить тест</button>
			{userResponses.length > 0 && (
				<div>
					<p>Ответы пользователя:</p>
					<ul>
						{userResponses.map((response, index) => (
							<li key={index}>{response}</li>
						))}
					</ul>
				</div>
			)}
		</main>
	);
};

export default Quiz;
