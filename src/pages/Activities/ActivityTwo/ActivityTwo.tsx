import { useContext, useEffect, useState } from "react";
import Card from "../../../components/card/card";
import Results from "../../Results/Results";
import Questionnaire from "../../Questionnaire/Questionnaire";
import { ProcessContext } from "../../../contexts/ProcessContext";
import Loader from "../../../components/loader/loader";
import { MESSAGE } from "../../../constants";

export default function ActivityTwo(props: any) {
  const currentQuestions = props.currentQuestions;
  const { counterQuestionP, counterRoundP, isComponentVisibleP } =
    useContext(ProcessContext);
  const { counterQuestion, setCounterQuestion } = counterQuestionP;
  const { counterRound, setCounterRound } = counterRoundP;
  const { isComponentVisible, setIsComponentVisible } = isComponentVisibleP;
  const [displayQuestions, setDisplayQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (currentQuestions.length >= counterRound) {
      const round = currentQuestions.find((round: any) => {
        return round.order == counterRound;
      });
      setDisplayQuestions(round.questions);
    }
    setIsLoading(false);
  });

  if (isLoading) {
    return <Loader message={MESSAGE.LOADING} />;
  }

  return (
    <>
      {currentQuestions.length >= counterRound ? (
        <div>
          <div className="bg">
            <h1>ERROR FIND</h1>
          </div>
          {isComponentVisible ? (
            <Questionnaire />
          ) : (
            <div className="vessel">
              {displayQuestions.length <= counterQuestion ? (
                <Results round={counterRound} />
              ) : (
                <Card
                  question={displayQuestions[counterQuestion]["stimulus"]}
                  questionData={displayQuestions[counterQuestion]}
                  displayLength={displayQuestions.length}
                />
              )}
            </div>
          )}
        </div>
      ) : (
        <Results counterRound={counterRound} />
      )}
    </>
  );
}
