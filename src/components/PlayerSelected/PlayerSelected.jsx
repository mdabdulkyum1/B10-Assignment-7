import { RiDeleteBinLine } from "react-icons/ri";
import { PropTypes } from "prop-types";

function PlayerSelected({ player, handelRemovePlayer }) {
  const { name, image, role } = player;
  return (
    <div className="flex items-center justify-between border p-6 rounded-2xl my-6 shadow-lg">
      <div className="flex items-center gap-4">
        <img src={image} alt={name} className="rounded-2xl h-28 w-28" />
        <div className="">
          <h1>{name}</h1>
          <p>{role}</p>
        </div>
      </div>
      <div className="">
        <RiDeleteBinLine
          onClick={() => handelRemovePlayer(player)}
          className="text-red-500 text-2xl cursor-pointer"
        />
      </div>
    </div>
  );
}
PlayerSelected.propTypes = {
  player: PropTypes.object,
  handelRemovePlayer: PropTypes.func,
};
export default PlayerSelected;
