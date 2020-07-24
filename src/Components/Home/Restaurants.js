import React from "react";

import "./style.css";

import all from "../../assets/All.png";
import pizza from "../../assets/pizza.png";
import asian from "../../assets/asian.png";
import burger from "../../assets/burger.png";
import dessers from "../../assets/dessers.png";
import barbercue from "../../assets/barbercue.png";
import thai from "../../assets/thai.png";
import sushi from "../../assets/sushi.png";

export default function Restaurants() {
  return (
    <div className="options-restaurantes">
      <div>
        <a href="#">
          <img src={all} />
        </a>
        <>
          <span>
            <strong>All</strong>
          </span>
        </>
      </div>
      <div>
        <a href="#">
          <img src={pizza} />
        </a>
        <>
          <span class="burger">
            <strong>Pizza</strong>
          </span>
        </>
      </div>
      <div>
        <a href="#">
          <img src={asian} />
        </a>
        <>
          <span class="burger">
            <strong>Asian</strong>
          </span>
        </>
      </div>
      <div>
        <a href="#">
          <img src={burger} />
        </a>
        <>
          <span class="burger">
            <strong>Burger</strong>
          </span>
        </>
      </div>
      <div>
        <a href="#">
          <img src={barbercue} />
        </a>
        <>
          <span class="bar">
            <strong>Barbecue</strong>
          </span>
        </>
      </div>
      <div>
        <a href="#">
          <img src={dessers} />
        </a>
        <>
          <span class="burger">
            <strong>Dessers</strong>
          </span>
        </>
      </div>
      <div>
        <a href="#">
          <img src={thai} />
        </a>
        <>
          <span>
            <strong>Thai</strong>
          </span>
        </>
      </div>
      <div>
        <a href="#">
          <img src={sushi} />
        </a>
        <>
          <span>
            <strong>Sushi</strong>
          </span>
        </>
      </div>
    </div>
  );
}
