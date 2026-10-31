import { use } from "react";
import AvailablePlayers from "./AvailablePlayers";

function Players({ playersPromise }) {
  const playerData = use(playersPromise);
//   console.log(playerData);
  return (
    <div>
      <h1>Available Players</h1>
      <div className="grid grid-cols-3 gap-2">
      {
        playerData.map((player,index)=><AvailablePlayers player={player} key={index}/>)
      }
      </div>
    </div>
  );
}

export default Players;
