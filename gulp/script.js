var gulp = require('gulp'),
	concat = require('gulp-concat'),
	eslint = require('gulp-eslint'),
    uglify = require('gulp-uglify');
    util = require('gulp-util'),
    addsrc = require('gulp-add-src');


var eslintConf = {
        rulePaths: [],
        rules: {
            'quotes': [2, 'single'],
            'strict': 0,
            'global-strict': 0
        },
        globals: {
            'angular':true
        },
        envs: [
            'browser'
        ]
    };


gulp.task('script', function() {



    //JS
    var angularJsFiles;
    if(util.env.production) {
        angularJsFiles = [
            __dirname + '/../src/lib/angular/angular.min.js',
            __dirname + '/../src/lib/angular-ui-router/release/angular-ui-router.min.js',
            __dirname + '/../src/lib/angular-resource/angular-resource.min.js',
            __dirname + '/../src/lib/ngstorage/ngStorage.min.js'
        ];
    } else {
        angularJsFiles = [
            __dirname + '/../src/lib/angular/angular.js',
            __dirname + '/../src/lib/angular-ui-router/release/angular-ui-router.js',
            __dirname + '/../src/lib/angular-resource/angular-resource.js',
            __dirname + '/../src/lib/angular-animate/angular-animate.js',
            __dirname + '/../src/lib/ngstorage/ngStorage.js'
        ];
    }

    // return gulp.src(angularJsFiles)
    //     .pipe(concat('angular_all.js'))
    //     .pipe(!!util.env.production ? uglify() : util.noop())
    //     .pipe(gulp.dest(__dirname + '/../public/js/lib'))
    //     .on('error', function (error) {
    //         console.error(String(error));
    //     })





	return gulp.src([__dirname + '/../src/**.*.app.js', __dirname + '/../src/**/*.js', '!' + __dirname + '/../src/lib/**/*.js'])
        .pipe(eslint(eslintConf))
        .pipe(eslint.format())
		// .pipe(concat('app.js'))
        .pipe(!!util.env.production ? uglify() : util.noop())
        .pipe(addsrc.prepend(angularJsFiles))
        .pipe(concat('app.js'))
		.pipe(gulp.dest(__dirname + '/../public/js'))
		.on('error', function (error) {
            console.error(String(error));
        });
});
