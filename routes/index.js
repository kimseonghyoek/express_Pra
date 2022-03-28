const express = require("express");
const router = express.Router();

router.get("/", async(req, res) => {
  try {
    await
      res.render('main');
  } catch(err) {
    console.err(err);
  }
});

module.exports = router;