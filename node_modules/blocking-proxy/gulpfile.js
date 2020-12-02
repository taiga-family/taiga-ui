'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var spawn = require('child_process').spawn;
var tslint = require('gulp-tslint');

var runSpawn = function(done, task, opt_arg) {
  var child = spawn(task, opt_arg, {stdio: 'inherit'});
  child.on('close', function() {
    done();
  });
};

gulp.task('built:copy', function() {
  return gulp.src(['lib/**/*','!lib/**/*.ts'])
      .pipe(gulp.dest('built/lib/'));
});

gulp.task('webdriver:update', function(done) {
  runSpawn(done, 'webdriver-manager', ['update']);
});

gulp.task('tslint', function() {
  return gulp.src(['lib/**/*.ts', 'spec/**/*.ts']).pipe(tslint()).pipe(tslint.report());
});

gulp.task('format:enforce', () => {
  const format = require('gulp-clang-format');
  const clangFormat = require('clang-format');
  return gulp.src(['lib/**/*.ts', 'spec/**/*.ts']).pipe(
    format.checkFormat('file', clangFormat, {verbose: true, fail: true}));
});

gulp.task('format', () => {
  const format = require('gulp-clang-format');
  const clangFormat = require('clang-format');
  return gulp.src(['lib/**/*.ts', 'spec/**/*.ts'], { base: '.' }).pipe(
    format.format('file', clangFormat)).pipe(gulp.dest('.'));
});

gulp.task('tsc', function(done) {
  runSpawn(done, 'node', ['node_modules/typescript/bin/tsc']);
});

gulp.task('lint', function(done) {
  runSequence('tslint', 'format:enforce', done);
});

gulp.task('prepublish', function(done) {
  runSequence('lint' ,'tsc', 'built:copy', done);
});

gulp.task('pretest', function(done) {
  runSequence(
    ['webdriver:update', 'tslint', 'clang'], 'tsc', 'built:copy', done);
});

gulp.task('default', ['prepublish']);
gulp.task('build', ['prepublish']);

gulp.task('test:copy', function(done) {
  return gulp.src(['spec/**/*','!spec/**/*.ts'])
      .pipe(gulp.dest('built/spec/'));
});
