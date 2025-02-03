const pion = document.querySelectorAll(".pion");

let counter = 0;

for (let i = 0; i < pion.length; i++) {
    const pionObject = pion[i];
    
    pionObject.addEventListener("click", () => {
        const img = pionObject.firstElementChild;
        if (counter % 2 == 0) {
            img.src = "../assets/croix.svg";
            img.alt = "croix";
            pionObject.disabled
        }else {
            img.src = "../assets/rond.svg";
            img.alt = "rond";
        }
        counter++
    });
};