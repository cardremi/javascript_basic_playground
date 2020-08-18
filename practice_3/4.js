/*
    Diberikan sebuah function operasiMatriks yang menerima parameter dua buah array
    dua dimensi dan operator matematika.

    Dimana jika parameter operator matematika adalah '+' maka dua array tersebut ditambahkan
    dan jika parameter operator matematika adalah '-' maka dua array tersebut dikurangkan

    NOTE: operator matematika yang diterima hanya '+' dan '-'


    contoh :
    input:
      arr1:
        [
          [5, 4, 7],
          [3, 9, 3],
          [8, 3, 2]
        ]
      arr2:
        [
          [5, 4, 8],
          [1, 9, 3],
          [8, 2, 2]
        ]
      operator: '+'

    Proses:
      [
        [5+5, 4+4, 7+8],
        [3+1, 9+9, 3+3],
        [8+8, 3+2, 2+2]
      ]

    Output:
    [ [ 10, 8, 15 ], [ 4, 18, 6 ], [ 16, 5, 4 ] ]


    NOTE:
     - ASUMSI JUMLAH BARIS DAN KOLOM arr1 dan arr2 HARUS SAMA
     - Jika jumlah kolom atau jumlah baris dari kedua array berbeda maka
       RETURN 'Invalid array'

    RULES:
    - DILARANG menggunakan built-in function .map, .filter, .reduce
 */


function add(a, b){
  return a+b;
}
function minus(a, b){
  return a-b;
}
function multiply(a, b){
  return a*b;
}
function divide(a, b){
  return a/b;
}
function isValidArraySize(arr){
  let default_value = 0;
  let isValid = true;
  for (let i = 0; i < arr.length; i++) {
    if(i == 0){
      default_value = arr[i].length;
    }else{
      if(default_value != arr[i].length){
        isValid = false;
        break;
      }
    }
  }
  return isValid;
}




function operasiMatriks(arr1, arr2, operator) {
  let counter = 0;
  let res = [];
  if(!isValidArraySize(arr1)){
    return "Array tidak valid";
  }
  if(!isValidArraySize(arr2)){
    return "Array tidak valid";
  }

  for (let i = 0; i < arr1.length; i++) {
    let temp = [];
    for (let j = 0; j < arr1[i].length; j++) {
      let a = arr1[i][j];
      let b = arr2[i][j]
      let c;
      if(operator == '+'){
        c = add(a, b);
      }else if(operator == '-'){
        c = minus(a,b);
      }else if(operator == '*'){
        c = multiply(a,b);
      }else{
        c = divide(a,b);
      }
      temp[j] = c;
      res[i] = temp;
      counter++;      
    }
  }


  return res;
}

//check multiply
console.log(operasiMatriks([
  [5, 4, 7],
  [3, 9, 3],
  [8, 3, 2]
], [
  [5, 4, 8],
  [1, 9, 3],
  [8, 2, 2]
], "*"));

console.log(operasiMatriks([
  [5, 4, 7],
  [3, 9, 3],
  [8, 3, 2]
], [
  [5, 4, 8],
  [1, 9, 3],
  [8, 2, 2]
], "+")); // [ [ 10, 8, 15 ], [ 4, 18, 6 ], [ 16, 5, 4 ] ]

console.log(operasiMatriks([
  [5, 4, 7],
  [3, 9, 3],
  [8, 3, 2]
], [
  [5, 4, 8],
  [1, 9, 3, 5],
  [8, 2, 2]
], "+")); // kedua matriks tidak dapat diperasikan
