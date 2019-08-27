var express = require('express');
var router = express.Router();
var low = require('lowdb')
var FileSync = require('lowdb/adapters/FileSync')

var adapter = new FileSync('data/commapis.json')
var db = low(adapter)

/* GET commapi listing. */
router.get('/', function(req, res, next) {
  res.send(db.get('commapi').sortBy('name').value());
});

module.exports = router;
