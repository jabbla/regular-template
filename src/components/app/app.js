var Regular = require('regularjs');
var template = require('./app.html');

var App = Regular.extend({
    template: template,
    config: function(data){}
});

module.exports = App;