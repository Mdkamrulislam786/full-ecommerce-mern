import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../Auth";
import Layout from "../core/Layout";

const AdminDashboard = () => {
  const {
    admin: { _id, name, email, role },
  } = isAuthenticated();

  const token = isAuthenticated().token;

  const adminLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">Admin Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/craete/category">
              Craete Caegory
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/crate/product">
              Craete Product
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Admin Information</h3>
        <ul className="list-group">
          <li className="list-group-item">{name}</li>
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">
            {role === 1 ? "Admin" : "Registered admin"}
          </li>
        </ul>
      </div>
    );
  };

  const purchaseHistory = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Purchase history</h3>
        <ul className="list-group">
          <li className="list-group-item">details</li>
        </ul>
      </div>
    );
  };

  return (
    <Layout
      title="Dashboard"
      description={`Good Day ${name}`}
      className="container-fluid"
    >
      <div className="row">
        <div className="col-3">{adminLinks()}</div>
        <div className="col-9">
          {adminInfo()}
          {purchaseHistory()}
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
