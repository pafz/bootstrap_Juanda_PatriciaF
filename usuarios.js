let usuarios = JSON.parse(localStorage.getItem('users'));
if(usuarios === null) {
  usuarios = [];
}


usuariosList = document.querySelector('.lista-usuarios');

usuarios.forEach(usuario => {
    const card = document.createElement('div');
    card.className = "card p-2 w-25";
    card.innerHTML = `<div class="card-body">
      <h5 class="card-title">Nombre: ${usuario.nombre}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Email: ${usuario.email}</h6>
    </div>`;

    usuariosList.appendChild(card);
});