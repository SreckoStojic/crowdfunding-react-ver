import './DonationStats.css';

function DonationStats() {
    return (
        <div className="css-stats js-stats">
            <table className="css-stats-table">
                <tr className="css-tr-head">
                    <th>$<input className="js-donation-count" type="text" value="89914" disabled/></th>
                    <th><input className="js-donation-backers-count" type="text" value="5007" disabled/></th>
                    <th><input type="text" value="56" disabled/></th>
                </tr>
                <tr className="css-tr-body">
                    <td>of $100,000 backed</td>
                    <td>total backers</td>
                    <td>days left</td>
                </tr>
            </table>
            <input className="css-progress-bar js-progress-bar" type="range" min="0" max="100000" value="89914" disabled/>
        </div>
    );
};

export default DonationStats;