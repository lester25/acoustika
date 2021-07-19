$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");

		}
		})
	})
; 
/*
function changeText(){
	var parent = document.getElementById('text')
	var child = parent.childNodes[1];
	child.style.color = "blue";
}
function myFunction() {
  alert("Hello! I am an alert box!");
}*/
/*
var myNav = document.getElementsByClass('navbar');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};