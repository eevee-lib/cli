'use strict';

const exec = require('../lib');
const assert = require('assert').strict;

assert.strictEqual(exec(), 'Hello from init');
console.info("exec tests passed");
