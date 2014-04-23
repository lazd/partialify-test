# partialify-test
> A test of partialify with nested modules

## Goal

Browserify modules that require other modules that make use of partialify.

## Problem

Partialify doesn't work on modules in the `node_modules` folder.

## Solution

Make sure installed modules have the following in their `package.json`:

```json
"browserify": { "transform": [ "partialify" ] }
```
