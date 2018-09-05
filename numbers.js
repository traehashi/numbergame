function playGame(){
//ask player one for a number 1-4
var p1=prompt("number between 1 and 4");
//ask player two for a number 1-4
var p2=prompt("number between 1 and 4");
//scold the player if they entered a number outside of the range the you end the game, since they are little shits
if((p1<1||p1>4||p2<1||p2>4)){
  window.alert("One of you cheated. Game over.");
  return;
}
//if the player AND player two numbers are the same, say you win
if(p1===p2){
  window.alert("You both win");
}
//else, tell both payers what they chose, and why they are losers
else{
  window.alert("p1, "+p1+" p2, "+p2+"."+" You are both losers.")
}
}