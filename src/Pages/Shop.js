import React, {useState, useEffect} from 'react';
import ShopItem from './ShopItem';
import './shop.css';
import {Link} from 'react-router-dom';

function Shop (){

  useEffect(()=> {
    fetchItems();
  }, [])

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fortnite-api.theapinetwork.com/store/get');
    const items = await data.json();
    setItems(items.data)
    console.log(items)
  }

  return (
    <div>
      <h1>Find your Super Hero</h1>
        <div className='container'>
          {items.map(item => (
            <Link to={`/shop/${item.itemId}`}>
              <ShopItem 
                key={item.itemId} 
                name={item.item.name} 
                img={item.item.images.background}
              />
            </Link>
          ))} 
      </div>
    </div>
  )
}

export default Shop;