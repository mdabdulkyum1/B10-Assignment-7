import Player from "./../Player/Player";
import PlayerSelected from "./../PlayerSelected/PlayerSelected";

function Players() {
  return (
    <div className="my-14 container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="">
          <h1 className="font-extrabold text-2xl">Available Players</h1>
          <h1 className="font-extrabold text-2xl">Selected Player (4/6)</h1>
        </div>
        <div className="">
          <div className="flex rounded-xl border overflow-hidden">
            <button className="py-3 px-7 bg-[#e7fe29] font-bold">
              Available
            </button>
            <button className="py-3 px-7  font-bold">Selected (0)</button>
          </div>
        </div>
      </div>

      {/* All Players here */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Player */}
        <Player />

        {/* Selected Player */}
      </div>
      <div className="">
        <PlayerSelected />
        <PlayerSelected />
        <PlayerSelected />
        <PlayerSelected />
        <PlayerSelected />
      </div>
      <div className="text-center lg:text-left">
        <span className="p-2 border border-black inline-block rounded-xl">
          <button className="btn bg-[#e7fe29]">Add More Player</button>
        </span>
      </div>
    </div>
  );
}

export default Players;
