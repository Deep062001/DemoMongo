import React, { useEffect } from 'react';
import Forms from "../../components/Form/Form";
import Foods from "../../components/Foods/Foods";
import { getFoodPostbyShopID } from '../../actions/foodPost';
import './Items.scss';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
const Items = () => {
  const {shopID} = useParams();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getFoodPostbyShopID(shopID));
  }, [dispatch, shopID])

  return (
    <div className='explore-page'>
    <div className='Items'>
    
    <div className='Food'> 
    <Foods shopID={shopID}/></div>
    <div className='Form'>
    <Forms shopID={shopID} />
    </div>
    </div>
</div>
  )
    
}

export default Items;