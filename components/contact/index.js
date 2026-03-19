let text = document.querySelector('.inner-txt');
let form = document.querySelector('.contact-form');
let nameInput = document.querySelector('#name');
let surnameInput = document.querySelector('#surname');
let emailInput = document.querySelector('#email');
let btnSubmit=document.querySelector('.contact-form button');
let errorName = document.querySelector('.errorName');
let errorSurname = document.querySelector('.errorSurname');
let errorMail = document.querySelector('.errorMail');

btnSubmit.addEventListener('click',(e)=>{
    let hasError=false;
    e.preventDefault();
    
    const formData = new FormData(form);

    let formDatas = Array.from(formData.entries());
    let name = formData.get('name').trim();
    let surname = formData.get('surname').trim();
    let email = formData.get('email').trim();

    errorName.innerText = '';
    errorSurname.innerText = '';
    errorMail.innerText = '';

    if(!name){
        errorName.innerText = '*Please enter name';
        hasError = true;
    }

    if(!surname){
        errorSurname.innerText = '*Please enter surname';
        hasError = true;
    }

    if(!(/[@]/.test(email))){
        errorMail.innerText='*Not correct mail address';
        hasError = true;
    }else if(email.length < 7){
        errorMail.innerText='*Not valid mail address';
        hasError = true;
    }

    console.log(!hasError);
    if(!hasError){
        text.innerHTML='Form Datas is:<br>';

        for(let [key,value] of formDatas){
            text.innerHTML +=`${value}<br>`
        }

        form.reset();
    }
});
