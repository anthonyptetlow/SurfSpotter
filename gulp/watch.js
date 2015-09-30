var gulp = require('gulp'),
	util = require('gulp-util');

gulp.task('watch', function () {

	var htmlTaskList = ['html', 'script'];
	if(!!util.env.production) htmlTaskList.push('critical');
	gulp.watch(__dirname + '/../src/**/*.html', htmlTaskList);

	var stylesTaskList = ['styles', 'script'];
	if(!!util.env.production) htmlTaskList.push('critical');
	gulp.watch(__dirname + '/../src/less/**/*.less', stylesTaskList);


	gulp.watch(__dirname + '/../src/assets/*', ['assets']);
	gulp.watch(__dirname + '/../src/**/*.js', ['script']);

});
