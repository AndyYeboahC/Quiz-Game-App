import { Dispatch, SetStateAction } from "react";

export interface CounterQuestionInterace {
  counterQuestion: number;
  setCounterQuestion: Dispatch<SetStateAction<number>>;
}

export interface CounterRoundInterace {
  counterRound: number;
  setCounterRound: Dispatch<SetStateAction<number>>;
}

export interface IsComponentVisibleInterace {
  isComponentVisible: boolean;
  setIsComponentVisible: Dispatch<SetStateAction<boolean>>;
}

export type ProcessInterface = {
  counterQuestionP: CounterQuestionInterace;
  counterRoundP: CounterRoundInterace;
  isComponentVisibleP: IsComponentVisibleInterace;
};

export interface Activity {
  activity_name: String;
  order: number;
  questions: [];
}
