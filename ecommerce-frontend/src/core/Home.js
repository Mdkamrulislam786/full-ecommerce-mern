import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { API } from "../config";
import { getProducts } from "./apiCore";
import Card from "./Card";

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState("");

  //LOAD_PRODUCTS_BY_SELL
  const loadProductsBySell = () => {
    getProducts("sold").then((data) => {
      if (error) {
        setError(data.error);
      } else {
        setProductsBySell(data);
      }
    });
  };

  //LOAD_PRODUCTS_BY_ARRIVAL
  const loadProductsByArrival = () => {
    getProducts("createdAt").then((data) => {
      if (error) {
        setError(data.error);
      } else {
        setProductsByArrival(data);
      }
    });
  };

  //POPULATE STATES WHEN LOAD
  useEffect(() => {
    loadProductsBySell();
    loadProductsByArrival();
  }, []);

  return (
    <Layout
      title="Home page"
      description="Node React Ecom app"
      className="container-fluid"
    >
      <h2 className="mb-4">New Ariival</h2>
      <div className="row">
        {productsByArrival.map((product, i) => (
          <Card key={i} product={product} />
        ))}
      </div>
      <h2 className="mb-4">Best Sellers</h2>
      <div className="row">
        {productsBySell.map((product, i) => (
          <Card key={i} product={product} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
