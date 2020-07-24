import React from "react";

import img from "../../assets/card1.png";

export default function CardRestaurants() {
  return (
    <div className="display">
      <div className="restaurants-all">
        <img src={img} alt="card" />
        <ul>
          <stron>4.7</stron>
          <li>Deli</li>
          <li>Bagels</li>
          <li>$$</li>
        </ul>
      </div>
      <div className="restaurants-all">
        <img src={img} alt="card" />
        <ul>
          <stron>4.7</stron>
          <li>Deli</li>
          <li>Bagels</li>
          <li>$$</li>
        </ul>
      </div>
    </div>
  );
}
