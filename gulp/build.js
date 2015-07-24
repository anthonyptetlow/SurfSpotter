var gulp = require('gulp');
require('./clean');
require('./script');
require('./html');
require('./styles');
require('./assets');
require('./lib');
require('./watch');
require('./critical');

gulp.task('buildOnce', ['clean', 'lib', 'script', 'html', 'styles', 'assets', 'critical']);
gulp.task('build', ['buildOnce', 'watch']);

