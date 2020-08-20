
/*
Tranpose the Matrix
================ 
Description: matrixTranspose adalah sebuah fungsi untuk menukar posisi baris dan kolom
              dari sebuah matriks
Examples:
1. input = [
  [1, 2],
  [3, 4],
  [5, 6]
]
  output = [
    [1, 3, 5],
    [2, 4, 6]
  ]
2. input = [
    [1, 2]
]
  output = [
    [1],
    [2]
  ]
*/
function cleanUp(matriks){
    const res = [];
    for (let i = 0; i < matriks.length; i++) {
        let isUndefined = false;
        for (let j = 0; j < matriks[i].length; j++) {
            if(matriks[i][j] == undefined){
                isUndefined = true;
                break;
            }
        }
        if(!isUndefined){
            res.push(matriks[i]);
        }

    }
    return res;
}

function matrixTranspose(matriks) {
    for (let i = 0; i < matriks.length; i++) { 
        for (let j = 0; j < i; j++) { 
            const temp = matriks[i][j]; 
            matriks[i][j] = matriks[j][i]; 
            matriks[j][i] = temp; 
        } 
    }
    matriks = cleanUp(matriks);
    return matriks;
}


console.log(matrixTranspose([[1, 2], [3, 4], [5, 6]]))
/*
  input:
  [
    [1, 2],
    [3, 4],
    [5, 6]
  ]
  output :
  [
    [1, 3, 5],
    [2, 4, 6]
  ]
*/

console.log(matrixTranspose([[1, 2], [3, 4]]));

/*
  input:
  [
    [1, 2],
    [3, 4]
  ]
  output :
  [
    [1, 3],
    [2, 4]
  ]
*/

console.log(matrixTranspose([[1, 2]]))
/*
  input:
  [
    [1, 2]  
  ]
  output :
  [
    [1],
    [2]
  ]
*/

console.log(matrixTranspose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
  /*
  input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
    output = [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
    ]
*/
