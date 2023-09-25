let board=document.querySelector('.board');
let k=1;
let play= new Audio('aak.mp3');
let play1=new Audio('eat.wav');
let end=new Audio('end.mp3');

let snakeArr=[{
    x: 13,
    y: 15,
}]
let food={
    x:6,
    y: 7
}
let lasttime=0;
let speed=7;

let indirection={
    x:0,
    y:0
}

function main(ctime){
   
    window.requestAnimationFrame(main);

    if((ctime-lasttime)/1000<1/speed){
        return;
    }
    
  
  lasttime=ctime;
    gameEngine();
    

}

window.requestAnimationFrame(main);
function khelakhatam(){
    for(let i=1;i<snakeArr.length;i++){
        if(snakeArr[i].x==snakeArr[0].x && snakeArr[i].y==snakeArr[0].y){
            return 0;
        }
    }
    if(snakeArr[0].x==0 || snakeArr[0].y==0 || snakeArr[0].x==19 || snakeArr[0].y==19) {
        return 0;

    } 

}

function gameEngine(){
if(khelakhatam()==0){
   play.pause();
   end.play();

    alert("REFRESS TO START");
    k=1;
    snakeArr=[{
        x: 13,
        y: 15,
    }];
    play.play();


}

 // part 1:// update the snake and the arry food

 if(food.x==snakeArr[0].x && food.y==snakeArr[0].y){
    play1.play();
    document.querySelector(".score").innerText= k;
    k++;
snakeArr.unshift({x:snakeArr[0].x + indirection.x ,y: snakeArr[0].y + indirection.y })
food={
    x: Math.round(2+(14)*Math.random()),
    y:Math.round(2+(14)*Math.random()),
} 
 }
 
 
 // part 2: // display the snake and the arry food

 // display the snake
 board.innerHTML="";
snakeArr.forEach((e, index)=>
{
    let snakeelement= document.createElement('div');

snakeelement.style.gridRowStart=e.y;
snakeelement.style.gridColumnStart=e.x;
if (index==0){
snakeelement.classList.add('head');
}
else{
    snakeelement.classList.add('snaker');
}
board.appendChild(snakeelement);
;

})

//  display the food
let foodelement= document.createElement('div');
foodelement.style.gridRowStart=food.y;


foodelement.style.gridColumnStart=food.x;

foodelement.classList.add('kana');
board.appendChild(foodelement);

// moving the snake
for(let i=snakeArr.length-2;i>=0;i--){
    snakeArr[i+1]={...snakeArr[i]};
}

snakeArr[0].x  = snakeArr[0].x + indirection.x;
snakeArr[0].y = snakeArr[0].y + indirection.y;
}  
// main logic


window.addEventListener('keydown',function(e){
     indirection={
        x:0,
        y:0
    }
switch(e.key)
{
case "ArrowUp":
    indirection.x=0;
indirection.y=-1;
play.play();


break;
case "ArrowDown":
    indirection.x=0;
indirection.y=1;
play.play();

break;
case "ArrowLeft":
    indirection.x=-1;
indirection.y=0;
play.play();
break;
case "ArrowRight":
    indirection.x=1;
indirection.y=0;
play.play();
break;
}





});













