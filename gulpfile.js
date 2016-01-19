// Load gulp plugins with 'require' function of nodejs
var gulp = require('gulp');
var sass = require('gulp-sass');


var conventionalChangelog = require('gulp-conventional-changelog');

gulp.task('default', function () {
  return gulp.src('CHANGELOG.md', {
    buffer: false
  })
    .pipe(conventionalChangelog({
      preset: 'angular'
    }))
    .pipe(gulp.dest('./'));
});

//sass
gulp.task('sass', function () {
  gulp.src('media/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('media/sass/**/*.scss', ['sass']);
});


