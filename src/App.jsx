import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

import Wellcome from "./components/Welcome";
import Questions from "./components/Questions";
import GameOver from "./components/GameOver";

import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  // embaralhar as perguntas
  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Wellcome />}
      {quizState.gameStage === "Playing" && <Questions />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
