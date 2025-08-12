import Quiz from "../img/quiz.svg";

import "./welcome.css";

const Wellcome = () => {
  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <button>Iniciar</button>
      <img src={Quiz} alt="Início do quiz" />
    </div>
  );
};

export default Wellcome;
