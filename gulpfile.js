'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	maps = require('gulp-sourcemaps'),
	livereload = require('gulp-livereload'),
	del	 = require('del');

gulp.task('compileSass', function(){
	return gulp.src('scss/main.scss')
	.pipe(maps.init())
	.pipe(sass())
	.pipe(maps.write('./'))
	.pipe(gulp.dest('css'))
	.pipe(livereload());
});

gulp.task('clean', function(){
	del(['dist', 'css/*']);
});

gulp.task('watchFiles', function(){
	livereload.listen();
	gulp.watch('scss/*.scss', ['compileSass']);
})
gulp.task('serve', ['watchFiles']);

gulp.task('build', ['compileSass'], function(){
	return gulp.src(['css/*', 'index.html', 'img/**', 'fonts/**', 'js/**'], { base: './' })
	.pipe(gulp.dest('dist'));
});
gulp.task('default', ['clean'], function(){
	gulp.start('build');
});