var randomNumber = Math.floor(Math.random()*6+1);

if(randomNumber===1){
    document.querySelector(".img-1").setAttribute("src","./images/dice1.png")
}
else if(randomNumber===2){
    document.querySelector(".img-1").setAttribute("src","./images/dice2.png")
}
else if(randomNumber===3){
    document.querySelector(".img-1").setAttribute("src","./images/dice3.png")
}
else if(randomNumber===4){
    document.querySelector(".img-1").setAttribute("src","./images/dice4.png")
}
else if(randomNumber===5){
    document.querySelector(".img-1").setAttribute("src","./images/dice5.png")
}
else if(randomNumber===6){
    document.querySelector(".img-1").setAttribute("src","./images/dice6.png")
}

var randomNumber2 = Math.floor(Math.random()*6+1);

if(randomNumber2===1){
    document.querySelector(".img-2").setAttribute("src","./images/dice1.png")
}
else if(randomNumber2===2){
    document.querySelector(".img-2").setAttribute("src","./images/dice2.png")
}
else if(randomNumber2===3){
    document.querySelector(".img-2").setAttribute("src","./images/dice3.png")
}
else if(randomNumber2===4){
    document.querySelector(".img-2").setAttribute("src","./images/dice4.png")
}
else if(randomNumber2===5){
    document.querySelector(".img-2").setAttribute("src","./images/dice5.png")
}
else if(randomNumber2===6){
    document.querySelector(".img-2").setAttribute("src","./images/dice6.png")
}


if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML= "PLAYER 1 WINS"
}
else if(randomNumber2>randomNumber){
    document.querySelector("h1").innerHTML= "PLAYER 2 WINS"
}
else{
    document.querySelector("h1").innerHTML= "DRAW"
}

