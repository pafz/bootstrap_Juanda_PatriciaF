const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const btn = document.getElementById("btn");
const alertasDiv = document.querySelector(".alertas");
const pMal = document.getElementById("pMal");
/* const pEmail = document.getElementById("emailMal");
const pPassword = document.getElementById("passwordMal"); */

/* CREAR FUNCION QUE QUITE EL MENSAJE DE ALERTA */

/* QUÉ VAMOS A HACER

CORREGIR VALIDACIONES
PONER EL TIMEOUT FUERA DEL IF
CORREGIR LAS EXPRESIONES REGULARES
DEJAR SOLO UN P DONDE ESTÉN LAS ALERTAS
*/

let usuarios = JSON.parse(localStorage.getItem('users'));
if(usuarios === null) {
  usuarios = [];
}

const enviarForm = (e) => {
  e.preventDefault();
  const nombreValor = nombre.value;
  const emailValor = email.value;
  const password1Valor = password1.value;
  const password2Valor = password2.value;

  const usuario = {
    nombre: nombreValor,
    email: emailValor,
    password1: password1Valor,
  };
  function validaciones() {
    const expEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const expPassword = /^[a-zA-Z]\w{3,14}$/;
    /* VALIDACION 1. TODOS LOS CAMPOS DEBEN DE ESTAR RELLENADOS */
    if (
      nombreValor === "" ||
      password1Valor == "" ||
      password2Valor == "" ||
      emailValor == ""
    ) {
      pMal.innerHTML = "Rellena todos los campos";
      pMal.style.display = "block";
      /* VALIDACION 2. EL EMAIL DEBE DE CUMPLIR LA EXPRESIÓN REGULAR */ 
    } else if (!expEmail.test(emailValor)) {
      pMal.innerHTML = "Tienes mal el email";
      pMal.style.display = "block";
    } else if (
      /* VALIDACION 3. CONTRASEÑA 1 = CONTRASEÑA 2 */
      password1Valor !== password2Valor
    ) {
      pPassword.innerHTML = "Revisa tu contraseña";
      pPassword.style.display = "block";

      setTimeout(() => {
        pPassword.innerHTML = "";
        pPassword.style.display = "none";
      }, 3000);
    } else if (
      /* VALIDACION 4. EXPRESIÓN REGULAR DE CONTRASEÑA */
      expPassword.test(password1Valor)
    ) {
    } else {
      /* TODO CORRECTO */
      alertasDiv.innerHTML = "Correcto";
      alertasDiv.style.display = "block";

      usuarios.push(usuario);
      localStorage.setItem('users', JSON.stringify(usuarios));
      setTimeout(() => {
        alertasDiv.innerHTML = "";
        alertasDiv.style.display = "none";
        window.location.href = "usuarios.html";
      }, 3000);
    }

    setTimeout(() => {
      pMal.innerHTML = "";
      pMal.style.display = "none";
    }, 3000);
  }
  validaciones();
};
btn.addEventListener("click", enviarForm);
