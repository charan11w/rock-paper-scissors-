let score=JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  ties:0
}
updateScore();
function playGame(playerMove) {
//if player chose rock
if(playerMove=='rock') {
  const computerMove= pickComputerMove();
  let result='';
  if(computerMove === 'rock'){
    result='Tie.';
    score.ties+=1;
  }else if(computerMove==='paper'){
    result='Computer win.';
    score.losses+=1;
  }else if(computerMove ==='scissors'){
    result='You win.';
    score.wins+=1;
  }
  
  console.log(localStorage.setItem('score',JSON.stringify(score)));
  document.querySelector('.js-result').innerHTML=`${result}`;
  document.querySelector('.js-moves')
  .innerHTML=`You
<img class="move-icon" src="images/${playerMove}-emoji.png"> 
<img class="move-icon" src="images/${computerMove}-emoji.png">
Computer`;
  updateScore();
  
}else if(playerMove=='paper') {
  const computerMove= pickComputerMove();
  let result='';
  if(computerMove === 'rock'){
    result='You win.';
    score.losses+=1;
  }else if(computerMove==='paper'){
    result='Tie.';
    score.ties+=1;
  }else if(computerMove ==='scissors'){
    result='Computer win.';
    score.wins+=1;
  }

  console.log(localStorage.setItem('score',JSON.stringify(score)));
  document.querySelector('.js-result').innerHTML=`${result}`;
  document.querySelector('.js-moves')
  .innerHTML=`You
<img class="move-icon" src="images/${playerMove}-emoji.png"> 
<img class="move-icon" src="images/${computerMove}-emoji.png">
Computer`;
  updateScore();
}else if(playerMove=='scissors') {
  const computerMove= pickComputerMove();
  let result='';
  if(computerMove === 'rock'){
    result='Computer win.';
    score.losses+=1;
  }else if(computerMove==='paper'){
    result='You win.';
    score.wins+=1;
  }else if(computerMove ==='scissors'){
    result='Tie.';
    score.ties+=1;
  }
  console.log(localStorage.setItem('score',JSON.stringify(score)));
  document.querySelector('.js-result').innerHTML=`${result}`;
  document.querySelector('.js-moves')
  .innerHTML=`You
<img class="move-icon" src="images/${playerMove}-emoji.png"> 
<img class="move-icon" src="images/${computerMove}-emoji.png">
Computer`;
  updateScore();
}      
}

function updateScore(){
document.querySelector('.js-score')
.innerText=`Wins: ${score.wins} , Losses: ${score.losses} , Ties: ${score.ties}`;
}

function pickComputerMove(){
let computerMove='';
const randomNumber=Math.random();
if(randomNumber>=0 && randomNumber<1/3){
computerMove='rock';
}else if(randomNumber >=1/3 && randomNumber<2/3){
computerMove='paper';
}else if(randomNumber>=2/3 && randomNumber<1){
computerMove='scissors';
}
console.log(computerMove);

return computerMove;
}

let autoPlaying=false;
let intervalId;

function autoPlay(){
  if(!autoPlaying){
    intervalId=setInterval(function(){
      const move=pickComputerMove();
      playGame(move);
    },1000);
    autoPlaying=true;
  }else{
    clearInterval(intervalId);
    autoPlaying=false;
  } 
}
