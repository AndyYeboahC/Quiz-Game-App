import { log } from "console";
import { useNavigate } from "react-router-dom";
import validate from "../../pages/service/validate";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { ProcessContext } from "../../contexts/ProcessContext";

export default function Card(props: any) {
  const navigate = useNavigate();
  const {
    counterQuestionP,
    counterRoundP,
    isComponentVisibleP,
    currentActivityNameP,
  } = useContext(ProcessContext);
  const { counterQuestion, setCounterQuestion } = counterQuestionP;
  const { counterRound, setCounterRound } = counterRoundP;
  const { isComponentVisible, setIsComponentVisible } = isComponentVisibleP;
  const { currentActivityName, setCurrentActivityName } = currentActivityNameP;

  const next = (answer: boolean) => {
    const questionNumber = counterQuestion! + 1;
    const roundNumber = counterRound + 1;
    const question = props.questionData;

    validate(answer, question, counterRound, counterQuestion);

    if (props.displayLength == questionNumber) {
      navigate("/quiz/2");
      setCounterQuestion!(0);
      setCounterRound(roundNumber);
      setIsComponentVisible(true);
      setTimeout(() => {
        setIsComponentVisible(false);
      }, 4000);
    } else {
      setCounterQuestion!(questionNumber);
    }
  };

  return (
    <div className="main">
      <h6>
        {currentActivityName} / ROUND{counterRound}
      </h6>
      <p className="description">{props.question}</p>

      <hr />
      <div className="creator">
        <Button variant="light" onClick={() => next(true)}>
          CORRECT
        </Button>

        <Button variant="light" onClick={() => next(false)}>
          INCORRECT
        </Button>
      </div>
    </div>
  );
}
