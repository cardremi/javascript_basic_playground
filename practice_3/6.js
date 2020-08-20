/**

  Diberikan sebuah function countMe yang menerima sebuah parameter array of string.
  Function ini akan me-return object literal dimana isi dari object tersebut berisi
  jumlah karakter pada array of string

  Contoh:
  input: [ 'jecky', 'gilbert', 'icha' ]
  output:
    {
      j: 1,
      e: 2,
      c: 2,
      k: 1,
      y: 1,
      g: 1,
      i: 2,
      l: 1,
      b: 1,
      r: 1,
      t: 1,
      h: 1,
      a: 1
    }
**/

function countMe(names) {
  const obj = {}
  for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < names[i].length; j++) {
      if(obj[names[i][j]]){
        obj[names[i][j]] = obj[names[i][j]]+1
      }else{
        obj[names[i][j]] = 1
      }
    }
  }
  return obj;
}
  
  console.log(countMe(['samudra', 'dicky', 'jacky','ryan']));
  // {
  //   s: 1,
  //   a: 4,
  //   m: 1,
  //   u: 1,
  //   d: 2,
  //   r: 2,
  //   i: 1,
  //   c: 2,
  //   k: 2,
  //   y: 3,
  //   j: 1,
  //   n: 1
  // }
  
  console.log(countMe(['andrianus', 'yudi', 'pratomo', 'yudha']));
  // {
  //   a: 4,
  //   n: 2,
  //   d: 3,
  //   r: 2,
  //   i: 2,
  //   u: 3,
  //   s: 1,
  //   y: 2,
  //   p: 1,
  //   t: 1,
  //   o: 2,
  //   m: 1,
  //   h: 1
  // }
  console.log(countMe([ 'jecky', 'gilbert', 'icha' ]))
  // {
  //   j: 1,
  //   e: 2,
  //   c: 2,
  //   k: 1,
  //   y: 1,
  //   g: 1,
  //   i: 2,
  //   l: 1,
  //   b: 1,
  //   r: 1,
  //   t: 1,
  //   h: 1,
  //   a: 1
  // }