//modal

var redicn= document.querySelector('.icon:nth-child(3)');
var btn1 = document.querySelector('#button1');
var btn2= document.querySelector('#button2');
var btn3 = document.querySelector('#button3');


redicn.addEventListener('click',function(){
    alert('check updates..?');
})

btn1.addEventListener('click',function(){
    modal.style.display = 'block';
})

btn3.addEventListener('click',function(){
    nav.style.display = 'none';
    button3.style.display = 'none';
})
btn2.addEventListener('click',function(){
    nav.style.display = 'flex';
    button3.style.display = 'initial';
})

