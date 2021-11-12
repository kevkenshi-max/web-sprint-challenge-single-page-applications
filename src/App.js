import React from "react";

import { Link, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Home from './Components/Home';
import Order_form from './Components/Order_form';

import schema from './validation/formSchema'
import * as yup from 'yup';

const initialFormValues = {
  name: '',
  size: '',
  special: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
}

const initialFormErrors = {
  name: '',
  size: '',
}

const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

const validate = (name, value) => {
  yup.reach(schema, name).validate(value)
  .then(() => setFormErrors({ ...formErrors, [name]: ''}))
  .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
}

  return (
    <div className='App'>
      <nav>
        <h1 className='store-header'>Kevin's Pizza</h1>
        <div className='nav-links'>
          <Link to="/">Home</Link>
          <Link to="/pizza">Order</Link>
        </div>
      </nav>

      <Route path="/order-pizza/:id">
        <Home />
      </Route>
      <Route path="/pizza-form/:id">
        <Order_form />
      </Route>
    </div>
  );
};

export default App;
