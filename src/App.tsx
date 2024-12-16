import { useEffect, useState } from "react";
import "./App.css";
import MoveTile from "./components/MoveTile";

function App() {
  const [hand, setHand] = useState<"rock" | "paper" | "scissor">();
  const [handChanged, setHandChanged] = useState<boolean>(false);
  const [handAi, setHandAi] = useState<number>();
  const [round, setRound] = useState<number>(0);
  const [userScore, setUserScore] = useState<number>(0);
  const [aiScore, setAiScore] = useState<number>(0);
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    if (handChanged) {
      setHandChanged(false);
      setRound((value) => value + 1);
      const pcHand = Math.floor(Math.random() * 3);
      console.log(pcHand + " selected by AI");
      const userHand = hand === "rock" ? 0 : hand === "paper" ? 1 : 2;
      setHandAi(pcHand);

      if (userHand == (pcHand + 1) % 3) {
        setUserScore((value) => value + 1);
        setMsg("You Won!");
      } else if (pcHand == (userHand + 1) % 3) {
        setAiScore((value) => value + 1);
        setMsg("Ai Won!");
      } else {
        setMsg("Draw!");
      }
    }
  }, [hand, handChanged]);

  return (
    <>
      <h1>Rock, Paper, Scissors Game</h1>
      <p className="gameScore">
        🙍‍♂️ {userScore} : {aiScore} 🖥️
      </p>
      <h2>Runde: {round}</h2>
      <h3>{msg}</h3>
      <div className="handSel">
        <MoveTile
          hand="rock"
          active={hand == "rock"}
          handAi={handAi}
          onSelectHand={setHand}
          onSelectHandChanged={setHandChanged}
        />
        <MoveTile
          hand="paper"
          active={hand == "paper"}
          handAi={handAi}
          onSelectHand={setHand}
          onSelectHandChanged={setHandChanged}
        />
        <MoveTile
          hand="scissor"
          active={hand == "scissor"}
          handAi={handAi}
          onSelectHand={setHand}
          onSelectHandChanged={setHandChanged}
        />
      </div>
    </>
  );
}

export default App;
