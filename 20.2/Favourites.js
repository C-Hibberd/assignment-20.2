// javascript for opening the modals
var modal = document.getElementById("Modal1");
var btn = document.getElementById("Recipe1");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}

var modal = document.getElementById("Modal1");
var btn = document.getElementById("Recipe2");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}

var modal = document.getElementById("Modal1");
var btn = document.getElementById("Recipe3");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}

var modal = document.getElementById("Modal1");
var btn = document.getElementById("Recipe4");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}

var modal = document.getElementById("Modal1");
var btn = document.getElementById("Recipe5");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}

//javascript for closing the modals
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}