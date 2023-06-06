//获取图片列
var selectfist=document.querySelectorAll(".select img");
var playerfist=document.querySelectorAll('.playerfist img');
var computerfist=document.querySelectorAll('.computerfist img');

//获取比分score
var sumdiv=document.querySelector(".sum");
var victorydiv=document.querySelector(".victory");
var losediv=document.querySelector(".lose");
var drawdiv=document.querySelector(".draw");

//获取记录record
var record=document.querySelector(".recordcontent")
console.log(computerfist[0]); 

//声明胜负数以及总局数
var sum=0;
var victory=0;
var lose=0;
var draw=0;

//出拳函数
function fist(){
	var computerre= Math.floor(Math.random() * 3);
	var playerre=0;
	if(computerre==0){
		for(let i=0;i<3;i++){
			computerfist[i].style.top='0%';
		}
		draw++;
		drawdiv.innerHTML="平局："+draw;
		var myBr = document.createElement("br");
		record.appendChild(myBr);
		var myText = document.createTextNode("第"+(sum+1)+"局：玩家出石头，平局");
		record.appendChild(myText);
	}
	else if(computerre==1){
		for(let i=0;i<3;i++){
			computerfist[i].style.top='-100%';
		}
		victory++;
		victorydiv.innerHTML="胜场："+victory;
		var myBr = document.createElement("br");
		record.appendChild(myBr);
		var myText = document.createTextNode("第"+(sum+1)+"局：玩家出石头，胜利");
		record.appendChild(myText);
	}
	else{
		for(let i=0;i<3;i++){
			computerfist[i].style.top='-200%';
		}
		lose++;
		losediv.innerHTML="败场："+lose;
		var myBr = document.createElement("br");
		record.appendChild(myBr);
		var myText = document.createTextNode("第"+(sum+1)+"局：玩家出石头，失败");
		record.appendChild(myText);
	}
	
	for(let i=0;i<3;i++){
			playerfist[i].style.top='0%';
	}
	sum++;
	sumdiv.innerHTML="总局数："+sum;
	console.log(sum);
}

//出剪刀函数
function scissors(){
	var computerre= Math.floor(Math.random() * 3);
	var playerre=0;
	if(computerre==0){
		for(let i=0;i<3;i++){
			computerfist[i].style.top='0%';
		}
		lose++;
		losediv.innerHTML="败场："+lose;
		var myBr = document.createElement("br");
		record.appendChild(myBr);
		var myText = document.createTextNode("第"+(sum+1)+"局：玩家出剪刀，失败");
		record.appendChild(myText);
	}
	else if(computerre==1){
		for(let i=0;i<3;i++){
			computerfist[i].style.top='-100%';
		}
		draw++;
		drawdiv.innerHTML="平局："+draw;
		var myBr = document.createElement("br");
		record.appendChild(myBr);
		var myText = document.createTextNode("第"+(sum+1)+"局：玩家出剪刀，平局");
		record.appendChild(myText);
	}
	else{
		for(let i=0;i<3;i++){
			computerfist[i].style.top='-200%';
		}
		victory++;
		victorydiv.innerHTML="胜场："+victory;
		var myBr = document.createElement("br");
		record.appendChild(myBr);
		var myText = document.createTextNode("第"+(sum+1)+"局：玩家出剪刀，胜利");
		record.appendChild(myText);
	}
	
	for(let i=0;i<3;i++){
			playerfist[i].style.top='-100%';
	}
	sum++;
	sumdiv.innerHTML="总局数："+sum;
	console.log(sum);
}



//出布函数
function paper(){
	var computerre= Math.floor(Math.random() * 3);
	var playerre=0;
	if(computerre==0){
		for(let i=0;i<3;i++){
			computerfist[i].style.top='0%';
		}
		victory++;
		victorydiv.innerHTML="胜场："+victory;
		var myBr = document.createElement("br");
		record.appendChild(myBr);
		var myText = document.createTextNode("第"+(sum+1)+"局：玩家出布，胜利");
		record.appendChild(myText);
	}
	else if(computerre==1){
		for(let i=0;i<3;i++){
			computerfist[i].style.top='-100%';
		}
		lose++;
		losediv.innerHTML="败场："+lose;
		var myBr = document.createElement("br");
		record.appendChild(myBr);
		var myText = document.createTextNode("第"+(sum+1)+"局：玩家出布，失败");
		record.appendChild(myText);
	}
	else{
		for(let i=0;i<3;i++){
			computerfist[i].style.top='-200%';
		}
		draw++;
		drawdiv.innerHTML="平局："+draw;
		var myBr = document.createElement("br");
		record.appendChild(myBr);
		var myText = document.createTextNode("第"+(sum+1)+"局：玩家出布，平局");
		record.appendChild(myText);
	}
	
	for(let i=0;i<3;i++){
			playerfist[i].style.top='-200%';
	}
	sum++;
	sumdiv.innerHTML="总局数："+sum;
	console.log(sum);
}



//调用函数
selectfist[0].addEventListener("click",fist);
selectfist[1].addEventListener("click",scissors);
selectfist[2].addEventListener("click",paper);
