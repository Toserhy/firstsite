//鼠标移动事件
function mousemove(tag,funover,funout){
	var a=document.getElementById(tag);
	a.onmouseover=funover;
	a.onmouseout=funout;
}

//实现四个事件
var a=document.getElementById("interst");
var b=document.getElementById("resource");
var c=document.getElementById("study");
var d=document.getElementById("develop");
//
var acon=document.querySelector("#interst img");
var bcon=document.querySelector("#resource img");
var ccon=document.querySelector("#study img");
var dcon=document.querySelector("#develop img");
//
var acona=document.querySelector("#interst a");
var bcona=document.querySelector("#resource a");
var ccona=document.querySelector("#study a");
var dcona=document.querySelector("#develop a")
//
var aenter=document.querySelector("#enterone img");
var benter=document.querySelector("#entertwo img");
var center=document.querySelector("#enterthree img");
var denter=document.querySelector("#enterfour img");
//第一个
mousemove("interst",function(){
	a.style.width='50%';
	b.style.width='25%';
	c.style.width='15%';
	d.style.width='10%';
	b.style.left='50%';
	c.style.left='75%';
	d.style.left='90%';
	acon.style.maxHeight='200px';
	acon.style.maxWidth='200px';
	acona.style.color='black';
	aenter.style.maxHeight='40px';
	aenter.style.maxWidth='40px';
},function(){
	a.style.width='25%';
	b.style.width='25%';
	c.style.width='25%';
	d.style.width='25%';
	b.style.left='25%';
	c.style.left='50%';
	d.style.left='75%';
	acon.style.maxHeight='0px';
	acon.style.maxWidth='0px';
	acona.style.color='transparent';
	aenter.style.maxHeight='0px';
	aenter.style.maxWidth='0px';
})
//第二个
mousemove("resource",function(){
	a.style.width='10%';
	b.style.width='50%';
	c.style.width='25%';
	d.style.width='15%';
	b.style.left='10%';
	c.style.left='60%';
	d.style.left='85%';
	bcon.style.maxHeight='200px';
	bcon.style.maxWidth='200px';
	bcona.style.color='black'
	benter.style.maxHeight='40px';
	benter.style.maxWidth='40px';
	
},function(){
	a.style.width='25%';
	b.style.width='25%';
	c.style.width='25%';
	d.style.width='25%';
	b.style.left='25%';
	c.style.left='50%';
	d.style.left='75%';
	bcon.style.maxHeight='0px';
	bcon.style.maxWidth='0px';
	bcona.style.color='transparent';
	benter.style.maxHeight='0px';
	benter.style.maxWidth='0px';
})
//第三个
mousemove("study",function(){
	a.style.width='10%';
	b.style.width='15%';
	c.style.width='50%';
	d.style.width='25%';
	b.style.left='10%';
	c.style.left='25%';
	d.style.left='75%';
	ccon.style.maxHeight='200px';
	ccon.style.maxWidth='200px';
	ccona.style.color='black'
	center.style.maxHeight='40px';
	center.style.maxWidth='40px';
},function(){
	a.style.width='25%';
	b.style.width='25%';
	c.style.width='25%';
	d.style.width='25%';
	b.style.left='25%';
	c.style.left='50%';
	d.style.left='75%';
	ccon.style.maxHeight='0px';
	ccon.style.maxWidth='0px';
	ccona.style.color='transparent';
	center.style.maxHeight='0px';
	center.style.maxWidth='0px';
})
//第四个
mousemove("develop",function(){
	a.style.width='10%';
	b.style.width='15%';
	c.style.width='25%';
	d.style.width='50%';
	b.style.left='10%';
	c.style.left='25%';
	d.style.left='50%';
	dcon.style.maxHeight='200px';
	dcon.style.maxWidth='200px';
	dcona.style.color='black';
	denter.style.maxHeight='40px';
	denter.style.maxWidth='40px';
},function(){
	a.style.width='25%';
	b.style.width='25%';
	c.style.width='25%';
	d.style.width='25%';
	b.style.left='25%';
	c.style.left='50%';
	d.style.left='75%';
	dcon.style.maxHeight='0px';
	dcon.style.maxWidth='0px';
	dcona.style.color='transparent';
	denter.style.maxHeight='0px';
	denter.style.maxWidth='0px';
})






