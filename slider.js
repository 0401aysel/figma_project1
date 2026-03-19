let sliderLoad = document.querySelectorAll('.coffee-slider');
let buttons = document.querySelectorAll('.product-types button');
let shop = document.querySelector('.cart-count');
let cart ={};

buttons.forEach(elem => {
    elem.addEventListener('click',(event)=>{
        buttons.forEach(elem => {
            elem.classList.remove('active');
        });
        event.target.classList.add('active');
        let sliderItem=`.slider${event.target.dataset.id}`;
        sliderLoad.forEach(elem => {
            elem.classList.remove('active');
        });

        let sliderElem = document.querySelector(sliderItem);
        sliderElem.classList.add('active');
    });
});

fetch('./components/products.json')
.then( res => res.json())
.then(data=>{
    renderSlide(data.slide1, '.slider1 .slider-items');
    renderSlide(data.slide2, '.slider2 .slider-items');
    renderSlide(data.slide3, '.slider3 .slider-items');
});

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

        div.querySelector('.add-to-cart').addEventListener('click',()=>{
            if(cart[item.id]){
                cart[item.id].count++;
            }else{
                cart[item.id] = {
                    'id':item.id,
                    'count':1,
                };
            };

            if(Object.keys(cart).length > 0){
                let countProducts = 0;

                for( let product of Object.values(cart)){
                    countProducts += product.count;
                };

                shop.innerHTML=countProducts;
                shop.style.display='inline-block';
            }else{
                shop.innerHTML='0';
                shop.style.display='none';
            }
        });

    });
}


