var gulp = require('gulp'),
	concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    util = require('gulp-util');


gulp.task('lib', function () {

	// Fonts
	gulp.src([  __dirname + '/../src/lib/bootstrap/fonts/*',
		])
		.pipe(gulp.dest(__dirname + '/../public/fonts/'));
});
