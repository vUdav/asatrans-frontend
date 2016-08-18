/* Build */
var gulp = require('gulp'),
		runSequence = require('run-sequence').use(gulp);

gulp.task('build', function(callback) {
	runSequence(
		'clean',
		'bower',
		'js',
		'png-sprite',
		'images',
		// 'svg',
		// 'svg-sprite',
		'fonts',
		'less',
		'txt',
		'jade',
		'generate-favicon',
		'inject-favicon-markups',
		'gh-pages',
		callback)
});