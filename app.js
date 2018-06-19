 < div id = "time-left" > < /div>

 //-- jQuery
 <
 script src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" > < /script>

 //-- Script -->
 <
 script src = "simpleTimer.js" > < /script>
     //Optional JavaScript -->
     //jQuery first, then Popper.js, then Bootstrap JS -->
     <
     script src = "https://code.jquery.com/jquery-3.2.1.min.js"
 crossorigin = "anonymous" > < /script>  <script src = "https:/ / cdnjs.cloudflare.com / ajax / libs / popper.js / 1.12 .3 / umd / popper.min.js "
 crossorigin = "anonymous" > < /script>  <script src = "https:/ / maxcdn.bootstrapcdn.com / bootstrap / 4.0 .0 - beta .2 / js / bootstrap.min.js "
 crossorigin = "anonymous" > < /script> <script src = "./assets / javascript / app.js "


 //  Simple Timer Solution

 //  Step 1:
 //  Use the following link inside the Audio function below:
 //  https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90
 var audio = Audio("paintItBlack.mp3");
 $(document).ready(function() {
     $("#paintItBlack").get(0).play();
 });

 //  Step 2:
 //  after 5 seconds, execute the fiveSeconds function
 //  after 10 seconds, execute the tenSeconds function
 //  after 15 seconds, execute the timeUp function

 setTimeout(fiveSeconds, 1000 * 5);
 setTimeout(tenSeconds, 1000 * 10);
 setTimeout(timeUp, 1000 * 15);

 //  Step 3:
 //  Fill in the blanks to these functions.
 function fiveSeconds() {

     // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
     // console log 10 seconds left
     $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
     console.log("10 seconds left");
 }

 function tenSeconds() {

     // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
     // console log 5 seconds left
     $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
     console.log("5 seconds left");
 }

 function timeUp() {

     // in the element with an id of time-left add an h2 saying Time's Up!
     // console log done
     console.log("done");
     $("#time-left").append("<h2>Time's Up!</h2>");
     console.log("time is up");

     //  The following line will play the audio file we linked to above:
     audio.play();
 }