import './DonationDoneModal.css';

function DonationDoneModal(props) {
    return (
        <div className="css-donation-done-modal js-donation-done-modal">
            <img alt="icon-check" src="images/icon-check.svg" />
            <h2>Thanks for your support!</h2>
            <p>
                Your pledge brings us one step closer to sharing Mastercraft <br/>
                Bamboo Monitor Riser worldwide. You will get an email once <br/>
                our campaign is completed.
            </p>
            <button className="css-btn" onClick={props.toggleDonationDoneModal} type="button">Got it</button>
        </div>
    );
};

export default DonationDoneModal;


