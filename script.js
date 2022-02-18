var singin=document.querySelector('.signin');
var singup=document.querySelector('.signup');
var btn1=document.querySelector('#one');
var btn2=document.querySelector('#two');
var stop=document.querySelector('.stop');

singup.style.display='none';


btn1.addEventListener('click',()=>{
    singin.style.display='none';
    singup.style.display='block';
})
btn2.addEventListener('click',()=>{
    singin.style.display='block';
    singup.style.display='none';
})

var myMusic = document.querySelector('#music');
    myMusic.play();
    
stop.addEventListener('click',()=>{
    myMusic.pause();
    stop.style.display='none';
})