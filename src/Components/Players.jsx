import { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

function Players({ playersPromise }) {
  const [selectedType, setselectedType] = useState("available");

  const playerData = use(playersPromise);

  return (
    <div>
      <div className="flex justify-between mb-3">
        <h1 className="text-3xl font-bold">
          {selectedType === "available"
            ? "Available Players"
            : "Selected Players ()"}
        </h1>

        <div>
          <button
            className={`btn ${selectedType === "available" ? "btn-error" : "btn-soft"} mr-2`}
            onClick={() => setselectedType("available")}
          >
            Available
          </button>
          <button
            className={`btn ${selectedType === "selected" ? "btn-error" : "btn-soft"} mr-2`}
            onClick={() => setselectedType("selected")}
          >
            Selected(0)
          </button>
        </div>
      </div>

      {selectedType === "available" ? (
        <div className="grid grid-cols-3 gap-2">
          {playerData.map((player, index) => (
            <AvailablePlayers player={player} key={index} />
          ))}
        </div>
      ) : (
        <SelectedPlayers />
      )}
    </div>
  );
}

export default Players;
