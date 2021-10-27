import './Header.css';

function Header() {
    return (
        <header>
            <nav>
                <img alt="logo-img" className="css-logo-img" src={'images/logo.svg'} />
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Discover</a></li>
                    <li><a href="#">Get Started</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;