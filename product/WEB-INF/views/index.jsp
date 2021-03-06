<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%><c:set var="ctx" value="${pageContext.request.contextPath}" /><!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta name="renderer" content="webkit"><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"><link rel="icon" href="http://static.test.o-home.com/v2/image/layouts/ohome.ico"><link rel="stylesheet" href="${ctx}/static/css/base.min.css"><script><!--[if lte IE 9]>
      window.onload = function () {
            var msg1="亲爱的用户：";
            var msg2="请使用ie10以上浏览器，或者谷歌/火狐浏览器等内核浏览器，蟹蟹";
            document.body.innerHTML = "<div id='errorContainer'>"+
            "<img src='../static/image/common/tips.png'/>"+
            "<div class='message'>"+
            "<h2 id='1' class='title-tips title-tips-1'></h2>"+
            "<h2 id='2' class='title-tips title-tips-2'></h2>"+
            "</div>"+
            "</div>";
            var timer=setInterval(dealText,60);
            var text1=document.getElementById("1");
            var text2=document.getElementById("2");
            var isText1Gone=false;
            var subTextLastIndex=1;
            var subText2LastIndex=1;
            function dealText(){
                if(!isText1Gone){
                    text1.innerText=msg1.substring(0,subTextLastIndex);
                    if(subTextLastIndex<msg1.length){
                        subTextLastIndex++;
                    }else{
                     isText1Gone=true;
                    }
                }else{
                    text2.innerText=msg2.substring(0,subText2LastIndex);
                    if(subText2LastIndex<msg2.length){
                        subText2LastIndex++;
                    }
                 }
            }
     };
<![endif]--></script><script src="${ctx}/static/js/config.js"></script><title>生活记录从这里开始</title><style> @charset "UTF-8";
* {
  font-family: "微软雅黑";
  box-sizing: border-box; }

body, html {
  width: 100%;
  height: 100%;
  overflow: hidden; }

.pull-left {
  float: left; }

.pull-right {
  float: right; }

.clearfix:after {
  display: block;
  content: ".";
  height: 0;
  visibility: hidden;
  clear: both; }

.clearfix {
  *zoom: 1; }

.btn {
  border: none;
  background-color: red;
  color: #fff;
  cursor: pointer; }

a {
  color: #3cf;
  cursor: pointer; }

body {
  background: url(http://www.17sucai.com/preview/124020/2015-11-06/login/img/logo_bg.jpg) no-repeat center center; }

.theme-name {
  margin-top: 80px;
  color: #fff;
  font-size: 36px; }

:target {
  color: red; }

.login-wrapper {
  position: absolute;
  top: 200px;
  left: 50%;
  width: 350px;
  height: 400px;
  padding: 10px 30px;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  background-color: #fff; }

.title {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  color: #888888;
  border-bottom: 1px solid #ccc; }

.slide-block {
  position: absolute;
  left: 15%;
  bottom: 0;
  content: "";
  width: 90px;
  height: 2px;
  background-color: rgba(1, 1, 1, 0.5);
  transition: left .3s ease-in; }

.slide-block.active {
  left: 55%; }

.title a {
  display: inline-block;
  overflow: hidden;
  margin-bottom: 2px;
  padding: 0 20px;
  color: #ccc;
  text-decoration: none; }

.title a:nth-child(1) {
  margin-left: 50px; }

.title a:nth-child(2) {
  margin-right: 50px; }

.title a:hover,
.title a.select {
  color: #333; }

.form-item {
  width: 100%;
  margin-bottom: 10px;
  color: #666666; }

.input-item {
  margin-bottom: 20px; }

input[type="text"],
input[type="password"],
button {
  width: 100%;
  height: 40px;
  line-height: 40px; }

input[type="text"],
input[type="password"] {
  padding-left: 10px;
  border: 1px solid #ccc; }

form {
  background-color: #fff;
  margin-top: 20px; }

#register {
  display: none; }

.msg-box {
  font-size: 14px; }

/*动画效果*/
.animate {
  -webkit-animation-duration: .8s;
  animation-duration: .8s;
  -webkit-animation-timing-function: ease-in;
  animation-timing-function: ease-in; }

.moveLeft {
  -webkit-animation-name: moveLeft;
  animation-name: moveLeft; }

.moveRight {
  -webkit-animation-name: moveRight;
  animation-name: moveRight; }

@-webkit-keyframes moveLeft {
  0% {
    -webkit-transform: translateX(-100%); }
  100% {
    -webkit-transform: translateX(0); } }

@-webkit-keyframes moveRight {
  0% {
    -webkit-transform: translateX(100%); }
  100% {
    -webkit-transform: translateX(0); } }
</style></head><body><section class="login-register"><hgroup><h1 class="theme-name" align="center">生活记录从这里开始</h1><div class="login-wrapper"><div class="title active"><a class="pull-left link-login select" href="#login">登录</a><a class="pull-right link-register" href="#register">注册</a><div class="slide-block"></div></div><form id="login"><div class="form-item input-item"><input type="text" placeholder="手机号/邮箱"></div><div class="form-item input-item"><input type="password" placeholder="密码"></div><div class="form-item msg-box clearfix"><div class="pull-left"> <input type="checkbox"><label>下次自动登录</label></div><div class="pull-right"><a>忘记密码</a></div></div><div class="form-item"> <button class="btn" type="button">登录</button></div><div class="form-item"><span>还没有账号？</span><a href="#register">马上注册                   </a></div></form><form id="register">   <div class="form-item input-item"><input type="text" placeholder="手机号/邮箱"></div><div class="form-item input-item"><input type="password" placeholder="密码"></div><div class="form-item input-item"><input type="password" placeholder="确认密码"></div><div class="form-item"> <button class="btn" type="button">注册      </button></div></form></div></hgroup></section><script>"use strict";

window.onload = function () {
    //获取切换的按钮
    var btnLinkLogin = document.querySelector(".link-login");
    var btnLinkRegister = document.querySelector(".link-register");
    //获取滑块
    var slideBlock = document.querySelector(".slide-block");
    //获取登录界面
    var loginForm = document.getElementById("login");
    //获取注册界面
    var registerForm = document.getElementById("register");
    if (window.addEventListener) {
        btnLinkLogin.addEventListener("click", function (e) {
            var self = this;
            removeClass(slideBlock, "active");
            addClass(self, "select");
            removeClass(btnLinkRegister, "select");
            //界面处理
            loginForm.style.display = "block";
            registerForm.style.display = "none";
        });
    }
    if (window.addEventListener) {
        btnLinkRegister.addEventListener("click", function (e) {
            var self = this;
            addClass(slideBlock, "active");
            addClass(self, "select");
            removeClass(btnLinkLogin, "select");
            //界面处理
            registerForm.style.display = "block";
            loginForm.style.display = "none";
        });
    }

    //实现登陆

    //实现注册

    //判断是否有类
    var hasClass = function hasClass(obj, classOfName) {
        console.log(obj.className);
        return obj.className.match(new RegExp('(\\s|^)' + classOfName + '(\\s|$)'));
    };
    //添加类的操作
    var addClass = function addClass(obj, classOfName) {
        console.log(obj.className);
        if (!hasClass(obj, classOfName)) {
            //必须是加空格的双引号
            obj.className += " " + classOfName;
        }
    };
    //删除类的操作
    var removeClass = function removeClass(obj, classOfName) {
        if (hasClass(obj, classOfName)) {
            var reg = new RegExp('(\\s|^)' + classOfName + '(\\s|$)');
            obj.className = obj.className.replace(reg, "");
        }
    };
    //切换类
    var toggleClass = function toggleClass(obj, classOfName) {
        if (hasClass(obj, classOfName)) {
            removeClass(obj, classOfName);
        } else {
            addClass(obj, classOfName);
        }
    };
};</script></body></html>