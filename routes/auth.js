const express = require("express");
const router = express.Router();
const passport = require("passport");
const local = require("passport-local");
const User = require("../models/user");
const app = express();

router.get("/", (req, res) => {
  res.render("auth");
});

router.get("/signin", (req, res) => {
  res.render("sign");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

passport.use(
  new local((username, password, done) => {
    // User.findOne({
    //   username: username
    // }, (err, user) => {
    //   if(err) {
    //     return done(err);
    //   }
    //   if(!user) {
    //     return done(null, false, {
    //       message: 'Incorrect username'
    //     });
    //   }
    //   if(!user.validPassword(password)) {
    //     return done(null, false, {
    //       message: 'Incorrect password'
    //     });
    //   }
    //   return done(null, user);
    // })
  })
);

// 전략은 로컬로 하며 성공할 경우 Hww가 나오고 실패할 경우 썅이 나온다
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: '/',
    failureRedirect: '/auth/signin'
  })
);

module.exports = router;
