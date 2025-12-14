export function signup(e) {
e.preventDefault();


const user = {
email: document.getElementById("email").value,
password: document.getElementById("password").value,
};


localStorage.setItem("user", JSON.stringify(user));
alert("Signup successful");
window.location.href = "login.html";
}


export function login(e) {
e.preventDefault();


const email = document.getElementById("email").value;
const password = document.getElementById("password").value;


const user = JSON.parse(localStorage.getItem("user"));


if (user && user.email === email && user.password === password) {
localStorage.setItem("isLoggedIn", true);
window.location.href = "todos.html";
} else {
alert("Invalid credentials");
}
}


export function protectPage() {
const isLoggedIn = localStorage.getItem("isLoggedIn");
if (!isLoggedIn) {
alert("Please login first");
window.location.href = "login.html";
}
}