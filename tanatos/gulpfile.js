var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer')
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    del = require('del');

function html() {
    return gulp.src('./index.html')
        .pipe(browserSync.stream())
}

function styles() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 8 versions'],
            cascade: false
        }))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream())
};

function scripts() {
    return gulp.src('./src/js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream())
};

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
    gulp.watch('./*.html', html);
    gulp.watch('./src/scss/**/*.scss', styles);
    gulp.watch('./src/js/**/*.js', scripts);
};

function clean() {
    return del(['build/*'])
};

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);

gulp.task('build', gulp.series(clean, gulp.parallel(styles, scripts)));
gulp.task('default', gulp.series('build', watch));
