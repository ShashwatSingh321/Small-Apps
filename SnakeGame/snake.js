const canvas = document.querySelector('.canvas');
 let ctx = canvas.getContext('2d');
 let snake = [{x:250, y:250}];       
 let food = {x:150, y:150};  
 let grid = 25;
 let dx = grid;
 let dy = 0;
 let count =0;
//  ........................................................................................

function SaapKhel(){
    const SaapKaMuu = {x: snake[0].x + dx, y: snake[0].y + dy};

    if(SaapKaMuu.x<0 || SaapKaMuu.x>=canvas.width || SaapKaMuu.y<0 || SaapKaMuu.y>=canvas.width){
        gameoversound();
        let gameover = document.querySelector('.gameover')
        gameover.style.display = 'block';
        setTimeout(()=>{
            document.location.reload();
        },2000);
        return;
    }
    snake.unshift(SaapKaMuu);


    if(SaapKaMuu.x === food.x && SaapKaMuu.y === food.y){
        playTickSound();
        food.x = Math.floor(Math.random()*10)*grid;
        food.y = Math.floor(Math.random()*10)*grid;
        count++;
        let countbox = document.querySelector('.countbox');
        countbox.innerText = count;
        
    }
    else{
        snake.pop();
    }
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = 'green';
    snake.forEach(snakePart =>ctx.fillRect(snakePart.x,snakePart.y,grid,grid));
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x,food.y,grid,grid)
}

function SaapDirection(e){
  if(e.key === 'ArrowUp' && dy === 0){
    dx = 0;
    dy = -grid;
  }
  if(e.key === 'ArrowDown' && dy === 0){
    dx = 0;
    dy = grid;
  }
  if(e.key === 'ArrowLeft' && dx === 0){
    dy = 0;
    dx = -grid;
  }
  if(e.key === 'ArrowRight' && dx === 0){
    dy = 0;
    dx = grid;
  }
}
 document.addEventListener('keydown', SaapDirection);
 document.querySelector('.start').addEventListener('click',start );
 document.addEventListener('keydown',function(e){
    if(e.key === 'Enter'){
        start();

    }
 })

 
    let audio = new Audio('./achievement-video-game-type-1-230515.mp3')
    function playTickSound() {
        audio.play();
    }
    
    let audioo = new Audio('./game-over-160612.mp3')
    function gameoversound() {
        audioo.play();
    }
    


function start(){
setInterval(SaapKhel,150);
}