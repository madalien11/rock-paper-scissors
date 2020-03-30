let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score_board");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const win_or_lost = document.getElementById("action-message");

rock_div.addEventListener('click', () => {
    game(0)
})
paper_div.addEventListener('click', () => {
    game(1)
})
scissors_div.addEventListener('click', () => {
    game(2)
})

function getCompChoice() {
    let rand = Math.floor(Math.random() * 3);
    console.log(rand);
    return rand;
}

function game(choice) {
    let rand = getCompChoice();
    if(rand == 0 && choice == 1){
        userScore++;
        win_or_lost.innerHTML = "U WON!"
    } else if (rand == 0 && choice == 2){
        compScore++;
        win_or_lost.innerHTML = "U LOST!"
    } else if (rand == 1 && choice == 0) {
        compScore++;
        win_or_lost.innerHTML = "U LOST!"
    } else if (rand == 1 && choice == 2) {
        userScore++;
        win_or_lost.innerHTML = "U WON!"
    } else if (rand == 2 && choice == 0) {
        userScore++;
        win_or_lost.innerHTML = "U WON!"
    } else if (rand == 2 && choice == 1) {
        compScore++;
        win_or_lost.innerHTML = "U LOST!"
    }
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    
}
game();
