const gulp = require("gulp");
const concat = require("gulp-concat");
const replace = require("gulp-replace");
const removeEmptyLines = require("gulp-remove-empty-lines");

// Paths
const functions = "srcFunctions/*.js";
const utils = "srcUtils/*_.js";
const destination = "dist/";

// Build functions
gulp.task("functions", function () {
    return gulp
        .src(functions)
        .pipe(replace(/module.exports[^\n]*/g, ""))
        .pipe(replace(/[^\n]*= require[^\n]*/g, ""))
        .pipe(concat("functions.js"))
        .pipe(removeEmptyLines({ removeSpaces: false }))
        .pipe(gulp.dest(destination));
});

// Build utils
gulp.task("utils", function () {
    return gulp
        .src(utils)
        .pipe(replace(/module.exports[^\n]*/g, ""))
        .pipe(replace(/[^\n]*= require[^\n]*/g, ""))
        .pipe(concat("utils.js"))
        .pipe(removeEmptyLines({ removeSpaces: false }))
        .pipe(gulp.dest(destination));
});

// Build all
gulp.task("build", gulp.parallel("functions", "utils"));
