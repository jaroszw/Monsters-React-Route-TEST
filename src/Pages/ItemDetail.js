import React, {useState, useEffect} from 'react';
import './itemDetail.css';

function ItemDetail ({match}){

  useEffect(()=> {
    fetchItem();
    console.log(match)
  }, []);

  const [item, setItem] = useState({
    images: {},
    ratings: {},
  });

  const fetchItem = async () => {
    const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`)
    const item = await data.json();
    setItem(item.data.item)
    console.log(item.data)
  }

  return (
    <div className='item-container'>
      <div className='image'>
        <img src={item.images.background} alt=""/>
      </div>
        
      <div className='description'>
        <h1>{item.name}</h1>
        <h2>DESCRIPTION: {item.description}</h2>
        <h2>COMSEMTIC ID: {item.costmeticId}</h2>
        <h2>RARITY: {item.rarity}</h2>
        <h2>TYPE: {item.type}</h2>
        <h2>UPCOMING SOON: {item.upcoming ? 'Yes' : 'No'}</h2>
      </div>
    </div>
  )
}

export default ItemDetail;