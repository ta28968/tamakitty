
//Timer
let timePassing; 
let seconds = 0;
let minutes = 0;
let age = 0;
let feed = 0;
let play = 0;
let sleep = 0;
let name;
const secondsGoUp = () => {
    seconds++;
    $('#time').text(seconds)
    $('#age').text(minutes)
    if(seconds % 60 === 0){
        minutes++;
        $('.minutes').text(minutes, age);
      } 
    if(seconds % 2 === 0){
      feed++;
      $("#hunger").attr("value", feed);
      console.log(feed)
    }
    if(seconds % 2 === 0){
      play++;
      $("#happiness").attr("value", play);
      console.log(play)
    }
    if(seconds % 2 === 0){
      sleep++;
      $("#health").attr("value", sleep);
      console.log(sleep)
    }
}


$('form').submit(function(e){
  e.preventDefault();
name = $('form').find('input[name="name"]').val();
  console.log(name);
});



$('.start').on('click',function(){
    timePassing = setInterval(secondsGoUp, 1000);
})
$('.stop').click(function(){
    clearInterval(timePassing);
})
secondsGoUp();



  //When sleep btn pushed img and health bar increases if health bar hits 0 you die and img
 $('#sleep').on('click', function(e){
     if (sleep > 10){
       sleep -= 2;
     } else{
       console.log("don't need sleep")
     }  
   
 })
        
      

  //When feed btn pushed img and hunger bar increases if health bar hits 0 you die and img
$('#feed').on('click', function(e){
  if (feed > 10){
    feed -= 2;
  $('#hunger').val(feed)
  }else {
    console.log("Give me food")
  }
    
    //$('#hunger').val();
    console.log($('#hunger').val());
    //$('#eatingPic').on()
})


  //When play btn pushed img and happiness bar increases if health bar hits 0 you die and img 

$('#play').on('click', function(e){
  if (play > 10){
    play -= 2;
  }else{
    console.log("throw the ball")

  }
    
    //$('#happiness').val();
    //console.log($('#happinessBar').val());
    
    
})
const reset = () => {
  const tryAgain = prompt("play again? y/n");
  if(tryAgain === "y"){
      startRound();
  }
}




//     <img src=https://media2.giphy.com/media/xJjs8eGVbjNYY/200w.webp?cid=790b76115ca3991456715737550944a6>
//     <img src=https://media0.giphy.com/media/NjevnbNiUmeLm/200.webp?cid=790b76115ca3991456715737550944a6>
//     <img src=https://media2.giphy.com/media/v6aOjy0Qo1fIA/200w.webp?cid=790b76115ca3a2596a37316955445a8f>
//     <img src=https://media3.giphy.com/media/ZgULzq4qhqafhSCBA0/200w.webp?cid=790b76115ca3a39935565956511f358d>

    //something += 0
    //$('#img src=https://media2.giphy.com/media/tBxyh2hbwMiqc/giphy.webp?cid=790b76115ca3993e3936305559045117'


