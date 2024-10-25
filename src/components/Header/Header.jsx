
import Banner from './../Banner/Banner';
import { PropTypes } from 'prop-types';
function Header({ handelAddToCoins }) {
  return (
    <div className='container mx-auto'>
        {/* Banner here */}
        <Banner handelAddToCoins={handelAddToCoins}/>
    </div>
  )
}

Header.propTypes = {
  handelAddToCoins: PropTypes.func
}
export default Header