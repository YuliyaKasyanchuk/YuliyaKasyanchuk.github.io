var gulp        = require('gulp');
var browserSync = require('browser-sync');
var less        = require('gulp-less');
var concatCss 	= require('gulp-concat-css');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var pngquant = require('gulp-pngquant');
var pngquant = require('imagemin-pngquant');
var csso = require('gulp-csso');
var  cache = require('gulp-cache');





// Компилируем Less при помощи плагина gulp-less 
gulp.task('less', function() {
    return gulp.src("src/less/*.less") // находим все less файлы в папке less 
        .pipe(less()) // собственно компилируем их
        .pipe(csso()) // если нужно - сжимаем css код (если не нужно, строчку можно удалить)
        .pipe(concatCss('main.css')) // при желании можно объединить все в один css-файл 
        .pipe(gulp.dest("src/css")) // выгружаем файлы в папку app в раздел css 
        .pipe(browserSync.stream()); // при желании можно обновить browser-sync после изменений
});

// Настраиваем сервер browser-sync для отслеживания изменений в проекте 
gulp.task('serve', ['less'], function() {
    // Запускаем сервер и указываем за какой папкой нужно следить 
    browserSync.init({
        server: "./src"
    });
    gulp.watch("src/less/*.less", ['less']); // следим за изменениями less файлов и сразу запускаем таск less 
    gulp.watch("src/*.html").on('change', browserSync.reload); // запускаем перезагрузку страницы при изменениях html 
});

gulp.task('minify', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});


gulp.task('csso', function () {
    return gulp.src('src/css/main.css')
        .pipe(csso({
            restructure: false,
            sourceMap: true,
            debug: true
        }))
        .pipe(gulp.dest('dist/'));
});


// gulp.task('compress', function() {
//     return gulp.src('src/img/*')
//         .pipe(pngquant({
//             quality: '65-80'
//         }))
//         .pipe(gulp.dest('dist/img/'));
// });
gulp.task('compress', function(){
    gulp.src('src/img/')
    .pipe(cache(imagemin({
        interlaced: true,
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use:[pngquant()]
    })))
    .pipe(gulp.dest('dist/'));
});


gulp.task('default', ['serve', 'minify', 'csso', 'compress']); // делаем это стандартным таском
