var gulp = require("gulp"),
    browserSync = require('browser-sync').create(),
    ngAnnotate = require('gulp-ng-annotate'),
    minifyCSS = require("gulp-clean-css"),
    minifyJs = require("gulp-uglify"),
    concat = require("gulp-concat"),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin');

// browser syncing
gulp.task('browser-sync', function() {
    // Start the server
    browserSync.init({
        server: "app/customer-panel"
    });
});

// browser sync from dist folder
gulp
    .task("distSync", function() {
        browserSync.init({
            server: "dist/customer-panel"
        })
    });

// ---- Minify html files ----
gulp.task('minify_html', function() {
    gulp.src(['app/customer-panel/modules/*/*.html'])
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/customer-panel/modules'));

    gulp.src(['app/customer-panel/*html'])
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/customer-panel'));
});


// ---- Minify CSS files ----
gulp.task("minify_css", function() {
    // minifying css files using "gulp-clean-css"
    gulp.src(['app/customer-panel/modules/*/*/*.css', 'app/customer-panel/modules/*/*.css'])
        .pipe(minifyCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/customer-panel/modules'));
});
// minifying JS files
gulp.task('minify_js', function() {
    gulp.src(['app/customer-panel/modules/*/*.js', 'app/customer-panel/modules/*.js'])
        .pipe(ngAnnotate())
        .pipe(minifyJs())
        .pipe(gulp.dest('dist/customer-panel/modules'));
});

// watching static files 
gulp.task('watch', function() {
    // watching HTML files and then minifying
    gulp.watch(['app/customer-panel/modules/*/*.html', 'app/customer-panel/*html'], function() {
        gulp.run("minify_html", browserSync.reload);
    });

    // watching JS files and then minifying
    gulp.watch([
        'app/customer-panel/modules/*/*.js',
        'app/customer-panel/modules/*.js'
    ], function() {
        gulp.run("minify_js", browserSync.reload);
    });

    // watching CSS files and then minifying
    gulp.watch(['app/customer-panel/modules/*/*/*.css', 'app/customer-panel/modules/*/*.css'], function() {
        gulp.run("minify_css", browserSync.reload);
    });
});

gulp.task("default", ['browser-sync', 'watch', "minify_html", "minify_css", "minify_js"]);

gulp.task("dist", ["distSync", "watch", "minify_html", "minify_css", "minify_js"]);