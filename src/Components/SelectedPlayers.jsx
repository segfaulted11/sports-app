
import {  Trash, Trash2 } from "lucide-react";

function SelectedPlayers({ choosedPlayer }) {
  return (
    <div>
      <h1 className="font-bold text-3xl text-center">
        Selected Players
      </h1>

      {choosedPlayer.map((player, index) => (
        <div className="bg-red-400 my-2" key={index}>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <img
                src={player.image}
                className="h-10 w-10"
                alt=""
              />
              <p className="font-bold">{player.playerName}</p>
            </div>

            <div>
              <Trash2 />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SelectedPlayers;
