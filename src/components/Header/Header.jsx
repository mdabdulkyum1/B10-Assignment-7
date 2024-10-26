import Banner from "./../Banner/Banner";
import { PropTypes } from "prop-types";
function Header({ coins, handelAddToCoins }) {
  return (
    <div className="container mx-auto">
      {/* Banner here */}
      <Banner handelAddToCoins={handelAddToCoins} coins={coins}/>
    </div>
  );
}

Header.propTypes = {
  handelAddToCoins: PropTypes.func,
  coins: PropTypes.number
};
export default Header;
