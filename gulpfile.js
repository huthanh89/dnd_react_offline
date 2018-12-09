//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

const _        = require ('lodash');
const gulp     = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rename   = require('gulp-rename');
const pug      = require('gulp-pug');
const less     = require('gulp-less');
const htmlmin  = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const concat   = require('gulp-concat');

//-----------------------------------------------------------------------------//
// Tasks
//-----------------------------------------------------------------------------//

// Copy assets over to /dist.

gulp.task('copy-webfonts', () => {
    return gulp.src('src/webfonts/*')
        .pipe(gulp.dest('dist/webfonts'));
});


// Minify html source files.

gulp.task('minify-html', () => {
    return  gulp.src('dist/index.html')
    .pipe(htmlmin({ 
        collapseWhitespace: true 
    }))
    .pipe(gulp.dest('dist'));
});

// Minify css source files.

gulp.task('minify-css', () => {
    return gulp.src('dist/css/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('dist/css'));
});

// Minify all images from source directory.

gulp.task('minify-img', () => {
    return  gulp.src('src/asset/image/*')
    .pipe(imagemin([
        imagemin.gifsicle({
            interlaced: true
        }),
        imagemin.jpegtran({
            progressive: true
        }),
        imagemin.optipng({
            optimizationLevel: 7
        }),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(gulp.dest('dist/asset'));
});

gulp.task('compile-css', () => {
    return gulp.src('src/css/vendor/*.css')
        .pipe(concat("vendor.css"))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('compile-html', () => {
    return gulp.src('src/html/**/*.pug')
    .pipe(pug({
        doctype: 'html',
        pretty: true
    }))
    .pipe(gulp.dest('dist'));
});

//-----------------------------------------------------------------------------//
// Main tasks
//-----------------------------------------------------------------------------//

// Production build.
// Minify files and move asset files to /dist folder.

gulp.task('production', [
    'compile-html',
    'compile-css', 
    'minify-css',
    'minify-html',
    'copy-webfonts',
    'minify-img'
]);

//-----------------------------------------------------------------------------//