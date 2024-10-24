
import Navbar from './../Navbar/Navbar';
import Banner from './../Banner/Banner';
function Header() {
  return (
    <div className='container mx-auto'>
        {/* Navbar here */}
        <Navbar />
        {/* Banner here */}
        <Banner />
    </div>
  )
}

export default Header