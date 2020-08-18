       /**

Drone Position
==============

Implementasikan function dronePosition untuk mencari koordinat drone yang
ada di dalam `grid`. Drone akan direpresentasikan sebagai karakter '*'.

Format koordinat: <baris>, <kolom>

# Asumsi:
- Drone ('*') selalu berjumlah 1, tidak mungkin ada drone lain

Contoh input ada di test case.

# Aturan coding:
- WAJIB menyertakan algoritma / pseudocode

*/

function dronePosition(grid) {
    let foundRow;
    let foundColumn;
    let rowLength = grid.length;

    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == '*') {
                foundRow = i;
                foundColumn = j;
            }
        }
    }

    if (foundRow == undefined) {
        return "No drone";
    }
    return `${foundRow}, ${foundColumn}`;
}


function breakdown(grid){
    let foundRow;
    let foundColumn;
    for(let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == '*') {
                foundRow = i;
                foundColumn = j;
            }
        }
    }
    if (foundRow == undefined) {
        return "No drone";
    }
    return `${foundRow}, ${foundColumn}`;
}


// breakdown([
//     ['', '', ''],
//     ['', '', ''],
//     ['', '', '*']
// ]); // 2, 2


console.log(dronePosition([
    ['', '', ''],
    ['', '', ''],
    ['', '', '*']
])); // 2, 2

console.log(dronePosition([
    ['', '', ''],
    ['', '*', ''],
    ['', '', '']
])); // 1, 1

console.log(dronePosition([
    ['', '', '*'],
    ['', '', ''],
    ['', '', '']
])); // 0, 2

console.log(dronePosition([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
])); // No drone
