var gulp=require("gulp");
var webpack = require('gulp-webpack');
var webpackConfig = require("./webpack.config.js");
var less = require("gulp-less");
var minifycss = require("gulp-minify-css");

gulp.task("build_jsx",function(){
	return gulp.src("./")
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest("./dist/"));
});

gulp.task("build_css",function(){
	gulp.src("./src/less/*.less")
		.pipe(less())
		.pipe(minifycss())
		.pipe(gulp.dest("./src/css/"));
});

gulp.task("watch",function(){
	gulp.watch("src/js/index.js",["build_jsx"]);
	gulp.watch("src/less/*.less",["build_css"]);
});

gulp.task("default",["watch"],function(){
	gulp.start("build_jsx","build_css",["watch"]);
});