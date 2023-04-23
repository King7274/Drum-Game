var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var count = 0;
var arrString = "";
var inputString = "";
var timercount;


for(var i = 0; i<numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
          
        makeSound(buttonInnerHTML);
        
        buttonAnimation(buttonInnerHTML);
       


    });
}

document.querySelector(".start").addEventListener("click", function(event){
    count = 0;
    document.querySelector(".count").innerText = count;
   
    arrString = "";
    
    start();
    
    var click = new Audio('sounds/click.wav');
    click.play();
    
    startbuttonAnimation();
})

document.querySelector(".Submit").addEventListener("click", function(event){
   
    SubmitbuttonAnimation();
    Submit();
   
   
    
})
    document.addEventListener("keydown", function(event){
        makeSound(event.key);

        buttonAnimation(event.key);
    });

  /*  function timer(){
    

        for(var i=20;i>0;i++){

            timercount = i;
            setTimeout(function(){
                document.querySelector(".timer").innerText = timercount;
            }, 1000);
            i--;
        }
    }
    */

    

    function makeSound(key) {
        document.querySelector(".keys").innerText = key;
        
        if(count < 30){
            inputString += key;
            document.querySelector(".count").innerText = count +1;
           
              count++;
        
        switch (key) {
            
            case "w":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play(); 
              
            break;
    
            case "a":
                var tom2 = new Audio('sounds/tom-2.mp3');
           tom2.play(); 
           break;
           case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
           tom3.play(); 
           break;
    
           case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
           tom4.play(); 
           break;
    
           case "j":
            var snare = new Audio('sounds/snare.mp3');
           snare.play(); 
           break;
    
           case "k":
            var crash = new Audio('sounds/crash.mp3');
           crash.play(); 
           break;
    
           case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
           kick.play(); 
    
            default: console.log();
        }
    }
}
    /*
     else if(inputString == arrString){
        arrString = "";
       document.getElementsById("title").innerText = "You Win";
     } */

    
    



function buttonAnimation(currentKey) {
    var activeButtton = document.querySelector("." + currentKey);

    activeButtton.classList.add("pressed");

    setTimeout(function(){
        activeButtton.classList.remove("pressed");
    } , 100);
}

function startbuttonAnimation(){
    document.querySelector(".start").classList.add("pressed");
      reset();
    
    setTimeout(function(){
        document.querySelector(".start").classList.remove("pressed");
    } , 100);

    
}

function SubmitbuttonAnimation(){
    document.querySelector(".Submit").classList.add("pressed");

    setTimeout(function(){
        document.querySelector(".Submit").classList.remove("pressed");
    } , 100);
}




var map1 = new Map();
map1.set(0,'w');
map1.set(1,'a');
map1.set(2,'s');
map1.set(3,'d');
map1.set(4,'j');
map1.set(5,'k');
map1.set(6,'l');


var num;  

var arr = [ ];
function start(){

   
document.getElementById("title").innerText = "Drum 🥁 Kit";

for(var i=0;i<30;i++){
    num = Math.floor(Math.random()*7);
    arr[i] = map1.get(num);
}



    
    for(var i=0;i<30;i++){
      arrString += arr[i];
    }
    
  document.getElementById("word").innerText = arrString;
  document.getElementById("result").innerText = "";

  document.getElementsByClassName("start").innerText = "Reset";
  document.getElementById("result").innerText = "Your Typing Words";


}
function reset(){
    document.querySelector(".start").innerText = "RESET";
    inputString = "";
}

function Submit(){
    document.querySelector(".keys").innerText = "";
    document.querySelector(".start").innerText = "Start";
    if(arrString != inputString || inputString == " " || arrString == "" ){
        
        document.getElementById("title").innerText = "Game Over - Try Again";
        var gameover = new Audio('sounds/game-over.wav');
        gameover.play();
        document.getElementById("result").innerText = inputString  +  " -> Not Matched";
        document.querySelector("result").classList.add("game-over");
        

    }else{
        

        document.getElementById("title").innerText = "You are Winer !";
        document.getElementById("result").innerText = inputString + " -> Matched";
        var winner = new Audio('sounds/winner1.wav');
    winner.play();
    var winner2 = new Audio('sounds/winner2.wav');
    winner2.play();


    }

    


    
}


       