var gulp = require('gulp');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var connect = require('connect');
var clean = require('gulp-clean');


// Clean
gulp.task('clean', function () {
    return gulp.src('dist/*', {read: false})
        .pipe(clean());
});

// HTML
gulp.task('html', function() {
  return gulp.src('app/*.html')
  .pipe(gulp.dest('dist'))
});

// JS
gulp.task('js', function() {
  return gulp.src('app/js/*.js')
  .pipe(gulp.dest('dist/js'))
});



// Static Server + watching scss/html files
gulp.task('serve', [], function() {

    browserSync.init({
        server: "./dist",
        port: 9393,
        ghostMode: false
    });

    //gulp.watch("app/*.html").on('change', browserSync.reload);
   
});

gulp.task('watch', function(){
  /*  gulp.watch('app/css/*.css').on('change', browserSync.reload);
    gulp.watch('app/js/*.js').on('change', browserSync.reload);*/
    //gulp.watch('app/*').on('change', browserSync.reload);
     gulp.watch('dist/*').on('change', browserSync.reload);
});

gulp.task('build', function (callback) {
  runSequence('clean', 
    ['html', 'js' ],
    'serve',
    'watch',
    callback
  )
});
gulp.task('default', function (callback) {
  runSequence('clean', 
    ['html', 'js' ],
    'serve',
    'watch',
    callback
  )
});