var fs = require('fs'),
    util = require("util"),
    http = require('http'),
    https = require('https'),
    path = require('path');

var ghost = require('ghost');
ghost({
  config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {

    //app.use(ghostServer.config.paths.subdir, ghostServer.rootApp);
    //console.log(ghostServer.config.paths.subdir);
    //console.log(ghostServer.config.paths);
    //console.log(ghostServer.rootApp);
    ghostServer.start();
});











