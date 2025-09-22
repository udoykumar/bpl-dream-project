import React from "react";

const SelectedCard = ({ select, removePlayer }) => {
  const handleRemove = () => {
    removePlayer(select);
  };
  return (
    <div>
      <div className="flex justify-between p-3">
        <div className="flex gap-7">
          <img
            src={select.image}
            alt=""
            className="rounded-lg w-15  bg-cover "
          />
          <div className="space-y-1">
            <p>{select.name}</p>
            <p>{select.batting_style}</p>
          </div>
        </div>
        <div onClick={() => handleRemove()}>
          <i className="fa-solid fa-trash cursor-pointer text-xl text-red-600"></i>
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;
