'use strict';

//- IMPORTS ------------------------------------------------------------------------------------

var	gulp					= require('gulp'),
		watch					= require('gulp-watch'),
		del					= require('del'),
		sass					= require('gulp-sass'),
		prefixer				= require('gulp-autoprefixer'),
		sourcemaps			= require('gulp-sourcemaps'),
		cleanCSS				= require('gulp-clean-css'),
		runSeq				= require('run-sequence');

//- VARIABLES ------------------------------------------------------------------------------------

var	look = {
			'sass': 'sass/**/*.sass',
		},
		take = {
			'sass': 'sass/**/*.sass',
		},
		put = {
			'css': 'css/',
		},
		build = {
			'css': 'css/',
		},
		del_dir = {
			'css': 'css/**'
		};

//- DEV ------------------------------------------------------------------------------------

gulp.task('sass', function() {
		return gulp.src(take.sass)
		.pipe(sourcemaps.init())
		.pipe(sass({indentType: 'tab', indentWidth: 1}).on('error', sass.logError))
		.pipe(prefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(put.css));
});

gulp.task('watch', function() {
		gulp.watch(look.sass, ['sass']);
});

gulp.task('default', function() {
		runSeq('preview', 'watch')
});

//- PREVIEW ----------------------------------------------------------------------------------

gulp.task('del-css', function() {
		return del.sync([del_dir.css], {force:true});
});

gulp.task('preview', function() {
		runSeq('del-css' , 'sass');
});

//- BUILD ------------------------------------------------------------------------------------

gulp.task('sass:build', function() {
		return gulp.src(take.sass)
		.pipe(sass().on('error', sass.logError))
		.pipe(prefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(cleanCSS())
		.pipe(gulp.dest(build.css));
});

gulp.task('build', function() {
		runSeq('del-css', 'sass:build');
});