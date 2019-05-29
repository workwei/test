// JavaScript Document

/*浏览同级分类动态显示*/
var bookSort=new Array("中国当代小说（13880）","中国近现代小...（640）","中国古典小说（1547）","四大名著（696）","港澳台小说（838）","外国小说（5119）","侦探/悬疑/推...（2519）","惊悚/恐怖（798）","魔幻（369）","科幻 （513）","武侠（574）","军事（726）","情感 （6700）","社会（4855）","都市（949）","乡土（99）","职场（176）","财经（292）","官场（438）","历史（1329）","影视小说（501）","作品集（2019）","世界名著（3273）");

function productList(){
	bookList=document.getElementById("product_catList_class");
	for(var i in bookSort){
		var bookTitle="<li> ·<a href='#' class='blue'>"+bookSort[i]+"</a></li>";
		bookList.innerHTML+=bookTitle;
		}
	}

/*右侧图书书动态显示*/
var catalog=new Array();
catalog['私募（首部披露资本博弈秘密的金融小说）'] = ['product_list_01.jpg',4,'郭现杰','花山文艺出版社', '2009年08月','数年前，在一次股市的多、空之战中，以赵云狄、林康为首的私募基金—金鼎投资，和以王雨龙为首的私募基金，达成锁仓协议分食利益。殊料，以王雨龙为首的私募基金—鑫利投资背信弃义，导致金鼎投资惨败。以至...','13.10','59折','￥18.90','￥32.00'];

catalog['圈子圈套.1.战局篇'] = ['product_list_02.jpg',4,'王强','清华大学出版社', '2006年01月','虽然没有硝烟，却比战场更血腥；虽然并未战死，却比死亡更痛苦。 洪钧从一个底层的销售人员，成为一家著名的跨国公司的中国区代理首席代表，在即将被扶正，事业情感都志得意满的时候，掉入俞威设计的圈套，...','￥8.90','68折','￥19.10','￥28.00'];

function bookList(){
	var content="";
	for(var i in catalog){
	content+="<div class='product_storyList_content_left'><img src=images/"+catalog[i][0]+" alt='图书列表'></div>";
		content+="<div class='product_storyList_content_right'><ul>";
		content+="<li class='product_storyList_content_dash'><a href='#' class='blue_14'>"+i+"</a></li>";
		content+="<li>顾客评分：";
			 for(var k=0;k<5;k++){
				  if(k<catalog[i][1]){
					content+= "<img src='images/star_red.gif' alt='star'>";
					  }
					else{
					content+= "<img src='images/star_gray.gif' alt='star'>";
						}
				  }
			  content+="</li>";
              content+="<li>作　者：<a href='#' class='blue_14'>"+catalog[i][2]+"</a> 著</li>";
              content+="<li>出版社：<a href='#' class='blue_14'>"+catalog[i][3]+"</a></li>";
             content+="<li>出版时间："+catalog[i][4]+"</li>";
             content+="<li>"+catalog[i][5]+"</li>";
              content+="<li> <dl class='product_content_dd'>";
		content+="<dd><img src='images/product_buy_02.gif' alt='shopping'></dd>";
              content+="<dd><img src='images/product_buy_01.gif' alt='shopping'></dd>";
			  content+="<dd>节省："+catalog[i][6]+"</dd>";
			  content+="<dd>折扣："+catalog[i][7]+"</dd>";
			 content+=" <dd class='footer_dull_red'>"+catalog[i][8]+"</dd>";
               content+="<dd class='product_content_delete'>"+catalog[i][9]+"</dd>";
			   content+="</dl></li> </ul></div>;"
        content+="<div class='product_storyList_content_bottom'></div>";
		}
		
		document.getElementById("storyBooksssss").innerHTML=content;
	}
window.onload=function(){
	bookList();
	productList();
	}

