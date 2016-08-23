var shan = document.querySelector(".shan");
var shanjiao = document.querySelector('.app');

var btns = document.querySelectorAll('.right-d li');
var imgs = document.querySelectorAll('.right-w li');

var lefts = document.querySelector('.left-p');
var right = document.querySelector('.left-l');

var rights = document.querySelector('.right-b');
var tops = document.querySelector('.top-a');

var rig = document.querySelector('.right-m');
var bottoms = document.querySelector('.top-i');

var ghj= document.querySelector('.right-j');
var ghk= document.querySelector('.tops-k');

var ghp = document.querySelector('.right-ps');
var gph = document.querySelector('.topp-p');

var yun = document.querySelector('.yun');
var yunn = document.querySelector('.yunn');


var wei = document.querySelector('.wei');
var weii = document.querySelector('.weii');


var shi = document.querySelector('.shi');
var shii = document.querySelector('.shii');



shan.onmouseover = function () {
	shanjiao.style.display = 'block';
}
shan.onmouseout = function(){
	shanjiao.style.display = "";
}
var timer = null;
// 点击按钮背景变化
var index = 0;
for(var i = 0;i<btns.length;i++){
	btns[i].index = i;
	btns[i].onclick = function(){
		// clearInterval(timer);

		for(var i = 0;i<btns.length;i++){
			btns[i].className = "";
			imgs[i].className = "";
		}
		btns[this.index].className="b-b";
		imgs[this.index].className="a-a";
		}
		btns[i].onmouseout = function(){
		timer = setInterval(shangYiGe,3000);
		}
		btns[i].onmouseover =function(){
		  clearInterval(timer);}
	}
lefts.onclick=function(){
	shangYiGe();
}	
function shangYiGe(){
		index --;
		if(index < 0){
			index = btns.length -1;
		}
		console.log(index);
		for(var i = 0;i<btns.length;i++){
			btns[i].className= "";
			imgs[i].className= "";	
		}
		btns[index].className= "b-b";
		imgs[index].className= "a-a";
}
timer = setInterval(shangYiGe,3000);
right.onclick=function(){
		
		index --;
		if(index < 0){
			index = btns.length -1;
		}
		console.log(index);
		for(var i = 0;i<btns.length;i++){
			btns[i].className= "";
			imgs[i].className= "";	
		}
		btns[index].className= "b-b";
		imgs[index].className= "a-a";
}
// 第一个前段开发页面
rights.onmouseover = function(){
	tops.style.display = 'block';
}
rights.onmouseout = function(){
	tops.style.display = 'none';
}

// 第二个点击页面
rig.onmouseover = function(){
	bottoms.style.display = 'block';
}
rig.onmouseout = function(){
	bottoms.style.display = 'none';
}
// 第三个
ghj.onmouseover = function(){
	ghk.style.display = 'block';
}
ghj.onmouseout = function(){
	ghk.style.display = 'none';
}

// 第四个
ghp.onmouseover = function(){
	gph.style.display = 'block';
}
ghp.onmouseout = function(){
	gph.style.display = 'none';
}

// 第五个
yun.onmouseover = function(){
	yunn.style.display = 'block';
}
yun.onmouseout = function(){
	yunn.style.display = 'none';
}
// 第六个
wei.onmouseover = function(){
	weii.style.display = 'block';
}
wei.onmouseout = function(){
	weii.style.display = 'none';
}

// 第七个
shi.onmouseover = function(){
	shii.style.display = 'block';
}
shi.onmouseout = function(){
	shii.style.display = 'none';
}



