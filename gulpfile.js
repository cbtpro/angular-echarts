var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	del = require('del');


gulp.task('clean', function(cb) {
	del(['dist/*'], cb)
});

gulp.task('minifyjs', function() {
	return gulp.src('src/*.js')
		.pipe(concat('angular-echarts.js'))    //合并所有js
		.pipe(gulp.dest('dist/'))    //输出main.js到文件夹
		.pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
		.pipe(uglify())    //压缩
		.pipe(gulp.dest('dist/'));  //输出
});

gulp.task('default', ['clean', 'minifyjs']);
/*
gulp.task('default', function() {
	gulp.start('clean', 'minifyjs');
});
*/