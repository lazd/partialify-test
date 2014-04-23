require('insert-css')(require('./css/index.css'));

// A relative include outside of node_modules is processed correctly
var Button = require('../Button');

module.exports = function(buttonLabels) {
  this.el = document.createElement('div');
  this.el.className = 's-Group';

  var buttons = this.buttons = [];
  buttonLabels.forEach(function(label) {
    buttons.push(new Button(buttonLabels));
  });
};
