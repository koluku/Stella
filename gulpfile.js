var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var compass = require('gulp-compass');
var notify  = require('gulp-notify');
var plumber = require('gulp-plumber');

gulp.task('compass', function() {
  gulp.src('./html/scss/*.scss')
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(compass({
      config_file: './config.rb',
      css: './html',
      sass: './html/scss'
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./html'));
});
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './html/'
    }
  });
});

gulp.task('default', ['compass','browser-sync'], function() {
  gulp.watch(['./html/scss/*.scss'], ['compass']).on('change', browserSync.reload);;
});