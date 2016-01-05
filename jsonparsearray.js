// imports
// =======

var Parser = require('jsonparse');
var util = require('util');

// Parser
// ========

f = function() {
  Parser.call(this);

  this.res = [];
  this.onValue = function(value) {
    if (!this.stack.length) this.res.push(value);
  };
};
util.inherits(f, Parser);


f.prototype.get = function() {
  return this.res;
};

f.prototype.clear = function() {
  this.res = [];
};

// exports
// ======

module.exports = f;
