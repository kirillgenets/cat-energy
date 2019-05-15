var gulp = require('gulp');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');

var imagemin = require('gulp-imagemin');
var webp = require('gulp-webp');
var svgstore = require('gulp-svgstore');

var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var csso = require('gulp-csso');

var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");

var server = require("browser-sync").create();

var minify = require('gulp-minify');

var del = require("del");

gulp.task('css', function () {

	return gulp.src('www/scss/style.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss([
			autoprefixer()
 		]))
 		.pipe(gulp.dest("build/css")) 
		.pipe(csso())
		.pipe(rename("style.min.css"))
		.pipe(gulp.dest('build/css'));

});

gulp.task('images', function() {

	return gulp.src('www/img/*.{png,jpg,svg}')
		.pipe(imagemin([
			imagemin.optipng({optimizationLevel: 3}),
 			imagemin.jpegtran({progressive: true}),
 			imagemin.svgo()  
	 	]))
		.pipe(gulp.dest('build/img'));

});

gulp.task('webp', function () {

	return gulp.src('www/img/*.{png,jpg}')
		.pipe(webp({quality: 90}))
		.pipe(gulp.dest('build/img'));

});

gulp.task('sprite', function () {

	return gulp.src('www/img/*.svg') 
		.pipe(svgstore({
		 	inlineSvg: true
		 }))
		.pipe(rename('sprite.svg'))
		.pipe(gulp.dest('build/img'));

});

gulp.task('html', function () {

	return gulp.src('www/*.html')
		.pipe(posthtml([
			include()
		]))
		.pipe(gulp.dest('build'));

});

gulp.task('server', function () {

	server.init({
		server: 'build'
	});

	gulp.watch('www/scss/**/*.scss', gulp.series('css'));
	gulp.watch('www/js/**/*.js', gulp.series('js'));
	gulp.watch('www/img/icon-*.svg', gulp.series('sprite', 'html'));
	gulp.watch('www/*.html', gulp.series('html', 'refresh'));

});

gulp.task('copy', function () {

	return gulp.src([
			'www/fonts/**/*.{woff,woff2}',
			'www/img/**',
			'www/js/**'
		], {
			base: 'www'
		})
		.pipe(gulp.dest('build'));

});

gulp.task('clean', function () {

	return del('build');

});

gulp.task('js', function() {

	return gulp.src('www/js/script.js')
		.pipe(minify({
			ext:{
	            min:'.min.js'
	        },
		}))
		.pipe(gulp.dest('build/js'));
})

gulp.task('build', gulp.series(
	'clean',
	'copy',
	'css',
	'sprite', 
	'html',
	'js'));

gulp.task('start', gulp.series('build', 'server'));

gulp.task("refresh", function (done) {

	server.reload();
	done();

});