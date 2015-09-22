var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var compass = require('gulp-compass');
var jade = require('gulp-jade');
var notify  = require('gulp-notify');
var plumber = require('gulp-plumber');

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './html/'
    }
  });
});
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
    .pipe(gulp.dest('./html'))
    .pipe(browserSync.stream());
});
gulp.task('jade', function() {
  gulp.src('./html/jade/*.jade')
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./html'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['compass','browser-sync'], function() {
  gulp.watch(['./html/scss/*.scss'], ['compass']);
  gulp.watch(['./html/jade/*.jade'], ['jade']);
});