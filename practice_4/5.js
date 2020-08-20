/**
CSV to Object
==============
Implementasikan function `csvToObject` untuk merubah string yang
diberikan menjadi sebuah object baru.
`csvToObject` menerima 2 parameter yaitu `keys` dan `values`
yang merupakan sebuah CSV (Comma Separated Values)
Keys & values di dalam object baru nantinya akan diambil dari kedua
parameter yang diberikan.
Contoh:
- Input: 'name,age', 'Aang,112'
  Output: { name: 'Aang', age: '112' }
- Input: 'title,description,content', 'Foobar,Foo and Bar,Foobar content'
  Output: { title: 'Foobar', description: 'Foo and Bar', content: 'Foobar Content' }
- Input: '', ''
  Output: { }
*/


function processKey(keys){
    const data = {};
    let keyTemp = "";
    for (let i = 0; i < keys.length; i++) {
        if(keys[i] == ','){
            data[keyTemp] = "";
            keyTemp = "";
        }else if(i == keys.length-1){
            keyTemp += keys[i];
            data[keyTemp] = "";
            keyTemp = "";
        }else{
            keyTemp += keys[i];
        }
    }
    return data;
}

function csvToObject(keys, values) {
    const data = processKey(keys);
    let valTemp = "";
    let counter = 0;
    for (let i = 0; i < values.length; i++) {
        if(values[i] == ','){
            data[Object.keys(data)[counter]] = valTemp; 
            valTemp = "";
            counter++;
        }else if(i == values.length-1){
            valTemp += values[i];
            data[Object.keys(data)[counter]] = valTemp; 
            valTemp = "";
            counter++;
        }else{
            valTemp += values[i];
        }
    }
    return data;
}


console.log(csvToObject('name,phoneNumber', 'Dimitri,+666123654'));
// { name: 'Dimitri', phoneNumber: '+666123654' }

console.log(csvToObject('firstName,lastName,nationality', 'Sergei,Dragunov,Russia'));
// { firstName: 'Sergei', lastName: 'Dragunov', nationality: 'Russia' }

console.log(csvToObject('', ''));
  // { }
