const pion = document.querySelectorAll(".pion");
const opacity = document.querySelector(".divOpacity");
const playerXWin = document.querySelector(".SecFirstPlayerWin");
const playerOWin = document.querySelector(".SecLastPlayerWin");
let counter = 0;
let ALT_CROSS = "cross";
let ALT_CIRCLE = "circle";

const winCombo = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
];

function verif(player) {
    for (let i = 0; i < winCombo.length; i++) {
        let combo = winCombo[i];

        let a = combo[0]
        let b = combo[1]
        let c = combo[2]

        if (arrayPion[a] === player && arrayPion[b] === player && arrayPion[c] === player) {
            return true
        }
        
    }
    return false
}

let arrayPion = ["", "", "", "", "", "", "", "", ""];

const imgTurn = document.getElementById("imgTurn");

for (let i = 0; i < pion.length; i++) {
    const pionObject = pion[i];
        
    pionObject.addEventListener("click", () => {
        const img = pionObject.firstElementChild;

        if (img.alt) return;

        if (counter % 2 == 0) {
            if (img.src && img.alt == "") {
                img.src = "../assets/croix.svg";
                img.alt = ALT_CROSS;
                imgTurn.src = "../assets/miniRond.svg";
                imgTurn.alt = ALT_CIRCLE;
            }
        }else {
            if (img.src && img.alt == "") {
                img.src = "../assets/rond.svg";
                img.alt = ALT_CIRCLE;
                imgTurn.src = "../assets/miniCroix.svg";
                imgTurn.alt = ALT_CROSS;
            }
        }

        arrayPion[i] = img.alt;
        console.log(arrayPion);

        if (verif(img.alt)) {
            opacity.style.display = "flex";
            if (img.alt === "cross") {
                playerXWin.style.display = "flex";
            }else {
                playerOWin.style.display = "flex";
            }
        }


        counter++
    }); 
};