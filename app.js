const container = document.querySelector('#container');

for (i = 0; i < 16; i++) {
    const row = document.createElement('div')
    row.className = 'row'
    container.appendChild(row)
    for (j = 0; j < 16; j++) {
        const col = document.createElement('div')
        col.className = 'col'
        row.appendChild(col)
    }
}