import App from "./App.js";

const root = document.getElementById("app");
const app = new App(root);

var main = document.querySelector(".password-box");
var box = document.querySelector(".box");
var login = document.querySelector(".login");
var create = document.querySelector(".create");

create.addEventListener("click", () => {
    localStorage.setItem("password", box.value);
    alert("Password Created!");
});

login.addEventListener("click", () => {
    if (box.value === localStorage.getItem("password")) {
        main.style.display = "none";
        localStorage.setItem("state", true);
    } else {
        alert("Wrong Password!");
    }
});