import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { MENU_URL } from '../utils/constant';
import useResMenu from '../utils/useResMenu';
import ResCategory from './ResCategory';

export const ResMenu = () => {
    const {resId} = useParams();
    const [showIndex, setShowIndex] = useState(null);
    const resInfo = useResMenu(resId);
    if (resInfo.length===0) {
        return <div>Loading...</div>; // Handle the case when the data isn't loaded yet
    }
    
    const {name, id, city, aggregatedDiscountInfo    } = resInfo?.data?.cards[2]?.card?.card?.info;

    let n =resInfo?.data?.cards.length-1;

    const {itemCards} = resInfo?.data?.cards[n]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const categories = resInfo?.data?.cards[n]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>
        c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    console.log(categories);
    return(
    <div className='text-center'>
        <h1 className='name font-bold my-6 text-2xl'>{name}</h1>
        <h3 className='font-bold text-xl'>{city}</h3>
        {categories.map((category,index)=>{
            return (
                <ResCategory 
                data = {category.card.card}
                showItems={(index===showIndex)?true:false}
                //lifting the state up, means that giving the control to the upper state component
                fun={()=>index===showIndex?setShowIndex(null):setShowIndex(index)}
                />
            )
        })}
    </div>
  )
}

export default ResMenu;