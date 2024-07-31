const inputField = document.querySelector('#password');
const outputField = document.querySelector('#output');

inputField.addEventListener('input', function() {
    console.log(inputField.value);
    let password = inputField.value;
    if(password.length < 8){
        outputField.innerText = 'Password is too short';
        outputField.style.color = 'red';
    }
    else {
        // outputField.innerText = 'Password is long enough';
        // outputField.style.color = 'green';
        // a-z
        // A-Z
        // 0-9
        // special characters !@#$%^&*()_+{}:"<>?|[]\;',.
        //console.log("is lowercase",password.search(/[a-z]/));
        // console.log("is uppercase",password.search(/[A-Z]/));
        if( password.search(/[a-z]/)  == -1) {
            outputField.innerText = 'Password is missing a lowercase letter';
            outputField.style.color = 'red';
        }else if (password.search(/[A-Z]/) == -1 ){
            outputField.innerText = 'Password is missing a Uppercase letter';
            outputField.style.color = 'red';
        }else if (password.search(/[0-9]/) == -1){
            outputField.innerText = 'Password is missing a Numeric letter';
            outputField.style.color = 'red';
        }else if (password.search(/[!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\|\[\]\\\;\'\,\.]/) == -1){
            outputField.innerText = 'Password is missing a Special Character letter';
            outputField.style.color = 'red';
        }
        else {
            outputField.innerText = 'Password is strong';
            outputField.style.color = 'green';
        }

    }
})