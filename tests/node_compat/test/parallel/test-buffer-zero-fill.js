// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 23.9.0
// This file is automatically generated by `tests/node_compat/runner/setup.ts`. Do not modify this file manually.

'use strict';

require('../common');
const assert = require('assert');

// Tests deprecated Buffer API on purpose
const buf1 = Buffer(100);
const buf2 = new Buffer(100);

for (let n = 0; n < buf1.length; n++)
  assert.strictEqual(buf1[n], 0);

for (let n = 0; n < buf2.length; n++)
  assert.strictEqual(buf2[n], 0);
