const userChoice=document.getElementById('your-choice');
const computerChoice=document.getElementById('computer-choice');

document.getElementById("rock").onclick = function(){
    userChoice.innerHTML = "Rock";
    runCompChoice();
    displayResult();
}
document.getElementById("paper").onclick = function(){
    userChoice.innerHTML = "Paper";
    runCompChoice();
    displayResult();
}
document.getElementById("scissors").onclick = function(){
    userChoice.innerHTML = "Scissors";
    runCompChoice();
    displayResult();
}

function runCompChoice(){
    let choices=["Rock","Paper","Scissors"];
    let randomChoice=Math.floor(Math.random()*choices.length);
    computerChoice.innerHTML = choices[randomChoice];
}

function displayResult(){
    switch(computerChoice.innerHTML){
        case "Rock":
            if(userChoice.innerHTML=="Rock"){
                document.getElementById("result").innerHTML = "It's a tie!";
            }
            else if(userChoice.innerHTML=="Paper"){
                document.getElementById("result").innerHTML = "You win!";
            }
            else{
                document.getElementById("result").innerHTML = "You lose!";
            }
            break;
        case "Paper":
            if(userChoice.innerHTML=="Rock"){
                document.getElementById("result").innerHTML = "You lose!";
            }   
            else if(userChoice.innerHTML=="Paper"){
                document.getElementById("result").innerHTML = "It's a tie!";
            }
            else{
                document.getElementById("result").innerHTML = "You win!";
            }
            break;
        case "Scissors":
            if(userChoice.innerHTML=="Rock"){
                document.getElementById("result").innerHTML = "You win!";
            }
            else if(userChoice.innerHTML=="Paper"){
                document.getElementById("result").innerHTML = "You lose!";
                }
            else{
                document.getElementById("result").innerHTML = "Its a tie!";
            }
            break;
            }
}