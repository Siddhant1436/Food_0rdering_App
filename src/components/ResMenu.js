import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams, useSearchParams } from 'react-router-dom';
import { MENU_URL } from '../utils/constant';
export const ResMenu = () => {
    const [resInfo, setResInfo] = useState([]);

    const {resId} = useParams();
    console.log(resId);
    useEffect(()=>{
        fetchMenu();
    },[]);



    const fetchMenu = async() =>{
        const menu = await fetch(MENU_URL+resId);
        const json = await menu.json();
        setResInfo(json);
        console.log(json.data);
    };
    //const resInfoCard = resInfo?.data?.cards[2]?.card?.card?.info;
    //const menu = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    if (resInfo.length===0) {
        //
        return <div>Loading...</div>; // Handle the case when the data isn't loaded yet
      }
    const {name, id, city, aggregatedDiscountInfo    } = resInfo?.data?.cards[2]?.card?.card?.info;
    const {carousel} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return(
    <div>
        <h1>{name}</h1>
        <h2>{id}</h2>
        <h3>{city}</h3>
        {/* <h3>Top Picks</h3>
        <ul>
           {carousel.map((item) => (<li>{item.title}</li>))} 
        </ul> */}
        <h3>Recommended</h3>
        {
            <ul> 
                {itemCards.map((item) => (<li key={item.card.info.id}>{item.card.info.name} - ₹{item.card.info.price/100}</li>))}
            </ul>
        }
        <h3>Discounts: {aggregatedDiscountInfo.descriptionList[0].meta}, {aggregatedDiscountInfo.descriptionList[1].meta}</h3>
        {/* <h3>{carousel.map((res)=>{return res.title;}).join(", ")}</h3> */}
    </div>
  )
}

export default ResMenu;