var gulp =require('gulp'); 
gulp.task('copy-index',function(){ 
	//gulp.src()找到我们的index.html然后使用.pipe()通道 
	//gulp.dest()发布拷贝 
	return gulp.src('index.html').pipe(gulp.dest('dist'));
 });
