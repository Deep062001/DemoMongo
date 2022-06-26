import React from 'react'
import Forms from '../../components/Form2/Form2';
import Header from '../../components/Header/Header';
import img2 from '../../image/img2.jpeg';
import img1 from '../../image/img1.png'
import './suggest.scss';
const Suggest = () => {
  return (
    <div  className='page3'>
    <div className='suggest'>

    <div >
    <img className='img2' src = {img2} />
    </div>
    <div className='suggestion'>
   
        <Forms />
   
    </div>
    <div>
   <img className='img1' src = {img1}></img>
    </div>
    </div>
    </div>
  )
}

export default Suggest;