// Load gulp plugins with 'require' function of nodejs

var __config={
	source_sass:["media/sass/*.scss"],
	//you can set files ordered
	source_js:["media/js/*.js"],
	assets_js:"assets/js",
	assets_css:"assets/css"
};

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');



gulp.task('default', function () {

});

//js
gulp.task('scripts', function() {
  return gulp.src(__config.source_js)
    .pipe(concat('all.js'))
    .pipe(gulp.dest(__config.assets_js));
});


//sass
gulp.task('sass', function () {
  gulp.src(__config.source_sass)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(__config.assets_css));
});

gulp.task('sass:watch', function () {
  gulp.watch(__config.source_sass, ['sass']);
});


