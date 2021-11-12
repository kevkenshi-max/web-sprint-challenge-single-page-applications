import React from "react";
import { useParams } from 'react-router-dom';


const Order_form = () => {
    
const { id } = useParams();
    
 return (
    <form className='form container' >
        <div className='form-group submit'>
        <h2>Order Now!</h2>
 
        <label>Name
          <input
            name='name-input'
            type='text'
          />
        </label>
 
        <label>Size 
          <select
            name='size-dropdown'
          >  
            <option value=''>- Select an option -</option>
            <option value='XL'>XL</option>
            <option value='L'>L</option>
            <option value='M'>M</option>
            <option value='S'>S</option>
           </select> 
        </label>

        <label>Topping1
          <input
            type='checkbox'
            name='pepporni'
          />
        </label>

        <label>Topping2
          <input
            type='checkbox'
            name='sausage'
          />
        </label>

        <label>Topping3
          <input
            type='checkbox'
            name='olive'
          />
        </label>

        <label>Topping4
          <input
            type='checkbox'
            name='extra-cheese'
          />
        </label>

        <label>Special
          <input
            name='special-text'
            type='text'
          />
        </label>
        </div>
    </form>
     )   
};

export default Order_form;