"use strict";

var theLightBox = document.getElementById("lightBox");
var theSideBar = document.getElementById("sideBar");
var images = document.getElementsByClassName("contentImage");

for(let i = 0; i<images.length;i++){
  images[i].addEventListener("click",showOverlay);
}

theLightBox.addEventListener("click",hide);

function showOverlay(){

  var toDisplay = document.getElementById("displayImage");
  toDisplay.src = this.src;
  theLightBox.classList.toggle("visible");
  theSideBar.classList.toggle ("visible");

}

function hide(){
  console.log("hidden");
  theLightBox.classList.toggle("visible");
  theSideBar.classList.toggle ("visible");
}
