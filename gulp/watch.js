var gulp = require('gulp');

gulp.task('watch', function () {
	gulp.watch(__dirname + '/../src/**/*.js', ['script']);
	gulp.watch(__dirname + '/../src/**/*.html', ['html', 'critical']);
	gulp.watch(__dirname + '/../src/less/**/*.less', ['styles', 'critical']);
	gulp.watch(__dirname + '/../src/assets/*', ['assets']);
});
