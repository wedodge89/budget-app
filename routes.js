const passport = require("passport");
const express = require("express");
const router = express.Router();
const db = require("./models");
var isAuthenticated = require("./config/middleware/isAuthenticated");

router.post("/api/register", function (req, res) {
  console.log("registering user");

  //Do password validation here before attempting to register user, such as checking for password length, captial letters, special characters, etc.

  db.User.register(
    new db.User({ firstname: req.body.firstname, username: req.body.username, email: req.body.email }),
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
      return db.User.findOneAndUpdate({_id: req.user._id}, {$set: {budget: dbBudget._id}} )
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
  db.Bills.create({name: req.body.name, amount: req.body.amount, category: req.body.category, date: req.body.date})
    .then(function(dbBill) {
      return db.User.findOneAndUpdate({_id: req.user._id}, {$push: {bills: dbBill._id}}, {new: true} );
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



router.get("/api/budget/", isAuthenticated,  function(req, res){
  db.User.find({_id: req.user._id})
  .populate("budget")
  .then(function(dbBudget){
    res.json(dbBudget);
    console.log(dbBudget);
    console.log(req.user._id)
  })
  .catch(function(err){
    res.json(err);
  });
 
});

router.get("/api/budget/bills", isAuthenticated, function(req, res){
  db.User.findOne({_id: req.user._id})
  .populate("bills")
  .then(function(dbBill){
    res.json(dbBill);
    console.log(dbBill)
  })
  .catch(function(err){
    res.json(err);
  });
});

router.delete("/api/bills/:id", isAuthenticated, function(req, res) {
  db.Bills.deleteOne({_id: req.params.id})
    console.log(req.params.id),
    db.User.findOneandUpdate({_id: req.user._id},{ $pull: { bills: { $in: [req.params.id] }}})
    .then(res => {
      console.log(res)
    }).catch((error) =>{
      console.log(error)
    }
  )
  console.log("Bill has been deleted")
});

module.exports = router;