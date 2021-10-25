import './App.css';
import Header from './components/header/Header';
import Donate from './components/donate/Donate';
import DonationStats from './components/donation-stats/DonationStats';
import AboutProducts from './components/about-products/AboutProducts';

function App() {
  return (
    <div className="css-main">
      <Header />
      <Donate />
      <DonationStats />
      <AboutProducts />
    </div>
  );
}

export default App;
