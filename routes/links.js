var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Link = mongoose.model('Link');

/* GET home page. */
router.post('/', function (req, res, next) {
  var link = new Link();
  link.chromeuserid = req.body.userid;
  link.title = req.body.title;
  link.category = req.body.category;
  link.url = req.body.url;
  link.save(function (err) {
    if (err) {
      next(err);
    }
    res.status(200).json(link);
    console.dir(link);
  });

});

router.get('/:id', function (req, res, next) {
   var id = req.params.id;
  Link.allForUser(id ,function (err, model) {
    if (err) {
      next(err);
    }
     res.status(200).json(model);
  });
});



module.exports = router;
