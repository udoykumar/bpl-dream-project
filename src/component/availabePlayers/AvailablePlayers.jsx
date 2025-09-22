import React, { use } from "react";

const AvailablePlayers = ({ fetchPromise }) => {
  const playerData = use(fetchPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto">
      {playerData.map((player) => (
        // const {Image, rating, price, name} = player
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
              <button className="btn">Choose-player</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;

// batting_style: "Left-hand bat";
// country: "Bangladesh";
// id: 1;
// image: "https://i.ibb.co.com/bRQTSdCc/sakib.jpg";
// name: "Shakib Al Hasan";
// price: 120000;
// rating: 95;
// role: "All-rounder";
