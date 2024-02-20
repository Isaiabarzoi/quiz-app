import { useState } from "react";
import QUESTION from "../questions";
import TimerQuestion from "./TimerQuestion";
import Answer from "./Answer";

export default function Question({ index, onHandleAnswer }) {
  const [chooseAnswer, setChooseAnswer] = useState({
    answerSelected: "",
    isCorrect: null,
  });

  const handleSelectAnswer = (answer) => {
    setChooseAnswer({
      answerSelected: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setChooseAnswer({
        answerSelected: answer,
        isCorrect: QUESTION[index].answers[0] === answer,
      });
      setTimeout(() => {
        onHandleAnswer(answer);
      }, 2000);
    }, 1000);
  };

  let answerCorrect = "";

  if (chooseAnswer.answerSelected && chooseAnswer.isCorrect !== null) {
    answerCorrect = chooseAnswer.isCorrect ? "correct" : "wrong";
  }

  return (
    <div id="question">
      <TimerQuestion
        key={index}
        timeout={10000}
        onTimeout={() => onHandleAnswer(null)}
      />
      <h2>{QUESTION[index].text}</h2>
      <Answer
        onSelectedAnswer={handleSelectAnswer}
        stateAnswer={answerCorrect}
        selectedAnswer={chooseAnswer}
        answers={QUESTION[index].answers}
      />
    </div>
  );
}
