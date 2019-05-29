// JavaScript Document

/*鼠标在email文本框中时*/
function emailFocus(){
	var email=document.getElementById("email");
	email.className="login_content_input login_content_input_Focus";
	}
	
/*鼠标离开email文本框中时*/	
function emailBlur(){
	var email=document.getElementById("email");
		email.className="login_content_input";
		}
		
/*鼠标在密码文本框中时*/
function pwdFocus(){
	var pwd=document.getElementById("pwd");
	pwd.className="login_content_input login_content_input_Focus";
	}
	
/*鼠标离开密码文本框中时*/	
function pwdBlur(){
	var pwd=document.getElementById("pwd");
		pwd.className="login_content_input";
		}
/*单击登录按钮时，验证email地址和密码是否为空*/
function checkLogin(){
	var email=document.getElementById("email").value;
	var pwd=document.getElementById("pwd").value;
	if(email==""){
		alert("请输入Email地址或昵称");
		return false;
		}
	if(pwd==""){
		alert("请输入密码");
		return false;
		}
	return true;
	}
	
/*单击快速注册进入注册页面*/
function jump(){
	window.location.href="register.html";
	}