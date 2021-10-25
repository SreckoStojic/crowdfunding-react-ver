import './AboutProducts.css';

const mystyle = {
    cursor: "not-allowed",
    backgroundColor: "gray"
};

function AboutProducts() {
    return (
        <div class="css-about-products js-about-products">
            <h3>About this project</h3>
            <p>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates<br/>
                your screen to a more comfortable viewing height. Placing your monitor at eye level has<br/>
                the potential to improve your posture and make you more comfortable while at work,<br/>
                helping you stay focused on the task at hand.<br/><br/>

                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below<br/>
                your computer to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>
            <div class="css-product">
                <div class="css-product-header">
                    <h3>Bamboo Stand</h3>
                    <p>Pledge $25 or more</p>
                </div>
                <p>
                    You get an ergonomic stand made of natural bamboo. You've helped us launch<br/>
                    our promotional campaign, and you’ll be added to a special Backer member list.
                </p>
                <div class="css-product-footer">
                    <h2>101</h2>
                    <button class="css-btn" onclick="selectReward(25)">Select reward</button>
                </div>
            </div>
            <div class="css-product">
                <div class="css-product-header">
                    <h3>Black Edition Stand</h3>
                    <p>Pledge $75 or more</p>
                </div>
                <p>
                    You get a Black Special Edition computer stand and a personal thank you. You’ll<br/>
                    be added to our Backer member list. Shipping is included.
                </p>
                <div class="css-product-footer">
                    <h2>64</h2>
                    <button class="css-btn" onclick="selectReward(75)">Select reward</button>
                </div>
            </div>
            <div class="css-product css-product-disabled">
                <div class="css-product-header">
                    <h3>Mahogany Special Edition</h3>
                    <p>Pledge $200 or more</p>
                </div>
                <p>
                    You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal<br/>
                    thank you. You’ll be added to our Backer member list.  Shipping is included.
                </p>
                <div class="css-product-footer">
                    <h2>0</h2>
                    <button class="css-btn" style={mystyle}>Out of stock</button>
                </div>
            </div>
        </div>
    );
};


export default AboutProducts;