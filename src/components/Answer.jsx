import { useRef } from "react";

export default function Answer({
  onSelectedAnswer,
  stateAnswer,
  selectedAnswer,
  answers,
}) {
  const randomAnswers = useRef();

  if (!randomAnswers.current) {
    randomAnswers.current = [...answers];
    randomAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {randomAnswers.current.map((answer) => {
        const isSelected = selectedAnswer.answerSelected === answer;
        let cssClass = "";

        if (stateAnswer === "correct" && isSelected) {
          cssClass = stateAnswer;
        } else if (stateAnswer === "wrong" && isSelected) {
          cssClass = stateAnswer;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelectedAnswer(answer)}
              className={cssClass}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
