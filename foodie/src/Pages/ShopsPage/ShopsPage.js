import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import AddShopForm from '../../components/AddShopForm/AddShopForm';
import ShopsDiv from '../../components/ShopsDiv/ShopsDiv';
import { getShopPost } from '../../actions/shopPost';
import './ShopsPage.scss';


const ShopsPage = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    //dispatch(getFoodPost());
    dispatch(getShopPost());
  }, [dispatch])
  return (
    <div className='shops-page-outer-div'>
        <ShopsDiv />
        <AddShopForm />
    </div>
  )
}

export default ShopsPage