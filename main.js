const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const btn = document.getElementById("btn");
const alertasDiv = document.querySelector(".alertas")
/* CREAR FUNCION QUE QUITE EL MENSAJE DE ALERTA */

/* QUÉ VAMOS A HACER

CREAR UNA FUNCIÓN QUE SI NO SE CUMPLE LA VALIDACIÓN AÑADA UN ALERT EN UN DIV CREADO EN EL HTML
Y QUE VAYA SUMANDO LAS ALERTAS EN FUNCIÓN DE LOS ERRORES QUE HAYA

EN LA FUNCION, TIENE QUE DESAPARECER LA ALERTA A LOS 3 SEGUNDOS

PASOS
1-

*/

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

  if (nombreValor === ""){
    // llamar alerta fallo
  } else if(emailValor === "" || !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(emailValor)){
    // llamar alerta fallo
  } else if(password1Valor === "" || password1Valor !== password2Valor || /^[a-zA-Z]\w{3,14}$/.test(password1Valor)){
    // llamar alerta fallo
  } else {
    // llamar alerta de success
    alertasDiv.innerHTML = "Correcto"
  }
}

if (nombreValor === "") {
  setTimeout(() => {
    //crear div y añadirlo al HTML
    let alertDiv = document.createElement("div");
    const textError = document.createTextNode("Error en el nombre");
    alertDiv.appendChild(textError);

    //añadir a div esta class y sus attr
    document.body.appendChild(alertDiv);
    alertDiv.classList.add("alert");
    alertDiv.classList.add("alert-danger");
    alertDiv.setAttribute("role", "alert");
  }, "3000");

  localStorage.setItem("usuario", JSON.stringify(usuario));

  setTimeout(() => {
    //crear div y añadirlo al HTML
    let alertDiv = document.createElement("div");
    const textSuccess = document.createTextNode("Usuario creado correctamente");
    //???????? PREGUNTAR A SOFIA diferencia entre createTextNode() e innerHTML(). Relación con appendChild()
    alertDiv.appendChild(textSuccess);
    document.body.appendChild(alertDiv);
    console.log(alertDiv);

    //añadir a div esta class y sus attr
    //<div class="alert alert-success" role="alert">Usuario creado correctamente</div>
    alertDiv.classList.add("alert");
    alertDiv.classList.add("alert-success");
    alertDiv.setAttribute("role", "alert");

    //redirect('./usuarios.html')
  }, "3000");

  //mostrar en cards de Bootstrap los usuarios guardados en el LocalStorage
  const usuarioRecogido = JSON.parse(localStorage.getItem("usuario"));
  console.log(usuarioRecogido);
};


btn.addEventListener("click", enviarForm);


/* const redirect = link => {
    setTimeout(() => {
        window.location.href = link;
    }, 1000);
} */