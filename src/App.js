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
  let [modal, setModal] = useState(false);
  function handleClick() {
    setModal(!modal);
  }

  return (
    <div className="css-main">
      <Header />
      <Donate handleClick={handleClick} />
      <DonationStats />
      <AboutProducts>
        {filterProductsByPrice.map(p => <Product key={p.price} name={p.name} price={p.price} description={p.description} left={p.left} />)}
      </AboutProducts>
      {modal && 
      <DonationModal handleClick={handleClick}>
        {products.map(p => <ProductModal key={p.price} name={p.name} price={p.price} description={p.description} left={p.left} />)}
      </DonationModal> 
      }
    </div>
  );
}

export default App;
