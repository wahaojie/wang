 var gulp = require('gulp');
 gulp.task('hello',function(){ //第一个参数是任务名称，第二个参数是任务功能
}) 
gulp.task('watch',function(){
	 gulp.watch('*.html',['dist/*.html']);
	 return gulp.src('*.html').pipe(gulp.dest('dist')).pipe(connect.reload())

 }) 
gulp.task('sever',function(){
	connect.server({ 
		root:'dist',
		livereload:true 
	}); 
})
gulp.task('default',['sever','watch']); 