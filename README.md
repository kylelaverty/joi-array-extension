# joi-array-extension

Joi extensions for extra string rules.

[![npm version](https://badge.fury.io/js/%40klaverty%2Fjoi-array-extension.svg)](http://badge.fury.io/js/joi-array-extension)
[![Build Status](https://secure.travis-ci.org/kylelaverty/joi-array-extension.svg?branch=master)](http://travis-ci.org/kylelaverty/joi-array-extension)

Lead Maintainer: [Kyle Laverty](https://github.com/kylelaverty)

# Overview

This extention is focused on adding the ability to split strings into arrays so that they can be used with the rest of the joi ecosystem as if they were arrays.

# Usage

Usage is a two steps process. First, a schema is constructed using the provided types and constraints:

```js
const BaseJoi = require('joi');
const Extension = require('joi-array-extension');
const Joi = BaseJoi.extend(Extension);

const schema = Joi.array().separator(',').items(...);
```

# API
See the [API Reference](https://github.com/kylelaverty/joi-array-extension/blob/master/API.md).