task("default", ["lint"]);

desc("Lint all the things");
task("lint", [], function() {
	console.log("linting...");
	var lint = require("./build/lint/lint_runner.js");
	lint.validateFile("jakefile.js", {}, {});
});