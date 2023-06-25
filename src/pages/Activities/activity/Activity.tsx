import { useContext, useState } from "react";
import "./Activity.scss";
import Card from "../../../components/card/card";
import { useParams } from "react-router-dom";
import { ActivityType, MESSAGE } from "../../../constants";
import useFetchActivity from "../../../hooks/useFetchActivity";
import ActivityTwo from "../ActivityTwo/ActivityTwo";
import Results from "../../Results/Results";
import { ProcessContext } from "../../../contexts/ProcessContext";
import Loader from "../../../components/loader/loader";

export default function Activity(props: any) {
  const params = useParams();
  // const [activityId, setActivityId] = useState("");

  const activityId = params.activityId;
  const activities = props.data.activities;
  const { counterQuestionP, counterRoundP, isComponentVisibleP } =
    useContext(ProcessContext);
  const { counterQuestion, setCounterQuestion } = counterQuestionP;
  const { counterRound, setCounterRound } = counterRoundP;
  const { isComponentVisible, setIsComponentVisible } = isComponentVisibleP;

  const { currentActivityName, currentQuestions, isLoading, isActivityOne } =
    useFetchActivity(
      activities,
      activityId,
      counterRound,
      setIsComponentVisible
    );

  // if((params.activityId != ActivityType.ACTIVITY_ONE) || (params.activityId != ActivityType.ACTIVITY_TWO) ){

  // }

  if (isLoading) {
    return <Loader message={MESSAGE.LOADING} />;
  }
  return (
    <body>
      <div>
        {isActivityOne ? (
          <div className="center">
            <div className="bg">
              <h1>ERROR FIND</h1>
            </div>

            {currentQuestions.length <= counterQuestion ? (
              <Results />
            ) : (
              <div className="vessel">
                <Card
                  activityName={currentActivityName}
                  question={currentQuestions[counterQuestion].stimulus}
                  questionData={currentQuestions[counterQuestion]}
                />
              </div>
            )}
          </div>
        ) : (
          <ActivityTwo
            currentQuestions={currentQuestions}
            setCounterQuestion={setCounterQuestion}
          />
        )}
      </div>
    </body>
  );
}
