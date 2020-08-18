/**
 
Virus Percentage
================
 
Implementasikan function virusPercentage untuk menghitung
persentase virus yang ada. Hanya akan ada 4 tipe virus, yaitu:
- *
- #
- @
- $
 
# Contoh:
- `input` -> **##@
  output -> 40% *, 40% #, 20% @
- `input` -> **#*##
  output -> 50% *, 50% #
 
Contoh lain ada di test case
 
# Asumsi:
- `input` tidak akan pernah kosong
- `input` pasti berisi virus
 
# Aturan coding:
- DILARANG menggunakan regex
 
*/

function virusPercentage(input) {
    let sum = input.length;
    let all_categories = [];
    let res = {}

    for (let i = 0; i < sum; i++) {
        let isDuplicate = false;
        for (let j = 0; j < all_categories.length; j++) {
            if (input[i] == all_categories[j]) {
                isDuplicate = true;
            }
        }
        if (!isDuplicate) {
            all_categories.push(input[i]);
        }
    }

    all_categories.forEach(c => { res[c] = 0 })
    for (let i = 0; i < input.length; i++) { res[input[i]] += 1 }
    let str_res = "";
    for (let i = 0; i < all_categories.length; i++) {
        let symbol = all_categories[i];
        let percentage = res[symbol] / sum * 100;
        if (i === all_categories.length - 1) {
            str_res += `${percentage}% ${symbol}`
        } else {
            str_res += `${percentage}% ${symbol}, `
        }
    }
    return str_res;

}

console.log(virusPercentage('**#*##')); // 50% *, 50% #
console.log(virusPercentage('**######')); // 75% #, 25% *
console.log(virusPercentage('**##@')); // 40% *, 40% #, 20% @
console.log(virusPercentage('@')); // 100% @
console.log(virusPercentage('#$*@')); // 25% #, 25% $, 25% *, 25% @
