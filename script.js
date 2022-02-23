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

stop.addEventListener('click',()=>{
    document.querySelector('#music').pause();
    stop.style.display='none';
})

function validateForm(){
    var pass1=document.getElementById('pass1').value;
    var pass2=document.getElementById('pass2').value;
    if(!(pass1===pass2))
    {
        alert('renter the correct password');
        return false;
    }
    else{
        return true;
    }
}




