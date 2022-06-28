import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import React from "react";
import ProductList from "./components/productList.js";
function App() {
  const productList = [
    {
      price: 9999,
      name: "Iphone 10S Max",
      quantity: 0,
    },
    {
      price: 999,
      name: "Redmi Max",
      quantity: 0,
    },
  ];
  return (
    <React.Fragment>
      {/* using component */}
      <NavBar />
      {/* for passing some argument to other component we use below: as here we are passing array of objects to productList */}
      {/* In JSX, we have to use the {} this braces for using javasctipt variables   */}
      <ProductList productList={productList} />
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
