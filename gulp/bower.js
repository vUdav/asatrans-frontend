/* Get Bower files */
var gulp = require('gulp'),
		config = require('./config'),
		uglify = require('gulp-uglify'),
		concat = require('gulp-concat'),
		gutil = require('gulp-util'),
		rename = require('gulp-rename'),
		plumber = require('gulp-plumber'),
		del = require('del');

gulp.task('bower-concatjs', function(){
	// del(config.pathTo.Src.BowerJSVendor);

	return gulp.src(config.bower.concatJS)
		.pipe(plumber(function(error) {
			gutil.log(gutil.colors.red(error.message));
			this.emit('end');
		}))
		.pipe(concat('libs.js'))
		.pipe(gulp.dest(config.pathTo.Src.BowerJSVendor))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest(config.pathTo.Src.BowerJSVendor));
});

gulp.task('bower-vendorjs', function(){
	return gulp.src(config.bower.vendorJS)
		.pipe(plumber(function(error) {
			gutil.log(gutil.colors.red(error.message));
			this.emit('end');
		}))
		.pipe(gulp.dest(config.pathTo.Src.BowerJSVendor));
});

gulp.task('bower', ['bower-concatjs','bower-vendorjs']);