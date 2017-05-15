var gulp = require("gulp");
gulp.task("autoprefixer", function() {
	var postcss = require("gulp-postcss");
	var sourcemaps = require("gulp-sourcemaps");
	var watch = require("gulp-watch");
	var batch = require("gulp-batch");
gulp.task("watch", function() {
	watch(
		"*.css",
		batch(function(events, done) {
			gulp.start("autoprefixer", done);
		})
	);
});

 autoprefixer = require("autoprefixer");

	return gulp
		.src("style.css")
		.pipe(sourcemaps.init())
		.pipe(postcss([autoprefixer()]))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("./dist"));
});
gulp.task("default", function() {
	// place code for your default task here
});

