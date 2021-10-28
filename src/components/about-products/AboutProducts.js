import './AboutProducts.css';

function AboutProducts(props) {
    return (
        <div className="css-about-products js-about-products">
            <h3>About this project</h3>
            <p>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates<br/>
                your screen to a more comfortable viewing height. Placing your monitor at eye level has<br/>
                the potential to improve your posture and make you more comfortable while at work,<br/>
                helping you stay focused on the task at hand.<br/><br/>

                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below<br/>
                your computer to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>
            {props.children}
        </div>
    );
};


export default AboutProducts;