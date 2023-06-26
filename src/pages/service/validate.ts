import { log } from "console";
import { useState } from "react";
import { AnswerType } from "../../constants";

// VALIDATE IF THE USER'S INPUT/ANSWER IS RIGHT OR WRONG
const validate = (
  userAnswer: boolean,
  data: any,
  counterRound: number,
  counterQuestion: number
) => {
  const id = `${counterRound}${counterQuestion}`;

  if (userAnswer == data.is_correct) {
    save(id, counterRound, data.order, AnswerType.CORRECT, userAnswer);
  } else {
    save(id, counterRound, data.order, AnswerType.INCORRECT, userAnswer);
  }
};

const save = (
  id: string,
  round: number,
  number: number,
  correct: string,
  user_answer: boolean
) => {
  const data = [
    {
      id: id,
      round: round,
      question_number: number,
      correct: correct,
      user_answer: user_answer,
    },
  ];

  const stringData = JSON.stringify(data);

  const array = window.localStorage.getItem("round" + round);
  const parsedArray = array ? JSON.parse(array) : [];

  update(parsedArray, data, id, round);
};

// UPDATE AND CHECK IF THE SPECIFIC QUESTION WAS ALREADY ANSWERED
// IF THE USER RELOADS THE APP (HALFWAY THROUGH ANSWERING QUESTIONS), THIS FUNCTION WILL CHECK IF THE USER ALREADY ANSWERED A QUESTION PRIOR TO RELOADING THE APP.
// **THIS IS TO AVOID DATA DUPLICATE**
const update = (parsedArray: any, data: any, id: string, round: number) => {
  const existingItem = parsedArray.find((item: any) => item.id === id);
  if (existingItem === undefined) {
    const newArray = [...parsedArray, ...data];
    window.localStorage.setItem("round" + round, JSON.stringify(newArray));
  } else {
    const filteredArray = parsedArray.filter((array: any) => array.id !== id);

    const newArray = [...filteredArray, ...data];
    window.localStorage.setItem("round" + round, JSON.stringify(newArray));
  }
};

export default validate;
