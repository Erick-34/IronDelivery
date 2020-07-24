import React from "react";

import "./style.css";

import banner from "../../assets/promocão.png"
import hamburger from "../../assets/hamburger.png"

import Restaurants from './Restaurants';

export default function Navbar() {
  return (
    <div className="navbar-container">
      <nav class="navbar navbar-ligth">
        <a class="navbar-brand">
          <h1>IronDelivery</h1>
        </a>
          <input className="search" type="text" placeholder="Search" />
        <a href="#" className="storeCard">
  
          <strong>3</strong>
        </a>
      </nav>
       <div className="home-banner">
           <img src={banner} alt="banner" />
       </div>
       <div className="title-restaurants">
          <h1>Restaurants <img src={hamburger} alt="emoji-hamburger" /></h1>
       </div>
       <Restaurants />
      
    </div>
  );
}
