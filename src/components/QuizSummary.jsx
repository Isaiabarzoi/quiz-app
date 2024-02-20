import quizComplete from "../assets/quiz-complete.png";
import QUESTION from "../questions";
import AnswerRecap from "./AnswerRecap";

export default function QuizSummary({ answers }) {
  const correctAnswer = answers.filter(
    (answer, index) => QUESTION[index].answers[0] === answer
  );
  const wrongAnswer = answers.filter(
    (answer, index) => answer !== QUESTION[index].answers[0] && answer !== null
  );
  const skippedAnswer = answers.filter((answer) => answer === null);

  const correctAnswerPercentage = Math.round(
    (correctAnswer.length / answers.length) * 100
  );
  const wrongAnswerPercentage = Math.round(
    (wrongAnswer.length / answers.length) * 100
  );
  const skippedAnswerPercentage = Math.round(
    (skippedAnswer.length / answers.length) * 100
  );

  return (
    <div id="summary">
      <img src={quizComplete} alt="Quiz complete" />
      <h2>Quiz completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswerPercentage}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswerPercentage}%</span>
          <span className="text">Answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswerPercentage}%</span>
          <span className="text">Answered incorrectly</span>
        </p>
      </div>
      <AnswerRecap answers={answers} />
    </div>
  );
}
