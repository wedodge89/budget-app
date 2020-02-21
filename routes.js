const passport = require("passport");
const express = require("express");
const router = express.Router();
const db = require("./models");
var isAuthenticated = require("./config/middleware/isAuthenticated");

router.post("/api/register", function (req, res) {
  console.log("registering user");

  //Do password validation here before attempting to register user, such as checking for password length, captial letters, special characters, etc.

  db.User.register(
    new db.User({ username: req.body.username, email: req.body.email }),
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      passport.authenticate("local")(req, res, function (data) {
        res.json(req.user);
      });
    }
  );
});

router.post("/api/login", function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json(info);
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.json(user);
    });
  })(req, res, next);
});

router.post("/api/budgetform", function (req, res) {
  db.Budget.create({ total: req.body.total, rent: req.body.rent, car: req.body.car, utility: req.body.utility, food: req.body.food, school: req.body.school, misc: req.body.misc })
    .then(function(dbBudget) {
      return db.User.findOneAndUpdate({$set: {budget: dbBudget}} )
    })
    .then(function(dbUser){
      res.json(dbUser)
    })
    .catch(function(err){
      console.log(err);
      res.json(err);
    });
});

router.post("/api/billsform", function (req, res) {
  db.Bills.create({name: req.body.name, amount: req.body.amount, date: req.body.amount})
    .then(function(dbBill) {
      return db.User.findOneAndUpdate({}, {$push: {bills: dbBill}}, {new: true} );
    })
    .then(function(dbUser){
      res.json(dbUser)
    })
    .catch(function(err){
      console.log(err);
      res.json(err);
    });
})


router.get("/api/logout", function (req, res) {
  req.logout();
  res.json({ message: "logged out" });
});

router.get("/api/user", function (req, res) {
  console.log("available username");
  if (req.query.username) {
    db.User.find({ username: req.query.username })
      .then(result => {
        res.json({ length: result.length });
      })
      .catch(err => res.status(422).json(err));
  } else {
    res.json({ message: "no username entered for query" });
  }
});

router.get("/api/authorized", isAuthenticated, function (req, res) {
  console.log("working")
  res.json(req.user);
});

module.exports = router;