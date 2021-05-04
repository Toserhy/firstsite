function appendbutton(){
	var body=document.querySelector('body');
	var belly=document.getElementById('belly');
	var bellynode=belly.innerHTML;
	var newbelly=document.createElement('div');
	newbelly.className='bellytab';
	newbelly.innerHTML=bellynode;
	body.appendChild(newbelly);
	/* 设置各段border radious */
	var bellytab=document.querySelectorAll('.bellytab');
	bellytab[bellytab.length-1].style.borderBottomLeftRadius='0.8rem';
	bellytab[bellytab.length-1].style.borderBottomRightRadius='0.8rem';
	bellytab[bellytab.length-1].style.paddingBottom='10px';
	for(var i=0;i<bellytab.length-1;i++)
	{
		bellytab[i].style.borderRadius='0';
	}
		/* 站数编号 */
		var station=document.querySelectorAll('.stationid');
		for(var i=0;i<=station.length-1;i++)
		{
			station[i].innerHTML=i+1;
		}
}
function calculate(){
	/* 后尺上下丝 */
	var oneone=document.querySelectorAll('.oneone');
	var onetwo=document.querySelectorAll('.onetwo');
	var twoone=document.querySelectorAll('.twoone');
	var twotwo=document.querySelectorAll('.twotwo');
	var threeone=document.querySelectorAll('.threeone');
	var threetwo=document.querySelectorAll('.threetwo');
		for(var i=0;i<=oneone.length-1;i++)
	{
		threeone[i].value=oneone[i].value-twoone[i].value;
	}
	/* 前尺上下丝 */
	
	for(var i=0;i<=oneone.length-1;i++)
	{
		threetwo[i].value=onetwo[i].value-twotwo[i].value;
	}
	/* 前后视距差 */
	var fourone=document.querySelectorAll('.fourone');
	for(var i=0;i<=oneone.length-1;i++)
	{
		fourone[i].value= Number(threeone[i].value)- Number(threetwo[i].value);
	}
	/* 视距差之和 */
	var fourtwo=document.querySelectorAll('.fourtwo');
	for(var i=0;i<=oneone.length-1;i++)
	{
		var b=0;
		for( var a=i;a>=0;a--){
			var b =b+ Number(fourone[a].value);
		}
		fourtwo[i].value=b;
	}
	/* 黑面后减前 */
	var onethree=document.querySelectorAll('.onethree');
	var twothree=document.querySelectorAll('.twothree');
	var threethree=document.querySelectorAll('.threethree');
	for(var i=0;i<=oneone.length-1;i++)
	{
		threethree[i].value= Number(onethree[i].value)- Number(twothree[i].value);
	}
	/* 红面后减前 */
	var onefour=document.querySelectorAll('.onefour');
	var twofour=document.querySelectorAll('.twofour');
	var threefour=document.querySelectorAll('.threefour');
	for(var i=0;i<=oneone.length-1;i++)
	{
		threefour[i].value=Number(onefour[i].value)-Number(twofour[i].value);
	}
	/* K加黑减红 */
	var k=document.getElementById('valueofK');
	var onefive=document.querySelectorAll('.onefive');
	var twofive=document.querySelectorAll('.twofive');
	var threefive=document.querySelectorAll('.threefive');
	for(var i=0;i<=oneone.length-1;i++)
	{
		onefive[i].value=Number(k.value)+Number(onethree[i].value)-Number(onefour[i].value);
		if(Number(onefive[i].value)>90)
		{
			onefive[i].value=Number(onefive[i].value)-100;
		}
		if(Number(onefive[i].value)<-90)
		{
			onefive[i].value=Number(onefive[i].value)+100;
		}
	}
	for(var i=0;i<=oneone.length-1;i++)
	{
		twofive[i].value=Number(k.value)+Number(twothree[i].value)-Number(twofour[i].value);
		if(Number(twofive[i].value)>90)
		{
			twofive[i].value=Number(twofive[i].value)-100;
		}
		if(Number(twofive[i].value)<-90)
		{
			twofive[i].value=Number(twofive[i].value)+100;
		}
		for(var i=0;i<=oneone.length-1;i++)
		{
			threefive[i].value=Number(onefive[i].value)-Number(twofive[i].value);
			}
	}
	/* 高差中数 */
	var threesix=document.querySelectorAll('.threesix');
	for(var i=0;i<=oneone.length-1;i++)
	{
		if( Number(threethree[i].value)>Number(threefour[i].value))
		{
			threesix[i].value="0"+(Number(threethree[i].value)+Number(threefour[i].value)+100)/2
		}
		else{
			threesix[i].value="0"+(Number(threethree[i].value)+Number(threefour[i].value)-100)/2
		}
	}
}
function remove(){
	var body=document.querySelector('body');
	var bellytab=document.querySelectorAll('.bellytab');
	if(bellytab.length>=2)
	{
		body.removeChild(body.lastChild);
	}
}





var append=document.getElementById('append');
var subtract=document.getElementById('delete');
var equal=document.getElementById('calculate');
append.onclick=function(){
	appendbutton();
};

equal.onclick=function(){
	calculate();
}
subtract.onclick=function(){
	remove();
}