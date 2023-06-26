import { useContext, useEffect, useState } from "react";
import { ActivityType } from "../constants";
import { log } from "console";
import { ProcessContext } from "../contexts/ProcessContext";

// PROVIDE APPOPRIATE DATA DEPENDING ON THE ACTIVITY CHOSEN BY THE USER
const useFetchChosenActivity = (
  activities: any,
  activityId: any,
  counterRound: any,
  setIsComponentVisible: any
) => {
  const [currentActivity, setCurrentActivity] = useState([]);
  const [currentQuestions, setCurrentQuestions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isActivityOne, setIsActivityOne] = useState(true);
  const [roundTitle, setRoundTitle] = useState("");
  const { currentActivityNameP } = useContext(ProcessContext);
  const { currentActivityName, setCurrentActivityName } = currentActivityNameP;

  useEffect(() => {
    const chosenActivity = activities.find((activity: any) => {
      return activity.order == activityId;
    });

    setCurrentActivity(chosenActivity);
    setCurrentQuestions(chosenActivity.questions);
    setIsLoading(false);

    if (activityId == ActivityType.ACTIVITY_TWO) {
      setCurrentActivityName(ActivityType.ACTIVIT_TWO_WORDED);
      setIsComponentVisible(true);
      setTimeout(() => {
        setIsComponentVisible(false);
      }, 4000);
      setIsActivityOne(false);
    }
  }, []);

  return {
    currentQuestions,
    isLoading,
    isActivityOne,
  };
};

export default useFetchChosenActivity;
