var gulp = require('gulp'),
	buildBranch = require('gulp-build-branch'),
	git = require('gulp-git');
	require('./build');


gulp.task('deploy', ['compile'], function() {
  return git.push('live', 'deploy', function (err) {
    if (err) throw err;
  });
});

gulp.task('compile', ['buildOnce'], function() {
  return buildBranch({ folder: 'public', branch: 'deploy' });
});


