"use strict";

var should = require('chai').should();
var libcash = require('../');

describe('#versionGuard', function() {
  it('global._libcash should be defined', function() {
    should.equal(global._libcash, libcash.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      libcash.versionGuard('version');
    }).should.throw('More than one instance of libcash');
  });
});
