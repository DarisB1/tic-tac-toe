const header = document.querySelector("header");
// const header = document.querySelector("header");
// const header = document.querySelector("header");

const choixX = document.querySelector(".choixX");
const choixO = document.querySelector(".choixO");
const btnPlayer = document.querySelector("player");
const imgChoixO = choixO.firstElementChild;
const imgChoixX = choixX.firstElementChild;

choixX.addEventListener("click", () => {
    choixX.classList.add("choix");
    choixO.classList.remove("choix");
    imgChoixX.src = "../assets/croixFoncé.svg";
    imgChoixO.src = "../assets/rondBleu.svg";
});

choixO.addEventListener("click", () => {
    choixO.classList.add("choix");
    choixX.classList.remove("choix");
    imgChoixO.src = "../assets/rondFoncé.svg";
    imgChoixX.src = "../assets/croix.svg";
});

btnPlayer.addEventListener('click', () => {

});