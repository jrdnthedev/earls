const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const ts = require('gulp-typescript');

function compileSass(){
    return src('sass/**/*.sass')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest('dist/css'));
}

function watchHtml(){
    return src('*.html')
    .pipe(dest('dist'));
}

function compileTypescript(){
    return src('ts/**/*.ts')
    .pipe(ts({
        noImplicitAny: true,
        outFile: 'main.js'
    }))
    .pipe(dest('dist/js'));
}

exports.default = function(){
    //compile and watch
    watch('sass/*.sass',compileSass);
    watch('*.html',watchHtml);
    watch('ts/*.ts',compileTypescript);
};