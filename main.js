let userScore =0;
let compScore =0;


let choices = document.querySelectorAll(".box");
let text = document.querySelector(".text");
let comp =document.querySelector("#compscore");
let user =document.querySelector("#userscore");


const drawGame =()=>{
    text.innerText="game was draw"
    text.style.color = "black"
};

const limit = ()=>{
    let win = 5;
    
       
    if(userScore>=win){
        alert("You won the entire match! 🎉");
        text.innerText = "You won the entire match! 🎉";
      lockButtons();
    }else if(compScore>=win){
        text.innerText = "Computer won the entire match! 🎉";
        lockButtons()
    }

}

const lockButtons=()=> {
  choices.forEach(btn => btn.style.pointerEvents = "none");
  text.style.backgroundColor = "white";
  text.style.opacity = 0.5;

}


const showWinner =(s, userChoice, genChompChoice)=>{ 
    if(s){
        userScore++;
        user.innerText = userScore;
        text.innerText =`You win! your ${userChoice} beats ${genChompChoice}`;
        text.style.color = "green";
        limit()
      
        
    }else{
       compScore++;
        comp.innerText=compScore;
        text.innerText =` you lost  ${genChompChoice} beats yours  ${userChoice}`;
        text.style.color = "red";
        limit()
    }
}

const compChoice =()=>{
    const option =["rock","paper","scissors"]
    const ranIdx = Math.floor(Math.random()*3);
    return option[ranIdx];
}

const playerChoice =(userChoice)=>{
    console.log(userChoice);
    
    
    const genChompChoice = compChoice();
    console.log(genChompChoice);

    if(userChoice === genChompChoice){

        drawGame()
    }else{
        let s = true;
        if(userChoice ==="rock"){
            s = genChompChoice==="paper" ?false : true;
        }else if(userChoice ==="paper"){
            s = genChompChoice==="scissors"?false : true;
        }else{
            s = genChompChoice==="rock" ? false : true;
        }
        showWinner(s, userChoice, genChompChoice);
    }
    
    
}

choices.forEach((choices)=>{
    choices.addEventListener("click",()=>{

        const userChoice=choices.getAttribute("id");
        
        playerChoice(userChoice);
    });
});