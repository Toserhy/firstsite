function appendtab(){
	var tab=document.querySelector('#tab');
	var table=document.querySelectorAll('table');
	var tbody=document.querySelectorAll('tbody');
	var numbertr=document.querySelectorAll('.thenum tr')
	/* 调整表格大小 */
	var tabheight=(numbertr.length-5)*3.5+30;
	tab.style.height=tabheight+'rem';
	var tableheight=(numbertr.length+1)*(3.5+0.125);
	for(var i=0;i<=5;i++)
	{
		table[i].style.height=tableheight+'rem';
	}
	
	/* 创造一堆子节点添加,注意创造一个只能使用一次 */
	/* 输出项 */
	var outtrlist=new Array();
	for(var i=0;i<=2;i++){
		var tr=document.createElement('tr');
		tr.innerHTML='<td></td>';
		outtrlist[i]=tr;
	}
	for(var i=3;i<=tbody.length-1;i++)
	{
		tbody[i].appendChild(outtrlist[i-3]);
	}
	/* 添加项 */
	var intrlist=new Array();
	for(var i=0;i<=1;i++){
		var tr=document.createElement('tr');
		tr.innerHTML='<td><input type="" name="" id="" value="" /></td>';
		outtrlist[i]=tr;
	}
		tbody[1].appendChild(outtrlist[0]);
		tbody[2].appendChild(outtrlist[1]);
	/* 添加点号 */
	var tr=document.createElement('tr');
	tr.innerHTML='<td>'+numbertr.length+'</td>'
	tbody[0].appendChild(tr);
}
function removetab(){
	var tbody=document.querySelectorAll('tbody');
	for(var i=0;i<=tbody.length-1;i++)
	{
		tbody[i].removeChild(tbody[i].lastChild);
	}
	
	
	var tab=document.querySelector('#tab');
	var table=document.querySelectorAll('table');
	var tbody=document.querySelectorAll('tbody');
	var numbertr=document.querySelectorAll('.thenum tr')
	/* 调整表格大小 */
	var tabheight=(numbertr.length-6)*3.5+30;
	tab.style.height=tabheight+'rem';
	var tableheight=(numbertr.length)*(3.5+0.125);
	for(var i=0;i<=5;i++)
	{
		table[i].style.height=tableheight+'rem';
	}
}
function appendknowedheigh(){
	var sixcol=document.querySelectorAll('.theheigh td');
	sixcol[sixcol.length-1].innerHTML='<input type="" name="" id="" value="" />';
	sixcol[sixcol.length-2].innerHTML='';
}
function calculatetab(){
	/* 计算总高差 */
	var thethree=document.querySelectorAll('#three input');
	var sum_of_heigh=0;
	for (var i=0; i<=thethree.length-1;i++){
		sum_of_heigh+=Number(thethree[i].value);
	}
	/* 计算闭合差 */
	var thesixinput=document.querySelectorAll('.theheigh input');
	var closure_error=sum_of_heigh+Number(thesixinput[0].value)-Number(thesixinput[1].value);
	sum_of_heigh=Math.round(sum_of_heigh*Math.pow(10,3))
	closure_error=Math.round(closure_error*Math.pow(10,3));
	/* alert(sum_of_heigh);
	alert(closure_error); */
	/* 计算总距离 */
	var thetwo=document.querySelectorAll('#two input');
	var sum_of_distance=0;
	for (var i=0; i<=thetwo.length-1;i++){
		sum_of_distance+=Number(thetwo[i].value);
	}
	/* 按权分配 */
	var thefour=document.querySelectorAll('#four td')
	for(var i=2;i<=thefour.length-1;i++)
	{
		thefour[i].innerHTML=Math.round((Number(thetwo[i-2].value)/sum_of_distance*closure_error))*(-1);
	}
	/* 四舍五入精度问题 */
	var sum_of_correctnum=0;
	for(var i=2;i<=thefour.length-1;i++)
	{
		sum_of_correctnum+=Number(thefour[i].innerHTML);
	}
	/* alert(sum_of_correctnum);
	alert(thefour[thefour.length-1].innerHTML);
	alert(closure_error); */
	if(sum_of_correctnum!=closure_error*(-1))
	{
		thefour[thefour.length-1].innerHTML=Number(thefour[thefour.length-1].innerHTML)+closure_error*(-1)-sum_of_correctnum;
	}
	/* 改正后高差 */
	var thefive=document.querySelectorAll('#five td');
	for(var i=2;i<=thefour.length-1;i++)
	{
		thefive[i].innerHTML= (Number(thethree[i-2].value)+Number(thefour[i].innerHTML)*Math.pow(10,-3)).toFixed(3);;
	}
	/* 计算高程 */
	var thesix=document.querySelectorAll('.theheigh td');
	var thesixinput=document.querySelectorAll('.theheigh input');
	thesix[2].innerHTML=Number((Number(thesixinput[0].value)+Number(thefive[2].innerHTML)).toFixed(3));
	for(var i=3;i<=thesix.length-2;i++)
	{
		thesix[i].innerHTML=Number((Number(thesix[i-1].innerHTML)+Number(thefive[i].innerHTML)).toFixed(3));
	}
	alert("闭合差为:"+closure_error+"mm");
}

	
var append=document.getElementById('append');
append.onclick=function(){
	appendtab();
	appendknowedheigh();
}

var remove=document.getElementById('delete');
remove.onclick=function(){
	removetab();
	appendknowedheigh();
}

var calculate=document.getElementById('calculate');
calculate.onclick=function(){
	calculatetab();
}