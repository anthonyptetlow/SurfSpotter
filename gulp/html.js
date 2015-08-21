var gulp = require('gulp'),
	minifyHTML = require('gulp-minify-html'),
	htmlToNg = require('gulp-ng-html2js'),
	concat = require('gulp-concat'),
    util = require('gulp-util');

gulp.task('html', function() {
	return gulp.src([__dirname + '/../src/**/*.html', '!' + __dirname + '/../src/lib/**/*.html', '!' + __dirname + '/../src/**/partials/**/*.html'])
        .pipe(!!util.env.production ? minifyHTML() : util.noop())
		.pipe(gulp.dest(__dirname + '/../public/'))
		.pipe(htmlToNg({
	        moduleName: "surfspotter",
	        declareModule: false
		}))
        .pipe(concat('partials.js'))
		.pipe(gulp.dest(__dirname + '/../public/js/'));
});
