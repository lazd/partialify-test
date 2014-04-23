var browserify = require('browserify');
var partialify = require('partialify');

var b = browserify();
b.add('./Group/js/index.js');
b.transform(partialify);

b.bundle().pipe(process.stdout);
