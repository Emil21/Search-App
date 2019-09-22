import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import './Header.css';

function Header(props) {
  return (
    <div className="Header">
        <Logo/>
       <SearchBar updateSearch={props.updateSearch} /> 
    </div>
  );
}

export default Header;
