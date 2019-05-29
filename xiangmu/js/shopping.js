// JavaScript Document
/*根据您挑选的商品，当当为您推荐部分的显示和隐藏*/
function shopping_commend_show(){
	var imgId=document.getElementById("shopping_commend_arrow");   //箭头图片
	var sortId=document.getElementById("shopping_commend_sort");   //推荐的商品
	
	if(sortId.style.display=="none"){
		 sortId.style.display="block";
		 imgId.src="images/shopping_arrow_up.gif";
		}
	else{
		sortId.style.display="none";
		imgId.src="images/shopping_arrow_down.gif";
		}
	
	}
	
	
/*鼠标移到产品上时*/	
function productOver(elementId){
	var Element=document.getElementById(elementId);
	Element.style.backgroundColor="#ffffff";
	}

/*鼠标离开产品上时*/	
function productOut(elementId){
	var Element=document.getElementById(elementId);
	Element.style.backgroundColor="#fefbf2";
	}

/*删除产品*/
function deleteProduct(elementId){
	var delElement=document.getElementById(elementId);  //删除元素的id
	var flag=confirm("你确定要删除此商品吗？");
	if(flag==true){
		delElement.parentNode.removeChild(delElement);
		productCount();
		}
	}
	
/*自动计算商品的总金额、总共节省的金额和积分*/
function productCount(){
	var total=0;      //商品金额总计
	var save=0;       //您共节省的金额
	var integral=0;   //可获商品积分
	
	var point;      //每一行商品的单品积分
	var price;     //每一行商品的市场价格
	var ddPrice;   //每一行商品的当当价格
	var number;    //每一行商品的数量

     /*访问ID为myTableProduct表格中所有的行数*/
	var myTableTr=document.getElementById("myTableProduct").getElementsByTagName("tr"); 
	for(var i=0;i<myTableTr.length;i++){
		point=myTableTr[i].getElementsByTagName("td")[1].getElementsByTagName("label")[0].innerHTML; 
		price=myTableTr[i].getElementsByTagName("td")[2].getElementsByTagName("label")[0].innerHTML;
		ddPrice=myTableTr[i].getElementsByTagName("td")[3].getElementsByTagName("label")[0].innerHTML;
		number=myTableTr[i].getElementsByTagName("td")[4].getElementsByTagName("input")[0].value;
		integral+=point*number;
		total+=ddPrice*number;
		save+=(price-ddPrice)*number;
		}
	document.getElementById("product_total").innerHTML=total;
	document.getElementById("product_save").innerHTML=save;
	document.getElementById("product_integral").innerHTML=integral;
	
	}
window.onload=productCount;