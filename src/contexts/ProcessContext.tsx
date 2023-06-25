import { ReactNode, createContext, useState } from "react";
import { ProcessInterface } from "../models/index";

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
} as ProcessInterface;

export const ProcessContext = createContext(defaultProcess);

type ProcessProvideProps = {
  children: ReactNode;
};

export default function ProcessProvider({ children }: ProcessProvideProps) {
  const [counterQuestion, setCounterQuestion] = useState(0);
  const [counterRound, setCounterRound] = useState(1);
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  return (
    <ProcessContext.Provider
      value={{
        counterQuestionP: { counterQuestion, setCounterQuestion },
        counterRoundP: { counterRound, setCounterRound },
        isComponentVisibleP: { isComponentVisible, setIsComponentVisible },
      }}
    >
      {children}
    </ProcessContext.Provider>
  );
}
