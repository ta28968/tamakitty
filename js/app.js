
//Timer
let timePassing; 
let seconds = 0;
let minutes = 0;
let age = 0;
let hunger = 0;
let play = 0;
let health = 0;
const secondsGoUp = () => {
    seconds++;
    $('#time').text(seconds)
    $('#age').text(minutes)
    if(seconds % 60 === 0){
        minutes++;
        $('.minutes').text(minutes, age);
    }
  
  
}
$('.start').on('click',function(){
    timePassing = setInterval(secondsGoUp, 1000);
})
$('.stop').click(function(){
    clearInterval(timePassing);
})
secondsGoUp();





 
 
  
//  const pet = new Kitty()
//  let increment1 = 0;
//  let increment2 = 0;
//  let increment3 = 0;

  //When sleep btn pushed img and health bar increases if health bar hits 0 you die and img
 $('#sleep').on('click', function(e){
     increment1 += 10;
    $('#health').val(increment1);
    //console.log($('#healthBar').val());

   
 })
        
      

  //When feed btn pushed img and hunger bar increases if health bar hits 0 you die and img
$('#feed').on('click', function(e){
    increment2 += 10;
    $('#hunger').val(increment2);
    //console.log($('#hungerBar').val());
    //$('#eatingPic').on()
})


  //When play btn pushed img and happiness bar increases if health bar hits 0 you die and img 

$('#play').on('click', function(e){
    increment3 += 10;
    $('#happiness').val(increment3);
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


