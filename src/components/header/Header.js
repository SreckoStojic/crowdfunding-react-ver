import './Header.css';
import logo from '../../images/logo.svg';

function Header() {
    return (
        <header>
            <nav>
                <img class="css-logo-img" src={logo} />
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Discover</a></li>
                    <li><a href="">Get Started</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;