"use strict";

var server = require("./server");

exports.testSomething = function(test) {
	test.equals(3, server.number(), "number");
	test.done();
};