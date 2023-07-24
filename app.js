function playRound(playerSelection, computerSelection) {
    
    if ((playerSelection == "rock") && ( computerSelection == "scissor")) {
        img.src = "./img/scissor.png";
        result_text.innerHTML = "You Won! Rock beats Scissor";
    }
    else if ((playerSelection== "rock") && ( computerSelection == "paper")) {
        img.src = "./img/paper.png";
        result_text.innerHTML = "You Lost! Paper beats Rock";
    }
    else if ((playerSelection == "paper") && ( computerSelection == "scissor")) {
        img.src = "./img/scissor.png";
        result_text.innerHTML = "You Lost! Scissor beats paper";
    }
    else if ((playerSelection == "paper") && ( computerSelection == "rock")) {
        img.src = "./img/rock.png";
        result_text.innerHTML = "You Won! Paper beats Rock";
    }
    else if ((playerSelection == "scissor") && ( computerSelection == "rock")) {
        img.src = "./img/rock.png";
        result_text.innerHTML = "You Lost! Rock beats Scissor";
    }
    else if ((playerSelection== "scissor") && ( computerSelection == "paper")) {
        img.src = "./img/paper.png";
        result_text.innerHTML = "You Won! Scissor beats Paper";
    }
    else if(playerSelection == "rock" && computerSelection == "rock"){
        img.src = "./img/rock.png";
        result_text.innerHTML = "Tie!";
    }
    else if(playerSelection == "paper" && computerSelection == "paper"){
        img.src = "./img/paper.png";
        result_text.innerHTML = "Tie!";
    }
    else if(playerSelection == "scissor" && computerSelection == "scissor"){
        img.src = "./img/scissor.png";
        result_text.innerHTML = "Tie!";
    }
}
   
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) {
        return "rock";
    }
    else if(choice == 1){
        return "paper";
    }
    else{
        return "scissor";
    }
}

function changeToRock(){
    const computerSelection = getComputerChoice();
    const playerSelection = "rock";
    playRound(playerSelection, computerSelection)
    
}
function changeToPaper(){
    const computerSelection = getComputerChoice();
    const playerSelection = "paper";
    playRound(playerSelection, computerSelection)
}
function changeToScissor(){
    const computerSelection = getComputerChoice();
    const playerSelection = "scissor";
    playRound(playerSelection, computerSelection)
}

const img = document.getElementById("response");
const result_text = document.getElementById("text-result");


  //alert(playRound(playerSelection, computerSelection));
