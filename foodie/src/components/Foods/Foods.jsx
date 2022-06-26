import React from 'react';
import Food1 from './Food/FoodCard';
import { useSelector } from 'react-redux';
import "./foods.scss";
const Foods = (props) => {
  const foodPosts = useSelector((state) => state.foodPosts);

  console.log(foodPosts);
  return (
   
   <div className='foodpage'>
   <div className='heading'> Explore The Food
   </div>

    <div className='grid'>
    {foodPosts.map((foodPost) => {
      return <div className='food' key = {foodPost._id}><Food1 foodPost = {foodPost}/></div>
    })}

    </div>
  
    </div>

  )
}

export default Foods;