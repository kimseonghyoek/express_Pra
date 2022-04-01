const express = require("express");
const { User } = require("../models");
const router = express.Router();
const bcrypt = require("bcrypt");

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
      return console.error("이메일이 중복됩니다.");
    } 
    await User.create({
      name,
      email,
      password,
    });
    return res.redirect('/');
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
