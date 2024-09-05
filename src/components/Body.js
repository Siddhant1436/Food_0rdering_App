import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";
const Body =() => {
    const [listOfRestaurants, setListofRestaurants] = useState(resObj);

    //we actually are destructring the array here;
    // const arr = useState(resObj);
    // const [listOfRestaurants, setListofRestaurants] =arr;
    
    return(
        <div className="Body">
            <div className="filter">
                <button 
                className="filterBtn"
                onClick={ ()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating>4.3
                    );
                    setListofRestaurants(filteredList);
                }}
                >Top Rated Restaurants</button>
            </div>
            
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => {
                    return <RestaurantCard key={restaurant.info.id} resData={restaurant} />;
                })}

            </div>
        </div>
    )
}

export default Body;