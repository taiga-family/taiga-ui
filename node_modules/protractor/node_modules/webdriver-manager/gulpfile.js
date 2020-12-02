'use strict';
const path = require('path');
const gulp = require('gulp');
const tsGlobs = ['lib/**/*.ts', '*spec/**/*.ts'];

let runSpawn = (task, args, done) => {
  done = done || function() {};
  const spawn = require('child_process').spawn;
  let child = spawn(task, args, {stdio: 'inherit'});
  let running = false;
  child.on('close', (code) => {
    if (!running) {
      running = true;
      done(code);
    }
  });
  child.on('error', (err) => {
    if (!running) {
      console.error('gulp encountered a child error');
      running = true;
      done(err || 1);
    }
  });
  return child;
};

gulp.task('copy', function() {
  return gulp.src(['config.json', 'package.json'])
      .pipe(gulp.dest('built/'));
});

gulp.task('format:enforce', () => {
  const format = require('gulp-clang-format');
  const clangFormat = require('clang-format');
  return gulp.src(tsGlobs).pipe(
    format.checkFormat('file', clangFormat, {verbose: true, fail: true}));
});

gulp.task('format', () => {
  const format = require('gulp-clang-format');
  const clangFormat = require('clang-format');
  return gulp.src(tsGlobs, { base: '.' }).pipe(
    format.format('file', clangFormat)).pipe(gulp.dest('.'));
});