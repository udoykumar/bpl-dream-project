import React from "react";
import SelectedCard from "../selectedCard/SelectedCard";

const Selected = ({ purchasedPlayer, removePlayer }) => {
  return (
    <div className="max-w-[1200px] mx-auto w-1/2 mt-10">
      {purchasedPlayer.map((select) => (
        <SelectedCard removePlayer={removePlayer} select={select} />
      ))}
    </div>
  );
};

export default Selected;
