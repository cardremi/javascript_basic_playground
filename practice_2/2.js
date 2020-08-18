
/**
=========================
Array Mastery: Add Titles
=========================

[INSTRUKSI]

Function addTitle akan menerima satu parameter berupa array data orang dan akan menambahkan
title (Mr. / Ms. / Mrs.) kepada setiap orang yang ada di dalam array tersebut.

Akan diberikan 3 elemen di setiap array:
1. Name
2. Gender ('male'/'female')
3. Married (true/false)

Jika gender = 'male', maka tambahkan 'Mr.' sebelum name
Jika gender = 'female' dan married = true, maka tambahkan 'Mrs.' sebelum name
Jika gender = 'female' dan married = false, maka tambahkan 'Ms.' sebelum name

Function akan mengembalikan string berupa nama-nama yang sudah ditambahkan dengan title
ex: Mr. *****, Mrs. *****, Ms. *****, Mr. *****


[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan .split, indexOf!

*/

function returnATitle(people, isLastIndex) {
    let name = people[0];
    let title = "";
    let comma = ", ";
    if (isLastIndex) {
        comma = "";
    }

    if (people[1] == 'male') {
        title = "Mr."
    } else {
        if (people[1] == 'female' && people[2]) {
            title = "Mrs."
        } else {
            title = "Ms."
        }
    }

    return `${title} ${name}${comma}`
}


function addTitle(peoples) {
    let myArr = [];
    let counter = 0;
    if (peoples.length === 0) {
        return "No data";
    }
    for (let i = 0; i < peoples.length; i++) {
        myArr.push(returnATitle(peoples[i], peoples.length - 1 === i));
    }
    return myArr;
}

// addTitle([['Sergei', 'male', true], ['Alyona', 'female', false]]);

console.log(addTitle([['Sergei', 'male', true], ['Alyona', 'female', false]])); // Mr. Sergei, Ms. Alyona

console.log(addTitle([['Dimitri', 'male', false], ['Anastasia', 'female', false], ['Vladlena', 'female', true]])); // Mr. Dimitri, Ms. Anastasia, Mrs. Vladlena

console.log(addTitle([])); // No data
