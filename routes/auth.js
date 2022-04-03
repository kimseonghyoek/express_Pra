const express = require('express');
const router = express.Router();
const passport = require('passport');
const local = require('passport-local');

router.get('/',  (req, res) => {
  res.render('auth');
})

router.get('/signin', (req, res) => {
  res.render('sign');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

// 전략은 로컬로 하며 성공할 경우 Hww가 나오고 실패할 경우 썅이 나온다
router.post('/login', async(req, res, next) => {
  try {
    await passport.authenticate('local', {
      successRedirect: res.send("HWW"),
      failureRedirect: res.send("썅")
    })
  } catch(err) {
    console.error(err);
  }
})

module.exports = router;