const slidePage = document.querySelector(".slide_Page");
const nextBtnFirst =  document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev_1");
const nextBtnSec = document.querySelector(".next_1");
const prevBtnThird = document.querySelector(".prev_2");
const nextBtnThird = document.querySelector(".next_2");
const prevBtnFourth = document.querySelector(".prev_3");
const submitBtn =document.querySelector(".submit");
const progressText =[...document.querySelectorAll(".step p");
const submitBtn =[...document.querySelectorAll(".step .check");
const submitBtn =[...document.querySelectorAll(".step .bullet");
let max = 4;
let current =1;

nextBtnFirst.addEventListener("click",function(){
	slidePage.style.marginLeft = "-25%";
	bullet[current - 1].classList.add("active");
	progressCheck[current - 1].classList.add("active");
	progressText[current -1].classList.add("active");
current += 1
});nextBtnSec.addEventListener("click",function(){
	slidePage.style.marginLeft = "-50%";
	bullet[current - 1].classList.add("active");
	progressCheck[current - 1].classList.add("active");
	progressText[current -1].classList.add("active");
current += 1
});
nextBtnThird.EventListener("click",function(){
	slidePage.style.marginLeft = "-75%";
	bullet[current - 1].classList.add("active");
	progressCheck[current - 1].classList.add("active");
	progressText[current -1].classList.add("active");
current += 1
});
submitBtn.addEventListener("click",function(){
	bullet[current - 1].classList.add("active");
	progressCheck[current - 1].classList.add("active");
	progressText[current -1].classList.add("active");
current += 1
setTimeout(function(){
	alert("Your Form Successfully Signed up");
	location.reload();
	},800);
});
prevBtnSec.addEventListener("click",function(){
	slidePage.style.marginLeft = "0%";
	bullet[current - 1].classList.add("active");
	progressCheck[current - 1].classList.add("active");
	progressText[current -1].classList.add("active");
current -= 1
});prevBtnThird.addEventListener("click",function(){
	slidePage.style.marginLeft = "-25%";
	bullet[current - 2].classList.remove("active);
	progressCheck[current - 2].classList.remove("active);
	progressText[current -2].classList.add("active");
current -= 1
});prevBtnFourth.addEventListener("click",function(){
	slidePage.style.marginLeft = "-25%";
	bullet[current - 2].classList.add("active");
	progressCheck[current - 2].classList.add("active");
	progressText[current -2].classList.add("active");
current -= 1
});*/
//* var images = [
// "Saurav1.jpg","Vishal.jpg","Anlit.jpg"];
// var num = 0;
// function next() {
// 	var slider = document.getElementById("slider");
// 	num++;
// 	if (num >= images.length) {
// 		num = 0;
// 	}
// 	slider.src = images[num];
// }

// function prev() {
// 	var slider = document.getElementById("slider");
// 	num--;
// 	if (num < 0) {
// 		num = images.length-1;
// 	}
// 	slider.src = images[num];
// }*/