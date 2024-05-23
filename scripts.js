const users = [
    { email: 'aluno@aluno.com', password: '123' },
    { email: 'prof@prof.com', password: '123' },
    { email: 'ale@ale.com', password: '123' },
];

users.forEach(user => {
    localStorage.setItem(user.email, JSON.stringify(user));
});

const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', e => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
        sessionStorage.setItem('user', JSON.stringify(user));
        location.href = 'index.html';
    } else {
        errorMessage.textContent = 'Email ou senha incorretos';
    }
});

const userName = document.getElementById('user-name');
const logoutButton = document.getElementById('logout-button');

const user = JSON.parse(sessionStorage.getItem('user'));

if (user) {
    userName.textContent = user.email;
    logoutButton.addEventListener('click', () => {
        sessionStorage.removeItem('user');
        location.href = 'login.html';
    });
} else {
    location.href = 'login.html';
};