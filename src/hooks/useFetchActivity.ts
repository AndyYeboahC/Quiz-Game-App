import { useEffect, useState } from "react";
import { ActivityType } from "../constants";
import { log } from "console";

const useFetchChosenActivity = (
  activities: any,
  activityId: any,
  counterRound: any,
  setIsComponentVisible: any
) => {
  const [currentActivity, setCurrentActivity] = useState([]);
  const [currentActivityName, setCurrentActivityName] = useState("");
  const [currentQuestions, setCurrentQuestions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [isComponentVisible, setIsComponentVisible] = useState(true);
  const [isActivityOne, setIsActivityOne] = useState(true);
  const [roundTitle, setRoundTitle] = useState("");

  useEffect(() => {
    // switch (activityId) {
    //   case ActivityType.ACTIVITY_ONE:
    //     setActivityId(activityId);
    //     break;
    //   case ActivityType.ACTIVITY_TWO:
    //     setActivityId(params.activityId);
    //     break;
    //   default:
    //     return <Loader message={MESSAGE.PAGE_NOT_FOUND} />;
    // }
    const chosenActivity = activities.find((activity: any) => {
      return activity.order == activityId;
    });

    setCurrentActivity(chosenActivity);
    setCurrentActivityName(chosenActivity.activity_name);
    setCurrentQuestions(chosenActivity.questions);
    setIsLoading(false);

    if (activityId == ActivityType.ACTIVITY_TWO) {
      setIsComponentVisible(true);
      setTimeout(() => {
        setIsComponentVisible(false);
      }, 4000);
      setIsActivityOne(false);
    }
  }, []);

  return {
    currentActivityName,
    currentQuestions,
    isLoading,
    isActivityOne,
  };
};

export default useFetchChosenActivity;
