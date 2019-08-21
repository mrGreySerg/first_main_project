const gulp = require("gulp");
const scss = require("gulp-sass");
const rename = require("gulp-rename");
const del = require("del");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const cssNano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const useref = require("gulp-useref");
const browserSync = require("browser-sync").create(); // .reload() ???; // не понятно с ним или без него

// =============== Для работы в dev папке (app) ===============

function scssToCssInApp(){
    return gulp.src("./app/scss/**/*.scss")
                .pipe(sourcemaps.init()) 
                .pipe(scss())
                .pipe(autoprefixer())
                .pipe(rename("secondary.css"))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest("./app/css/secondary"));
};

gulp.task('scss', scssToCssInApp);


function concatWithNorm(){
    return gulp.src([
                "./app/bower/normalize.css/normalize.css",
                "./app/css/secondary/secondary.css"
            ])
                .pipe(sourcemaps.init())
                .pipe(concat("main.css"))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest("./app/css"))
                .pipe(browserSync.stream());
};

gulp.task('concatCss', gulp.series(scssToCssInApp, concatWithNorm));

function jsApp(){
    return gulp.src(["./app/bower/jquery/dist/jquery.js", "./app/js/secondary/*.js"])
                .pipe(sourcemaps.init())
                .pipe(concat("main.js"))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest("./app/js"))
                .pipe(browserSync.stream());
};

gulp.task('jsConcat', jsApp);

function clean(){
    return del(["./app/css/*", "./app/js/*.js"]);
};

gulp.task('clean', clean);

function browserInit(){
    return browserSync.init({
        server:{
            baseDir: "./app"
        },
        notify: false,
        browser: "chrome"
    })
};

gulp.task('dev', gulp.series(clean, 'concatCss', jsApp));

function reload(done){
    browserSync.reload();
    done();
};

function watchApp(){
    browserInit();
    gulp.watch("./app/*.html", reload);
    gulp.watch("./app/scss/**/*.scss", 
                gulp.series(scssToCssInApp, concatWithNorm));
    gulp.watch("./app/js/secondary/*.js", jsApp);
};

gulp.task('watch', watchApp);

gulp.task('final', gulp.series('dev', watchApp))