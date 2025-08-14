import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Quiz from "../img/quiz.svg";

import "./welcome.css";

const Wellcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <img src={Quiz} alt="Início do quiz" />
    </div>
  );
};

export default Wellcome;
