import React from 'react';

import logo from '../assets/logo.png'; //Import the Logo
import Form from './Form'; //Import the Form component

//Receive all relevant props from the parent component
//Send all relevant props to the child component
const Header = () => {
  return (
    <header>
      <img src={logo} alt='logo' />
      <Form />
    </header>
  );
};

export default Header;
