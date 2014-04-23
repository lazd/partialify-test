require('insert-css')(require('../css/index.css'));

var Button = require('../../Button/js/index.js');

module.exports = function(buttonLabels) {
  this.el = document.createElement('div');
  this.el.className = 's-Group';

  var buttons = this.buttons = [];
  buttonLabels.forEach(function(label) {
    buttons.push(new Button(buttonLabels));
  });
};
