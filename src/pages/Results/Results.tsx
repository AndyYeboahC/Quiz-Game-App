import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useContext,
  useState,
} from "react";
import "./Results.scss";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ProcessContext } from "../../contexts/ProcessContext";
import { ActivityType, NUMBER } from "../../constants";

export default function Results(props: any) {
  const rows: any[] = [];
  const navigate = useNavigate();
  const { counterQuestionP, counterRoundP, currentActivityNameP } =
    useContext(ProcessContext);
  const { counterQuestion, setCounterQuestion } = counterQuestionP;
  const { counterRound, setCounterRound } = counterRoundP;
  const { currentActivityName, setCurrentActivityName } = currentActivityNameP;

  // ITERATE THROUGH ALL THE ROUNDS AND QUESTION AND PROVIDE THE LIST TEMPLATE
  for (let i = 1; i <= localStorage.length; i++) {
    const answer = JSON.parse(localStorage.getItem("round" + i)!);

    rows.push(<h1>ROUND {i}</h1>);

    answer.map((question: any) =>
      rows.push(
        <div className="container-holder" key={question.id}>
          <hr />
          <div className="container-holder-item">
            <p>Question #{question.question_number}</p>
            <h6>{question.correct}</h6>
          </div>
          <hr />
        </div>
      )
    );
  }

  // REDIRECT TO HOME PAGE AND GAME RESET
  const navigateHome = () => {
    localStorage.clear();
    setCounterQuestion(NUMBER.RESET);
    setCounterRound(NUMBER.START);
    navigate("/home");
  };

  return (
    <div className="container">
      <h3>{currentActivityName}</h3>
      <h4>RESULTS</h4>

      <hr className="divider" />
      {rows}
      <Button onClick={navigateHome}>HOME</Button>
    </div>
  );
}
