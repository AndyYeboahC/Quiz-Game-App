import { ReactNode, createContext, useState } from "react";
import { ProcessInterface } from "../models/index";
import { ActivityType } from "../constants";

// MAKE THE PROCESS VARIABLES AND FUNCTIONS AVAILABLE TO ALL THE COMPONENTS NEEDED.
// THIS IS TO AVOID/MINIMIZE PROPS DRILLING
const defaultProcess = {
  counterQuestionP: {
    counterQuestion: 0,
    setCounterQuestion: (number: number) => {},
  },
  counterRoundP: { counterRound: 0, setCounterRound: (number: number) => {} },
  isComponentVisibleP: {
    isComponentVisible: false,
    setIsComponentVisible: (boolean: boolean) => {},
  },
  currentActivityNameP: {
    currentActivityName: ActivityType.ACTIVITY_ONE_WORDED,
    setCurrentActivityName: (string: string) => {},
  },
} as ProcessInterface;

export const ProcessContext = createContext(defaultProcess);

type ProcessProvideProps = {
  children: ReactNode;
};

export default function ProcessProvider({ children }: ProcessProvideProps) {
  const [counterQuestion, setCounterQuestion] = useState(0);
  const [counterRound, setCounterRound] = useState(1);
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const [currentActivityName, setCurrentActivityName] =
    useState("ACTIVITY ONE");

  return (
    <ProcessContext.Provider
      value={{
        counterQuestionP: { counterQuestion, setCounterQuestion },
        counterRoundP: { counterRound, setCounterRound },
        isComponentVisibleP: { isComponentVisible, setIsComponentVisible },
        currentActivityNameP: { currentActivityName, setCurrentActivityName },
      }}
    >
      {children}
    </ProcessContext.Provider>
  );
}
