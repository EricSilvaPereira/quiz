import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Quiz from "../img/quiz.svg";

import "./welcome.css";

const Wellcome = () => {
  const quizState = useContext(QuizContext);
  console.log(quizState);

  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <button>Iniciar</button>
      <img src={Quiz} alt="Início do quiz" />
    </div>
  );
};

export default Wellcome;
