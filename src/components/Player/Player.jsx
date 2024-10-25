import PropTypes from "prop-types";
import { FaUser } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";

function Player({ player }) {
  const { name, image, country, role, price, rating} = player;
  return (
    <div className="border rounded-2xl p-6">
      <div className="w-12/12">
        <img
          src={image}
          alt={`Player Name ${name}`}
          className="w-full h-[250px] rounded-2xl"
        />
      </div>
      <div className="flex items-center gap-4 mt-4">
        <FaUser className="text-xl text-[#424242]"/>
        <h1 className="font-bold text-xl">{name}</h1>
      </div>
      <div className="flex justify-between mt-6">
        <div className="flex items-center gap-3">
        <CiFlag1 />
        <p>{country}</p>
        </div>
        <span>{role}</span>
      </div>
      <div className="divider"></div>
      <p className="font-bold">Rating</p>
      <div className="flex justify-between my-4">
          <span className="font-bold">{rating?.batting_style}</span>
          <span>{rating.bowling_style || "N/A"}</span>
      </div>
      <div className="flex justify-between">
          <span className="font-bold">Price: ${price}</span>
          <button className="btn py-2 px-4 border rounded">Choose Player</button>
      </div>
    </div>
  );
}

Player.propTypes = {
  player: PropTypes.object.isRequired,
};

export default Player;
