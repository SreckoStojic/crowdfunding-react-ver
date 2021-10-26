import './Donate.css';

function Donate(props) {

    return (
        <div className="css-donation-div js-donation-div">
            <img className="css-mastercraft-logo" src={'/images/logo-mastercraft.svg'} />
            <h2>Mastercraft Bamboo Monitor Riser</h2>
            <p>A beautiful and handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className="css-donation-div-buttons">
                <button className="css-btn css-donation-btn js-donation-btn"  onClick={props.handleClick}/*onclick="openDonationModal()"*/>Back This Project</button>
                <button className="css-btn css-bookmarks-btn"><img src={'/images/icon-bookmark.svg'} />Bookmarks</button>
            </div>
        </div>
    );
};

export default Donate;