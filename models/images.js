const fs = require('fs');
const path = require('path');

const settings = require('../settings');

class Image {
  constructor() {
    this.pictures = [];
    this.title = '';

    this.findPicture(settings.path);
    console.log('Picture count: ' + this.pictures.length);
  }

  findPicture(folder) {
    try {
      const stats = fs.lstatSync(folder);
      if (stats && stats.isDirectory()) {
        var folders = fs.readdirSync(folder);
        for (var i = 0; i < folders.length; ++i) {
          var p = path.join(folder, folders[i]);
          if (folders[i] !== '.' && folders[i] !== '..') {
            var stat = fs.statSync(p);
            if (stat.isDirectory()) {
              this.findPicture(p);
            } else if (folders[i].toLowerCase().endsWith('jpg')) {
              this.pictures.push(p);
            }
          }
        }
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  getImageData(index, callback) {
    if (index >= this.pictures.length || index < 0) {
      if (callback) callback();
    } else {
      var pic = this.pictures[index];
      var pathList = pic.split('/');
      this.title = pathList[pathList.length - 2];

      fs.readFile(pic, function(err, data) {
        if (err) {
          console.error(err.message);
          if (callback) callback();
        } else {
          if (callback) callback(data);
        }
      });
    }
  }
}

module.exports = new Image();
