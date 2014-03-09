/*globals require, console*/

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync'),
    mocha = require('gulp-mocha');

var cfg = {
  js: {
    dir: 'src/js',
    root: 'src/js/base.js',
    name: 'bundle.js',
    dest: 'bin/js',
    watch: 'src/js/**/*.js'
  },
  test: 'test/*.js',
  markup: {
    src: 'src/index.html',
    dest: 'bin',
    watch: 'src/index.html'
  },
  assets: {
    src: [
      'src/assets/*.png',
      'src/assets/*.jpg'
    ],
    dest: 'bin/assets',
    watch: 'src/assets/*'
  },
  server: {
    src: [
      'bin/js/**/*.js',
      'bin/index.html'
    ],
    baseDir: './bin'
  }
};

gulp.task('default', ['compile', 'watch', 'server']);

gulp.task('compile', ['scripts', 'markup', 'assets']);

gulp.task('scripts', ['script-compile']);

gulp.task('script-hints', function () {
  return gulp.src(cfg.js.dir + '/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .on('error', function () {
      console.error('[JSHint] encountered an error');
    });
});

gulp.task('script-test', ['script-hints'], function () {
  return gulp.src(cfg.test)
    .pipe(mocha({
      reporter: 'nyan'
    }))
    .on('error', function () {
      console.error('[MOCHA] encountered an error');
      this.emit('end');
    });
});

gulp.task('script-compile', ['script-test'], function () {
  return gulp.src(cfg.js.root)
    .pipe(browserify({
      debug: true
    }))
    .pipe(concat(cfg.js.name))
    .pipe(gulp.dest(cfg.js.dest));
});

gulp.task('markup', function () {
  return gulp.src(cfg.markup.src)
    .pipe(gulp.dest(cfg.markup.dest));
});

gulp.task('assets', function () {
  return gulp.src(cfg.assets.src)
    .pipe(imagemin())
    .pipe(gulp.dest(cfg.assets.dest));
});

gulp.task('watch', ['watch-tests', 'watch-scripts', 'watch-markup', 'watch-assets']);

gulp.task('watch-tests', function () {
  return gulp.watch(cfg.test, ['script-test']);
});

gulp.task('watch-scripts', function () {
  return gulp.watch(cfg.js.watch, ['scripts']);
});

gulp.task('watch-markup', function () {
  return gulp.watch(cfg.markup.watch, ['markup']);
});

gulp.task('watch-assets', function () {
  return gulp.watch(cfg.assets.watch, ['assets']);
});

gulp.task('server', function () {
  return browserSync.init(cfg.server.src, {
    server: {
      baseDir: cfg.server.baseDir
    }
  });
});
