import './Product.css';

function Product(props) {
    return (
        <div className="css-product">
            <div className="css-product-header">
                <h3>{props.name}</h3>
                <p>Pledge ${props.price} or more</p>
            </div>
            <p>
                {props.description}
            </p>
            <div className="css-product-footer">
                <h2>{props.left}</h2>
                {
                    (props.price === 200) ? <button className="css-btn css-product-disabled">Out of Stock</button>
                         : <button className="css-btn">Select reward</button>
                }
                
            </div>
        </div>
    );
};

export default Product;

