//单击响应事件
function clickevent(tagname,fun)
{
	var tag=document.getElementById(tagname);
	tag.onclick=fun;
}

//滑过box的事件
var rightleft=document.getElementById("rightleft");
var rightright=document.getElementById("rightright");
var box=document.querySelectorAll(".box");
//box0
box[0].onmouseover=function(){
	rightleft.style.width='15%';
	rightright.style.left='95%';
	rightright.style.width='5%';
	var text=document.createElement("p");
	text.innerHTML="<br><br><br><br>在<br>线<br>计<br>算<br>实<br>习<br>表<br>格"
	rightleft.appendChild(text);
}
box[0].onmouseout=function(){
	rightleft.style.width='10%';
	rightright.style.left='90%';
	rightright.style.width='10%';
	rightleft.innerHTML='';
}
//box2
box[2].onmouseover=function(){
	rightleft.style.width='15%';
	rightright.style.left='95%';
	rightright.style.width='5%';
	var text=document.createElement("p");
	text.innerHTML="<br><br><br><br>收<br>录<br>测<br>绘<br>专<br>业<br>所<br>用<br>软<br>件"
	rightleft.appendChild(text);
}
box[2].onmouseout=function(){
	rightleft.style.width='10%';
	rightright.style.left='90%';
	rightright.style.width='10%';
	rightleft.innerHTML='';
}
//box1
box[1].onmouseover=function(){
	rightleft.style.width='5%';
	rightright.style.left='85%';
	rightright.style.width='15%';
	var text=document.createElement("p");
	text.innerHTML="<br><br><br><br>收<br>录<br>一<br>些<br>实<br>用<br>网<br>站"
	rightright.appendChild(text);
}
box[1].onmouseout=function(){
	rightleft.style.width='10%';
	rightright.style.left='90%';
	rightright.style.width='10%';
	rightright.innerHTML='';
}
//box3
box[3].onmouseover=function(){
	rightleft.style.width='5%';
	rightright.style.left='85%';
	rightright.style.width='15%';
	var text=document.createElement("p");
	text.innerHTML="<br><br><br><br><br><br><br><br>更<br>多<br><br>"
	rightright.appendChild(text)
}
box[3].onmouseout=function(){
	rightleft.style.width='10%';
	rightright.style.left='90%';
	rightright.style.width='10%';
	rightright.innerHTML='';
}




	