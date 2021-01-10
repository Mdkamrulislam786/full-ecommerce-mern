import React, { useState } from "react";
import Layout from "../core/Layout";
import { Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../Auth";

const Signin = () => {
  const [values, setValues] = useState({
    email: "kamrulislam@gmail.com",
    password: "24688642100k",
    error: "",
    loading: false,
    redirectToRefferer: false,
  });

  const { email, password, loading, error, redirectToRefferer } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSignup = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
        return setValues({ ...values, error: data.error, loading: false });
      } else {
        return authenticate(data, () => {
          setValues({
            ...values,
            redirectToRefferer: true,
          });
        });
      }
    });
  };

  const signupForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control"
          value={email}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          value={password}
        />
      </div>
      <button onClick={clickSignup} className="btn btn-primary">
        Signin
      </button>
    </form>
  );

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className="alert alert-info">
        <h2>Loading....</h2>
      </div>
    );

  const redirectUser = () => {
    if (redirectToRefferer) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  return (
    <Layout
      title="Signin  page"
      description="Sign in to Node React Ecom app"
      className="container col-md-8 offset-md-2"
    >
      {showLoading()}
      {showError()}
      {signupForm()}
      {redirectUser()}
    </Layout>
  );
};

export default Signin;
