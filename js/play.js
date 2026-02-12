const pion = document.querySelectorAll(".pion");
const opacity = document.querySelector(".divOpacity");
const playerOWin = document.querySelector(".SecFirstPlayerWin");
const playerXWin = document.querySelector(".SecLastPlayerWin");
const nextRound = document.querySelectorAll(".next");
const SecRestart = document.querySelector(".SecRestart")
const spanO = document.querySelector(".spanO");
const spanX = document.querySelector(".spanX");
const spanTies = document.querySelector(".spanTies");
const imgReload = document.getElementById("imgReload");
const SecReload = document.querySelector(".SecReload");
const NO = document.querySelector(".NO")
const quit = document.querySelector("quit");

let counter = 0;
let counterXWin = 0;
let counterOWin = 0;
let ALT_CROSS = "cross";
let ALT_CIRCLE = "circle";
let scoreX = 0;
let scoreO = 0;
let scoreTies = 0;
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

imgReload.addEventListener("click", () => {
    opacity.style.display = "flex";
    SecReload.style.display = "flex";
    SecReload.style.flexDirection = "column";
})

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
                playerXWin.style.flexDirection = "column";
                scoreX++;
                spanX.textContent = scoreX;
            }else {
                playerOWin.style.display = "flex";
                playerOWin.style.flexDirection = "column";
                scoreO++;
                spanO.textContent = scoreO;

            }
        }

        if (!arrayPion.includes("")) {
            opacity.style.display = "flex"
            SecRestart.style.display = "flex";
            SecRestart.style.flexDirection = "column";
            scoreTies++
            spanTies.textContent = scoreTies;
        }

        counter++
    });

    for (let j = 0; j < nextRound.length; j++) {
        let img = pionObject.firstElementChild;
        let nextRoundObjet = nextRound[j];
    
        nextRoundObjet.addEventListener("click", () => {
    
            opacity.style.display = "none";
            
            if (playerXWin.style.display == "flex") {
                playerXWin.style.display = "none";
            }else if (playerOWin.style.display == "flex") {
                playerOWin.style.display = "none";
            }else if (SecRestart.style.display == "flex") {
                SecRestart.style.display = "none";
            }else if (SecReload.style.display == "flex") {
                SecReload.style.display = "none";
            }

            arrayPion = ["", "", "", "", "", "", "", "", ""];
        
            img.src = "";
            img.alt = "";

            imgTurn.src = "../assets/miniCroix.svg";
            imgTurn.alt = ALT_CROSS;

            counter = 0;
        });
    }
};

NO.addEventListener("click", () => {
    opacity.style.display = "none";
    SecReload.style.display = "none";
});

quit.addEventListener("click", () => {
    
})