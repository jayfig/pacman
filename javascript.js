// List of Features to build.
// 1) Have JS display the world of brick/coin/etc
// 2) Have the pacman move up and down

var world = [
    [2,2,2,2,2,2,2,2,2,2],
    [2,0,1,2,1,1,1,1,1,2],
    [2,1,1,2,1,1,1,1,1,2],
    [2,1,1,2,1,1,1,2,1,2],
    [2,1,4,2,1,1,1,2,1,2],
    [2,1,3,2,2,2,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2]
];

var pacman = {
    x: 1,
    y: 1
};

// var ghost = {
//     x: 5,
//     y: 5 
// }   

var score = 0;
var life = 5;

function displayWorld(){
    var output = '';

    for(var i=0; i<world.length; i++){
        output += "\n<div class='row'>\n";
        for(var j=0; j<world[i].length; j++){
            if(world[i][j] == 2)                            // Brick
                output += "<div class='brick'></div>";            
            else if(world[i][j] == 1)                       // Coin
                output += "<div class='coin'></div>";
            else if(world[i][j] == 3)                       //Pizza
                output += "<div class='pizza'></div>";
            else if(world[i][j] == 4)
                output += "<div class='ghost'></div>";      // Ghost            
            if(world[i][j] == 0)
                output += "<div class='empty'></div>";           
        }
        output += "\n</div>";
    }
    // console.log(output);
    document.getElementById('world').innerHTML = output; 
};

function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*50+"px";
    document.getElementById('pacman').style.left = pacman.x*50+"px";

};

// function displayGhost(){
//     document.getElementById('ghost').style.top = ghost.y*50+"px";
//     document.getElementById('ghost').style.left = ghost.x*50+"px";
// }

function displayScore(){
    document.getElementById('score').innerHTML = score;

};

function displayLife(){
    document.getElementById('life').innerHTML = life;
}

document.onkeydown = function(e){
    if(e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2){       
        document.getElementById('pacman').style.transform = "rotate(180deg)"; 
        pacman.x --;
    }
    else if(e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2){
        document.getElementById('pacman').style.transform = "rotate(0deg)";
        pacman.x ++;
    }
    else if(e.keyCode == 38 && world[pacman.y-1][pacman.x] != 2){
        document.getElementById('pacman').style.transform = "rotate(270deg)";
        pacman.y --;
    }
    else if(e.keyCode == 40 && world[pacman.y+1][pacman.x] != 2){
        document.getElementById('pacman').style.transform = "rotate(90deg)";
        pacman.y ++;
    }

    if(world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 0 ;
        score+=10;
        displayWorld();
        displayScore();
    }
    else if(world[pacman.y][pacman.x] == 3 ){
        world[pacman.y][pacman.x] = 0;
        score+=50;
        displayWorld();
        displayScore();
    }
    else if(world[pacman.y][pacman.x] == 4){
        life--;
        Object.assign(pacman,{x:1, y:1});
        displayWorld();
        displayLife();
    }


    console.log(e.keyCode);
    displayPacman();
    // displayGhost();
};

