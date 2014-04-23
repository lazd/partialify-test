require('insert-css')(require('./css/index.css'));

// A normal include is not processed by partialify
var Button = require('Button');

module.exports = function(buttonLabels) {
  this.el = document.createElement('div');
  this.el.className = 's-Group';

  var buttons = this.buttons = [];
  buttonLabels.forEach(function(label) {
    buttons.push(new Button(buttonLabels));
  });
};
