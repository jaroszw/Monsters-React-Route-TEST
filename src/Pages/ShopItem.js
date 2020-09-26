import React from 'react';
import './shopItem.css';

function ShopItem ({name, img}){
  return (
    <div className='card'>
        <h1>{name}</h1>
        <img src={img} alt=""/>
    </div>
  )
}

export default ShopItem;