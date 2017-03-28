var gulp = require("gulp"),
    browserSync = require('browser-sync').create(),
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

// minifying css fails function
gulp.task("minifiCSS", function() {
	// minifying css files using "gulp-clean-css"
	gulp.src('app/customer-panel/modules/*/*.css')
    .pipe(minifyCSS({compatibility: 'ie8'}))
	.pipe(gulp.dest('dist/customer-panel/modules'));
});
// minifying JS files
gulp.task('compress', function () {
    gulp.src(['app/customer-panel/modules/*/*.js'])
    .pipe(minifyJs())
    .pipe(gulp.dest('dist/customer-panel/modules'));

    // minify APP.js file and constant file
    gulp.src(['app/customer-panel/modules/*.js'])
    .pipe(minifyJs())
    .pipe(gulp.dest('dist/customer-panel/modules'));
});

gulp.task('minify_html', function() {
    gulp.src(['app/customer-panel/modules/*/*.html'])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/customer-panel/modules'));
    // minify index.html file
    gulp.src('app/customer-panel/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/customer-panel'));
});

// watching static files 
gulp.task('watch', function(){
	// watching the css files and then minifying 
  	gulp.watch('app/customer-panel/modules/*/*.css', ['minifiCSS']).on("change", browserSync.reload);

  	// watching js files and then minifying
  	gulp.watch(["app/customer-panel/modules/*/*.js"], ['compress']).on("change", browserSync.reload)
  	// Other watchers for live realoding the application
    gulp.watch(['app/customer-panel/modules/*/*.html'], ['minify_html']).on("change", browserSync.reload);
})

gulp.task("default", ['browser-sync', 'watch']);