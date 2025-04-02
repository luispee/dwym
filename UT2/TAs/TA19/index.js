
const root = document.createElement('div');

document.body.appendChild(root);

let form = document.createElement('form');
form.setAttribute('name', 'myForm');
form.setAttribute('class', 'form');
root.appendChild(form);

let nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('name', 'fname');
nameInput.setAttribute('placeholder', 'Ingrese nombre: ');
nameInput.setAttribute('required', 'true');

let passwordInput = document.createElement('input');
passwordInput.setAttribute('type', 'password');
passwordInput.setAttribute('name', 'password');
passwordInput.setAttribute('placeholder', 'Ingrese contraseña: ');
passwordInput.setAttribute('minlength', '8');
passwordInput.setAttribute('required', 'true');

let emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('name', 'email');
emailInput.setAttribute('placeholder', 'Ingrese email: ');

let submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.innerText = 'Enviar';
submitButton.onsubmit = function(event) {
    event.preventDefault(); // Evita el envío del formulario
    
    console.log("Form sent. " + nameInput.value + " " + passwordInput.value + " " + emailInput.value);
}

form.appendChild(nameInput);
form.appendChild(passwordInput);
form.appendChild(emailInput);
form.appendChild(submitButton);
