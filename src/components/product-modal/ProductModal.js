import './ProductModal.css';

function ProductModal(props) {
    return (
        <div className="css-full-product-modal">
            <div className="css-top-part-product-modal">
                <input type="radio" name="radio" value="1" onchange="showProductDetails(25)"/>
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
            <div class="css-bottom-part-product-modal">
                <input type="text" placeholder="Enter your pledge" />
                <button class="css-preset-btn" onclick="openDonationPresetDoneModal(${amount})" value={props.price} type="button"><span>$</span>{props.price}</button>
                <button class="css-continue-btn" onclick="openDonationDoneModal(${amount})" type="button">Continue</button>
            </div>
        </div>
    );
};

export default ProductModal;

