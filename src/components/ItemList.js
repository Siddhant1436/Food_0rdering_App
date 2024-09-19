import React from 'react'
import { CDN_URL } from '../utils/constant';

const ItemList = ({items}) => {
  return (
    <div>
        {items.map((item)=>{
            
            return (
            <div key={item.card.info.id} className='p-2 m-2 bg-red-100 border-black border-b-2 text-left
             hover:bg-red-200 rounded-lg flex justify-between h-[100px]'>
                <div className='w-11/12'>
                    <div className='py-2 font-semibold'>
                        <span>{item.card.info.name}</span>
                        <span>- ₹{item.card.info.price? item.card.info.price/100: item.card.info.defaultPrice/100}</span>
                    </div>

                    <p className='text-xs'>{item.card.info.description}</p>
                </div>
                
                <div className="w-1/12 relative">
                    
                    <button className= 'absolute right-0 bg-green-200 text-xs rounded-md px-1'>Add+</button>    
                    <img src={CDN_URL+item.card.info.imageId} className='w-full h-[70px] rounded-md' />
                </div>

        </div>)
        
        })}

    </div>);
}


export default ItemList;