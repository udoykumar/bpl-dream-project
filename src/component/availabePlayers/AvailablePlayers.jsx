import React, { use } from "react";
import PlayerCard from "../PlayerCart/PlayerCard";

const AvailablePlayers = ({
  fetchPromise,
  setAvailableBalance,
  availableBalance,
  purchasedPlayer,
  setPurchasedPlayers,
}) => {
  const playerData = use(fetchPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto">
      {playerData.map((player) => (
        // const {Image, rating, price, name} = player
        <PlayerCard
          key={player.id}
          setAvailableBalance={setAvailableBalance}
          availableBalance={availableBalance}
          purchasedPlayer={purchasedPlayer}
          setPurchasedPlayers={setPurchasedPlayers}
          player={player}
        />
      ))}
    </div>
  );
};

export default AvailablePlayers;
