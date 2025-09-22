import React, { Suspense } from "react";
import Header from "./component/header/Header";
import AvailablePlayers from "./component/availabePlayers/AvailablePlayers";
import Selected from "./component/selectedPlayers/Selected";

const fetchPlayers = async () => {
  const res = await fetch("/player-data.json");
  return res.json();
};

const App = () => {
  const fetchPromise = fetchPlayers();
  return (
    <div className="">
      <Header />
      <div className="flex justify-between mt-5 max-w-[1200px] mx-auto">
        <h1>Available Player</h1>
        <div className="space-x-3 ">
          <button className="btn m">Available</button>
          <button className="btn m">
            selected <span>(0)</span>
          </button>
        </div>
      </div>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <AvailablePlayers fetchPromise={fetchPromise} />
      </Suspense>
      {/* <Selected /> */}
    </div>
  );
};

export default App;
