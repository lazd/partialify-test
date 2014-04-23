var browserify = require('browserify');
var partialify = require('partialify');

var b = browserify();
b.add('./Group');
b.transform(partialify);

b.bundle().pipe(process.stdout);
