var gulp = require('gulp'),
	less = require('gulp-less'),
	concat = require('gulp-concat'),
	minifyCss = require('gulp-minify-css'),
	util = require('gulp-util'),
	recess = require('gulp-recess'),
	postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer-core');

var cssshrink = require('gulp-cssshrink');


gulp.task('styles', function() {
	return gulp.src(__dirname + '/../src/less/App.less')
		// .pipe(recess())
		// .on('error', function (error) {
	 //        console.error(String(error));
  //       })
  //       .pipe(recess.reporter())
		// .on('error', function (error) {
	 //        console.error(String(error));
  //       })
		.pipe(less())
        .pipe(postcss([ autoprefixer({ browsers: ['> 5%'] }) ]))
        // .pipe(cssshrink())
		// .pipe(!!util.env.production ? minifyCss() : util.noop())
		.pipe(concat('core.css'))
		.pipe(gulp.dest(__dirname + '/../public/styles/'));

});
