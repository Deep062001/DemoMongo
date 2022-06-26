import React from 'react';
import ShopCard from '../ShopCard/ShopCard';
import { useSelector } from 'react-redux';
import './ShopsDiv.scss';
const ShopsDiv = () => {
  const shopPosts = useSelector((state) => state.shopPosts);

  console.log(shopPosts);
  return (
    <div className='outer-div'>

        {shopPosts.length===0?<h2>Loading..</h2>:
          shopPosts.map((shopPost)=>{
            return <ShopCard key={shopPost._id} shopData={{...shopPost}} />
          })
        }
        
    </div>
  )
}

export default ShopsDiv