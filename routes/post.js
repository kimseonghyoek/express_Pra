const express = require("express");
const { User } = require("../models");
const router = express.Router();
const bcrypt = require("bcrypt");

router.use(express.urlencoded());
router.use(express.json());

router.post("/post", async (req, res) => {
  const {name, email} = req.body;
  let password = req.body;
  const user = new User(req.body);
  const Salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(user.password, Salt);
  try {
    await User.create({
      name,
      email,
      password,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
