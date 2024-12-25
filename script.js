function makeGrid(size) {
    const grid = document.querySelector(".container");

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < size; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.width = 500 / size + "px";
            box.style.height = 500 / size + "px";
            row.appendChild(box);
        }

        grid.appendChild(row);
    }
}

makeGrid(100);