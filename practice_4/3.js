/*
================
Break Sentence
================ 
[INsentenceUCTIONS]
breakSentence adalah sebuah function yang menerima satu parameter berupa string kalimat.
function akan mereturn sebuah array yang berisikan setiap kata di kalimat tesebut.
[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan sintaks .split()! Jangan lupa, split bukanlah operasi array.
- Dilarang menggunakan regex .match dan lainnya!
[EXAMPLE]
breakSentence('I am so amazed')
output: ['i', 'am', 'so', 'amazed']
*/


function breakSentence(sentence) {
    const res = [];
    let pivot = "";
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] == ' ') {
            res.push(pivot);
            pivot = "";
        } else if (i == sentence.length-1) {
            pivot += sentence[i];
            res.push(pivot)
            pivot = "";
        } else {
            pivot += sentence[i];
        }
    }
    return res;
}

console.log(breakSentence('I am so amazed')); // ['I', 'am', 'so', 'amazed' ]
console.log(breakSentence('do something')); // ['do', 'something']
console.log(breakSentence('week3 is so easy')); // ['week3', 'is', 'so', 'easy']
console.log(breakSentence('I can do this with my eyes closed')); // ['I', 'can', 'do', 'this', with', 'my', 'eyes', 'closed']
console.log(breakSentence('')); // ['I', 'can', 'do', 'this', with', 'my', 'eyes', 'closed']
