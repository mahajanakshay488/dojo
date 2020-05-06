//color picker

var btn = document.querySelector('#button');
var clr = document.querySelector('#colour');
var red = document.querySelector('#red');
var green = document.querySelector('#green');
var blue = document.querySelector('#blue');
var colors = document.querySelector('#colors')
 
var colorMade =``;

clr.addEventListener('click',function(){
    
    
   colors.innerHTML += `<div style="background-color: ${colorMade}" class="pallclr"><`
       
    

})

btn.addEventListener('click',function(){
    colorMade = `rgb(${red.value} ,${green.value} ,${blue.value})`
    clr.style.backgroundColor = colorMade;
})

