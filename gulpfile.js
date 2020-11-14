let project_folder = "dist";
let source_folder = "src";

let path = {
    //пути вывода обработанных файлов
    build: {
        //html находится в корне, поэтому ставим просто "/"
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
    },
    //пути к исходникам
    src: {
        //возьмет все файлы из корня, с типом html
        html: source_folder + "/*.html",
        //возьмет из корня только 1 файл
        css: source_folder + "/css/main.css",
        //возьмет все файлы из корня, с типом js
        js: source_folder + "/js/*.js",
        // все подпапки в imj /**/
        img: source_folder + "/img/**/",
        fonts: source_folder + "/fonts/**/",
    },
    watch: {
        html: source_folder + "/**/*.html",
        css: source_folder + "/css/**/*.css",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/",
    },
    clean: "./" + project_folder + "/",
};

let { src, dest } = require("gulp"),
    gulp = require("gulp"),
    browsersync = require("browser-sync").create(),
    fileinclude = require("gulp-file-include"),
    del = require("del"),
    group_media = require("gulp-group-css-media-queries"),
    clean_css = require("gulp-clean-css"),
    rename = require("gulp-rename");

function browserSync(params) {
    browsersync.init({
        server: {
            baseDir: "./" + project_folder + "/",
        },
        port: 3000,
        notify: false,
    });
}

function html() {
    return src(path.src.html).pipe(fileinclude()).pipe(dest(path.build.html)).pipe(browsersync.stream());
}

function css() {
    return src(path.src.css)
        .pipe(group_media())
        .pipe(dest(path.build.css))
        .pipe(clean_css())
        .pipe(rename({ extname: ".min.css" }))
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream());
}

function js() {
    return src(path.src.js).pipe(fileinclude()).pipe(dest(path.build.js)).pipe(browsersync.stream());
}

function watchFiles(params) {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
}

function clean(params) {
    return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(js, css, html));
let watch = gulp.parallel(build, watchFiles, browserSync); //

exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
