import React, { useState } from "react";
import { toast } from "react-toastify";

const PlayerCard = ({
  player,
  setAvailableBalance,
  availableBalance,
  purchasedPlayer,
  setPurchasedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelected = (playerData) => {
    const playerPrice = playerData.price;
    if (availableBalance < playerPrice) {
      toast("Not enough coins!!");
      return;
    }
    if (purchasedPlayer.length === 6) {
      toast("6 player already seleted");
      return;
    }
    const playerFilter = purchasedPlayer.find(
      (player) => player.id === playerData.id
    );
    // console.log(playerFilter, purchasedPlayer, playerData);
    if (!playerFilter) {
      setIsSelected(true);
      setAvailableBalance(availableBalance - playerData.price);

      setPurchasedPlayers([...purchasedPlayer, playerData]);
      toast("player purchase");
    } else {
      toast("Player already existed");
    }
  };
  return (
    <div>
      <div key={player.id} className="p-4">
        <div>
          <img className="w-full rounded-2xl" src={player.image} alt="" />
        </div>
        <h2 className="font-bold text-lg mt-1.5">
          <i className="fa-solid fa-user"></i> {player.name}
        </h2>
        <div className="flex justify-between border-b py-2">
          <p>
            <span>
              <i className="fa-solid fa-flag"></i>
            </span>
            {player.country}
          </p>
          <p className=" btn">{player.role}</p>
        </div>
        <div className="space-y-1.5">
          <h2 className="font-bold text-lg">rating</h2>
          <div className="flex justify-between">
            <p className="font-bold">Bat Style</p>
            <p>{player.batting_style}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold">
              Price: $ <span>{player.price}</span>
            </p>
            <button
              disabled={isSelected}
              onClick={() => handleSelected(player)}
              className="btn"
            >
              {isSelected ? "Seleted" : "Choose-player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
