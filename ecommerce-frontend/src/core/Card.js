import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";

const Card = ({ product }) => {
  return (
    <div className="col-3 mb-3">
      <div className="card">
        <div className="card-header">{product.name}</div>
        <div className="card-body">
          <ShowImage item={product} url="product" />
          <div className="d-flex justify-content-between">
            <p>{product.description.substring(0,100)}</p>
            <p>${product.price}</p>
          </div>
          <div className="d-flex justify-content-between flex-wrap ">
            <Link to="/">
              <button className="btn btn-outline-primary mt-2 mb-2">
                View Product
              </button>
            </Link>
            <button className="btn btn-outline-warning mt-2 mb-2">
              Add to card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
