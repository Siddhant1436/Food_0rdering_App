import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
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
    const internetStatus = useInternetStatus();
    return (
        <div className="flex justify-between bg-white shadow-lg">
            <div className="logo-container">
                <img className="w-48" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4 hover:text-slate-100">
                    InternetStatus: {internetStatus? "🟢":"🔴" }</li>
                    <li className="px-4 hover:font-medium">
                    <Link to="/">Home</Link></li>
                    <li className="px-4 hover:font-medium">
                    <Link to="/about">About Us</Link></li>
                    <li className="px-4 hover:font-medium">
                    <Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 hover:font-medium">
                    <Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 hover:font-medium">
                    Cart</li>
                    <button className="login hover:font-medium"
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