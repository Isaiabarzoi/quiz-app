import QUESTION from "../questions";

export default function AnswerRecap({ answers }) {
  return (
    <ol>
      {answers.map((answer, index) => {
        let cssClass = "user-answer";

        if (answer === null) {
          cssClass += " skipped";
        } else if (answer === QUESTION[index].answers[0]) {
          cssClass += " correct";
        } else {
          cssClass += " wrong";
        }

        return (
          <li key={index}>
            <h3>{index + 1}</h3>
            <p>{QUESTION[index].text}</p>
            <p className={cssClass}>{answer ? answer : "Skipped"}</p>
          </li>
        );
      })}
    </ol>
  );
}
