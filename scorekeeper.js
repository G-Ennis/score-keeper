var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var p1Score = 0; // variable initially set to 0, will be incremented with each "click"
var p2Score = 0;

p1Button.addEventListener("click", function(){
    p1Score++;
    p1Display.textContent = p1Score;
})
p2Button.addEventListener("click", function(){
    p2Score++;
    p2Display.textContent = p2Score;
})