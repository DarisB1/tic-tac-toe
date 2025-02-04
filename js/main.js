const pion = document.querySelectorAll(".pion");

let counter = 0;
let ALT_CROSS = "cross";
let ALT_CIRCLE = "circle";

let arrayPion = ["", "", "", "", "", "", "", "", ""];

const imgTurn = document.getElementById("imgTurn");

for (let i = 0; i < pion.length; i++) {
    const pionObject = pion[i];
    
    pionObject.addEventListener("click", () => {
        const img = pionObject.firstElementChild;
        if (counter % 2 == 0) {
            if (img.src && img.alt == "") {
                img.src = "../assets/croix.svg";
                img.alt = ALT_CROSS;
                imgTurn.src = "../assets/miniRond.svg";
                imgTurn.alt = ALT_CIRCLE;
                pionObject.disabled;
            }
        }else {
            if (img.src && img.alt == "") {
                img.src = "../assets/rond.svg";
                img.alt = ALT_CIRCLE;
                imgTurn.src = "../assets/miniCroix.svg";
                imgTurn.alt = ALT_CROSS;
                pionObject.disabled;
            }
        }
        counter++
    }); 
};