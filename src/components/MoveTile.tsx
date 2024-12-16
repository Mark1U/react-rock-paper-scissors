import paper from "../assets/paper.webp";
import scissor from "../assets/scissor.webp";
import rock from "../assets/rock.webp";
interface Props {
  hand: "rock" | "paper" | "scissor";
  handAi: number | undefined;
  active: boolean;
  onSelectHand: (hand: "rock" | "paper" | "scissor") => void;
  onSelectHandChanged: (isChanged: boolean) => void;
}
const MoveTile = ({
  hand,
  handAi,
  active,
  onSelectHand,
  onSelectHandChanged,
}: Props) => {
  return (
    <>
      <div className="HandDiv">
        <button
          onClick={() => {
            onSelectHand(hand);
            onSelectHandChanged(true);
            console.log(hand + " selected!");
          }}
          className="HandBtn"
        >
          <img
            className={active ? "active" : ""}
            src={hand == "paper" ? paper : hand == "rock" ? rock : scissor}
            alt={hand}
          />
        </button>
        <p>{hand}</p>
        <div>
          {(handAi == 0 && hand == "rock" && "(Ai)") ||
            (handAi == 1 && hand == "paper" && "(Ai)") ||
            (handAi == 2 && hand == "scissor" && "(Ai)")}
        </div>
      </div>
    </>
  );
};

export default MoveTile;
