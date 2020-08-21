
/*
===========================
Initial Grouping Descending
==========================

[INSTRUCTION]
Disediakan sebuah function initialGroupingDescending yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialGroupingDescending akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan huruf depan harus terurut dari paling besar/descending dan dipisahkan ke dalam
array dua dimensi.

[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Output: 
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]

Kamu tidak perlu peduli dengan urutan alphabet nama siapa yang keluar terlebih dahulu!

RULES:
- Dilarang menggunakan sintaks Set atau Regex
- Dilarang menggunakan built in function sort 

*/

function sortLetterDesc(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}


function initialGroupingDescending(studentsArr) {
    let results = [];
    for (let i = 0; i < studentsArr.length; i++) {
        if(i === 0){
            results.push(studentsArr[i][0])
        }
        let isFound = false;
        for (let j = 0; j < results.length; j++) {
            if(results[j] == studentsArr[i][0]){
                isFound = true;
            }       
        }
        if(!isFound){
            results.push(studentsArr[i][0])
        }
    }
    results = sortLetterDesc([...results])
    const t = [];
    for (let i = 0; i < results.length; i++) {
        const temp = [];
        temp.push(results[i])
        t.push(temp)

    }
    for (let i = 0; i < t.length; i++) {
        for (let j = 0; j < studentsArr.length; j++) {
            if(studentsArr[j][0] == t[i][0]){
                t[i].push(studentsArr[j])
            }
        }
    }
    return t
}

console.log(initialGroupingDescending(['Budi', 'Badu', 'Joni', 'Jono']));
/*
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]
*/

console.log(initialGroupingDescending(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
[
  [ 'Y', 'Yusuf' ],
  [ 'M', 'Mickey' ],
  [ 'G', 'Gong' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ]
]
*/

console.log(initialGroupingDescending(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
  /*
[
  [ 'S', 'Stone', 'Sticker' ],
  [ 'R', 'Rock', 'Rocker' ],
  [ 'B', 'Brick' ]
]
*/
