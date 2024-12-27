import { useEffect, useState } from "react";
import { APP_LOGO } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Login")
    console.log(btnName);

    // if there is no dependency array useEffect will be called after every render of the component
    // if there is a empty dependency array usEffect will be called only after 1st render
    // if dependency array has a state variable then on every change of state variable useEffect will be called
    useEffect(() => {
        console.log("Uese effect called from header");
    }, [btnName]);

    const onlineStatus = useOnlineStatus();

    return (
    <div className="header-container">
            <img className="logo" src={APP_LOGO} alt= "logo"/>
            <div className="nav-item">
                    <ul>
                            {[onlineStatus ? "Online" : "Offline", "Home", "About", "Contact", "SwiggyMart", "Cart"].map((item, index) => (
                                    <li key= {index}><Link to={item.toLowerCase() === 'home' ? "/" : item.toLowerCase()}>{item}</Link> </li>
                            ))}
                            <li><button onClick={() => {
                                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login"); 
                            }}>{btnName}</button></li>
                    </ul>
            </div>
    </div>
    );
}

export default Header;