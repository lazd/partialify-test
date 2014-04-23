# partialify-test
> A test of partialify with nested modules

## Usage

Run `npm test` to dump the bundle the stdout.

## Goal

Browserify modules that require other modules that make use of partialify.

## Problem

Partialify doesn't work on modules in the `node_modules` folder.

The following works nicely (from `Group/index.js`, with `Button/` as an adjacent folder):

```js
var Button = require('../Button'); // Hooray!
```

The following doesn't work (from `Group/index.js`, with `node_modules/Button/`):

```js
var Button = require('Button'); // SyntaxError: Unexpected token .
```
