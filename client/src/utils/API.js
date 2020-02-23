import axios from "axios";

export default {
  register: function (user) {
    return axios.post("/api/register", user);
  },
  login: function (user) {
    return axios.post("/api/login", user);
  },
  submit: function (user) {
    return axios.post("/api/budgetform", user);
  },
  billSubmit: function (user) {
    return axios.post("/api/billsform", user)
  },
  isAuthorized: function () {
    return axios.get("/api/authorized");
  },
  logout: function () {
    return axios.get("/api/logout");
  },
  availableUN: function (username) {
    return axios.get("/api/user/?username=" + username);
  },
  getBills: function () {
    return axios.get("/api/bills/");
  },
  getBudget: function () {
    return axios.get("/api/budget/");
  },
  getMyBills: function () {
    return axios.get("/api/budget/bills");
  }
};