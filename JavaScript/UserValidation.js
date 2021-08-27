

    const text=document.querySelector('#name');
    const texterror=document.querySelector('.text-error');
    text.addEventListener('input',function()
    {
    let nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(text.value))
    {
        texterror.textContent="";
    }
    else
    {
        texterror.textContent="Name is Incorrect"
    }
    });





