const electron = require('electron');
const url = require('url');
const path = require('path');

const app = electron.app;

(function() {
  'use strict';

  let mainWindow;

  const create = function() {
    mainWindow = new electron.BrowserWindow({width: 400, height: 300});
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'layout', 'configurator.html'),
      protocol: 'file:',
      slashes: true,
    }));
    mainWindow.on('closed', function() { mainWindow = null; });
  };

  app.on('ready', create);

  app.on('window-all-closed', function() { app.quit(); });

  app.on('activate', function() {
    if (mainWindow === null) {
      create();
    }
  });
})();
