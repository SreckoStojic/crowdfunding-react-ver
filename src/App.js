import './App.css';
import Header from './components/header/Header';
import Donate from './components/donate/Donate';
import DonationStats from './components/donation-stats/DonationStats';
import AboutProducts from './components/about-products/AboutProducts';
import DonationModal from './components/donation-modal/DonationModal';
import Product from './components/product/Product';
import ProductModal from './components/product-modal/ProductModal';
import { useState } from 'react';
import products from './data/products';

let filterProductsByPrice = products.filter(p => p.price > 0);


function App() {
  let [donationModal, setDonationModal] = useState(false);
  let [totalDonationCount, setTotalDonationCount] = useState(89914);
  let [totalBackersCount, setTotalBackersCount] = useState(5007);
  let [option, setOption] = useState({
    optionValue : 1,
    isChecked : false
  });

  function toggleDonationModal() {
    setDonationModal(!donationModal);
  }
  
  function calculateTotalDonationCount (donation) {
    setTotalDonationCount(Number(totalDonationCount) + Number(donation));  
  }

  function calculateTotalBackersCount() {
    setTotalBackersCount(totalBackersCount + 1);
  }

  function handleRadioChange(event) {
      setOption({
          optionValue : event.target.value,
          isChecked : event.target.checked
      });
  }

  return (
    <div className="css-main">
      <Header />
      <Donate toggleDonationModal={toggleDonationModal} />
      <DonationStats totalBackersCount={totalBackersCount} totalDonationCount={totalDonationCount} />
      <AboutProducts>
        {filterProductsByPrice.map(p => <Product key={p.id} id={p.id} name={p.name} price={p.price} description={p.description} left={p.left} />)}
      </AboutProducts>
      {donationModal && 
      <DonationModal toggleDonationModal={toggleDonationModal}>
        <form>
          {products.map(p => <ProductModal option={option} handleRadioChange={handleRadioChange} key={p.id} id={p.id} name={p.name} price={p.price} description={p.description} left={p.left} calculateTotalBackersCount={calculateTotalBackersCount} calculateTotalDonationCount={calculateTotalDonationCount} />)}
        </form>
        
      </DonationModal> 
      }
    </div>
  );
}

export default App;
