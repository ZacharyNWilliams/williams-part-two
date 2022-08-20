/* step 1 
    -ask name from the user, store in variable playerName
    -prompt ask playerName many games they'd like to play store in numberOfGames

 Step 2  loop number of games
-prompt user 3 or 6 times asking for number of puts per hole 
 depending on input from prevous question
    -prompt how many puts for each hole?
-keep track of score 
    -for 6 holes(18 par) compare score to 18 = ex: if over 18 by 3 their toatal score is +3 vice versa for -3. 
    -for 3 holes(9 par) compare score to 9 = if over 9 by 3 score = +3
  Step 3 print total
-if (score > par) message should say "Nice try, (name)... Your total par was: +(par)." [be sure to include the plus symbol here to denote over par].
-else If (score < par), the message should read "Great job, (name)! Your total par was: -(par)." [include the minus symbol]
-else (score = par), the message should read "Good game, (name). Your total par was: 0."
*/

let playerName = prompt("Welcome to GC mini golf! What is your name?");


//ask for number of games from our player and correctly change our input to number from string
let numberOfGames = Number(prompt(`Hi ${playerName}! Would you like to play 3 or 6 holes today?`));
let playerScore = 0;
let smallGame = 9;
let bigGame = 18;
let coursePar = 0;





//here we set a loop  that will run X times, where X is the number of games our player chooses to play
for (let i = 1; i <= numberOfGames; i++) {   
    //with a template literal we can set up our prompt method to ask about each of the holes, using the value of i 
    playerScore += Number(prompt(`How many putts for hole ${i}? (par is 3)`))
  }

  if (numberOfGames == 3){
    coursePar = (playerScore - smallGame);
}else{
    coursePar = (playerScore - bigGame);
}



if(coursePar == 0){
    alert("Good game, " + playerName + "." + " your total par was: 0");
}else if (coursePar < 0){
    alert("Great job, " + playerName + "!" + " Your total par was:" + coursePar);
}else if (coursePar > 0){
    alert("Great job, " + playerName + "!" + " Your total par was:" + coursePar);
}

















// for, while, do... while

/*
let playerName = prompt("Welcome to GC mini golf! What is your name?");
let total = 0;
for (let i = 0; i < playerName; i++){
    let gamesToPlay = prompt("Welcome to GC mini golf! What is your name?");
}*/