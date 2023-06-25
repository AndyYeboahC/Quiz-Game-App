import { useContext } from "react";
import "./Questionnaire.scss";
import { ProcessContext } from "../../contexts/ProcessContext";

export default function Questionnaire(props: any) {
  const { counterRoundP } = useContext(ProcessContext);
  const { counterRound, setCounterRound } = counterRoundP;

  return (
    <>
      <div className="splash">
        <div className="splash_logo">Round{counterRound}</div>
        <div className="splash_svg">
          <svg width="100%" height="100%">
            <rect width="100%" height="100%" />
          </svg>
        </div>
        <div className="splash_minimize">
          <svg width="100%" height="100%">
            <rect width="100%" height="100%" />
          </svg>
        </div>
      </div>
      <div className="text">
        {/* <p>Duis quis</p>
        <p>nec sapien</p>
        <button>More</button> */}
      </div>
    </>
  );
}
