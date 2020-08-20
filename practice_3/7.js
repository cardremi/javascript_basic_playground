/**
Multi Dimensional XO
====================
Implementasikan function `multiDimensionalXO` untuk membuat
array `size` x `size`. Array akan diisi dengan huruf 'x' atau huruf 'o'.
# Contoh I/O
- Input: 3
  Output: [ [ 'o', 'x', 'o' ], [ 'x', 'o', 'x' ], [ 'o', 'x', 'o' ] ]
Pastikan kamu mengisi selang-seling, lihatlah pattern dari output di test case!

# Kondisi khusus
- Jika `size` lebih kecil dari 1, tampilkan 'Invalid input'

*/

function multiDimensionalXO(size) {
  let res = [];
  let pivot = 1;
  if(size < 1){
    return "Invalid input";
  }

  for (let i = 0; i < size; i++) {
    let temp = [];
    for(let j = 0; j< size; j++){
      const a = pivot % 2 === 0 ? "x" : "o";
      temp.push(a);
      pivot++;
    }
    //res[i] = temp;
    res.push(temp);
  }
  return res;
}


console.log(multiDimensionalXO(3));
// [ [ 'o', 'x', 'o' ], [ 'x', 'o', 'x' ], [ 'o', 'x', 'o' ] ]
console.log('\n');
console.log(multiDimensionalXO(5));
console.log('\n')
/*
[ [ 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o' ] ]
*/

console.log(multiDimensionalXO(6));
/*
[ [ 'o', 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o', 'x' ] ]
*/

console.log(multiDimensionalXO(0));
  // Invalid input
