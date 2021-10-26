import './DonationModal.css';

function DonationModal(props) {
    return (
        <div className="css-donation-modal js-donation-modal">
            <button className="css-close-modal-btn js-close-donation-modal-btn" onClick={props.handleClick} /*"closeDonationModal()"*/></button>
            <h2>Back this project</h2>
            <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world? </p>
            <div className="css-producs-modal">
                <div className="css-full-product-modal">
                    <div className="css-top-part-product-modal js-top-part-0">
                        <input type="radio" name="radio" value="0" onchange="showProductDetails(0)"/>
                        <div className="css-product-header-modal">
                            <span>
                                <h3>Pledge with no reward</h3>
                            </span>
                            <p>
                                Choose to support us without a reward if you simply believe in our project. As a<br/>
                                backer, you will be signed up to receive product updates via email.
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className="css-full-product-modal">
                    <div className="css-top-part-product-modal js-top-part-25">
                        <input className="js-radio-25" type="radio" name="radio" value="1" onchange="showProductDetails(25)"/>
                        <div className="css-product-header-modal">
                            <span>
                                <h3>Bamboo Stand</h3>
                                <p>Pledge $25 or more</p>
                                <h4>101</h4>
                            </span>
                            <p>
                                You get an ergonomic stand made of natural bamboo. You've helped us launch<br/>
                                our promotional campaign, and you’ll be added to a special Backer member list.
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className="css-full-product-modal">
                    <div className="css-top-part-product-modal js-top-part-75">
                        <input className="js-radio-75" type="radio" name="radio" value="2" onchange="showProductDetails(75)"/>
                        <div className="css-product-header-modal">
                            <span>
                                <h3>Black Edition Stand</h3>
                                <p>Pledge $75 or more</p>
                                <h4>64</h4>
                            </span>
                            <p>
                                You get a Black Special Edition computer stand and a personal thank you. You’ll<br/>
                                be added to our Backer member list. Shipping is included.
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className="css-full-product-modal" disabled>
                    <div className="css-top-part-product-modal css-product-disabled js-top-part-200">
                        <input type="radio" name="radio" value="3" disabled onchange="showProductDetails(200)"/>
                        <div className="css-product-header-modal">
                            <span>
                                <h3>Mahogany Special Edition</h3>
                                <p>Pledge $200 or more</p>
                                <h4>0</h4>
                            </span>
                            <p>
                                You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal<br/>
                                thank you. You’ll be added to our Backer member list.  Shipping is included.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default DonationModal;