"use strict";

var x = document.getElementsByClassName("jumbotron")[0];
var link = x.children[0];

x.addEventListener("mouseover",function(e){
  x.classList.toggle("animated");
  console.log('fuck you');
});
