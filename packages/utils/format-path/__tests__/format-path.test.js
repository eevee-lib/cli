'use strict';

const log = require('../lib');
const assert = require('assert').strict;

assert.strictEqual(log(), 'Hello from util');
console.info("log tests passed");
