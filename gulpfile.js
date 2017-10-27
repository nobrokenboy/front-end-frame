/**
 * Created by nobrokenboy on 2017/10/24.
 */
var gulp=require("gulp"),
    sass=require("gulp-sass"),
    sourcemaps=require("gulp-sourcemaps"),//源文件映射
    autoprefixer=require("autoprefixer"),//浏览器前缀自动补全
    rev=require('gulp-rev-append'),//添加版本号
    rename=require('gulp-rename'),//重命名文件或者将文件输出到新的目录（jsp应用到）
    jade=require('gulp-pug'),
    postcss=require('gulp-postcss'),//一个支持css多种处理方式的“平台”
    browerSync=require('browser-sync').create(),
    watch=require('gulp-watch'),
    replace = require('gulp-replace'),
    inlinesass = require('jstransformer-sass'),
    inlinecss = require('jstransformer-autoprefixer'),
    inlineless=require('jstransformer-less'),
    plumber = require('gulp-plumber'),
    shell = require('gulp-shell')

//java项目前端代码的输出目录
/* var prefix="../src/main/webapp/"; */

//测试项目生成目录
var prefix="./product";
//自动刷新，加载
var reload=browerSync.reload;

//静态服务器
gulp.task('brower-sync',function(){
    browerSync.init({
        /* proxy: '10.70.7.222:8092',
        port:8099, */
        server:{
            baseDir:prefix,
            /* index:"WEB-INF/views/login.html" */
            index:"/views/web/**/*.html"//页面打开http://localhost:3000/views/web/user/index.html
        },
        files:[prefix+'/**/*.*'],
        notify: false
    });
});
//编译、合并、压缩、重命名css
//sass输入风格(自带压缩功能，可以替代gulp-minify-css)
/*嵌套输出方式 nested,展开输出方式 expanded,紧凑输出方式 compact,压缩输出方式 compressed*/
gulp.task("css",function(){
    gulp.src(["./develop/static/style/base.scss"])
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle:"compressed"}).on("error",sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(rename({suffix:".min"}))
        .pipe(sourcemaps.write())
        // .pipe(rev())
        .pipe(gulp.dest(prefix+"/static/css"));
    });

//编译jade
gulp.task('jade', function() {
    return watch('./develop/views/**/**/*.{jade,scss,pug}',function(e){//监控jade文件以及scss文件变化，才执行编译
        console.log("哈哈哈");
        gulp.src("./develop/views/**/**/*.jade")
            .pipe(plumber())
            .pipe(jade(_jade_common()))
           /*  .pipe(rename({//
                dirname: "/",
            })) */
            .pipe(gulp.dest(prefix+'/views/'));
    });

});

//生成jsp文件
const insertJSP='<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>'+
'<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>'+
'<c:set var="ctx" value="${pageContext.request.contextPath}" />';
gulp.task('jsp', function() {
    gulp.src("./develop/views/**/*.jade")
        .pipe(jade(_jade()))
        .pipe(replace('<!--<%@ page contentType="text/html;charset=UTF-8" language="java" %>-->',insertJSP))
        .pipe(rename({
            dirname: "/",
            extname: ".jsp"
        }))
        .pipe(gulp.dest(prefix+'/WEB-INF/views'));
    });

function _jade_common() {//生成普通的html
    return {
        pretty: true, //false会压缩html
        filters:[inlinesass,inlinecss],
        data:{//支持生成html文件变量
            ctx:"/static"
        }
    }
}

function _jade() {//jsp专用
    return {
        pretty: false, //false会压缩html
        filters:[inlinesass,inlinecss],
        data:{//生成jsp设置变量
            ctx:"${ctx}/static"
        }
    }
}


//输出图片
gulp.task("image",function(){
    gulp.src("./develop/static/image/**/*.{jpg,png,svg}")
        .pipe(gulp.dest(prefix+"/static/image"));
});

//输出json
gulp.task("data",function(){
    gulp.src("./develop/static/data/**/*.json")
        .pipe(gulp.dest(prefix+"/static/data"));
});
//输出font
gulp.task("font",function(){
    gulp.src("./develop/static/font/**/*.{eot,svg,ttf,woff}")
        .pipe(gulp.dest(prefix+"/static/font"));
});
//执行config文件输出
gulp.task("config",function(){
    gulp.src("./develop/static/script/config/config.js")
        .pipe(gulp.dest(prefix+"/static/js"));
});
//
gulp.task("watcher",function(){
    gulp.watch("./develop/static/style/**/*.scss",["css"]);
    gulp.watch("./develop/static/image/**/*.{jpg,png,svg}",["image"]);
    gulp.run('jade')
    //浏览器自动刷新
    gulp.run('brower-sync');
});
//执行webpack -w命令
gulp.task('webpack',shell.task([
    'webpack -w',
    'echo hello'
]));
//初始化
gulp.task("init",function(){
    gulp.run('css');
    gulp.run('jade');
    gulp.run('image');
    gulp.run('font');
    gulp.run('data');
    gulp.run('config');
    gulp.run('webpack');
    //打开监听
    gulp.run('watcher');

});

