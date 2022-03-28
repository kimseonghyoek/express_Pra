const express = require('express');
const router = express.Router();

router.get('/',  (req, res) => {
  res.render('auth');
})

router.get('/signin', (req, res) => {
  res.render('sign');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;