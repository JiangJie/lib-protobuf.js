const gulp = require('gulp');
const gutil = require('gulp-util');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

const src = './src/index.js';
const distDir = './dist';
const distFileName = 'protobuf.js';

function genPB() {
    return browserify(src, {
        debug: true
    })
        .transform('rollupify')
        .transform(babelify)
        .bundle()
        .on('error', err => {
            gutil.log(`\x1B[31m[Browserify] browserify error: ${err.message}}\x1B[0m`);
        })
        .pipe(source(distFileName))
        .pipe(gulp.dest(distDir));
}

gulp.task('default', genPB);