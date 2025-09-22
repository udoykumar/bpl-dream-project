import React, { Suspense, useState } from "react";
import Header from "./component/header/Header";
import AvailablePlayers from "./component/availabePlayers/AvailablePlayers";
import Selected from "./component/selectedPlayers/Selected";
import { ToastContainer } from "react-toastify";

const fetchPlayers = async () => {
  const res = await fetch("/player-data.json");
  return res.json();
};
const fetchPromise = fetchPlayers();

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(3000000);
  const [purchasedPlayer, setPurchasedPlayers] = useState([]);

  const removePlayer = (remove) => {
    // console.log(remove);
    const filterData = purchasedPlayer.filter(
      (player) => player.id !== remove.id
    );
    setPurchasedPlayers(filterData);
    setAvailableBalance(availableBalance + remove.price);
  };
  return (
    <div className="">
      <Header availableBalance={availableBalance} />
      <div className="flex justify-between mt-5 max-w-[1200px] mx-auto">
        <h1 className="text-2xl font-bold">
          {toggle
            ? "Available Player"
            : `Selected Player (${purchasedPlayer.length}/6)`}
        </h1>
        <div className="">
          <button
            onClick={() => setToggle(true)}
            className={`border py-2 px-3 rounded-tl-lg border-r-0 ${
              toggle ? "bg-[#E7FE29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`border rounded-br-lg py-2 px-3  border-l-0 ${
              toggle ? "" : "bg-[#E7FE29]"
            }`}
          >
            selected <span>({purchasedPlayer.length})</span>
          </button>
        </div>
      </div>
      {toggle ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvailablePlayers
            fetchPromise={fetchPromise}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            purchasedPlayer={purchasedPlayer}
            setPurchasedPlayers={setPurchasedPlayers}
          />
        </Suspense>
      ) : (
        <Selected
          removePlayer={removePlayer}
          purchasedPlayer={purchasedPlayer}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default App;
