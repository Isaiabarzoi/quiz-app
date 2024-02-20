import QUESTION from "../questions";
import TimerQuestion from "./TimerQuestion";

export default function Question({ index, onHandleAnswer }) {
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
          return (
            <li key={answer} className="answer">
              <button onClick={() => onHandleAnswer(answer)}>{answer}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
