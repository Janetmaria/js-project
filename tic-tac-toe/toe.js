let boxes=document.querySelector(".box");            //1
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");             //5
let msgConatiner=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
const winPatterns= [                                                 //2
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];

const resetGame = () => {                                //9
    turnO=true;
    enableBoxes();
    msgConatiner.classList.add("hide");
};

boxes.forEach((box) => {                               //3
    box.addEventListener("click",() => {
        console.log("Box was clicked");
        if(turnO) {
            box.innerText="O";
            turnO=false;
        } else {
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBoxes = () => {                      //7
    for(let box of boxes) {
        box.disabled=true;
    }
};

const enableBoxes = () => {                      //8
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner = (winner) => {                          //6
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgConatiner.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {                     //4
    for( let pattern of winPatterns) {
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if (pos1Val!="" && pos2Val!="" && pos3Val!="") {
            if(pos1Val===pos2Val && pos2Val===pos3Val) {
                console.log("Winner",pos1Val);
                showWinner();
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);           //10
resetBtn.addEventListener("click",resetGame);             //11