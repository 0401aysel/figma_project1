import Header from '/components/header/index.js';
import Footer from '/components/footer/index.js';

let header = document.querySelector('#header');
let footer = document.querySelector('#footer');

header.innerHTML = Header;
footer.innerHTML = Footer;

let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let close = document.querySelector('.close-menu');

burger.addEventListener('click',()=>{
    menu.classList.toggle('show');
});

close.addEventListener('click',()=>{
    menu.classList.remove('show');
});