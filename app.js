'use strict';

//create a counter for the number of correct answers
var correctAnswers = 0;
// counter for the total number of questions
var addQuestion = 0;
//counter to display remaining chances
var numberGuessesLeft;
//variable for result of prompt
var chickenName;
//flag to use to skip parts of the game if the user cancels
var keepGoing = true;

/*******************/
/**Debuging Value***/
//var keepGoing = false;
//chickenName = 'Rex Goliath';

//initalQuestions [[question, response], [question, response]...]
var initalQuestions = [['If you were a chicken, what would I call you?', 'I\'m sorry if I offened you.  Namaste...'],[['Did you find that to be an odd request, ', ' ? Yes or No ( Y/N )'], 'Quitter!  Go pluck yourself'], ['I\'m sorry you feel that way.  Would you like to continue anyway?\n\nYes or No ( Y/N )', 'GoodBye...'], ['Have you ever graced the presence of a professional, free range, chicken catcher?\n\nYes or No ( Y/N )', 'Wow... If you were a boat, you would be a big yella chicken ship....'], ['When describing the running style of the Gallus gallus domesticus, a subspecies of the red junglefowl, which came first, the zig or the zag?', 'You must be rolling up that wacky tabaky in that zig zag!'],[['You think like a chicken, ', ' and can\'t answer a simple Zig or Zag question, would you like to continue, anyway?\n\nYes or No ( Y/N )'], 'GoodBye...'], ['How many chickens do you think I can catch in an hour?', 'Too, bad that wasn\'t a number...  I was going to take you for some BBQ....'], ['Why did the Urban Farmers Chicken Search and Rescue Team member cross the road?', 'You know, a chicken would not get away with an answer like that!'], ['One last question.  Do you like baseball?  Yes or No ( Y/N )', 'Oh, I guess one more question was too much'] ];

questionOne(0);
questionTwo(1);
questionThree(3);
questionFour(4);
questionFive(6);
questionSix(7);
baseballQuestion(8);
questionSeven();
questionEight();
questionResults();

function askQuestion(question_index){
  var myQuestion = initalQuestions[question_index][0];
  console.log('typeof myQuestion: ', typeof myQuestion);
  if (typeof myQuestion === 'object') {
    console.log('ARRAY');
    myQuestion = initalQuestions[question_index][0].join(chickenName);
  }
  var answer = prompt(myQuestion);
  if (answer === '' || answer === null) { //abort if canceled or empty
    alert(initalQuestions[question_index][1]);
    keepGoing = false;
  }
  return answer;
}

///////////////////////
// begin name question
function questionOne(question_number) {
  chickenName = askQuestion(question_number);
  console.log('chickenName: ', chickenName);
}
// end name question
///////////////////////

//////////////////////////////////
// begin main odd request question
function questionTwo(question_number) {
  if (keepGoing){
    console.log('huh keepGoing: ', keepGoing);
    var huh = askQuestion(question_number);
    if (huh.toLowerCase() === 'yes' || huh.toLowerCase() === 'y'){
      //////////////////////////////////
      // begin sub odd request question
      if (keepGoing){
        askQuestion(2);
        console.log('keepGoing: ', keepGoing);
      // end sub odd request question
      ///////////////////////////////
      }
    }
  }
}
// end main odd request question
////////////////////////////////

/////////////////////////
//begin graced question
function questionThree(question_number) {
  if (keepGoing){
    console.log('graced keepGoing: ', keepGoing);
    var graced = askQuestion(question_number);
    if (keepGoing){
      if ( graced.toLowerCase() === 'yes' || graced.toLowerCase() === 'y') {
        alert('Well, I\'ll be the son of my sisters brother!  We must be cousins!');
      } else {
        alert('You, aint from around here, ' + chickenName + '  are ya...');
      }
    }
  }
}

// end graced question
//////////////////////

///////////////////////
//begin zigZag question
function questionFour(question_number) {
  if (keepGoing){
    var zigZag = askQuestion(question_number);
    if (keepGoing){
      if( zigZag.toLowerCase() === 'zig' || zigZag.toLowerCase() === 'zag' ){
        alert('Trick Question!  They don\'t run from me they get catch-ed');
      } else {
        ///////////////////////
        //begin sub zigZag question
        askQuestion(5);
        //end sub zigZag question
        ///////////////////////
      }
    }
  }
}
//end zigZag question
///////////////////////

////////////////////////////
//begincatch count question
function questionFive(question_number) {
  if (keepGoing){
    console.log('catchCount keepGoing: ', keepGoing);
    var catchCount = askQuestion(question_number);
    if (keepGoing) {
      //add this question to the count of questions
      addQuestion++;
      var myCatch = 247;
      if (parseInt(catchCount) < myCatch || parseInt(catchCount) > myCatch){
        var onlyCatch = '';
        if (parseInt(catchCount) > myCatch){
          onlyCatch = 'only ';
        }
        alert('Really?  You don\'t know nut\'in \'bout me!. I can ' + onlyCatch + 'catch ' + myCatch + ' chickens in an hour');
      } else {
        alert('Hot Damn! Hit my face with hammer!  I can catch exactly ' + myCatch + ' chickens');
        correctAnswers++;
      }
    }
  }
}
//end catch count question
/////////////////////////////

///////////////////////////////
//begin cross the road question
function questionSix(question_number) {
  if (keepGoing) {
    var road = askQuestion(question_number);
    if (keepGoing) {
      alert('"' + road + '" was a good guess. But the reall answer is because the headless zombie chicken was in pursuit.  Those things run fast with out a head!');
    }
  }
}
//end cross the road question
///////////////////////////////

/////////////////////////
//begin baseball question
function baseballQuestion(question_number) {
  if (keepGoing) {
    var baseball = askQuestion(question_number);
    console.log('baseball keepGoing: ', keepGoing);
    if (keepGoing === true) {
      if (baseball.toLowerCase() === 'yes' || baseball.toLowerCase() === 'y'){
        alert('Really???  You obviously never played with cousin Bertha.');
      }
      else if (baseball.toLowerCase() === 'no' || baseball.toLowerCase() === 'n'){
        alert('Me neither!  You must have played with cousin Bertha, too.');
      } else {
        alert('Yeah, I don\'t buy that....');
      }
    }
  }
}
//end baseball question
///////////////////////

////////////////////////////////
//begin number guessing question
function questionSeven() {
  console.log('numGuess keepGoing: ', keepGoing);
  if (keepGoing) {
    //add this question to the count of questions
    addQuestion++;
    var numGuessInt;
    var chickens = 397621;
    var chickenGuessCounter = 1;
    var numOfGuesses = 4;
    numberGuessesLeft = numOfGuesses;
    ///////////////////////////
    //while loop to keep asking
    while(numGuessInt != chickens) {
      //ask the question
      var numGuess = prompt('I\'m dreaming about chasing chickens.  How many are there?\n\nYou have ' + numberGuessesLeft + ' chances.');
      console.log('numGuess string: ', numGuess);
      numberGuessesLeft--;

      //if there was an empty string or cancel was hit, then quit the game
      if(numGuess === '' || numGuess === null){
        alert('fine don\'t play...');
        numGuessInt = chickens;
        //remove this question to the count of questions
        addQuestion--;
        keepGoing = false;
      } else {

        //coherce numGuess to number
        numGuessInt = parseInt(numGuess) ;
        console.log('numGuessInt: ', numGuessInt);
        //check to see if numGuessInt is a number, if not then alert the user it is not a number
        if (! isNaN(numGuessInt)) {
          if (numGuessInt < chickens) {
            alert('That number is too low.  It was a big dream');
            chickenGuessCounter++;
          } else if (numGuessInt > chickens) {
            alert('The number is too high.  That sounds like a nightmare!');
            chickenGuessCounter++;
          }
        } else {
          alert('That wasn\'t a number. Try again');
          chickenGuessCounter++;
        }
        console.log('guess number ', chickenGuessCounter);
        if (chickenGuessCounter > numOfGuesses) {
          console.log('no more guesses');
          numGuessInt = chickens;
        }
      }
    }
    //end while loop
    /////////////////

    /*if the guess was made within the allotted amount of guesses and they user didn't hit 'cancel' then
    tell them they were correct */
    if (chickenGuessCounter <= numOfGuesses && keepGoing) {
      alert('Bingo! And I ain\'t talking about my dog!\n\nThere were exactly ' + chickens + ' chickens in my dream.' );
      correctAnswers++;
    } else if(keepGoing) {//let the user know they ran out of guesses
      alert('You obviously are not a good chicken counter.  The correct answer is ' + chickens + ' chickens.');
    }
  }
}


//end number guessing question
////////////////////////////////

////////////////////////////////
//begin guessing game
function questionEight() {
  console.log('favorite guess keepGoing: ', keepGoing);
  if (keepGoing) {
    //add this question to the count of questions
    addQuestion++;
    var numBreedGuesses = 6;
    numberGuessesLeft = numBreedGuesses;
    var guessTry = 1;
    var correctGuess = false;
    var exitGame = false;
    var favoriteBreed = ['Antwerp Belgian Bantam', 'White Faced Black Spanish', 'Sicilian Buttercup', 'New Hampshire Red', 'Lakenvelder', 'Appenzeller Spitzhauben', 'Rubber'];

    ///////////////////
    //begin while loop
    while(! exitGame){
      var breedGuess = prompt('Love me some chickens! I have several favorite breeds.\n\n Can you guess one of my favorite breeds\n\nYou have ' + numberGuessesLeft + ' chances');
      console.log('breedGuess: ', breedGuess);
      numberGuessesLeft--;

      //if there was an empty string or cancel was hit, then quit the game
      if(breedGuess === '' || breedGuess === null){
        alert('I see you are not a chicken lover...\n\nGoodbye...');
        //remove this question to the count of questions
        addQuestion--;
        keepGoing = false;
        exitGame = true;
      }
      //if cancel button was not pressed, continue the game
      if (! exitGame) {
        //coherse the answer to lowercase and remove all spaces
        var breedGuessLower = breedGuess.split(' ').join('').toLowerCase();
        console.log('breedGuessLower: ', breedGuessLower);
        //start for loop
        for (var i = 0; i < favoriteBreed.length; i++){
          //coherse the item at index to lowercase and remove all spaces
          var favoriteBreedLower = favoriteBreed[i].split(' ').join('').toLowerCase();
          console.log('favoriteBreed ' + i + ' ', favoriteBreed[i]);
          console.log('favoriteBreedLower: ', favoriteBreedLower);
          //compare the two lowercase strings
          if (breedGuessLower === favoriteBreedLower) {
            console.log('Correct guess!');
            exitGame = true;
            correctGuess = true;
          }
        }
        //end for loop
        /////////////
        //incriment the guess counter and exit the game if it is greater than the allowed guesses
        guessTry++;
        if (guessTry > numBreedGuesses){
          exitGame = true;
        }
      }
    }
    //end while loop
    /////////////////

    if(correctGuess && keepGoing){
      alert('You are correct!\n\n' + breedGuess + ' chickens are delicious!\n\nThese are all my favorites:\n\n\t' + favoriteBreed.join('\n\t'));
      correctAnswers++;
    } else if (keepGoing) {
      alert('You are out of chances and obviously don\'t know me.\n\nThese are all my favorites:\n\n\t' + favoriteBreed.join('\n\t'));
    }
  }
}

//end guessing game
///////////////////

//Report the number of right answers
function questionResults() {
  if (keepGoing) {
    var mesg = '';
    console.log('addQuestion: ', addQuestion);
    console.log('correctAnswers: ', correctAnswers);
    var userGrade = correctAnswers / addQuestion;
    console.log('userGrade: ', userGrade);

    if(! userGrade){
      mesg = 'You Suck!';
    } else if( userGrade === 1){
      mesg = 'You must love me!';
    }

    console.log('final part of last message: ', mesg);
    //display a messge to the user of how many answers they got right
    alert('You got ' + correctAnswers + ' out of ' + addQuestion + ' questions right, ' + chickenName + '.\n\n' + mesg);
  }
}
