import React from "react";

export default function product(props) {
  console.log(props); // check here what we are getting and then use it.
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5">
          <h2>
            {props.productS.name}
            <span class="badge bg-secondary ">₹{props.productS.price}</span>
          </h2>
        </div>
        <div className="col-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary">
              -
            </button>
            <button type="button" class="btn btn-secondary">
              {props.productS.quantity}
            </button>
            <button type="button" class="btn btn-secondary">
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
