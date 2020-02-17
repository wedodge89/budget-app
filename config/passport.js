const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/User");

// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Exporting our configured passport
module.exports = passport;