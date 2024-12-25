let r = 0;
const rainbow = Array("#E81416", "#FFA500", "#FAEB36", "#79C314", "#487DE7", "#4B369D", "#70369D");

window.addEventListener("mousedown", () => {
    isClicked = true;
});

window.addEventListener("mouseup", () => {
    isClicked = false;
});

let paint = (box) => {
    if (isClicked) {
        box.style.backgroundColor = "white"
        box.style.opacity = 1;
    }
};

function makeGrid(size) {
    r = 0;
    if (size > 200) {
        alert("Grid size must be under 200!");
        return;
    }

    const grid = document.querySelector(".container");
    grid.innerHTML = "";

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < size; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.width = 500 / size + "px";
            box.style.height = 500 / size + "px";
            box.addEventListener("mouseenter", () => paint(box));
            row.appendChild(box);
        }

        grid.appendChild(row);
    }
}

document.querySelector("#white").addEventListener("change", () => paint = (box) => {
    if (isClicked) {
        box.style.backgroundColor = "white";
        box.style.opacity = 1;
    }
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.querySelector("#random").addEventListener("change", () => paint = (box) => {
    if (isClicked) {
        box.style.backgroundColor = getRandomColor();
        box.style.opacity = 1;
    }
})

function getRainbowColor() {
    r++;
    return rainbow[r % 7];
}   

document.querySelector("#rainbow").addEventListener("change", () => paint = (box) => {
    if (isClicked) {
        box.style.backgroundColor = getRainbowColor();
        box.style.opacity = 1;
    }
})

document.querySelector("#shading").addEventListener("change", () => paint = (box) => {
    if (isClicked) {
        box.style.opacity -= 0.1;
    }
})

document.querySelector("#eraser").addEventListener("change", () => paint = (box) => {
    if (isClicked) {
        box.style.backgroundColor = "black";
        box.style.opacity = 1;
    }
})




const newSize = document.querySelector(".resize");
makeGrid(parseInt(newSize.value));
const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click",() => makeGrid(parseInt(newSize.value)));
console.log("success");