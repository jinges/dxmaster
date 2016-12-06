var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyHtml = require('gulp-minify-html'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    jshint = require('gulp-jshint'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    fs = require('fs'),
    opn = require('opn');

var paths = {
    origin:{
        root: 'app',
        index: 'app/index.html',
        sass: 'app/assets/css/*.scss',
        styles: ['app/assets/css/style.scss', 'bower_components/angular-datepicker/dist/angular-datepicker.css'],
        images: 'app/assets/images/**',
        fonts: 'app/assets/font/*',
        scripts: [
            'bower_components/angular/angular.js',
            // 'bower_components/firebase/firebase.js',
            // 'bower_components/angularfire/dist/angularfire.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-cookies/angular-cookies.js',
            'bower_components/lodash/lodash.js',
            // 'bower_components/ngtouch/src/ngTouch.js',
            // 'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-datepicker/dist/angular-datepicker.js',
            'bower_components/moment/moment.js',
            'bower_components/moment-timezone/moment-timezone.js',
            'bower_components/angular-file-upload/dist/angular-file-upload.js',
            'app/app.js',
            'app/router.js',
            'app/config.js',
            'app/components/**/*.js'
        ],
        components_tmp: 'app/components/**/*.html',
        datas: 'app/data/*.json'
    },
    tmp_root: 'build'
}

var origin_root = paths.origin.root;

function logError(err) {
    console.log(err.toString());
    this.emit('end');
}

var validateResources = function (resources) {
    resources.forEach(function (resource) {
        if(!resource.match(/\*/) && !fs.existsSync(resource)) {
            throw resource + "not found !";
        }
    });
}

gulp.task('clean', function (cb) {
    del( paths.tmp_root, cb);
});

gulp.task('sass', function () {
    validateResources(paths.origin.styles);
    return gulp.src(paths.origin.styles)
        .pipe(sass())
        .pipe(concat('app.css'))
        .on('error', logError)
        // .pipe(gulp.dest(paths.tmp_root+'/assets/css'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({
          extname: '.min.css'
        }))
        .pipe(gulp.dest(paths.tmp_root+'/assets/css'))
        .pipe(livereload());
});

gulp.task('scripts', function () {
    validateResources(paths.origin.scripts);
    return gulp.src(paths.origin.scripts)
        .on('error', logError)
        .pipe(concat('app.js'))
        // .pipe(gulp.dest(paths.tmp_root +'/assets/script/'))
        .pipe(uglify())
        .pipe(rename({
          extname: '.min.js'
        }))
        .pipe(gulp.dest(paths.tmp_root +'/assets/script/'))
        .pipe(livereload());
});

gulp.task('images', function() {
    return gulp.src(paths.origin.images, {'base': origin_root})
        //.pipe(imagemin({ optimizationLevel: 5}))
        .pipe(gulp.dest(paths.tmp_root))
        .pipe(livereload());
});
    
gulp.task('font', function() {
    return gulp.src(paths.origin.fonts, {'base': origin_root})
        .pipe(gulp.dest(paths.tmp_root));
});

gulp.task('index', function () {
    return gulp.src(paths.origin.index)
        .pipe(minifyHtml())
        .pipe(gulp.dest(paths.tmp_root))
        .pipe(livereload());
});

gulp.task('components_tmp', function() {
    return gulp.src(paths.origin.components_tmp, {'base': origin_root})
        .pipe(minifyHtml())
        .pipe(gulp.dest(paths.tmp_root))
        .pipe(livereload());
});

gulp.task('datas', function () {
    return gulp.src(paths.origin.datas, {'base': origin_root})
        .pipe(gulp.dest(paths.tmp_root))
        .pipe(livereload());
})

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(paths.origin.styles, ['sass']);
    gulp.watch(paths.origin.scripts, ['scripts']);
    gulp.watch(paths.origin.index, ['index']);
    gulp.watch(paths.origin.components_tmp, ['components_tmp']);
    gulp.watch(paths.origin.datas, ['datas']);
});

gulp.task('connect', ['sass','scripts', 'images', 'font', 'index', 'components_tmp'], function () {
    connect.server({
        livereload:true,
        root: paths.tmp_root,
        port: 8000,
        livereload: true
    });
})

gulp.task('server', ['connect', 'watch'], function(){
    opn('http://localhost:8000');
});

gulp.task('default', ['clean', 'sass', 'scripts', 'images', 'font', 'index', 'components_tmp','datas', 'watch'], function(){
    console.log('build over!');
})