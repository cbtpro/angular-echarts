var gulp = require('gulp');

//定义一个testLess任务（自定义任务名称）
gulp.task('dist', function () {
    gulp.src('src/angular-echarts.js') //该任务针对的文件
        .pipe(gulp.dest('dist/')); //将会在src/css下生成index.css
});
 
gulp.task('default',['dist']);
/*
gulp.task('default', function() {
	// 将你的默认的任务代码放在这
});
*/