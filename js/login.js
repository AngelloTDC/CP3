document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    // Simulação de dados de login armazenados localmente
    var storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    var authenticatedUser = storedUsers.find(function(user) {
        return user.email === email && user.senha === senha;
    });

    if (authenticatedUser) {
        sessionStorage.setItem("currentUser", JSON.stringify(authenticatedUser));
        document.getElementById("loginMessage").innerHTML = "Login bem-sucedido!";
        document.getElementById("loginMessage").classList.remove("message");
        document.getElementById("loginMessage").classList.add("success");

        setTimeout(function() {
            window.location.href = "index.html";
        }, 5000);
    } else {
        document.getElementById("loginMessage").innerHTML = "E-mail ou senha incorretos.";
        document.getElementById("loginMessage").classList.remove("success");
        document.getElementById("loginMessage").classList.add("message");
    }
});
