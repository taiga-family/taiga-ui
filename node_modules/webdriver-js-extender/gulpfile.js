'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var spawn = require('child_process').spawn;
const format = require('gulp-clang-format');
const clangFormat = require('clang-format');

var runSpawn = function(done, task, opt_arg) {
  opt_arg = typeof opt_arg !== 'undefined' ? opt_arg : [];
  var child = spawn(task, opt_arg, {stdio: 'inherit'});
  var running = false;
  child.on('close', function() {
    if (!running) {
      running = true;
      done();
    }
  });
  child.on('error', function() {
    if (!running) {
      console.error('gulp encountered a child error');
      running = true;
      done();
    }
  });
};

gulp.task('copy', function() {
  return gulp.src(['**/*.apk', 'package.json'])
      .pipe(gulp.dest('built/'));
});

gulp.task('format:enforce', () => {
  return gulp.src(['lib/**/*.ts']).pipe(
    format.checkFormat('file', clangFormat, {verbose: true, fail: true}));
});

gulp.task('format', () => {
  return gulp.src(['lib/**/*.ts'], { base: '.' }).pipe(
    format.format('file', clangFormat)).pipe(gulp.dest('.'));
});

gulp.task('tsc', function(done) {
  runSpawn(done, process.execPath, ['node_modules/typescript/bin/tsc']);
});

gulp.task('prepublish', function(done) {
  runSequence('format', 'tsc', 'copy', done);
});

gulp.task('default',['prepublish']);
gulp.task('build',['prepublish']);

gulp.task('test', ['build'], function(done) {
  var opt_arg = [];
  opt_arg.push('node_modules/jasmine/bin/jasmine.js');
  runSpawn(done, process.execPath, opt_arg);
});
