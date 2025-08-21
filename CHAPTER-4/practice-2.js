//rock,paper,scissor
//rock<paper, rock>scissor
//paper<scissor


function choice(player1,player2){
    if(player1 == player2) return "Draw";
    if(player1 == "rock" && player2 == "paper") return "the winner is player number 02";
    if(player1 == "rock" && player2 == "scissor") return "the winner is player number 01";
    if(player1 == "paper" && player2 == "scissor") return "the winner is player number 02";
    if(player1 == "paper" && player2 == "rock") return "the winner is player number 01";
}

console.log(choice("rock","scissor"));  //01
console.log(choice("rock","paper"));  //02
console.log(choice("paper","scissor"));  //02
console.log(choice("rock","rock"));  //draw
console.log(choice("paper","scissor"));  //02
