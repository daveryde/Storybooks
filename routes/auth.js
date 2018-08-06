const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/dashboard');
  });


  router.get('/verify', (req, res) => {
    if(req.user){
      console.log(req.user);
    } else {
      req.flash('error_msg', 'Please log in');
    }
  });

  router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/');
  });

module.exports = router;