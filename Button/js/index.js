require('insert-css')(require('../css/index.css'));

module.exports = function(label) {
  this.el = document.createElement('button');
  this.el.className = 's-Button';
  this.el.textContent = label;
};
