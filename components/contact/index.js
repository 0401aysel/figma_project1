let button = document.querySelector('button');
let text = document.querySelector('.inner-txt');

button.addEventListener('click',(e)=>{
    e.preventDefault();
    text.innerHTML=`
        <div>SUCCESS !</div>
    `;
});