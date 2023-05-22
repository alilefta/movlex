import React from "react";
import "../assets/styles/Help.styles.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
// const questions = [
// 	{
// 		id: 1,
// 		question: "What is Lorem Ipsum?",
// 		answer:
// 			"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
// 	},
// 	{
// 		id: 2,
// 		question: "Why do we use it?",
// 		answer:
// 			"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
// 	},
// 	// Add more questions here
// ];

const generateQuestions = () => {
	const questions = [];
	for (let i = 1; i <= 10; i++) {
		questions.push({
			id: i,
			question: `Question ${i}`,
			answer: `Answer ${i}`,
		});
	}
	return questions;
};

const FAQ = () => {
	const questions = generateQuestions();

	return (
		<>
			<Nav
				show={
					useSelector((state) => state.auth.isAuthenticated)
						? "authenticated"
						: "not-authenticated"
				}
			/>
			<div className="faq-container">
				<h1>Frequently Asked Questions</h1>
				{questions.map((q) => (
					<div key={q.id} className="faq-question">
						<h3 className="faq-question-title">{q.question}</h3>
						<p className="faq-question-answer">{q.answer}</p>
					</div>
				))}
			</div>
			<Footer />
		</>
	);
};

export default FAQ;
