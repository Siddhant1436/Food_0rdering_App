import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const{resData} = props;
    const{name, avgRating,cloudinaryImageId,costForTwo, cuisines} = resData?.info;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{avgRating}</h3>
            <h4>{costForTwo}</h4>
            <h4>{cuisines.join(", ")}</h4>
        </div>    
    );
};

export default RestaurantCard;