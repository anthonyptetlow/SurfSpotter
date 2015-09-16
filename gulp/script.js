var gulp = require('gulp'),
	concat = require('gulp-concat'),
	eslint = require('gulp-eslint'),
    uglify = require('gulp-uglify');
    util = require('gulp-util'),
    minifyHTML = require('gulp-minify-html'),
    htmlToNg = require('gulp-ng-html2js'),
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
            __dirname + '/../src/lib/angular-animate/angular-animate.min.js',
            __dirname + '/../src/lib/ngstorage/ngStorage.min.js',
            __dirname + '/../src/lib/angulartics/dist/angulartics.min.js',
            __dirname + '/../src/lib/angulartics-google-analytics/dist/angulartics-google-analytics.min.js',
            __dirname + '/../src/lib/lodash/lodash.min.js',
            __dirname + '/../src/lib/angular-simple-logger/dist/index.js',
            __dirname + '/../src/lib/angular-google-maps/dist/angular-google-maps.min.js'
        ];
    } else {
        angularJsFiles = [
            __dirname + '/../src/lib/angular/angular.js',
            __dirname + '/../src/lib/angular-ui-router/release/angular-ui-router.js',
            __dirname + '/../src/lib/angular-resource/angular-resource.js',
            __dirname + '/../src/lib/angular-animate/angular-animate.js',
            __dirname + '/../src/lib/ngstorage/ngStorage.js',
            __dirname + '/../src/lib/angulartics/src/angulartics.js',
            __dirname + '/../src/lib/angulartics-google-analytics/lib/angulartics-google-analytics.js',
            __dirname + '/../src/lib/lodash/lodash.js',
            __dirname + '/../src/lib/angular-simple-logger/dist/index.js',
            __dirname + '/../src/lib/angular-google-maps/dist/angular-google-maps.js'

        ];
    }

	return gulp.src([__dirname + '/../src/**/partials/**/*.html', '!' + __dirname + '/../src/lib/**/*.html'])
        .pipe(!!util.env.production ? minifyHTML() : util.noop())
        .pipe(htmlToNg({
            moduleName: "surfspotter",
            declareModule: false
        }))
        .pipe(addsrc.prepend([__dirname + '/../src/**.*.app.js', __dirname + '/../src/**/*.js', '!' + __dirname + '/../src/lib/**/*.js']))
        .pipe(eslint(eslintConf))
        .pipe(eslint.format())
        .pipe(addsrc.prepend(angularJsFiles))
        .pipe(concat('app.js'))
        .pipe(!!util.env.production ? uglify() : util.noop())
		.pipe(gulp.dest(__dirname + '/../public/js'))
		.on('error', function (error) {
            console.error(String(error));
        });
});
