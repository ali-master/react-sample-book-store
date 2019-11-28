import * as React from "react";
import Button from "../../../../components/Button";

const numbers = {
	1: "یک",
	2: "دو",
	3: "سه",
	4: "چهار",
	5: "پنج",
};

const answers = {
	1: {
		text: "من ربات نیستم",
		isRight: true,
	},
	2: {
		text: "من ربات هستم",
		isRight: false,
	},
};

const questionTypes = ["صحیح", "غلط"];

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function useRobot() {
	const min = 1;
	const max = 5;
	const numberOfAcceptableQuestions = React.useMemo(() => getRandomNumber(min, max), []);
	const randomQuestionTypeNumber = React.useMemo(() => (Math.random() >= questionTypes.length / 10 ? 2 : 1), []);
	const questionType = React.useMemo(() => questionTypes[randomQuestionTypeNumber === 2 ? 1 : 0], [
		randomQuestionTypeNumber,
	]);
	const rightQuestions = React.useMemo(() => {
		const length = getRandomNumber(numberOfAcceptableQuestions, numberOfAcceptableQuestions + 3);

		return new Array(length).fill(length).map((_, index) => answers[randomQuestionTypeNumber]);
	}, [numberOfAcceptableQuestions, randomQuestionTypeNumber]);
	const falseQuestions = React.useMemo(() => {
		const length = getRandomNumber(numberOfAcceptableQuestions + 2, numberOfAcceptableQuestions + 5);

		return new Array(length).fill(length).map((_, index) => answers[randomQuestionTypeNumber === 1 ? 2 : 1]);
	}, [numberOfAcceptableQuestions, randomQuestionTypeNumber]);
	const mergeQuestions = React.useMemo(() => shuffle([...rightQuestions, ...falseQuestions]), [
		falseQuestions,
		rightQuestions,
	]);

	function validate(selectedQuestions, type, len) {
		return selectedQuestions.length === len && selectedQuestions.every(val => val === type);
	}

	return {
		numberOfAcceptableQuestions,
		randomQuestionTypeNumber,
		questionType,
		rightQuestions,
		falseQuestions,
		mergeQuestions,
		validate,
	};
}

function ImNotARobot() {
	const robot = useRobot();
	const [selectedQuestions, setSelectedQuestion] = React.useState([]);

	function handleQuestionClick(index, isRight) {
		if (selectedQuestions.find(question => question.index === index)) {
			setSelectedQuestion(selectedQuestions.filter(question => question.index !== index));
		} else {
			setSelectedQuestion([...selectedQuestions, { index, isRight }]);
		}
	}

	function handleSubmit(e) {
		e.preventDefault();

		const questions = selectedQuestions.map(({ isRight }) => isRight);
		const type = robot.randomQuestionTypeNumber === 2 ? false : true;

		console.log(robot.validate(questions, type, robot.numberOfAcceptableQuestions));
	}

	return (
		<>
			<h3>{`${numbers[robot.numberOfAcceptableQuestions]} گزینه ${robot.questionType} را انتخاب کنید`}</h3>
			<div className="questions" style={{ direction: "rtl" }}>
				{robot.mergeQuestions.map((question, index) => (
					<div className="question__row" key={index}>
						<input
							style={{ marginLeft: 5 }}
							onChange={() => handleQuestionClick(index, question.isRight)}
							type="checkbox"
							name="checkbox"
							id={`checkbox_${index}`}
							value={question.isRight}
						/>
						<label htmlFor={`checkbox_${index}`}>{question.text}</label>
					</div>
				))}

				<Button onClick={handleSubmit}>Submit & Verify</Button>
			</div>
		</>
	);
}

export default React.memo(ImNotARobot);
