import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const{resData} = props;
    const{name, avgRating,cloudinaryImageId,costForTwo, cuisines} = resData?.info;
    return(
        <div className="res-card m-3 p-2 w-[250px] h-[400px] bg-red-100 rounded-lg hover:bg-red-200 " >
            <img className="res-logo w-[240px] h-[200px] rounded-lg" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <div className="flex flex-col justify-start">
                <h3 className="font-bold py-2">{name}</h3>
                <h3 className="mb-1">✪ {avgRating}</h3>
                <h4>{costForTwo}</h4>
                <h4 className="mt-1">{cuisines.join(", ")}</h4>
            </div>
        </div>    
    );
};

export const withOpenLabel=  (RestaurantCard) =>{
    return (props) =>{
        return (
            <div>
                <label className="absolute bg-green-200 text-black px-1 mx-3 rounded-lg">Open</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;