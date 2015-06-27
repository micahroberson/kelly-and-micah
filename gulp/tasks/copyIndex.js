'use strict';

var gulp   = require('gulp');
var rename = require('gulp-rename');
var config = require('../config');

gulp.task('copyIndex', function() {

  gulp.src(config.sourceDir + 'index.html').pipe(gulp.dest(config.buildDir));
  // gulp.src(config.sourceDir + 'index.html')
  //   .pipe(rename('wedding.html'))
  //   .pipe(gulp.dest(config.buildDir));
  // gulp.src(config.sourceDir + 'index.html')
  //   .pipe(rename('accomodations.html'))
  //   .pipe(gulp.dest(config.buildDir));
  // gulp.src(config.sourceDir + 'index.html')
  //   .pipe(rename('mill-valley-and-recommendations.html'))
  //   .pipe(gulp.dest(config.buildDir));
  // gulp.src(config.sourceDir + 'index.html')
  //   .pipe(rename('schedule.html'))
  //   .pipe(gulp.dest(config.buildDir));
  // gulp.src(config.sourceDir + 'index')
  //   .pipe(rename('registry.html'))
  //   .pipe(gulp.dest(config.buildDir));
});