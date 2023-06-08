let nombre = document.getElementById('nombre');
console.log(nombre)
let email = document.getElementById('email');
let password1 = document.getElementById('password1');
let password2 = document.getElementById('password2');
let btn = document.getElementById('btn');



const enviarForm = e => {
    e.preventDefault();
    console.log('hola')

    const nombreValor = nombre.value;
    const emailValor = email.value;
    const password1Valor = password1.value;
    const password2Valor = password2.value;

    const usuario = {
        nombre: nombreValor,
        email: emailValor,
        password1: password1Valor
    }

    if(nombreValor === '' || emailValor === '' || password1Valor === '' || password1Valor !== password2Valor || !(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/).test(emailValor) || (/^[a-zA-Z]\w{3,14}$/).test(password1Valor)){
        console.log('Por favor, rellena el form correctamente completo')
    }

    if(nombreValor === ''){
        setTimeout(() => {
            //crear div y añadirlo al HTML
            let alertDiv = document.createElement('div');
            const textSuccess = document.createTextNode('Error en el nombre');
            alertDiv.appendChild(textSuccess);

            //añadir a div esta class y sus attr
            document.body.appendChild(alertDiv)
            alertDiv.classList.add("alert");
            alertDiv.classList.add("alert-danger");
            alertDiv.setAttribute('role',"alert");
        }, "3000");
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));

    setTimeout(() => {
        //crear div y añadirlo al HTML
        let alertDiv = document.createElement('div');
        const textSuccess = document.createTextNode('Usuario creado correctamente');
            //???????? PREGUNTAR A SOFIA diferencia entre createTextNode() e innerHTML(). Relación con appendChild()
        alertDiv.appendChild(textSuccess);
        document.body.appendChild(alertDiv)
        console.log(alertDiv);

        //añadir a div esta class y sus attr
            //<div class="alert alert-success" role="alert">Usuario creado correctamente</div> 
        alertDiv.classList.add("alert");
        alertDiv.classList.add("alert-success");
        alertDiv.setAttribute('role',"alert");
        
        //redirigir auto a usuarios.html
    }, "3000");
    

    //mostrar en cards de Bootstrap los usuarios guardados en el LocalStorage
    const usuarioRecogido = JSON.parse(localStorage.getItem('usuario'));
    console.log(usuarioRecogido);
} 

btn.addEventListener('click', enviarForm);
