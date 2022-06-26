import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import pizza from '../../../assets/pizza.jpg';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

import { useDispatch } from 'react-redux';
import './style.scss';
import { likeFoodPost , dislikeFoodPost, deleteFoodPost} from '../../../actions/foodPost';
const Food1 = ({foodPost}) => {
  const dispatch = useDispatch();
  return (
    <div className='food-card-div'>

        <img className='food-img' src={foodPost.selectedFile} alt='pizza' />
        <div className='overlay2'>
        <button onClick={() => {dispatch(deleteFoodPost(foodPost._id))}}> <DeleteIcon/> </button>
        </div>
        <div className='details-div'>
          <div className='text-div'>
            <h3 className='name'>{foodPost.name}</h3>
            <h3  className='price'> {foodPost.price}</h3>
            
          </div>
          <div className='button'>
            <button onClick={() => {dispatch(likeFoodPost(foodPost._id))}}><ThumbUpAltIcon /> LIKE {foodPost.likeCount} </button>
            <button onClick={() => {dispatch(dislikeFoodPost(foodPost._id))}}> <ThumbDownIcon /> DISLIKE {foodPost.dislikeCount}</button>

          </div>
        </div>
    </div>
  )
}

export default Food1