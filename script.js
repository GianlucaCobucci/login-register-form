

const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");
const loginForm = document.querySelector(".form-box.login form");
const registerForm = document.querySelector(".form-box.register form");

registerLink?.addEventListener("click", () => {
    wrapper.classList.add("active");
});

loginLink?.addEventListener("click", () => {
    wrapper.classList.remove("active");
});

function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

loginForm?.addEventListener("submit", (event) => {
    const username = loginForm.querySelector("#username").value;
    const password = loginForm.querySelector("#password").value;
    if (!username || !password || password.length < 8) {
        event.preventDefault();
        let errorMessage = "Per favore, correggi i seguenti errori: ";
        if (!username) errorMessage += "inserisci un nome utente.";
        if (!password) errorMessage += "inserisci una password.";
        if (password.length < 8) errorMessage += "la password deve contenere almeno 8 caratteri.";
        alert(errorMessage);
    }
})

registerForm?.addEventListener("submit", (event) => {
    const username = registerForm.querySelector("#reg-username").value;
    const email = registerForm.querySelector("#reg-email").value;
    const password = registerForm.querySelector("#reg-password").value;
    if (!username || !isValidEmail(email) || !password || password.length < 8) {
        event.preventDefault();
        let errorMessage = "Per favore, correggi i seguenti errori: ";
        if (!username) errorMessage += " nome utente non valido.";
        if (!isValidEmail(email)) errorMessage += " email non valida.";
        if (!password) errorMessage += " password non valida.";
        if (password.length < 8) errorMessage += " la password deve avere almeno 8 caratteri.";
        alert(errorMessage);
    }
});