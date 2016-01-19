// Load gulp plugins with 'require' function of nodejs
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
  // place code for your default task here
});


gulp.task('sass', function () {
  gulp.src('media/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('media/sass/**/*.scss', ['sass']);
});


