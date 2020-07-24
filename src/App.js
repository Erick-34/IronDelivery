import React from "react";
import NavBar from "./Components/Home/Navbar";
import MyOrder from "./Components/Home/Order";
import CardRestaurants from './Components/Home/CardRestaurants'


function App() {
  return (
    <>
      <NavBar />
      <MyOrder />
      <CardRestaurants />
    </>
  );
}

export default App;
