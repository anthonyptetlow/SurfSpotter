var gulp = require('gulp'),
	concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    util = require('gulp-util');


gulp.task('lib', function () {

	// Fonts
	gulp.src([  __dirname + '/../src/lib/bootstrap/fonts/*',
		])
		.pipe(gulp.dest(__dirname + '/../public/fonts/'));



	// // Styles
	var styleFiles = [];
	// if(util.env.production) {
		// styleFiles = [
		// 	__dirname + '/../src/lib/bootstrap/dist/css/bootstrap.min.css'
		// ];
	// } else {
	// 	styleFiles = [
	// 		__dirname + '/../src/lib/bootstrap/dist/css/bootstrap.css'
	// 	];
	// }

	gulp.src(styleFiles)
		.pipe(concat('styles.css'))
		.pipe(gulp.dest(__dirname + '/../public/styles/lib/'));


	// //JS
	// var angularJsFiles;
	// if(util.env.production) {
	// 	angularJsFiles = [
	// 		__dirname + '/../src/lib/angular/angular.min.js',
	// 	 	__dirname + '/../src/lib/angular-ui-router/release/angular-ui-router.min.js',
	// 	 	__dirname + '/../src/lib/angular-resource/angular-resource.min.js',
	// 	 	__dirname + '/../src/lib/ngstorage/ngStorage.min.js'
	//  	];
	// } else {
	// 	angularJsFiles = [
	// 		__dirname + '/../src/lib/angular/angular.js',
	// 	 	__dirname + '/../src/lib/angular-ui-router/release/angular-ui-router.js',
	// 	 	__dirname + '/../src/lib/angular-resource/angular-resource.js',
	// 	 	__dirname + '/../src/lib/angular-animate/angular-animate.js',
	// 	 	__dirname + '/../src/lib/ngstorage/ngStorage.js'
	//  	];
	// }

	// return gulp.src(angularJsFiles)
	// 	.pipe(concat('angular_all.js'))
 //        .pipe(!!util.env.production ? uglify() : util.noop())
	// 	.pipe(gulp.dest(__dirname + '/../public/js/lib'))
	// 	.on('error', function (error) {
	//         console.error(String(error));
	//     });
});
