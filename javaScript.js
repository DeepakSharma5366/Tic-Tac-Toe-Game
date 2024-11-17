let boxes = document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset-btn")
let newgamebtn=document.querySelector("#new-btn")
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
let turn0=true; //playerX ,splayer0
const winpattern= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

const resetGame = () => {
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}


boxes.forEach ((box) => {
     box.addEventListener("click",() => {
         if(turn0) {
             box.innerText="0";
            turn0=false;
       } else {
            box.innerText="x";
             turn0=true;
         }
        box.disabled=true;
        
        checkwinner();
    });
});

const disableboxes = () =>{
    for (let box of boxes)
        box.disabled=true; 
}
const enableboxes = () =>{
    for (let box of boxes) {
        box.disabled=false; 
        box.innerText="";
    }
}

const showWinner =(winner) => {
    msg.innerText=`congrats, winner is  ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner= () => {
    for(let pattern of winpattern) {
        let poss1val = boxes[pattern[0]].innerText;
        let poss2val = boxes[pattern[1]].innerText;
        let poss3val = boxes[pattern[2]].innerText;

        if (poss1val !="" &&  poss2val !="" && poss3val !="" ) {
            if (poss1val== poss2val && poss2val== poss3val) {
                showWinner(poss1val);
            }
        }
    }
}

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);






