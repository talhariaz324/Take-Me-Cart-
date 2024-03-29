import React from "react";
import Product from "./product.js";
export default function productList(props) {
  // here we just write props which will make object of reciving parameters.
  console.log(props);
  // Pure Function: Those functions which input and output never get change, so their output will also not get change so this is called the pure function. Similary, we cant change props values here
  return props.productList.length > 0 ? (
    props.productList.map((product, index) => {
      return (
        <Product
          productS={product}
          key={index}
          incrementQuantity={props.incrementQuantity}
          index={index}
          decrementQuantity={props.decrementQuantity}
          removePro={props.removePro}
        />
      );
    })
  ) : (
    <h1 className="text-center">Please Add Product to Cart!</h1>
  );
}
