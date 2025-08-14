import { useContext } from "react";
import { QuizContext } from "./context/quiz";

import Wellcome from "./components/Welcome";
import Questions from "./components/Questions";

import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Wellcome />}
      {quizState.gameStage === "Playing" && <Questions />}
    </div>
  );
}

export default App;
