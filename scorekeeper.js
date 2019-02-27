var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var p1Score = 0; // variable initially set to 0, will be incremented with each "click"
var p2Score = 0;
var gameOver = false; // gameOver variable will be true when a player reaches the winning score
var winningScore = 5;

p1Button.addEventListener("click", function(){
    if (!gameOver){
    p1Score++;
    if (p1Score === winningScore){
        gameOver = true;
    }
    p1Display.textContent = p1Score;   
    }
});
p2Button.addEventListener("click", function(){
    if(!gameOver){
    p2Score++;
    if (p2Score === winningScore){
        gameOver = true;
    }
    p2Display.textContent = p2Score;    
    }
});