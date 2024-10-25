import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Players from "./components/Players/Players";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  // add coins
  const [coins, setCoins] = useState(0);

  // handelAddToCoins func
  const handelAddToCoins = () => {
    setCoins(coins + 60000000);
  };

  return (
    <>
      {/* Nav */}
      <Navbar coins={coins} />
      {/* Header here */}
      <Header coins={coins} handelAddToCoins={handelAddToCoins} />
      {/* Main Part here */}
      <Players coins={coins} setCoins={setCoins} />
      {/* Newsletter here */}
      <Newsletter />
      {/* Footer here */}
      <Footer />
    </>
  );
}

export default App;
