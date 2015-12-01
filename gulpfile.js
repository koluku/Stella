var browserSync = require('browser-sync').create();
var gulp        = require('gulp');
var jade        = require('gulp-jade');
var notify      = require('gulp-notify');
var plumber     = require('gulp-plumber');
var imagemin    = require('gulp-imagemin');
var pleeease    = require('gulp-pleeease');
var sass        = require('gulp-sass');
var pngquant    = require('imagemin-pngquant');

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './html/'
    }
  });
});
gulp.task('imagemin',function() {
  gulp.src('./html/image/**')
    .pipe(imagemin({
        use: [pngquant({
            quality: '60-80',
            speed: 1
          })]
      }))
    .pipe(gulp.dest('./html/image'))
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
gulp.task('sass', function() {
  gulp.src('./html/scss/*.scss')
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(sass())
    .pipe(pleeease())
    .pipe(gulp.dest('./html'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['sass','jade','browser-sync'], function() {
  gulp.watch(['./html/scss/*.scss'], ['sass']);
  gulp.watch(['./html/jade/*.jade'], ['jade']);
});
