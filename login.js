const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const errorElement = document.querySelector(".erro");
  const username = form.username.value;
  const password = form.password.value;

  const authenticated = authentication(username, password);

  if (authenticated) {
    window.location.href = "logout.html";
  } else {
    errorElement.innerHTML="Dados incorretos";
    setTimeout(() => {
      errorElement.innerHTML = "";
    }, 2000);
  }
});

let listaUsuarios = [
  { emailUsuario: "admin@email.com", senhaUsuario: "admin" },
  { emailUsuario: "leo@email.com", senhaUsuario: "123" },
  { emailUsuario: "angello@email.com", senhaUsuario: "123" },
  { emailUsuario: "victor@email.com", senhaUsuario: "123" },
  { emailUsuario: "usuario1@email.com", senhaUsuario: "123" },
];

function authentication(username, password) {
  for (let x = 0; x < listaUsuarios.length; x++) {
    if (
      listaUsuarios[x].emailUsuario == username &&
      listaUsuarios[x].senhaUsuario == password
    ) {
      localStorage.setItem(
        "usuario-validado",
        JSON.stringify(listaUsuarios[x])
      );
      return true;
    }
  }
  return false;
}
