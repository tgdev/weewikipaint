"use strict";

var server = require("./server"),
	assert = require("assert");

exports.testSomething = function(test) {
	// test.equals(3, server.number(), "number");
	assert.equal(3, server.number(), "number");
	test.done();
};