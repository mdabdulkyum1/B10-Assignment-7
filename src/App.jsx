
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Players from './components/Players/Players';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <>
    {/* Nav */}
    <Navbar />
    {/* Header here */}
    <Header/>
    {/* Main Part here */}
    <Players />
    {/* Newsletter here */}
    <Newsletter />
    {/* Footer here */}
    <Footer />
    </>
  )
}

export default App