import { APP_LOGO } from "../utils/constants";

const Header = () => {
    return (
    <div className="header-container">
            <img className="logo" src={APP_LOGO} alt= "logo"/>
            <div className="nav-item">
                    <ul>
                            {["Home", "About", "Contact", "Cart", "Wish List"].map((item, index) => (
                                    <li key= {index}> {item}</li>
                            ))}
                    </ul>
            </div>
    </div>
    );
}

export default Header;