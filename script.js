const options = document.querySelectorAll(".option");
let userScore = 0;
let robotScore = 0;
let msg = document.querySelector(".msg");  
let user = document.querySelector(".user-score");
let robot = document.querySelector(".robot-score");
const genRobotChoice = ()=>{
    const opt=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return opt[ranIdx];
}
const showWinner = (userWin,userChoice,robotChoice) => {  
    if(userWin === true){
        userScore++;
        user.innerText=userScore;
        msg.classList.remove("msg2");
        msg.classList.remove("msg3");
        msg.classList.add("msg1");
        msg.innerText= `You Win , Your ${userChoice} beats ${robotChoice}`;
        win();
    }else{
        robotScore++;
        robot.innerText=robotScore;
        msg.classList.remove("msg1");
        msg.classList.remove("msg3");
        msg.classList.add("msg2");
        msg.innerText=`You Lose , ${robotChoice} beats Your ${userChoice}`;
        lose();
    }
}
const playGame = (userChoice)=>{
    console.log("user clicked " ,userChoice);
    const robotChoice=genRobotChoice();
    console.log("robot clicked ",robotChoice);
    if(userChoice === robotChoice){
        msg.classList.remove("msg1");
        msg.classList.remove("msg2");
        msg.classList.add("msg3");
       msg.innerText="Game Draw";
    }else{
        let userWin = true;
         if(userChoice === "rock"){
        userWin = robotChoice === "paper" ? false : true ;
        }else if(userChoice === "paper"){
        userWin = robotChoice === "scissors" ? false : true ;     
        }else{
        userWin = robotChoice === "rock" ? false : true ;
        }
        showWinner(userWin,userChoice,robotChoice);
    }
}
options.forEach((option) => {
    option.addEventListener("click" , () =>{
        click();
        const userChoice = option.getAttribute("id");
        playGame(userChoice);
    })
    
});
let click = () => {
    const btn=new Audio("click1.mp3");
    btn.volume=0.5;
    btn.play();
}
let reset=document.querySelector("button");
reset.addEventListener("click", ()=>{
    userScore=0;
    robotScore=0;
        user.innerText=userScore;
        robot.innerText=robotScore;
        msg.classList.remove("msg2");
        msg.classList.remove("msg3");
        msg.classList.remove("msg1");
        msg.innerText="Choose Any One";
    click();
})

