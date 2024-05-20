document.addEventListener("DOMContentLoaded", function() {
    var currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

    if (currentUser) {
        document.getElementById("welcomeMessage").innerHTML = "Bem-vindo(a), " + currentUser.nome + "!";
    } else {
        window.location.href = "login.html";
    }

    document.getElementById("logoutButton").addEventListener("click", function() {
        sessionStorage.removeItem("currentUser");
        window.location.href = "login.html";
    });
});
