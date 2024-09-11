import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const Header = () =>{
    const [btnName, setBtnName] = useState("Login");
    //just to show that everytime the state of btnName changes it re-renders the whole Header componenet
    //re-rendering means it is calling the Header function once again and with the updated state of variable and only change
    //the variable.
    console.log("Header render");

    //no depedency array => will be called on each render
    //empty dependency array =? only called on initial render(just once)
    //[btnName] => will be called each time btnName is updated;
    useEffect(()=>{
        console.log("useeffect is called"),
        [btnName];
    })
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Homie</Link></li>
                    <li><Link to="/About">About Us</Link></li>
                    <li><Link to="/Contact">Contact Us</Link></li>
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