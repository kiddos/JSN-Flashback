var fs = require('fs');
var path = require('path');
var express = require('express');
var router = express.Router();

var IMAGE_ROOT_FOLDER =
  '/media/nas/09活動照片/106學年度各項活動/106學年度上學期';

var pictures = [];

function findPictures(folder) {
  var folders = fs.readdirSync(folder);
  for (var i = 0; i < folders.length; ++i) {
    var p = path.join(folder, folders[i]);
    if (folders[i] !== '.' && folders[i] !== '..') {
      var stat = fs.statSync(p);
      if (stat.isDirectory()) {
        findPictures(p);
      } else if (folders[i].toLowerCase().endsWith('jpg')) {
        pictures.push(p);
      }
    }
  }
}

findPictures(IMAGE_ROOT_FOLDER);
console.log('Picture count: ' + pictures.length);

var title = '';

router.get('/', function(req, res, next) {
  var index = parseInt(Math.random() * (pictures.length - 1));
  var pic = pictures[index];
  var pathList = pic.split('/');
  title = pathList[pathList.length - 2];
  console.log('loading ' + pic);
  fs.readFile(pic, function(err, data) {
    if (!err) {
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.end(data, 'binary');
    }
  });
});

router.get('/title', function(req, res, next) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(title);
});

module.exports = router;
