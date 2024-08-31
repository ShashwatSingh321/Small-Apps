let choices = document.querySelectorAll('.choice');
choices.forEach(choice => choice.addEventListener('click', play));




function play(e){
const player = e.target.id;
const computer = getcomputerchoice();
console.log('Player:', player);
console.log('Computer:', computer);
const boxx = document.querySelector('.boxx');

if (player === computer) {
    boxx.innerHTML = 'Draw';
   
     boxx.style.backgroundColor = 'blue'
} else if (player === 'scissors' && computer === 'rock') {
    boxx.innerHTML = 'Computer wins';
     boxx.style.backgroundColor = 'red'
} else if (player === 'rock' && computer === 'scissors') {
    boxx.innerHTML = 'Player wins';
     boxx.style.backgroundColor = 'green'
} else if (player === 'paper' && computer === 'rock') {
    boxx.innerHTML = 'Player wins';
     boxx.style.backgroundColor = 'green'
} else if (player === 'rock' && computer === 'paper') {
    boxx.innerHTML = 'Computer wins';
     boxx.style.backgroundColor = 'red'
} else if (player === 'scissors' && computer === 'paper') {
    boxx.innerHTML = 'Player wins';
     boxx.style.backgroundColor = 'green'
} else if (player === 'paper' && computer === 'scissors') {
    boxx.innerHTML = 'Computer wins';
     boxx.style.backgroundColor = 'red'
}


}





function getcomputerchoice(){
const rand = Math.random();
if(rand<0.34){
return 'Rock';
}
else if(rand<=0.67){
return 'paper'
}
else{
return 'scissors'
}
}