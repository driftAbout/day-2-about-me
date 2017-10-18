'use strict';

var chickenName = prompt('If you were a chicken, what would I call you?');
console.log('chickenName: ', chickenName);

if (chickenName === '' || chickenName === null) {  //abort if canceled or empty
  alert('I\'m sorry if I offened you.  Namaste...');
} else { //keep going if something was entered
  var huh = prompt('Did you find that to be an odd request, ' + ChickenName + ' ?  Yes or No ( Y/N )');
  console.log('huh: ', huh);

  if (huh === '' || huh === null){ //abort if canceled or empty
    alert('Quitter!  Go pluck yourself');
  } else { //keep going if huh was answered
      var keepGoing = true;
      if (!huh.toLowerCase() === 'yes' && !huh.toLowerCase() === 'y'){ //huh is not yes and not y
        var keepOnTrucking = prompt('I\'m sorry you feel that way.  Would you like to continue anyway?\n\nYes or No ( Y/N )');
        console.log('keepOnTrucking: ', keepOnTrucking);
        if (!keepOnTrucking.toLowerCase() === 'yes' && ! keepOnTrucking.toLowerCase() === 'y'){ //keepOnTrucking is false
          keepGoing = false;
        }
        console.log('keepGoing: ', keepGoing);
        if (keepGoing === true) {
          var graced = prompt('Have you ever graced the presence of a professional, free range, chicken catcher?\n\nYes or No ( Y/N )');
          console.log('graced: ', graced);

          if (graced === '' || graced === null ){
            alert('Wow... If you were a boat, you would be a big yella chicken ship....');
          } else {

            if ( graced.toLowerCase() === "yes" || graced.toLowerCase === "y") {
              alert("Well, I'll be the son of my sisters brother!  We must be cousins!");
            } else {
              alert('You, aint from around here, ' + chickenName + '  are ya...');
            }

              var zigZag = prompt('When describing the running style of the Gallus gallus domesticus, a subspecies of the red junglefowl, which came first, the zig or the zag?');
              console.log('zigZag: ', zigZag);

              if (zigZag === '' || zigZag === null){
                alert('You must be rolling up that wacky tabaky in that zig zag!');
              }
              else {
                  keepGoing = true;
                  if( zigZag.toLowerCase() === 'yes' || zigZag.toLowerCase() === 'y' || zigZag.toLowerCase() === 'no' || zigZag.toLowerCase() === 'n'){
                    alert('Trick Question!  They don\'t run from me they get catch-ed')
                  }
                  else {
                    var keepOnTrucking = prompt('Even though you think like a chicken, ' + chickenName + 'and can\'t answer a yes or no question, would you like to continue, anyway?\n\nYes or No ( Y/N )');
                    console.log('keepOnTrucking: ', keepOnTrucking);
                    if (!keepOnTrucking.toLowerCase() === 'yes' && !keepOnTrucking.toLowerCase() === 'y'){ //keepOnTrucking is false
                      keepGoing = false;
                    }
                    console.log('keepGoing: ', keepGoing);
                    if (keepGoing === true) {
                      var catchCount = prompt('How many chickens do you think I can catch in an hour?');
                      console.log('catchCount: ', catchCount);

                      if( catchCount === '' || catchCount === null || ! parseInt(catchCount)){
                        alert("Too, bad...  I was going to take you for some BBQ....");
                      } else {
                        var myCatch = 247;
                        if (parseInt(catchCount) < myCatch || parseInt(catchCount) > myCatch){
                          var onlyCatch = '';
                          if (parseInt(catchCount) > myCatch){
                            var onlyCatch = 'only ';
                          }
                          alert('Really?  You don\'t know nut\'in' /'bout me!. I can ' + onlyCatch + 'catch ' + myCatch + ' chickens in an hour');
                        } else {
                            alert('Hot Damn! Hit my face with hammer!  I can catch exactly ' + myCatch + ' chickens');
                        }

                      var road = prompt('Why did the Urban Farmers Chicken Search and Rescue Team member cross the road?');
                      console.log('road: ', road);

                      if (road === '' || road === null ){
                        alert('You know, a chicken would not get away with an answer like that!');
                      } else {

                        alert('"' + road + '" was a good guess. But the reall answer is because the headless zombie chicken was in pursuit.  Those things run fast with out a head!'
                    )
                        var baseball = ('One last question.  Do you like baseball?  Yes or No ( Y/N )');
                        console.log('baseball: ', baseball);
                        if(baseball === ''  || baseball === null){
                          alert('Oh, I guess one more question was too much');
                        } else {
                          if (baseball.toLowerClass() === 'yes' || baseball.toLowerCase() === 'y'){
                            alert('Really???  You obviously never played with cousin Bertha.');
                          }
                          else if (baseball.toLowerClass() === 'no' || baseball.toLowerCase() === 'n'){
                            alert('Me neither!  You must have played with cousin Bertha, too.');
                          } else {
                            alert("Yeah, I don't buy that....");
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
}
