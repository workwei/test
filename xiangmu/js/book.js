// JavaScript Document
/*通用函数，其中$是一个函数名，也可以把$改变例如changesName的函数名称*/
 function $(element){
	  return document.getElementById(element);
	  }

/*循环显示的轮换横幅广告*/
 /*循环显示的图片地址*/	
     var scorll_img=new Array(); 
     scorll_img[0]="images/dd_scroll_1.jpg";
     scorll_img[1]="images/dd_scroll_2.jpg";
     scorll_img[2]="images/dd_scroll_3.jpg";
     scorll_img[3]="images/dd_scroll_4.jpg";
     scorll_img[4]="images/dd_scroll_5.jpg";
     scorll_img[5]="images/dd_scroll_6.jpg";
	 /*按钮的ID编号*/
	 var scroll_number=new Array();
	 scroll_number[0]="scroll_number_1";
	 scroll_number[1]="scroll_number_2";
	 scroll_number[2]="scroll_number_3";
	 scroll_number[3]="scroll_number_4";
	 scroll_number[4]="scroll_number_5";
	 scroll_number[5]="scroll_number_6";
	 var NowFrame = 1;   //最先显示第一张图片
     var MaxFrame = 6;   //一共六张图片
function loopShow(d1){
    if(Number(d1)){
		NowFrame=d1;                //设当前显示图片
		}
	for(var i=1;i<(MaxFrame+1);i++){
		if(i==NowFrame){
			document.getElementById("dd_scroll").src =scorll_img[i-1];   //显示当前图片
			document.getElementById(scroll_number[i-1]).className="scroll_number_over";    //设置当前按钮的CSS样式
         }
		 else{
		 document.getElementById(scroll_number[i-1]).className="scroll_number_out";
		 }
	}
	if(NowFrame == MaxFrame){   //设置下一个显示的图片
		NowFrame = 1;
		}
	else{
		NowFrame++;
		}
//var theTimer=setTimeout('loopShow()', 3000);   //设置定时器，显示下一张图片
}
var theTimer=setInterval('loopShow()', 3000);   //设置定时器，显示下一张图片		
//window.onload=loopShow;

/*最新上架版块TAB切换效果*/
     var bookCate=new Array();
     bookCate[0]="book_history";
     bookCate[1]="book_family";
     bookCate[2]="book_culture";
     bookCate[3]="book_novel";
     var bookClass=new Array();
     bookClass[0]="history";
     bookClass[1]="family";
     bookClass[2]="culture";
     bookClass[3]="novel";
 function bookPutUp(elementId){
	 for(var i=0;i<bookCate.length;i++){
		 if(elementId==i){
			 document.getElementById(bookCate[i]).className="book_show";
			 document.getElementById(bookClass[i]).className="book_type_out";
			 
			 }
		  else{
			document.getElementById(bookCate[i]).className="book_none";
			document.getElementById(bookClass[i]).className="book_type";
			  }
		 }
	 }
	 
	 


/*书讯快递循环垂直向上滚动的文字特效*/   
   var dome=$("dome");
   var dome1=$("dome1");
   var dome2=$("dome2");
   var speed=50;  //设置向上滚动速度
   dome2.innerHTML=dome1.innerHTML //复制dome1为dome2
   function moveTop()
   {
   		if(dome2.offsetTop-dome.scrollTop<=0)   //当滚动至dome1与dome2交界时
   			dome.scrollTop-=dome1.offsetHeight      //dome跳到最顶端
   		else
   		{
   			dome.scrollTop++
   		}
   }
   var MyMar=setInterval(moveTop,speed) //设置定时器
   dome.onmouseover=function()
   {
   		clearInterval(MyMar)
   	}//鼠标移上时清除定时器达到滚动停止的目的
   dome.onmouseout=function() 
   {
   		MyMar=setInterval(moveTop,speed)
   	}//鼠标移开时重设定时器，继续滚动
   
 /*右侧随鼠标滚动的广告图片*/  
var rightT;
var rightR;
var objRight;
var rightWidth;
function place(){
	objRight=document.getElementById("right");
	rightWidth=document.getElementById("right1").width;
	if(objRight.currentStyle){//IE浏览器
       rightT=parseInt(objRight.currentStyle.top);
       rightR=parseInt(objRight.currentStyle.right);
    }
   else{//fireFox浏览器
       rightT=parseInt(document.defaultView.getComputedStyle(objRight,null).top);
       rightR=parseInt(document.defaultView.getComputedStyle(objRight,null).right);
	}

}

function move(){
	objRight.style.top=rightT+parseInt(document.documentElement.scrollTop)+"px";
	objRight.style.left=parseInt(document.documentElement.scrollLeft)+parseInt(document.documentElement.clientWidth)-rightR-rightWidth+"px";
	document.getElementById("dd_close").style.left="63px";
	}

window.onload=place;
window.onscroll=move;


 /*右侧随鼠标滚动的广告图片关闭*/ 
function dd_close(){
	var objRight=document.getElementById("right");
	objRight.style.display="none";
	}
/*首页弹出广告窗口*/
window.open('open.html','','top=0,left=200,width=500,height=327,scrollbars=0,resizable=0'); 	

   