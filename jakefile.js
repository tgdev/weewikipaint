/*global desc, task, jake, fail, complete */
(function() {

	"use strict";

	desc("Build and Test");
	task("default", ["lint"]);

	desc("Lint all the things");
	task("lint", [], function() {

		console.log("\nLinting...");

		var lint = require("./build/lint/lint_runner.js"),
			files = new jake.FileList(),
			// options = require("./.jshintrc");
			options = nodeLintOptions(),
			passed;

		files.include("**/*.js");
		files.exclude("node_modules");

		passed = lint.validateFileList(files.toArray(), options, {});

		if(!passed) fail("Lint failed!");

	});

	desc("Integrate Code");
	task("integrate", ["default"], function(){
		console.log("\nIntegrating...");
		console.log("1. Make sure 'git status' is clean.");
		// console.log("2. Build on integration box (IGNORE)");
		console.log("2. Test code - 'jake'");
		console.log("   a. If jake fails: STOP and try again after fixing issue.");
		console.log("3. Switch to integration branch - 'git checkout integration'");
		console.log("4. Merge Master into Integration - 'git merge master --no-ff --log'");
		console.log("5. Switch back to master - 'git checkout master'");
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