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
            box.addEventListener("mouseenter", function paint() {
                box.style.backgroundColor = "white";
            }
            );
            row.appendChild(box);
        }

        grid.appendChild(row);
    }
}

const newSize = document.querySelector(".resize");
const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click",() => makeGrid(parseInt(newSize.value)));