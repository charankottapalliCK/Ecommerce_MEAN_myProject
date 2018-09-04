var express = require('express');
var router = express.Router();
var Product = require('../models/product');
/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function (err,docs) {
      var productsLoop = [];
      var loopsize = 4;
      for(var i=0;i<docs.length;i+=loopsize){
        productsLoop.push(docs.slice(i,i+loopsize));
      }
      res.render('store/index', { title: 'Shopping cart',products:productsLoop });
  });

});

module.exports = router;
