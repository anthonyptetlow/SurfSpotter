var gulp = require('gulp'),
    critical = require('critical').stream;

gulp.task('critical', ['html','styles'], function() {
	return gulp.src('public/index.html')
        .pipe(critical({
            base: 'public/',
            css: 'public/styles/core.css',
            inline: true,
            width: 320,
            height: 480,
            minify: true,
            inlineImages: true
        }))
        .pipe(gulp.dest('./public'));
});
