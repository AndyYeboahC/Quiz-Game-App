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

export interface CurrentActivityNameInterface {
  currentActivityName: string;
  setCurrentActivityName: Dispatch<SetStateAction<string>>;
}

export type ProcessInterface = {
  counterQuestionP: CounterQuestionInterace;
  counterRoundP: CounterRoundInterace;
  isComponentVisibleP: IsComponentVisibleInterace;
  currentActivityNameP: CurrentActivityNameInterface;
};

export interface Activity {
  activity_name: String;
  order: number;
  questions: [];
}
