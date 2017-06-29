const gulp = require('gulp');
const sass = require('gulp-sass');
const minify = require('gulp-minify-css');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

//scss转css合并压缩
gulp.task('scss', () => {
    gulp.src('src/css/*.scss')
    .pipe(sass( { style : 'extend'}))
    .pipe(concat('lbTab.css'))
    .pipe(gulp.dest('build/web/css'))
    .pipe(rename({suffix:'.min'}))
    .pipe(minify())
    .pipe(gulp.dest('build/web/css'));

});

//js语法检查合并压缩处理
gulp.task('js', () => {
    gulp.src('src/js/*.js')
    .pipe(babel({presets: ['es2015']}))
    .pipe(concat('lbTab.js'))
    .pipe(gulp.dest('build/web/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('build/web/js'));
});
//任务管理
gulp.task('default', () => {
    gulp.start('scss', 'js');
});
//检测
gulp.watch('src/css/*.scss', ['scss']);
gulp.watch('src/js/*.js', ['js']);