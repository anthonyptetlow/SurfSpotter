var gulp = require('gulp'),
	less = require('gulp-less'),
	concat = require('gulp-concat'),
	recess = require('gulp-recess');

gulp.task('styles', function() {
	return gulp.src(__dirname + '/../src/less/App.less')
		.pipe(recess())
		.on('error', function (error) {
	        console.error(String(error));
        })
        .pipe(recess.reporter())
		.on('error', function (error) {
	        console.error(String(error));
        })
		.pipe(less())
		.pipe(concat('core.css'))
		.pipe(gulp.dest(__dirname + '/../public/styles/'));

});
