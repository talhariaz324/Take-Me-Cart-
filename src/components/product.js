import React from "react";

export default function product(props) {
  console.log(props); // check here what we are getting and then use it.
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5">
          <h2>
            {props.productS.name}
            <span className="badge bg-secondary ">₹{props.productS.price}</span>
          </h2>
        </div>
        <div className="col-3">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                props.decrementQuantity(props.index);
              }}
            >
              -
            </button>
            <button type="button" className="btn btn-secondary">
              {props.productS.quantity}
            </button>
            {/* here we have to define function which will increment the quantity, but as we cant change the props so we have to define this function into the file where from we define our array or object */}
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                props.incrementQuantity(props.index);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="col-4">
          {props.productS.quantity * props.productS.price}
        </div>
      </div>
    </div>
  );
}
