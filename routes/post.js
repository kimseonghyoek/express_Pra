const express = require("express");
const { User } = require("../models");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const localST = require("../passport/localStrategy")

router.use(express.urlencoded());
router.use(express.json());

router.post("/post", async (req, res, next) => {
  const {name, email} = req.body;
  let password = req.body;
  const user = new User(req.body);
  const Salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(user.password, Salt);
  try {
    const exUser = await User.findOne({ where : { email }});
    if(exUser) {
      console.error("이메일이 중복됩니다.");
      return res.redirect('auth/signup');
    } 
    await User.create({
      name,
      email,
      password,
    });
    console.log('회원가입 성공!!');
    return res.redirect('/');
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;