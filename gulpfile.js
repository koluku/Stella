var gulp        = require('gulp');
var notify      = require('gulp-notify');
var plumber     = require('gulp-plumber');
var pleeease    = require('gulp-pleeease');
var sass        = require('gulp-sass');

paths = {
  root: ['./'],
  css : ['./*.css'],
  scss: ['./scss/*.scss']
}

gulp.task('sass', function() {
  gulp.src(paths.scss)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(sass())
    .pipe(pleeease())
    .pipe(gulp.dest(paths.root));
});

gulp.task('default', ['sass'], function() {
  gulp.watch([paths.scss], ['sass']);
});
