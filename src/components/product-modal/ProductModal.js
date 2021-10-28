import { useState, useEffect } from 'react';
import './ProductModal.css';
import DonationDoneModal from '../donation-done-modal/DonationDoneModal';

function ProductModal(props) { 
    let [donationDoneModal, setDonationDoneModal] = useState(false);
    let [inputPrice, setInputPrice] = useState(1);
    function continueDonationClick(e) {
        if(inputPrice > props.price) {
            e.preventDefault();
            props.calculateTotalDonationCount(inputPrice);
            props.calculateTotalBackersCount();
            toggleDonationDoneModal();
        } else {
            alert(`Minimum donation for this product is $${props.price}.`);
        }
    }

    function toggleDonationDoneModal() {
        setDonationDoneModal(!donationDoneModal);
    }

    function presetDonationClick(e) {
        e.preventDefault();
        props.calculateTotalDonationCount(props.price);
        props.calculateTotalBackersCount();
        toggleDonationDoneModal();
    }

    console.log(props);
    return (
        
        <div>
            <div className={`css-full-product-modal ${props.price === 200 ? 'css-unavailable-product-div' : ''}`}>
                <div className="css-top-part-product-modal">
                    <input className={`${props.price === 200 ? 'css-unavailable-product-radio' : ''}`} type="radio" name="radio" value={props.id} checked={Number(props.option.optionValue) === props.id} onChange={props.handleRadioChange} disabled={props.price === 200 ? true : false}/>
                    <div className="css-product-header-modal">
                        <span>
                            <h3>{props.name}</h3>
                            {(props.price > 0) ? <p>Pledge ${props.price} or more</p> : ''}
                            {(props.left >= 0) ? <h4>{props.left}</h4> : ''}
                        </span>
                        <p>
                            {props.description}
                        </p>
                    </div>
                </div>
                {Number(props.option.optionValue) === props.id &&
                    <div className="css-bottom-part-product-modal">
                        <input type="text" placeholder="Enter your pledge" onChange={event => setInputPrice(event.target.value)}/>
                        {(props.price > 0) ? <button className="css-preset-btn" value={props.price} onClick={presetDonationClick} type="submit" ><span>$</span>{props.price}</button> : ''}
                        <button className={`css-continue-btn ${props.price === 0 ? 'css-product-0-price' : ''}`} onClick={continueDonationClick} type="submit" >Continue</button>
                    </div>
                }   
            </div>
            {donationDoneModal && <DonationDoneModal toggleDonationDoneModal={toggleDonationDoneModal} />}
        </div>
        
    );
};

export default ProductModal;

