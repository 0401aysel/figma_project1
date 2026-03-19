let sliderLoad = document.querySelectorAll('.coffee-slider');
let buttons = document.querySelectorAll('.product-types button');
let addToBTN =document.querySelectorAll('.add-to-cart');
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

addToBTN.forEach( button=>{
    button.addEventListener('click',(e)=>{
        let newElement = e.target.closest('.slider-item');
        let id =newElement.dataset.id;
        let price =newElement.querySelector('.price').innerText;
        if(cart[id]){
            cart[id].count++;
        }else{
            cart[id] = {
                'id':id,
                'count':1,
                'price':price,
            };
        };
        console.log(cart)

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

