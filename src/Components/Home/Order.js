import React from "react";

import emoji from "../../assets/emoji.png";
import clock from "../../assets/clock.png";
import orderBurger from "../../assets/orderBurger.png";

import "./style.css";

export default function MyOrder() {
  return (
    <div class="order-container">
      <h2>
        My <img src={emoji} alt="emoji-de-oculos" />
      </h2>
      <h2>Order</h2>
      <div className="addres-time">
        <div className="addres">
          <span>625 St Erick Henrique</span>
          <span>
            <a href="#">Edit</a>
          </span>
        </div>
        <div className="time">
          <img src={clock} />
          <span>35 min</span>
          <span>
            <a href="#">Choose time</a>
          </span>
        </div>
      </div>
      <div className="order">
        <div class="OrderByID">
          <img src={orderBurger} alt="burgerOrder" />
          <span>1 X</span>
          <span>Beach BBQBurger</span>
          <span>$14.99</span>
        </div>
        <div class="OrderByID">
          <img src={orderBurger} alt="burgerOrder" />
          <span>1 X</span>
          <span>Beach BBQBurger</span>
          <span>$14.99</span>
        </div>
        <div class="OrderByID">
          <img src={orderBurger} alt="burgerOrder" />
          <span>1 X</span>
          <span>Beach BBQBurger</span>
          <span>$14.99</span>
        </div>
        <div class="OrderByID">
          <img src={orderBurger} alt="burgerOrder" />
          <span>1 X</span>
          <span>Beach BBQBurger</span>
          <span>$14.99</span>
        </div>
      </div>
      <div class="total-delivery">
        <span className="total-name">Total: </span>
        <span>$25.97</span>
      </div>
      <hr></hr>
      <div className="checkout">
        <div>
          <a href="#">Checkout</a>
        </div>
      </div>
    </div>
  );
}
