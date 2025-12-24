let turn ="X";
let gameOver = false;
// function to change the turn 
const changeTurn = ()=>{
    return turn === "X"? "0": "X";
}

// function to check for win
const checkWin = ()=>{
    let boxText = document.getElementsByClassName("boxText");
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,8],
    ]
    win.forEach(e =>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText)&& (boxText[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " WON"
            gameOver = true;
           
        } 
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', ()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;//firstly X will play
            turn=changeTurn();//if X will play after that 0 will be play 
      
            checkWin();// check any user win or not
            if(!gameOver){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }

        }
    });
});

// reset button
 reset.addEventListener('click', (e) =>{
    let boxText = document.querySelectorAll(".boxText");
    Array.from(boxText).forEach(element => {
        element.innerText = "";
    })
    turn = "X";
    gameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;

 })