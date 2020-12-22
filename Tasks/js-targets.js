'use strict';

const gulp = require('gulp');
const del = require('del');
const eslint = require('gulp-eslint');

function compile(source, destination) {
    destination = destination ? destination : source;

    return gulp.src(source + '**/*.js')
        .pipe(eslint({
            'rules': {
                'quotes': [1, 'single', { 'avoidEscape': true }]
            }
        }))
        .pipe(eslint.format())
        .pipe(eslint.failOnError())
        .pipe(gulp.dest(destination));
};

function clean(destination) {
    return async () => await del(destination + '**/*.js');
}

module.exports = { compile, clean };
