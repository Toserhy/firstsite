//背景颜色变换
var body=document.querySelector("body");
window.onscroll = function() {
  var scroll = document.documentElement.scrollTop;
  if (scroll<=100)
  {
	  body.style.background='#ff7979';
  }
  if(scroll>100&&scroll<=300)
  {
	  body.style.background='#f39c12';
  }
  if(scroll>300&&scroll<=400)
  {
	  body.style.background='#e74c3c';
  }
}

//提取码操作
var codelist=new Array();
codelist[0]="qyx9";
codelist[1]="voka";
codelist[2]="1k1e";
codelist[3]="6jpb";
codelist[4]="voka";
codelist[5]="quac";
codelist[6]="cjdy";

function changecode(i)
{
	var code=document.querySelectorAll(".before");
	code[i].onmouseover=function(){
		code[i].innerHTML=(codelist[i]);
	}
	code[i].onmouseout=function(){
		code[i].innerHTML=("提取码");
	}
}

for (var i=0;i<=6;i++)
{
	changecode(i);
}


