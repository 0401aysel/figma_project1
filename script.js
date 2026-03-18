import Header from '/components/header/index.js';
import Footer from '/components/footer/index.js';
import About from '/components/about/index.js';

let header = document.querySelector('#header');
let footer = document.querySelector('#footer');
let about = document.querySelector('#about');

header.innerHTML = Header;
footer.innerHTML = Footer;

if(about){
    about.innerHTML = About;
}
let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let close = document.querySelector('.close-menu');

burger.addEventListener('click',()=>{
    menu.classList.toggle('show');
});

close.addEventListener('click',()=>{
    menu.classList.remove('show');
});


