 //  Step 1:
 //  Use the following link inside the Audio function below:
 //  https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90
 var audio = new Audio("paintItBlack.mp3");


 //  Step 2:
 //  after 5 seconds, execute the fiveSeconds function
 //  after 10 seconds, execute the tenSeconds function
 //  after 15 seconds, execute the timeUp function
 var gameTimer;

 function startGame() {
     if (!gameTimer)
         gameTimer = setTimeout(timeUp, 1000 * 30);
 }

 $("input").on("click", startGame);
 $("#finish").on("click", timeUp);

 function timeUp() {
     gameTimer = ""

     // in the element with an id of time-left add an h2 saying Time's Up!
     // console log done
     $("#timeUp").append("<h2>Time's Up!</h2>");
     console.log("time is up");
     $("input[name=response][value=3]").prop('checked', true);
     $("input[name=response2][value=2]").prop('checked', true);
     $("input[name=response3][value=2]").prop('checked', true);
     $("input[name=response4][value=3]").prop('checked', true);

     //if($("input[name=response][value=3].attr('checked') == "checked"){
     //$(input[name=response][value=3].css("background-color", "green");
     //}
     //else
     //{
     //$(input[name=response][value=3].css("background-color", "red");
     //}



     //  The following line will play the audio file we linked to above:
     audio.play();
 }


 var audioPlaying = false;
 $("#playAudio").on("click", function() {
     if (!audioPlaying) {
         audioPlaying = true;
         audio.play();
     } else if (audioPlaying) {
         audioPlaying = false;
         audio.pause();
     }

 })