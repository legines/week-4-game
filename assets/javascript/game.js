$(document).ready(function(){

  // Player variables set to 0
  var score = 0;
  var wins = 0;
  var loss = 0;

  // Generates random number to guess
  //Math.floor(Math.random()*(max-min+1)+min)
  var random=Math.floor(Math.random()*102+19)
  
  // Display random number
  $("#ranNum").text(random);
  $("#sum").text(score);
  
  // Assign random number to crystals
  var resource1= Math.floor(Math.random()*12+1);
  var resource2= Math.floor(Math.random()*12+1);
  var resource3= Math.floor(Math.random()*12+1);
  var resource4= Math.floor(Math.random()*12+1);

  // Crystal click events
  $(".brk").on ("click", function(){
    score = score + resource1;
    console.log("Your new score is " + score);
    $("#sum").text(score); 
    //Win-Lose condition repeated for all crystals
    if (score == random){
      winner();
    }
    else if ( score > random){
      loser();
    }   
  });  

  $(".grn").on ("click", function(){
    score = score + resource2;
    console.log("Your new score is " + score);
    $("#sum").text(score); 

    if (score == random){
      winner();
    }
    else if ( score > random){
      loser();
    } 
  }); 

  $(".ore").on ("click", function(){
    score = score + resource3;
    console.log("Your new score is " + score);
    $("#sum").text(score);

    if (score == random){
    winner();
    }
    else if ( score > random){
      loser();
    } 
  });  

  $(".shp").on ("click", function(){
    score = score + resource4;
    console.log("Your new score is " + score);
    $("#sum").text(score); 

    if (score == random){
    winner();
    }
    else if ( score > random){
      loser();
    }
  });

  $(".wod").on ("click", function(){
    score = score + resource4;
    console.log("Your new score is " + score);
    $("#sum").text(score); 
    
    if (score == random){
    winner();
    }
    else if ( score > random){
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
    
    function loser(){
    alert ("You lose! Good day sir!");
      loss++;
      $(".lose_count").text(loss);
      reset()
    }

  // Restart game
  function reset(){
    random=Math.floor(Math.random()*102+19);
    console.log(random)
    $("#ranNum").text(random);
    resource1= Math.floor(Math.random()*12+1);
    resource2= Math.floor(Math.random()*12+1);
    resource3= Math.floor(Math.random()*12+1);
    resource4= Math.floor(Math.random()*12+1);
    score= 0;
    $("#sum").text(score);
    } 
 
}); 