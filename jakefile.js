/*global desc, task, jake, fail, complete */
(function() {

	"use strict";

	task("default", ["lint"]);

	desc("Lint all the things");
	task("lint", [], function() {

		console.log("linting...");

		var lint = require("./build/lint/lint_runner.js"),
			files = new jake.FileList();
			// options = require("./.jshintrc");

		files.include("**/*.js");
		files.exclude("node_modules");

		lint.validateFileList(files.toArray(), nodeLintOptions(), {});

	});

	function nodeLintOptions() {
		return {
			bitwise: true,
			curly: false,
			eqeqeq: true,
			forin: true,
			immed: true,
			latedef: true,
			newcap: true,
			noarg: true,
			noempty: true,
			nonew: true,
			regexp: true,
			undef: true,
			strict: true,
			trailing: true,
			node: true
		};
	}

})();