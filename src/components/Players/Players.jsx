import { useEffect, useState } from "react";
import Player from "./../Player/Player";
import PlayerSelected from "./../PlayerSelected/PlayerSelected";
import { PropTypes } from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Players({ coins, setCoins }) {
  // set all players data
  const [players, setPlayers] = useState([]);
  const [isToggle, setIsToggle] = useState({
    available: true,
    status: "available",
  });

  const [selectedPlayers, setSelectedPlayers] = useState([]);

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

  // notify Toast
  const notify = (name) => {
    toast.success(`Congrats !! ${name} is now in your squad`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const errNotify = () => {
    toast.error(
      `Not enough money to buy this
player.Claim some Credit`,
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  };
  const noMoreAddPlayers = () => {
    toast.error(`No More Add Players to your squad`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const existThisPlayer = () => {
    toast.error(`Player already selected`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const removeNotify = () => {
    toast.warning(`Player Removed`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  <ToastContainer />;

  // ChoosePlayer Button functions
  const handelChoosePlayer = (player) => {
    if (selectedPlayers.length === 6) {
      handelSelectedPlayers(player, player.id);
      return;
    }

    if (coins > player.price) {
      setCoins(coins - player.price);
      handelSelectedPlayers(player, player.id);
    } else {
      errNotify();
    }
  };

  // handel selected players
  const handelSelectedPlayers = (player, id) => {
    const isExistPlayers = selectedPlayers.find((p) => p.id === id);

    if (selectedPlayers.length < 6 && !isExistPlayers) {
      notify(player.name);
      setSelectedPlayers([...selectedPlayers, player]);
    } else {
      if (isExistPlayers) {
        existThisPlayer();
      } else {
        noMoreAddPlayers();
      }
    }
  };
// remove player from selected players
const handelRemovePlayer = player => {
    const removeAndUpdatePlayer = selectedPlayers.filter(p=> p.id !== player.id);
    setSelectedPlayers(removeAndUpdatePlayer)
    removeNotify();
}





  return (
    <div className="my-14 container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="">
          {isToggle.available ? (
            <h1 className="font-extrabold text-2xl">Available Players</h1>
          ) : (
            <h1 className="font-extrabold text-2xl">
              Selected Player ({selectedPlayers.length}/6)
            </h1>
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
              Selected ({selectedPlayers.length})
            </button>
          </div>
        </div>
      </div>

      {/* All Players here */}
      <div className="mt-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Player */}
        {isToggle.available &&
          players.map((p) => (
            <Player
              key={p.id}
              player={p}
              handelChoosePlayer={handelChoosePlayer}
            ></Player>
          ))}

        {/* Selected Player */}
      </div>
      <div className="">
        {isToggle.status === "selected" &&
          selectedPlayers.map((p) => <PlayerSelected key={p.id} player={p} handelRemovePlayer={handelRemovePlayer}/>)}
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

Players.propTypes = {
  coins: PropTypes.number,
  setCoins: PropTypes.func,
};
export default Players;
