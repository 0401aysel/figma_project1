import Header from '/components/header/index.js';
import Footer from '/components/footer/index.js';
import About from '/components/about/index.js';

let header = document.querySelector('#header');
let footer = document.querySelector('#footer');
let about = document.querySelector('#about');
let explore = document.querySelector('#explore');

header.innerHTML = Header;
footer.innerHTML = Footer;

if(about){
    about.innerHTML = About;
}

let subscribeInput = document.querySelector('#mail');
let subscibeBtn=document.querySelector('.subscribe-form button');
let mailErrorMsg =document.querySelector('.mail-error');
let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let close = document.querySelector('.close-menu');

burger.addEventListener('click',()=>{
    menu.classList.toggle('show');
});

close.addEventListener('click',()=>{
    menu.classList.remove('show');
});

if(explore){
    explore.addEventListener('click',(e)=>{
        e.preventDefault();
        products.scrollIntoView({block:'start', behavior:'smooth'});
    });
}

subscibeBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    let mailAddress = subscribeInput.value;

    if(!(/[@]/.test(mailAddress))){
        mailErrorMsg.innerText='*Not correct mail address';
    }else if(mailAddress.length < 7){
        mailErrorMsg.innerText='*Not valid mail address';
    }else{
        mailErrorMsg.innerText='';
        console.log(mailAddress);
    }
    document.querySelector('.subscribe-form').reset();
});
