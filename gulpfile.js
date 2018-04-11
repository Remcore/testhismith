'use strict';
var gulp 		 = require('gulp'),
	sass 		 = require('gulp-sass'),
	browser 	 = require('browser-sync'),
	concat 		 = require('gulp-concat'),
	uglify  	 = require('gulp-uglifyjs'),
	cssnano 	 = require('gulp-cssnano'),
	rename 		 = require('gulp-rename'),
	del 		 = require('del'),
	imagemin     = require('gulp-imagemin'),
	pngquant     = require('imagemin-pngquant'),
	cache        = require('gulp-cache'),
	autoprefixer = require('gulp-autoprefixer');


gulp.task('sass',function(){
	return gulp.src('app/sass/**/*.sass')
			.pipe(sass())
			.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
			.pipe(gulp.dest('app/css'))
			.pipe(browser.reload({stream: true}))
});

gulp.task('scripts', function(){
	return gulp.src([
			'app/libs/jquery/dist/jquery.min.js',
			'app/libs/slick/slick.min.js',
			'app/libs/chart.js/dist/Chart.bundle.min.js',
			'app/libs/chart.js/dist/Chart.min.js' 
		])
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'));
});

gulp.task('img',function(){
	return gulp.src('app/img/**/*')
			.pipe(cache(imagemin({
				interlaced: true,
				progressive: true,
				svgoPlugins: [{
					removeViewBox: false
				}],
				use: [pngquant()]
			})))
			.pipe(gulp.dest('dist/img'));
});

gulp.task('csslibs', ['sass'], function(){
	return gulp.src('app/css/libs.css')
			.pipe(cssnano())
			.pipe(rename({suffix: ".min"}))
			.pipe(gulp.dest("app/css/"));
});

gulp.task('clean', function(){
	return del.sync('dist');
});
gulp.task('clear', function(){
	return cache.clearAll();
});

gulp.task('browserSync', function(){
	browser({
		server: {
			baseDir: 'app'
		}

	});
});




gulp.task('watch',['browserSync', 'csslibs', 'scripts'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/*.html', browser.reload);
	gulp.watch('app/js/**/*.js', browser.reload);
});

gulp.task('build',['clean','img', 'sass', 'scripts'], function(){

	var buildCss = gulp.src([
				'app/css/main.css',
				'app/css/libs.min.css'
		])
		.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/css/fonts/**/*')
		.pipe(gulp.dest('dist/css/fonts'));

	var buildJs = gulp.src('app/js/**/*')
		.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));
});