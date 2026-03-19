import Header from '/components/header/index.js';
import Footer from '/components/footer/index.js';
import About from '/components/about/index.js';

let header = document.querySelector('#header');
let footer = document.querySelector('#footer');
let about = document.querySelector('#about');
let explore = document.querySelector('#explore');
let products = document.querySelector('.products');

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

if(products){
    fetch('./components/products.json')
    .then( res => res.json())
    .then(data=>{
        renderSlide(data.slide1, '.slider1 .slider-items');
        renderSlide(data.slide2, '.slider2 .slider-items');
        renderSlide(data.slide3, '.slider3 .slider-items');
    });
}

function renderSlide(data, selector){
    const container = document.querySelector(selector);

    container.innerHTML = '';

    data.forEach(item =>{
        const div = document.createElement('div');
        div.className = 'slider-item';

        div.innerHTML = `
            <a href="/product.html" class="product-card-link">
                <div class="radius-1">
                    <img class="item-img" src="/images/${item.img}">
                </div>
                <p class="product-name">${item.name}</p>
            </a>

            <div class="rate">
                <img src="/images/star.svg">
                <p>${item.rate}</p>
                <span>(${item.review} reviews)</span>
            </div>

            <p class="about-coffee">
            Lorem ipsum dolor sit amet consectetur.
            </p>

            <div class="addToCart">
                <div>
                    <span class="price">${item.price}</span><span>$</span>
                </div>
                <button class="add-to-cart">
                    <img src="/images/plus.svg">
                </button>
            </div>
        `;

        container.appendChild(div);
    });
}