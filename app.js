const container = document.querySelector('#container');
var grid;

function callPrompt() {
    grid = prompt('Enter a number ?');
    while (isNaN(grid) == true || grid < 0 || grid > 100) {
        grid = prompt('how many do you want?');
    }
    return grid
}

callPrompt()
createGrid(grid)

function createGrid(grid) {
    for (i = 0; i < grid; i++) {
        const row = document.createElement('div')
        row.className = 'row'
        container.appendChild(row)
        for (j = 0; j < grid; j++) {
            const col = document.createElement('div')
            col.className = 'col'
            row.appendChild(col)
        }
    }
    makeEventListeners()
}

function clearGrid() {
    container.innerHTML = ''
}

function makeEventListeners() {
    const boxes = document.querySelectorAll('.col');
    boxes.forEach((box) => {
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = 'black';
        });
    });
}

const change = document.querySelector('#change');
change.addEventListener('click', () => {
    grid = callPrompt()
    clearGrid()
    createGrid(grid)
});
