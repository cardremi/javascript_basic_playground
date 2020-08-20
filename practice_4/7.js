/*
==================================
Array Mastery: Fish Filter
==================================
[INSTRUKSI]
Fish Filter merupakan fungsi untuk menyaring data kumpulan spesies laut dan akan mengembalikan spesies
yang berisi kumpulan ikan dalam bentuk string
[CONTOH]
input: ['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng']
output: ikan indosiar, dan ikan bandeng
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .splice, .slice, .filter, dan .reduce!
*/

function formatOutput(arr){
    let res = "";
    for (let i = 0; i < arr.length; i++) {
        if(i == arr.length -1){
            res += "dan "+arr[i];
        }else{
            res += arr[i]+", "
        }
    }
    return res.length === 0 ? "tidak ada data" : res;
}

function fishFilter(fishes) {
    const fishFound = [];
    for (let i = 0; i < fishes.length; i++) {
        let temp = "";
        for (let j = 0; j < fishes[i].length; j++) {
            if(j == fishes[i].length-1){
                temp += fishes[i][j];
                if(temp == 'ikan'){
                    fishFound.push(fishes[i]);
                    temp = "";
                }
            }else if(fishes[i][j] == ' '){
                if(temp == 'ikan'){
                    fishFound.push(fishes[i]);
                    temp = "";
                }
            }else{
                temp += fishes[i][j];
            }
        }        
    }
    return formatOutput(fishFound);
}

//fishFilter(['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng'])

// TEST CASES
console.log(fishFilter(['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng'])); // ikan indosiar, dan ikan bandeng
console.log(fishFilter(['gurita', 'ikan kerapu', 'ikan hiu'])); // ikan kerapu, dan Ikan hiu
console.log(fishFilter(['bintang laut', 'spongebob', 'patrick', 'ikan paus', 'ikan hiu', 'ikan tongkol'])); // ikan paus, ikan hiu, dan ikan tongkol
console.log(fishFilter(['gurita', 'udang'])); // tidak ada data
