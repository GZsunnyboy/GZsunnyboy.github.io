

// var wrap = document.querySelector(".wrap");
// var box = document.querySelector(".scale-box");
// var ro = "rotate2"; 

// function run(){
// 	box.classList.add("scale");
// 	box.addEventListener("webkitAnimationEnd",rotate)
// }

// function rotate(event){

// 	event.stopPropagation();

// 	wrap.classList.remove(ro);
// 	ro = ro == "rotate2" ? "rotate" : "rotate2";
// 	wrap.classList.add(ro);			
// 	wrapEnd();
// }

// function wrapEnd(){
// 	wrap.addEventListener("webkitAnimationEnd",function(){	
// 		box.removeEventListener("webkitAnimationEnd",rotate)
// 		box.classList.remove("scale");
// 		box.classList.add("shrink");	
// 		boxEnd();
// 	})
// }

// function boxEnd(){
// 	box.addEventListener("webkitAnimationEnd",function(){
// 		event.stopPropagation();
// 		box.classList.remove("shrink");
// 	})
// }







// var topDiv = document.querySelector(".top");
// var bottomDiv = document.querySelector(".bottom");
// var sections = document.querySelectorAll(".section");
// var menus_ul = document.getElementsByClassName("nav_R_ul")[0];
// var nav_R_M1 = document.getElementsByClassName("nav_R_M1")[0];
// var nav_R_M2 = document.getElementsByClassName("nav_R_M2")[0];
// var menus = menus_ul.getElementsByTagName("li");
// var cloneDiv = sections[0].cloneNode(true);
// var current = 1;

// topDiv.appendChild(cloneDiv);

// function menuEffect(index){
// 	for(var i = 0; i < menus.length;i++){
// 		nav_R_M1.classList.remove("nav_active_O_"+i);
// 		nav_R_M2.classList.remove("nav_active_T_"+i);
// 		menus[i].classList.remove("nav_active");
// 	}
// 	nav_R_M1.classList.add("nav_active_O_"+index);
// 	nav_R_M2.classList.add("nav_active_T_"+index);
// 	menus[index].classList.add("nav_active");
// }

// for(var i = 0; i < menus.length; i++){
// 	menus[i].index = i;
// 	menus[i].onclick = function(){



// 		current = current == 1 ?  2 : 1;

// 		var currentDiv = current == 1 ? topDiv : bottomDiv;

// 		var sec = sections[this.index].cloneNode(true);

// 		currentDiv.innerHTML = "";
// 		currentDiv.appendChild(sec);
		
// 		run();
// 		D6();
// 		CHANGE();
// 		D6_nav();
// 		D6_D6();
// 		D6_D5();

// 		menuEffect(this.index);

// 		if(this.index == 0){
// 			btn();
// 			Ul_S();
// 		}
		
// 		var display3_div1 = document.getElementsByClassName("display3_div1")[0];
// 		var display3_div1_img = display3_div1.getElementsByTagName("img")[0];
// 		var display3_div3 = document.getElementsByClassName("display3_div3")[0];
// 		var display3_div4 = document.getElementsByClassName("display3_div4")[0];
// 		var display2_div4 = document.getElementsByClassName("display2_div4")[0];
// 		var display2_div5 = document.getElementsByClassName("display2_div5")[0];
// 		var display4_div4 = document.getElementsByClassName("display4_div4")[0];
// 		var display4_div5 = document.getElementsByClassName("display4_div5")[0];
// 		var display4_div6_img1 = document.getElementsByClassName("display4_div6_img1")[0];
// 		var display4_div6_img2 = document.getElementsByClassName("display4_div6_img2")[0];
// 		var display4_div6_img3 = document.getElementsByClassName("display4_div6_img3")[0];

// 		if(this.index == 1){
// 			display2_div4.classList.add("acitveD");
// 			display2_div5.classList.add("acitveD");
// 		}else{
// 			display2_div4.classList.remove("acitveD");
// 			display2_div5.classList.remove("acitveD");
// 		}

// 		if(this.index == 2){
// 			display3_div3.classList.add("acitveO");
// 			display3_div4.classList.add("acitveO");
// 			display3_div1_img.classList.add("activeC");
// 		}else{
// 			display3_div3.classList.remove("acitveO");
// 			display3_div4.classList.remove("acitveO");
// 			display3_div1_img.classList.remove("activeC");
// 		}

// 		if(this.index == 3){
// 			display4_div4.classList.add("activePT");
// 			display4_div5.classList.add("activePT");
// 			display4_div6_img1.classList.add("activeP");
// 			display4_div6_img2.classList.add("activePO");
// 			display4_div6_img3.classList.add("activePT");
// 		}else{
// 			display4_div4.classList.remove("activePT");
// 			display4_div5.classList.remove("activePT");
// 			display4_div6_img1.classList.remove("activeP");
// 			display4_div6_img2.classList.add("activePO");
// 			display4_div6_img3.classList.add("activePT");
// 		}
		
// 	}
// }



// function btn(){

// 	var d1_btnl = document.getElementsByClassName("display_1_btn1")[0];
// 	var d1_btnr = document.getElementsByClassName("display_1_btn2")[0];
// 	var d1_ul = document.getElementsByClassName("display_1_ul")[0];

// 	d1_btnl.onclick = function(){
// 		console.log(111)
// 		this.style.backgroundColor = "#444444";
// 		d1_btnr.style.backgroundColor = "";
// 		d1_ul.style.cssText="transform:translateX(0%)";
// 	};

// 	d1_btnr.onclick = function(){
// 		d1_btnl.style.backgroundColor = "";
// 		this.style.backgroundColor = "#444444";
// 		d1_btnl.classList.remove("D1B_bg");
// 		d1_ul.style.cssText="transform:translateX(-50%)";
// 	};	
// }

// btn();
// 	function Ul_S(){
// 		var d1_btnl = document.getElementsByClassName("display_1_btn1")[0];
// 		var d1_btnr = document.getElementsByClassName("display_1_btn2")[0];
// 		var d1_ul = document.getElementsByClassName("display_1_ul")[0];
// 		var timer = null;
// 		var toggle = true;
// 		timer = setInterval(function(){
// 			if(toggle){
// 				d1_btnl.style.backgroundColor = "#444444";
// 				d1_btnr.style.backgroundColor = "transparent";
// 				d1_ul.style.cssText="transform:translateX(0%)";
// 				toggle = false;
// 			}else{
// 				d1_btnr.style.backgroundColor = "#444444";
// 				d1_btnl.style.backgroundColor = "transparent";
// 				d1_btnl.classList.remove("D1B_bg");
// 				d1_ul.style.cssText="transform:translateX(-50%)";
// 				toggle = true;
// 			}
// 		},4000);
// 	}
// 	Ul_S();











// function CHANGE(){
// 	var D2_ul = document.getElementsByClassName("display2_div3_ul")[0];
// 	var D2_lis = D2_ul.getElementsByTagName("li");
// 	var D2_div2 = document.getElementsByClassName("display2_div2")[0];
// 	var D2_img = D2_div2.getElementsByTagName("img")[0];
// 	for(var i = 0; i < D2_lis.length; i++){
// 	D2_lis[i].index = i;
// 	D2_lis[i].onclick = function(){
// 		console.log(1);
// 		D2_img.src = "img/car-"+(this.index+1)+".png";
// 		}
// 	};

// }
// CHANGE();








// function D6(){
// 	var D6_ul1 = document.getElementsByClassName("display6_ul1")[0];
// 	var D6_lis1 = D6_ul1.getElementsByTagName("li");
// 	var D6_ul2 = document.getElementsByClassName("display6_ul2")[0];
// 	var D6_lis2 = D6_ul2.getElementsByTagName("li");
// 	var D6_ul3 = document.getElementsByClassName("display6_ul3")[0];
// 	var D6_lis3 = document.getElementById("D6_ul3_li1_img1");
// 	var D6_ul4 = document.getElementsByClassName("display6_ul4")[0];
// 	var D6_lis4 = D6_ul4.getElementsByTagName("li");
// 	var display6 = document.getElementsByClassName("display6")[0];
// 	var D6_D = display6.getElementsByTagName("div");


// 		for(var i = 0; i < D6_lis2.length; i++){
// 		D6_lis2[i].index = i;

// 		D6_lis2[i].onclick = function(){
// 			for(var k = 0; k < D6_lis2.length; k++){
// 				D6_lis2[k].classList.remove("active");
// 			}

// 			D6_lis2[this.index].classList.add("active");

// 			D6_lis3.src = "img/11"+(this.index)+".png";

// 			for(var j = 0; j < D6_lis4.length; j++){

// 				D6_lis4[j].style.backgroundColor = "transparent";

// 			}

// 			D6_lis4[this.index].style.backgroundColor = "#02abd6";
// 		}
// 	}

// 	for( var a = 0; a < D6_lis4.length; a++){
// 		D6_lis4[a].index = a;

// 		D6_lis4[a].onclick = function(){
// 			for(var b = 0; b < D6_lis4.length; b++){
// 				D6_lis4[b].style.backgroundColor = "transparent";
// 			}
// 			D6_lis4[this.index].style.backgroundColor = "#02abd6";

// 			D6_lis3.src = "img/11"+(this.index)+".png";

// 			for(var j = 0; j < D6_lis4.length; j++){

// 				D6_lis2[j].classList.remove("active");

// 			}

// 			D6_lis2[this.index].classList.add("active");
// 		}
// 	}
// D6();

// function D6_nav(){
// 	var D6_Nav_ul = document.getElementsByClassName("display6_ul1")[0];
// 	var Nav_ul_lis = D6_Nav_ul.getElementsByTagName("li");
// 	var D6_Nav = document.getElementsByClassName("D6_div");

// 	for(var q = 0; q < Nav_ul_lis.length; q++){
// 		Nav_ul_lis[q].index = q;

// 		Nav_ul_lis[q].onclick = function(){
// 			for(var w = 0; w < D6_Nav.length; w++){
// 				D6_Nav[w].classList.remove("D6_block");
// 			}
// 			D6_Nav[this.index].classList.add("D6_block");
// 		}
// 	}
// };
// D6_nav();
 

//  function D6_D6(){
//  	var display6_D6_L = document.getElementsByClassName("display6_D6_LS")[0];
//  	var display6_D6_LS = display6_D6_L.getElementsByTagName("span");
//  	var display6_D6_R = document.getElementsByClassName("display6_D6_RS")[0];
//  	var display6_D6_RS = display6_D6_R.getElementsByTagName("span");
//  	var display6_D6_ul_Text = document.getElementsByClassName("display6_D6_ul_Text");
//  	var display6_D6_Rul = document.getElementsByClassName("display6_D6_Rul");


//  	for(var e = 0; e < display6_D6_LS.length; e++){
//  		display6_D6_LS[e].index = e;
//  		display6_D6_ul_Text[e].index = e;
//  		display6_D6_LS[e].onclick = function(){
//  			for(var t = 0; t < display6_D6_LS.length; t++){
//  				display6_D6_LS[t].classList.remove("activeS");
//  				display6_D6_ul_Text[t].classList.remove("display6_D6_ul");
//  			}
//  			display6_D6_LS[this.index].classList.add("activeS");
//  			display6_D6_ul_Text[this.index].classList.add("display6_D6_ul");
//  		}
//  	}

//  	for(var r = 0; r < display6_D6_RS.length; r++){
//  		display6_D6_RS[r].index = r;
//  		display6_D6_Rul[r].index = r;
//   		display6_D6_RS[r].onclick = function(){
//  			for(var t = 0; t < display6_D6_RS.length; t++){
//  				display6_D6_RS[t].classList.remove("activeS");
//  				display6_D6_Rul[t].classList.remove("display6_D6_ul");
//  			}
//  			display6_D6_RS[this.index].classList.add("activeS");
//  			display6_D6_Rul[this.index].classList.add("display6_D6_ul");
//  		}
//  	}

//  };
//  D6_D6();


var display6_D5_ul2 = document.getElementsByClassName("display6_D5_ul2")[0];
var D5_ul2S = display6_D5_ul2.getElementsByTagName("li");
var D5_ul3S = display6_D5_ul2.getElementsByTagName("span");
var display6_D5_ul1 = document.getElementsByClassName("display6_D5_ul1")[0];
var D5_ul1S = display6_D5_ul1.getElementsByTagName("li");
var D5_div1_D1 = document.getElementsByClassName("display6_D5_div1_D1")[0];
var D5_div1_D2 = document.getElementsByClassName("display6_D5_div1_D2")[0];
var D5_div3_D1 = document.getElementsByClassName("display6_D5_div3_D1")[0];
var D5_div3_D2 = document.getElementsByClassName("display6_D5_div3_D2")[0];
var index = 0;
var D5_ul1_liO_W = display6_D5_ul1.getElementsByTagName("li")[0].offsetWidth;
var D5_ul1_W = D5_ul1_liO_W * 11 + "px";
var D5_ul2_liO_W = display6_D5_ul2.getElementsByTagName("li")[0].offsetWidth;
var D5_ul2_W = D5_ul2_liO_W * 10 + "px";

var speed = 68;
var timer = null;







function D5_d1_D2(){
	D5_div1_D2.onclick = function(){
		display6_D5_ul1.style.width = D5_ul1_W;

		if(index == 10){
			index = 0;
		}
		index++;

		timer = setInterval(function(){
			
			

			display6_D5_ul1.style.left = display6_D5_ul1.offsetLeft - speed + "px";

			console.log(D5_ul1_liO_W * (index))

			if(-display6_D5_ul1.offsetLeft >= D5_ul1_liO_W * (index)){
				display6_D5_ul1.style.left = -D5_ul1_liO_W * (index) + "px";
				clearInterval(timer);
			}
			
		},1000/60);
	
	}
};
D5_d1_D2();



function D5_d1_D1(){
	D5_div1_D1.onclick = function(){

		if(index == 0){
			index = 10;
		}
		

		display6_D5_ul1.style.left = -D5_ul1_liO_W * (index -1) + "px";
		console.log(index)

		index--;
	}
};
D5_d1_D1();






function D5_d3_D2(){
	D5_div3_D2.onclick = function(){
		if(index == 10){		
			index = 0;
		}

		index++;
		if(index >= 4 && index <= 9){
			display6_D5_ul2.style.left = -D5_ul2_liO_W * (index-4) +"px";
		}else{
			display6_D5_ul2.style.left = 0;
		}	

		if(index <= 9){
			D5_ul3S[index - 1].classList.remove("active_S");
			D5_ul3S[index ].classList.add("active_S");
		}
		
		if(index == 10){
			console.log(index);
			D5_ul3S[0].classList.add("active_S");
		}
	}
};
D5_d3_D2();

function D5_d3_D1(){
	
	D5_div3_D1.onclick = function(){
		for(var o = 0; o < D5_ul3S.length; o++){
			D5_ul3S[o].classList.remove("active_S");
		}
		if(index == 0){
			index = 10;
		}
		index--;
		if(index <= 9 && index >= 4){
			display6_D5_ul2.style.left = -D5_ul2_liO_W * (index-4) +"px";
		}

		if(index >= 4 && index <= 9){
			D5_ul3S[index - 1].classList.remove("active_S");
			D5_ul3S[index ].classList.add("active_S");
			D5_ul3S[0].classList.remove("active_S");
		}

		if(index >=0 && index <=3){
			D5_ul3S[0].classList.remove("active_S");
			D5_ul3S[index +1].classList.remove("active_S");
			D5_ul3S[index].classList.add("active_S");
		}

	}
};
D5_d3_D1();