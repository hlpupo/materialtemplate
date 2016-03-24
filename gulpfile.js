'use strict';

var sass = require('gulp-sass'),
    gulp = require('gulp'),
    chmod = require('gulp-chmod'),
    inputFrontend = 'app/scss/*.scss';
var browserSync = require('browser-sync');

//Compile sass
gulp.task('sassFrontend', function () {
  gulp.src(inputFrontend)
      .pipe(sass({sourceComments: 'map'}))
      .pipe(chmod(755))
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({stream:true}));
});
gulp.task('sass', ['sassFrontend']);

gulp.task('html', function () {
  gulp.src('app/*.html')
      .pipe(browserSync.reload({stream:true}));
});
gulp.task('js', function () {
  gulp.src('app/*.js')
      .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch', function () {
  gulp.watch(inputFrontend, ['sass']);
  gulp.watch("app/*.html", ['html']);
  gulp.watch("app/*.js", ['js']);
  gulp.watch("app/directive/*.js", ['js']);
});

//Liver reload

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "app"
    }
  });
});

gulp.task('default', ['browser-sync', 'watch']);
