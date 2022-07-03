import React from "react";

export default function footer(props) {
  return (
    <div className="container-fluid fixed-bottom">
      <div className="row">
        <button
          className="btn btn-danger col-2"
          onClick={() => {
            props.resetQuantity();
          }}
        >
          Reset
        </button>
        <div className="col-8 bg-dark text-light text-center">
          {props.totalAmt}
        </div>
        <button className="btn btn-primary col-2">Pay Now</button>
      </div>
    </div>
  );
}
