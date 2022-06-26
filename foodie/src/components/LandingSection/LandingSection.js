import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink } from "react-router-dom";
import Pakode from '../../assets/pakode.png'
import dotsBG from '../../assets/dotsBG.png'
import './LandingSection.scss';

const LandingSection = () => {

  function handleSearch(e) {
     e.preventDefault();
  }
  return (
    <div className='landing-outer-div'>
      <div className='left-div'>
      <img src={dotsBG} alt='dots' className='dots-bg-img' />
        <img src={dotsBG} alt='dots' className='dots-bg-img img-below' />
        <h1 className='food-transparent no-padding-margin'>
            Food
        </h1>
        <p className='landing-line no-padding-margin'>
            Discover Food Addas
        </p>
        <p className='landing-line no-padding-margin'>
            & Delicious Food
        </p>
        <form onSubmit={handleSearch}>
            <div className='search-form-div'>
                {/* <input className='search-input' placeholder='Search Food Addas, Food' /> */}
                <NavLink className='search-btn' to="/shops">GO</NavLink>
            </div>
        </form>
        <div className='location-div'>
            <LocationOnIcon className='icon'/>
            IGDTUW, Kashmere Gate
        </div>
      </div>
      <div className='right-div'>
        <img src={Pakode} alt='street-food' className='display-food'/>
      </div>
    </div>
  )
}

export default LandingSection