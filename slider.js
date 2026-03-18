let sliderLoad = document.querySelectorAll('.coffee-slider');
let buttons = document.querySelectorAll('.product-types button');
const latte = document.querySelector(".latte");

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

        let index = 0;
        let itemWidth = sliderElem.querySelector('.slider-item').offsetWidth;
        let slider = sliderElem.querySelector(".slider-items");
        let dots = sliderElem.querySelectorAll('.slider-dots span');

        function slideNext(){
            index++;

            if (index == dots.length) {
                index = 0;
            }
            updateSlider();
        }

        function slidePrev(){
            if (index > 0) {
                index--;
                updateSlider();
            }
        }

        function updateSlider() {
            handleDot(index);
            slider.style.transform = `translateX(-${index * itemWidth}px)`;
        }
        dots.forEach(dot => {
            dot.addEventListener('click',()=>{
                index = dot.dataset.index;
                updateSlider();
            });
        });

        function handleDot(index){
            dots.forEach(dot => {
                dot.classList.remove('active');
                if(dot.dataset.index == index){
                    dot.classList.add('active');
                }
            });

        }
        setInterval(slideNext,4000);

            });
});


latte.click();