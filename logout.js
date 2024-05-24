document.addEventListener("DOMContentLoaded", function() {
    const logoutBtn = document.querySelector(".logout-btn");
    const userInfoString = localStorage.getItem("usuario-validado");
    const userInfo = JSON.parse(userInfoString);
    
    if (userInfo) {
        const userEmail = userInfo.emailUsuario;
        const userNome = userInfo.nomeUsuario;
        const mensagemBemvindo = `Bemvindo, ${userNome} ! ${userEmail}`;
        const bemVindo = document.querySelector('.registro');
        bemVindo.textContent = mensagemBemvindo;
    }

    logoutBtn.addEventListener("click", () => {
        window.location.replace("login.html");
    });
});