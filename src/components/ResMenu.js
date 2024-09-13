import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { MENU_URL } from '../utils/constant';
import useResMenu from '../utils/useResMenu';
export const ResMenu = () => {
    const {resId} = useParams();
    
    const resInfo = useResMenu(resId);
    if (resInfo.length===0) {
        return <div>Loading...</div>; // Handle the case when the data isn't loaded yet
    }
    
    const {name, id, city, aggregatedDiscountInfo    } = resInfo?.data?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return(
    <div>
        <h1>{name}</h1>
        <h2>{id}</h2>
        <h3>{city}</h3>
        <h3>Recommended</h3>
        {
            itemCards?(
            <ul> 
                {itemCards.map((item) => (<li key={item.card.info.id}>{item.card.info.name} - ₹{item.card.info.price/100}</li>))}
            </ul>
            ):(<p>No items available</p>)
        }
        <h3>Discounts: </h3>
        {
            aggregatedDiscountInfo?.descriptionList?
        (<ul>
            {aggregatedDiscountInfo.descriptionList.map((discount)=>{
                return (<li key={discount.id}>{discount.meta}</li>);
            })}
        </ul>) :
        (<p>No discounts</p>)
        }

    </div>
  )
}

export default ResMenu;