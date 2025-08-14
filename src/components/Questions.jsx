import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import React from "react";
const Questions = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState);

  return (
    <div>
      <h1>question</h1>
    </div>
  );
};

export default Questions;
