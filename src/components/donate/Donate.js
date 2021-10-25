import './Donate.css';
import masterCraftLogo from '../../images/logo-mastercraft.svg';
import iconBookmark from '../../images/icon-bookmark.svg';

function Donate() {
    return (
        <div class="css-donation-div js-donation-div">
            <img class="css-mastercraft-logo" src={masterCraftLogo} />
            <h2>Mastercraft Bamboo Monitor Riser</h2>
            <p>A beautiful and handcrafted monitor stand to reduce neck and eye strain.</p>
            <div class="css-donation-div-buttons">
                <button class="css-btn css-donation-btn js-donation-btn" /*onclick="openDonationModal()"*/>Back This Project</button>
                <button class="css-btn css-bookmarks-btn"><img src={iconBookmark} />Bookmarks</button>
            </div>
        </div>
    );
};

export default Donate;