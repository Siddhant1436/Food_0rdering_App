import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
const Header = () =>{
    const [btnName, setBtnName] = useState("Login");
    //just to show that everytime the state of btnName changes it re-renders the whole Header componenet
    //re-rendering means it is calling the Header function once again and with the updated state of variable and only change
    //the variable.
    console.log("Header render");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Homie</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login"
                        onClick={()=>{
                            btnName=== "Login" ? setBtnName("Logout"): setBtnName("Login");
                        }}
                    >{btnName}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;