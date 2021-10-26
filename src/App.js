import './App.css';
import Header from './components/header/Header';
import Donate from './components/donate/Donate';
import DonationStats from './components/donation-stats/DonationStats';
import AboutProducts from './components/about-products/AboutProducts';
import DonationModal from './components/donation-modal/DonationModal';
import { useState } from 'react';

function App() {
  let [modal, setModal] = useState(false);
  function handleClick() {
    setModal(!modal);
  }

  return (
    <div className="css-main">
      <Header />
      <Donate handleClick={handleClick} />
      <DonationStats />
      <AboutProducts />
      {modal && <DonationModal handleClick={handleClick}/>}
    </div>
  );
}

export default App;
