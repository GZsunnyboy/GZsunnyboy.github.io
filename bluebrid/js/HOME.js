
// var wrap = document.querySelector(".wrap");
// var box = document.querySelector(".scale-box");
// var btn = document.querySelector("#btn");
// var ro = "rotate2";

// btn.onclick = function(){

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
