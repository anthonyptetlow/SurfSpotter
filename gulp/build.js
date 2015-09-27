var gulp = require('gulp');
	util = require('gulp-util');
require('./clean');
require('./script');
require('./html');
require('./styles');
require('./assets');
require('./lib');
require('./watch');
require('./critical');

var buildTasks = [];

buildTasks.push('clean');
buildTasks.push('lib');
buildTasks.push('script');
buildTasks.push('html');
buildTasks.push('styles');
buildTasks.push('assets');

if(!!util.env.production) buildTasks.push('critical');


gulp.task('buildOnce', buildTasks);

gulp.task('build', ['buildOnce', 'watch']);
