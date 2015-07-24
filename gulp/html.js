var gulp = require('gulp'),
	minifyHTML = require('gulp-minify-html'),
    util = require('gulp-util');

gulp.task('html', function() {
	return gulp.src(__dirname + '/../src/**/*.html')
        .pipe(!!util.env.production ? minifyHTML() : util.noop())
		.pipe(gulp.dest(__dirname + '/../public/'));
});
