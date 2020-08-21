/**
Interesting Square
------------------
Buatlah sebuah proses perulangan menggunakan looping/perulangan
(boleh menggunakan while / for)
Disediakan variable height, gunakan variable ini untuk
mengatur tinggi dari persegi yang akan kita buat.
Contoh:
  - height: 3
  - output:
    ***
    ###
    ***
  - height: 1
  - output:
    *
  - height: 5
  - output:
    *****
    #####
    *****
    #####
    *****
Tinggi dan lebar dari persegi sesuai dari variable height
*/

function interestingSquare(num){
    let counter = 1;
    for (let i = 0; i < num; i++) {
        let temp = "";
        for (let j = 0; j < num; j++) {
            temp += counter % 2 === 0 ? "#" : "*";
        }
        counter++;
        console.log(temp)
    }
}

interestingSquare(3)
interestingSquare(5)