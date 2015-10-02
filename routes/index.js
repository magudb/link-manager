var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Link = mongoose.model('Link');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Squirrel' });
});

router.get('/:id', function (req, res, next) {
   var id = req.params.id;
  Link.allForUser(id ,function (err, model) {
    if (err) {
      next(err);
    }
     res.render('links', {links:model});
  });
});

module.exports = router;
