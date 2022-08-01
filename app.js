// Initialise Game
let player;
let winScores = [[1,2,3], [4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
let playedSpaces = [0,0,0,0,0,0,0,0,0];

let player1;
let player2;

let resetButton = document.getElementById("reset");

let message = document.getElementById("winner");
// on block click
function boxCheck(id){
    // cange block apperence
    let position = id - 1;
    if(playedSpaces[position] != 0) return;
    document.getElementById(id).innerHTML = player == player1 ? 'X' : 'O';
    // update array
    playedSpaces[position] = player;

    checkIfWin();
    playerSwitch();
}
//Switch Players
function playerSwitch() {
   player == player1 ? player = player2 : player = player1;
}
// check possible win 
function checkIfWin(){
    winScores.forEach((set, i) => {
    let total = 0;
        set.forEach(pos => {
        if(playedSpaces[pos - 1] == player){
            total ++;
        };
        if(total == 3){
            winScores[i].forEach(position => {
                document.getElementById(position).style.background = "red"
            })
            message.innerHTML = `${player}  wins`
            let buttons = document.querySelectorAll(".box");
            buttons.forEach(button => {
                button.disabled = true;
            })
        }else{
            player == player1 ?  message.innerHTML = player2 :  message.innerHTML = player1
        };   
        })
    })
}

function nameInput(){
    let playerTwo = document.getElementById("name2");
    let playerOne = document.getElementById("name1")
    let submitNamesButton = document.getElementById("submitNamesButton")
    if(playerTwo.value != "" && playerOne.value != ""){
        submitNamesButton.disabled = false;
    }
}


function setNames(e){
    
    player1 = document.getElementById("name1").value;
    player2 = document.getElementById("name2").value;

    player = player1;

    document.getElementById("playerOne").innerHTML = player1;
    document.getElementById("playerTwo").innerHTML = player2;

    let buttons = document.querySelectorAll(".box");
    buttons.forEach(button => {
        button.disabled = false;
    })

    message.innerHTML = "Play Game"
}

// RESET GAME

resetButton.addEventListener('click', ()=> {
    playedSpaces = [0,0,0,0,0,0,0,0,0];
    let boxes = document.querySelectorAll('.box')
   
    boxes.forEach((box)=>{
        box.innerHTML = ""
        box.style.background = 'transparent'
    })

    let buttons = document.querySelectorAll(".box");
    buttons.forEach(button => {
        button.disabled = false;
    })
})



// display win or change player