let paint = (box) => box.style.backgroundColor = "white";

function makeGrid(size) {
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
    box.style.backgroundColor = "white";
    box.style.opacity = 1;
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.querySelector("#rainbow").addEventListener("change", () => paint = (box) => {
    box.style.backgroundColor = getRandomColor();
    box.style.opacity = 1;
})

document.querySelector("#shading").addEventListener("change", () => paint = (box) => {
    box.style.opacity -= 0.1;
})

document.querySelector("#eraser").addEventListener("change", () => paint = (box) => {
    box.style.backgroundColor = "black";
    box.style.opacity = 1;
})




const newSize = document.querySelector(".resize");
makeGrid(parseInt(newSize.value));
const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click",() => makeGrid(parseInt(newSize.value)));
console.log("success");