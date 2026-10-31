import { Flag, UserRound } from "lucide-react";

function AvailablePlayers({ player }) {
  const {
    image,
    playerName,
    playerCountry,
    playerType,
    battingStyle,
    ballingStyle,
    price,
  } = player;
  return (
    <div className="bg-red-400 p-5">
      <img src={image} className="w-full h-40" alt="" />

      <div className="flex gap-3 mb-2">
        <UserRound />
        <p className="font-bold">{playerName}</p>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-3">
          <Flag />
          <p className="font-bold">{playerCountry}</p>
        </div>
        <button className="btn btn-soft">{playerType}</button>
      </div>

      <div className="my-4 border border-amber-50"></div>

      <div className="mb-5 flex justify-between">
        <p>{battingStyle}</p>
        <p>{ballingStyle}</p>
      </div>

      <div className="flex justify-between">
        <p>Price : ${price}</p>
        <button className="btn btn-soft">Choose Player</button>
      </div>
    </div>
  );
}

export default AvailablePlayers;
