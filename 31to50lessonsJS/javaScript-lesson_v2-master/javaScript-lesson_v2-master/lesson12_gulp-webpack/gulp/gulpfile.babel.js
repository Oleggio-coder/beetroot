const {src, dest, watch, parallel} = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const sourceMap = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

const mode = require('gulp-mode')();
const minCss = require('gulp-clean-css');

 const del = require('del');


function html(){
  return src('./src/**/*.html')
  .pipe(dest('./dist/'))
}

function style() {
  return src('./src/style/main.scss')
  .pipe(sourceMap.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(mode.development(sourceMap.write()))
  .pipe(mode.production(minCss()))
  .pipe(autoprefixer({ overrideBrowserslist: ['IE 6', 'Chrome 9', 'Firefox 14'] }))
  .pipe(dest('./dist/'))
}

function gulpWatch(){
  watch('./src/style/**/*.scss', style)
}

//function img() {}

//зробити функцю яка видаляє папку dist
function clean(){
  return del(['./dist'])
}

exports.dev = parallel(clean, style, html, gulpWatch)
exports.build = parallel( style, html)