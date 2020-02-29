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
  getBudget: function () {
    return axios.get("/api/budget/");
  },
  getMyBills: function () {
    return axios.get("/api/budget/bills");
  },
  deleteMyBill: function (id) {
    return axios.delete("/api/bills/" + id);
  },
  deleteMyBudget: function (id) {
    return axios.delete("/api/budget/" + id);
  },
  billUpadate: function (id) {
    return axios.put("/api/updatebills/" + id);
  },
  getBill: function (id) {
    return axios.get("/api/updatebills/" + id);
  }
};