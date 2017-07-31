function setRouter(app){ 
 var router = app; 

var { readFileAsync, generateRouter } = require('./utils.js');

var config = require('./mock.config.js');

for(var method in config){
    var url = config[method];

    generateRouter(app, url, method);
}}
 module.exports.setRouter = setRouter