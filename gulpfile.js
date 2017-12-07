var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    include = require('gulp-include'),
    neat = require('node-neat').includePaths;

var paths = {
    assets: './assets/',
    node_path: './node_modules/'
};

// Lint Task
gulp.task('lint', function() {
    return gulp.src([paths.assets + 'js/*.js', '!' + paths.assets + 'js/*.min.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function () {
    return gulp.src(paths.assets + 'scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: [
                'sass',
                paths.node_path + 'bourbon/app/assets/stylesheets',
                paths.node_path + 'bourbon-neat/app/assets/stylesheets'
            ].concat(neat),
            outputStyle: 'compressed'
        }))
          .on('error', console.log)
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest(paths.assets + 'css'));
});

// Include & Minify JS
gulp.task('scripts', function() {
    return gulp.src(paths.assets + 'js/main.js')
        .pipe(sourcemaps.init())
        .pipe(include())
            .on('error', console.log)
        .pipe(sourcemaps.write())
        .pipe(rename('main.min.js'))
        .pipe(uglify())
            .on('error', console.log)
        .pipe(gulp.dest(paths.assets + 'js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch([paths.assets + 'js/**/*.js', '!' + paths.assets + 'js/**/*.min.js'], ['lint', 'scripts']);
    gulp.watch(paths.assets + 'scss/**/*.*', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
