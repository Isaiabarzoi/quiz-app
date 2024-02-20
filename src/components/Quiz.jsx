import { useCallback, useState } from "react";
import QUESTION from "../questions";
import QuizSummary from "./QuizSummary";
import Question from "./Question";

export default function Quiz() {
  const [answers, setAnswers] = useState([]);

  const activeQuestion = answers.length;

  const isCompleted = QUESTION.length === answers.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setAnswers((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
    });
  },
  []);

  if (isCompleted) {
    return <QuizSummary answers={answers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestion}
        index={activeQuestion}
        onHandleAnswer={handleSelectAnswer}
      />
    </div>
  );
}
