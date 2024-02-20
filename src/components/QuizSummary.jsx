import quizComplete from "../assets/quiz-complete.png";

export default function QuizSummary() {
  return (
    <div id="summary">
      <img src={quizComplete} alt="Quiz complete" />
      <h2>Quiz completed!</h2>
    </div>
  );
}
