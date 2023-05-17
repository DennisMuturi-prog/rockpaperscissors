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

let computerSelection;
let playerSelection1;
let noOfRounds=0;

const buttons=document.querySelectorAll('.playbutton');
const playerchoice=document.querySelector('.playerchoice');
const compchoice=document.querySelector('.compchoice');
const playercount=document.querySelector('.playercount');
const compcount=document.querySelector('.compcount');
const gameresults=document.querySelector('.results');
const playerchoice2=document.querySelector('#playerchoice');
const compchoice2=document.querySelector('#compchoice');
const myheading=document.querySelector('h1');
let mycount=0;
buttons.forEach(button => button.addEventListener('click',function(){
    let compchoice2class=compchoice2.classList.value;
    let playerchoice2class=playerchoice2.classList.value;
    



    playerSelection1=this.textContent;
    computerSelection=getComputerChoice();
    if(mycount>0){
    compchoice2.classList.remove(compchoice2class);
    playerchoice2.classList.remove(playerchoice2class);}
    
    playerchoice.textContent=playerSelection1;
    
    compchoice.textContent=computerSelection;
   
    if(playerSelection1==='rock'){
        playerchoice2.classList.add('rock');
        if(computerSelection==='rock'){
            compchoice2.classList.add('rock');
        }
        else if(computerSelection==='scissors'){
            compchoice2.classList.add('scissors');
    
        }
        else if(computerSelection==='paper'){
            compchoice2.classList.add('paper');
    
        };
        
    }
    else if(playerSelection1==='scissors'){
        playerchoice2.classList.add('scissors');
        if(computerSelection==='rock'){
            compchoice2.classList.add('rock');
        }
        else if(computerSelection==='scissors'){
            compchoice2.classList.add('scissors');
    
        }
        else if(computerSelection==='paper'){
            compchoice2.classList.add('paper');
    
        };



    }
    else if(playerSelection1==='paper'){
        playerchoice2.classList.add('paper');
        if(computerSelection==='rock'){
            compchoice2.classList.add('rock');
        }
        else if(computerSelection==='scissors'){
            compchoice2.classList.add('scissors');
    
        }
        else if(computerSelection==='paper'){
            compchoice2.classList.add('paper');
    
        };

    };
   
    playRound(playerSelection1,computerSelection);
    
    playercount.textContent=userCount;
    
    compcount.textContent=compCount;
    
    
       if(compCount===5 || userCount===5){
        
    if(compCount>userCount){
        myheading.textContent='the computer wins';
        
        gameresults.textContent='the computer wins';
        setTimeout(reset,5000);
        
    }
    else if(userCount>compCount){
        myheading.textContent='Hooray!You are the winner';
        
        gameresults.textContent='you win';
        setTimeout(reset,5000);
        
    }
    else{
        myheading.textContent='It is a draw';
       
        gameresults.textContent='it is a draw';
        setTimeout(reset,5000);
        
    }}
    mycount++;
    
    

    
}));
const resetbtn=document.querySelector('.resetbutton');
resetbtn.addEventListener('click',function (){
    playerSelection1='';
    computerSelection='';
    playerchoice.textContent='';
    compchoice.textContent='';
    compCount=0;
    userCount=0;
    playercount.textContent='';
    
    compcount.textContent='';
    gameresults.textContent='';
    noOfRounds=0;
    mycount=0;
    myheading.textContent='FIRST TO REACH FIVE POINTS WINS';

  let compchoice2class=compchoice2.classList.value;
    let playerchoice2class=playerchoice2.classList.value;

compchoice2.classList.remove(compchoice2class);
    playerchoice2.classList.remove(playerchoice2class);




})
function reset(){

 playerSelection1='';
    computerSelection='';
    playerchoice.textContent='';
    compchoice.textContent='';
    compCount=0;
    userCount=0;
    playercount.textContent='';
    
    compcount.textContent='';
    gameresults.textContent='';
    noOfRounds=0;
    mycount=0;
    myheading.textContent='FIRST TO REACH FIVE POINTS WINS';

  let compchoice2class=compchoice2.classList.value;
    let playerchoice2class=playerchoice2.classList.value;

compchoice2.classList.remove(compchoice2class);
    playerchoice2.classList.remove(playerchoice2class);

}



