import "./App.css";
import NavBar from "./components/navbar";
import React, { useState } from "react";
import ProductList from "./components/productList.js";
import Footer from "./components/footer.js";
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
  //  lets make state hook which is necessary for using setState or useState
  let [newProList, setNewProList] = useState(productList); // in small braces you have to pass the type, so here our type is list so we can pass it with [] this braces and then set them after using setNewProList method. but we default set it by giving name nand this is going to first variable which name is newProList and we can use it where we need productList

  let [totalAmt, setTotalAmt] = useState(0);
  const incrementQuantity = (index) => {
    let newProductList = [...newProList]; // as here we are passing array copy
    let newTotalAmt = totalAmt; // here is simple data type int so we pass it without copy
    newProductList[index].quantity++;
    newTotalAmt += newProductList[index].price;
    setNewProList(newProductList);
    setTotalAmt(newTotalAmt);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...newProList];
    let newTotalAmt = totalAmt;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmt -= newProductList[index].price;
    }
    setNewProList(newProductList);
    setTotalAmt(newTotalAmt);
  };

  const resetQuantity = () => {
    let newProductList = [...newProList];
    newProductList.forEach((product) => {
      // we can use map but it require return value so we are not using it.
      product.quantity = 0;
    });
    setNewProList(newProList);
    setTotalAmt(0);
  };

  const removePro = (index) => {
    let newProductList = [...newProList];
    let newTotalAmt = totalAmt;
    // console.log(newProductList)
    newTotalAmt -= newProductList[index].price * newProductList[index].quantity; // write before the splice because after it tries to call index of splice somehow.
    newProductList.splice(index, 1); // second argument shows to remove how many arguments
    // console.log(newProductList);
    setNewProList(newProductList);
    setTotalAmt(newTotalAmt);
  };

  return (
    <React.Fragment>
      {/* using component */}
      <NavBar />
      {/* for passing some argument to other component we use below: as here we are passing array of objects to productList */}
      {/* In JSX, we have to use the {} this braces for using javasctipt variables   */}
      <ProductList
        productList={newProList}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        removePro={removePro}
      />
      <Footer totalAmt={totalAmt} resetQuantity={resetQuantity} />
    </React.Fragment>
  );
}

export default App;
