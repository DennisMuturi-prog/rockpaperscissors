function getComputerChoice(){
    const arr=['rock','paper','scissors'];
    let randomindex=Math.floor(Math.random()*3);
    return arr[randomindex];

}
function playRound(playerSelection,computerSelection){
    let looseUseRock='You lose!paper beats Rock';
    if(playerSelection==='rock'&& computerSelection==='paper'){
        compCount++;
        return looseUseRock;
        }
        else if(playerSelection==='paper'&& computerSelection==='scissors'){
            compCount++;
            return "You loose!scissors beats paper";

        }
        else if(playerSelection==='scissors'&& computerSelection==='rock'){
            compCount++;
            return "You loose!rock beats scissors";
        }
        else if(playerSelection==='paper'&&  computerSelection==='rock'){
            userCount++;
            return "You win!Paper beats Rock";

        }
        else if(playerSelection==='scissors'&& computerSelection==='paper'){
            userCount++;
            return "You win!scissors beats paper";
        }
        else if(playerSelection==='rock'&& computerSelection==='scissors'){
            userCount++;
            return "You win!rock beats scissors";

        }
        else{
            return "it is a tie";
        }
}
let compCount=0;
let userCount=0;
for(let i=0;i<5;i++){
let computerSelection;
let playerSelection1=prompt("choose your play:");
let playerSelection=playerSelection1.toLowerCase();
computerSelection=getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection,computerSelection));
console.log("computer score is "+compCount);
console.log("user score is "+userCount);}
if(compCount>userCount){
    console.log("the computer ai wins");
}
else if(userCount>compCount){
    console.log("you are the winner");
}
else{
    console.log("the five rounds game  is a draw");
}