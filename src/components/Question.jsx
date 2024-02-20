import { useState } from "react";
import QUESTION from "../questions";
import TimerQuestion from "./TimerQuestion";

export default function Question({ index, onHandleAnswer }) {
  const [answerState, setAnswerState] = useState({
    answerSelected: "",
    isCorrect: null,
  });

  const handleSelectAnswer = (answer) => {
    setAnswerState({
      answerSelected: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswerState({
        answerSelected: answer,
        isCorrect: QUESTION[index].answers[0] === answer,
      });
      setTimeout(() => {
        onHandleAnswer(answer);
      }, 2000);
    }, 1000);
  };

  let answerCorrect = "";

  if (answerState.answerSelected && answerState.isCorrect !== null) {
    answerCorrect = answerState.isCorrect ? "correct" : "wrong";
  } else if (answerState.answerSelected) {
    answerCorrect = "selected";
  }

  return (
    <div id="question">
      <TimerQuestion
        key={index}
        timeout={10000}
        onTimeout={() => onHandleAnswer(null)}
      />
      <h2>{QUESTION[index].text}</h2>
      <ul id="answers">
        {QUESTION[index].answers.map((answer) => {
          const isSelected = answerState.answerSelected === answer;
          let cssClass = "";

          if (answerCorrect === "selected" && isSelected) {
            cssClass = answerCorrect;
          }

          if (answerCorrect === "correct" && isSelected) {
            cssClass = answerCorrect;
          } else if (answerCorrect === "wrong" && isSelected) {
            cssClass = answerCorrect;
          }

          return (
            <li key={answer} className="answer">
              <button
                onClick={() => handleSelectAnswer(answer)}
                className={cssClass}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
