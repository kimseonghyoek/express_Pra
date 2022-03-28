const express = require("express");
const { User } = require("../models");
const router = express.Router();

router.use(express.urlencoded());
router.use(express.json());

  router.post("/post", async (req, res) => {
    const {name, email, password} = req.body;
    try {
      await User.create({
        name, email, password
      });
      alert("회원가입이 완료되었습니다!")
    } catch(err) {
        console.log(err);
    }

  });

module.exports = router;