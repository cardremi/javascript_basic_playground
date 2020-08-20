// Competency: Function + Looping + Conditional
/*
Instruksi
=========
Buatlah sebuah function bernama drawLadder yang menerima satu parameter bernama row, dan akan menampilkan x ke samping di baris ganjil, dan o di baris genap. Function drawLadder tidak perlu me-return apapun.
Function tidak perlu mengembalikan nilai (tidak perlu ada return).
Contoh 1
--------
input: 3
x
xo
xox

Contoh 2
--------
input: 6
tampilan:
x
xo
xox
xoxo
xoxox
xoxoxo

*/

function drawLadder(row) {
    let counter = 1;
    for (let i = 0; i < row; i++) {
        let temp = "";
        for (let j = 0; j < i+1; j++) {
            temp += j % 2 === 0 ? "x" : "o";
        }
        counter++;
        console.log(temp);
    }
  
}

drawLadder(6);
console.log("\n");
drawLadder(3);
