import React, { useState, useEffect } from 'react';
import FileUploader from '../Form/FileUploader';
 import './Form2.scss';
const Forms = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const submitForm = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", selectedFile);
  
    
  };
  return (
    <div className="form2">
    <div style={{ borderTop: "7px solid #35CD8C " , width: "200px" , marginTop :"30px", marginLeft: "120px"}}></div>
    
    <div className='heading1' style={{textAlign: "center" , marginLeft:"50px"}}> Suggest a Shop</div>
   
      <form className='form1'>
      <label className='label'>
    Name of The Shop:
   
    </label>
    <input
    style = {{width:"300px"}}
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />


  
  <label className='label'>

   Address: 
    </label>
    <input
    style = {{width:"300px"}}
    type="text"
    value={price}
    onChange={(e) => setPrice(e.target.value)}
  />
  

  
       
      

      
        <button className = 'button1' onClick={submitForm}>Submit</button>
      </form>
     
    </div>
  );
};


export default Forms;