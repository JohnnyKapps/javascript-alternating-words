var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var jade = require('gulp-jade');
var server = require('gulp-server-livereload');

gulp.task('styles', function() {
    gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./css/'));
});

gulp.task('templates', function() {
    return gulp.src('jade/*.jade')
        .pipe(jade({
          pretty: true
        }))
        .pipe(gulp.dest(''));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/*.scss',['styles']);
    gulp.watch('jade/*.jade',['templates']);
    gulp.src('')
      .pipe(server({
        livereload: true,
        directoryListing: true,
        open: true
      }));
});
