import React, { useState } from 'react'
import ItemList from './ItemList';

const ResCategory = ({data,showItems,fun}) => {

    //const [showItems, setShowItems] = useState(false);
    const handleClick = ()=>{
        fun();
    };
    console.log(showItems);
  return (
    <div>
        <div className="w-8/12 mx-auto my-4 bg-red-100 shadow-lg p-4 cursor-pointer" onClick={handleClick}>
            <div className='flex justify-between font-bold text-lg'>
                <span>
                    {data.title} ({data.itemCards.length})
                </span>
                <span className='font-bold text-2xl'>{showItems? '˄':'˅'}</span>
            </div>

            {showItems && <ItemList items={data.itemCards}/>}
        </div>
    </div>
  )
}

export default ResCategory;