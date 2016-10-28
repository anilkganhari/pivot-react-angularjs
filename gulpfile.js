var os = require('os');
var gulp = require('gulp');
var useref = require('gulp-useref');
var cache = require('gulp-cache');
var runSequence = require('run-sequence');
var open = require('gulp-open');
var clean = require('gulp-clean');


gulp.task('hello', function(){
    console.log('welcome to Pivot-React-Angularjs');
});

gulp.task('useref', function(){
  return gulp.src('app/**/*')
    .pipe(useref())
    .pipe(gulp.dest('dist'))
});


gulp.task('open', function(){
  gulp.src('./dist/index.html')
  .pipe(open());
});

gulp.task('clean', function () {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});

gulp.task('build', function (callback) {
  runSequence(
    ['useref',  'open'],
    callback
  )
});

