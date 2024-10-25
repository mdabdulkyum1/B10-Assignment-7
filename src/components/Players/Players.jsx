import { useEffect, useState } from "react";
import Player from "./../Player/Player";
import PlayerSelected from "./../PlayerSelected/PlayerSelected";

function Players() {
  // set all players data
  const [players, setPlayers] = useState([]);
  const [isToggle, setIsToggle] = useState({
    available: true,
    status: "available",
  });

  // fetch data
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  //  Toggling Feature
  const handelToggle = (value) => {
    if (value === "available") {
      setIsToggle({ [value]: true, status: value });
    } else {
      setIsToggle({ [value]: false, status: value });
    }
  };

  return (
    <div className="my-14 container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="">
          {isToggle.available ? (
            <h1 className="font-extrabold text-2xl">Available Players</h1>
          ) : (
            <h1 className="font-extrabold text-2xl">Selected Player (0/6)</h1>
          )}
        </div>
        <div className="">
          <div className="flex rounded-xl border overflow-hidden">
            <button
              onClick={() => handelToggle("available")}
              className={`py-3 px-7 ${
                isToggle.available ? "bg-[#e7fe29]" : ""
              } font-bold`}
            >
              Available
            </button>
            <button
              onClick={() => handelToggle("selected")}
              className={`py-3 px-7 ${
                isToggle.available ? "" : "bg-[#e7fe29]"
              } font-bold`}
            >
              Selected (0)
            </button>
          </div>
        </div>
      </div>

      {/* All Players here */}
      <div className="mt-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Player */}
        {isToggle.available &&
          players.map((p) => <Player key={p.id} player={p}></Player>)}

        {/* Selected Player */}
      </div>
      <div className="">
        {isToggle.name === "selected" && <PlayerSelected />}
      </div>
      <div className="text-center lg:text-left">
        {isToggle.status === "selected" && (
          <span className="p-2 border border-black inline-block rounded-xl">
            <button
              onClick={() => handelToggle("available")}
              className="btn bg-[#e7fe29]"
            >
              Add More Player
            </button>
          </span>
        )}
      </div>
    </div>
  );
}

export default Players;
