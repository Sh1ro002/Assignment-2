var express = require('express');
var router = express.Router();

/* the path to home :) */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: 'Home' });
});

/* this tells u where to find about me */
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme.ejs', { title: 'AboutMe' });
});

/* this one tells u where to find projects */
router.get('/projects', function(req, res, next) {
  res.render('projects.ejs', { title: 'Projects' });
});

/* this one tells u where to find feedbackm */
router.get('/feedback', function(req, res, next) {
  res.render('feedback.ejs', { title: 'Feedback' });
});

module.exports = router;