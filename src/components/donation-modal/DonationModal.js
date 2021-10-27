import './DonationModal.css';

function DonationModal(props) {
    return (
        <div className="css-donation-modal">
            <button className="css-close-modal-btn" onClick={props.toggleDonationModal}></button>
            <h2>Back this project</h2>
            <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world? </p>
            <div className="css-products-modal">
                {props.children}
            </div>
        </div>
    );
};

export default DonationModal;