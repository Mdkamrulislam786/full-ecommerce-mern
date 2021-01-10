import { API } from "../config";

//SIGNUP
export const signup = (user) => {
  // console.log(user);
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

//SIGNIN
export const signin = (user) => {
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

//UATHENTICATE
export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
  }
  next();
};

//signout redirect
export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
  }
  next();
  return fetch(`${API}/signout`, {
    method: "GET",
  })
    .then((res) => console.log("response", res))
    .catch((err) => console.log(err));
};

//IS AUTHENTICATED
export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
