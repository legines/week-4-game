$(document).ready(function(){

  // Player variables set to 0
  var score = 0;
  var wins = 0;
  var loss = 0;

  // Generates random number to guess
  var Random=Math.floor(Math.random()*102+19)
  
  // Display random number
  $("#ranNum").text(Random);
  
  // Assign random number to crystals
  var resource1= Math.floor(Math.random()*12+1);
  var resource2= Math.floor(Math.random()*12+1);
  var resource3= Math.floor(Math.random()*12+1);
  var resource4= Math.floor(Math.random()*12+1);

  // Crystal click events
  $(".brk").on ("click", function(){
    score = score + resource1;
    console.log("New score= " + score);
    $("#sum").text(score); 
          //Win-Lose Condition
        if (score == Random){
          winner();
        }
        else if ( score > Random){
          loser();
        }   
  });  
  $(".grn").on ("click", function(){
    score = score + resource2;
    console.log("New score= " + score);
    $("#sum").text(score); 
        if (score == Random){
          winner();
        }
        else if ( score > Random){
          loser();
        } 
  });  
  $(".ore").on ("click", function(){
    score = score + resource3;
    console.log("New score= " + score);
    $("#sum").text(score);

          if (score == Random){
          winner();
        }
        else if ( score > Random){
          loser();
        } 
  });  
  $(".shp").on ("click", function(){
    score = score + resource4;
    console.log("New score= " + score);
    $("#sum").text(score); 
      
          if (score == Random){
          winner();
        }
        else if ( score > Random){
          loser();
        }
  });
  $(".wod").on ("click", function(){
    score = score + resource4;
    console.log("New score= " + score);
    $("#sum").text(score); 
      
          if (score == Random){
          winner();
        }
        else if ( score > Random){
          loser();
        }
  });

  // Win/Lose Counters
  function winner(){
    alert("Congrats! A winrar is YOU!");
      wins++; 
      $(".win_count").text(wins);
      reset();
    }
    // Display losses
    function loser(){
    alert ("You lose! Good day sir!");
      loss++;
      $(".lose_count").text(loss);
      reset()
    }

  // Restart game
  function reset(){
    Random=Math.floor(Math.random()*102+19);
    console.log(Random)
    $("#ranNum").text(Random);
    resource1= Math.floor(Math.random()*12+1);
    resource2= Math.floor(Math.random()*12+1);
    resource3= Math.floor(Math.random()*12+1);
    resource4= Math.floor(Math.random()*12+1);
    score= 0;
    $("#sum").text(score);
    } 


 
}); 