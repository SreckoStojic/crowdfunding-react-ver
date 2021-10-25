import './DonationStats.css';
import logo from '../../images/logo.svg';

function DonationStats() {
    return (
        <div class="css-stats js-stats">
            <table class="css-stats-table">
                <tr class="css-tr-head">
                    <th>$<input class="js-donation-count" type="text" value="89914" disabled/></th>
                    <th><input class="js-donation-backers-count" type="text" value="5007" disabled/></th>
                    <th><input type="text" value="56" disabled/></th>
                </tr>
                <tr class="css-tr-body">
                    <td>of $100,000 backed</td>
                    <td>total backers</td>
                    <td>days left</td>
                </tr>
            </table>
            <input class="css-progress-bar js-progress-bar" type="range" min="0" max="100000" value="89914" disabled/>
        </div>
    );
};

export default DonationStats;