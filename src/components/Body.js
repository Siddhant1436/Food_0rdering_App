import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body =() => {

    //local state variable 
    const [listOfRestaurants, setListofRestaurants] = useState(resObj);
    const [searchText, setSearchText] = useState("");
    console.log("it got rendered,because the state variable changed, and for the first time before calling the api it was rendered");
    //we actually are destructring the array here;
    // const arr = useState(resObj);
    // const [listOfRestaurants, setListofRestaurants] =arr;
    useEffect(()=>{
        fetchData();
    }, []);
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'x-rapidapi-key': '007bfc1dcamsh54354873de33bc6p1a423djsna52bb560261c',
    //         'x-rapidapi-host': 'foodiefetch.p.rapidapi.com'
    //     }
    // };

    const fetchData = async() => {
        console.log("fetch the data");
        // try {
        //     const response = await fetch("https://foodiefetch.p.rapidapi.com/swiggy?query=grandamas%20cafe%20pune",options);
        //     const result = await response.text();
        //     console.log(result);
        // } catch (error) {
        //     console.error(error);
        // }
};
    //shimmer UI is better than this 
    //conditional rendering
    // if(listOfRestaurants.length===0){
    //     return <Shimmer />;
    // }

    return  (
        <div className="Body"> 
            <div className="filter">
                <div className="search">
                    
                    <input 
                    type="text"
                    className="search-box"
                    value={searchText} 
                    onChange={(e)=>{
                        const currentSearchText = e.target.value;
                        setSearchText(e.target.value)
                        const filteredRestaurant=resObj.filter((res) => {
                            return res.info.name.toLowerCase().includes(currentSearchText.toLowerCase()); 
                        });

                        setListofRestaurants(filteredRestaurant);
                        }}
                    />
                    
                    <button
                    onClick={()=>{
                        const filteredRestaurant=resObj.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase()); 
                        });

                        setListofRestaurants(filteredRestaurant);
                        console.log(filteredRestaurant);
                    }}>
                    Search</button>
                
                </div>
                <button 
                className="filterBtn"
                onClick={ ()=>{
                    const filteredList = resObj.filter(
                        (res) => res.info.avgRating>4.3
                    );
                    setListofRestaurants(filteredList);
                }}
                >Top Rated Restaurants</button>
            </div>
            
            <div className="res-container">
        {listOfRestaurants.length > 0 ? (
            listOfRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))) : 
            (<div>No restaurants found</div>)
        }
            </div>
        </div>
    )
}

export default Body;