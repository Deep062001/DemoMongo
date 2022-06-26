import React, { useState } from 'react'
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import {createShopPost} from '../../actions/shopPost';
import './AddShopForm.scss';

const shopObj = {name: '',  description: '',location: '', tags: '', selectedFile: '' };
const AddShopForm = () => {
    const [shopData, setShopData] = useState({...shopObj});
    const dispatch = useDispatch();

    function handleSubmit(e) {
       e.preventDefault();
       dispatch(createShopPost(shopData));
    } 
    
    function handleChange(e) {
        const {name, value} = e.target;

        setShopData((prev)=>{
            return {
                ...prev,
                [name]: value
            }
        });
    }

    function clearForm(){
        setShopData(shopObj);
    }


  return (
    <div className='add-shop-outer-div'>
        <form onSubmit={handleSubmit} autoComplete={"off"}>
            <div className='input-div'>
               <label>Shop Name:</label>
               <input type="text" name="name" onChange={handleChange} value={shopData.name}/>
            </div>
            <div className='input-div'>
               <label>Description:</label>
               <input type="text" name="description" onChange={handleChange} value={shopData.description}/>
            </div>
            <div className='input-div'>
               <label>Location:</label>
               <input type="text" name="location" onChange={handleChange} value={shopData.location}/>
            </div>
            <div className='input-div'>
               <label>Tags:</label>
               <input type="text" name="tags" onChange={handleChange} value={shopData.tags}/>
            </div>
            <div>
                <FileBase type="file" multiple={false} onDone={({ base64 }) => setShopData({ ...shopData, selectedFile: base64 })} />
            </div>     
            <div className='btn-div'>
                <button onClick={clearForm}>Clear</button> 
                <button type='submit'>Upload</button>   
            </div>
        </form>
    </div>
  )
}

export default AddShopForm