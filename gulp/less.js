/* LESS */
var gulp = require('gulp'),
		config = require('./config'),
		less = require('gulp-less'),
		cssnano = require('gulp-cssnano'),
		csscomb = require('gulp-csscomb'),
		autoprefixer = require('gulp-autoprefixer'),
		newer = require('gulp-newer'),
		gutil = require('gulp-util'),
		rename = require('gulp-rename'),
		browserSync = require("browser-sync"),
		reload = browserSync.reload,
		plumber = require('gulp-plumber');

gulp.task('less', function () {
	gulp.src(config.pathTo.Src.Styles)
		.pipe(plumber(function(error) {
			gutil.log(gutil.colors.red(error.message));
			this.emit('end');
		}))
		.pipe(newer(config.pathTo.Build.Styles))
		.pipe(less())
		.pipe(autoprefixer(config.autoprefixerBrowsers))
		.pipe(csscomb())
		.pipe(cssnano())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(config.pathTo.Build.Styles))
		.pipe(reload({stream: true}));
});