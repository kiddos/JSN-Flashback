const express = require('express');
const router = express.Router();

const images = require('../models/images');

router.get('/', function(req, res, next) {
  var index = parseInt(Math.random() * (images.pictures.length - 1));

  images.getImageData(index, function(data) {
    if (data) {
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.end(data, 'binary');
    } else {
      res.status(404).send('Not Found');
    }
  });
});

router.get('/title', function(req, res, next) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(images.title);
});

module.exports = router;
