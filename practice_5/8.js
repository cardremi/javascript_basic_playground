/**

Implementasikan function formatDuration() yang akan menerima satu parameter yaitu jumlah detik
dan akan mengembalikan string berupa detik yang sudah di-format supaya bisa dibaca oleh manusia

Function ini hanya menerima angka yang tidak negatif (0..MAX INTEGER). Jika angka adalah 0, maka
function akan mengembalikan string "Sekarang". Jika tidak, maka akan mengembalikan durasi yang
sudah di-format (kombinasi tahun, hari, jam, menit dan detik).

Contoh:
  formatDuration(62)    // "1 tahun dan 2 detik"
  formatDuration(3662)  //  "1 jam, 1 menit dan 2 detik"
Spasi harus persis seperti output yang diharapkan

Aturan:
- Tiap satuan waktu harus dipisah dengan 1 koma dan 1 spasi (", "). Kecuali satuan terakhir, yang
akan dipisah dengan " dan ", seperti ditulis dalam Bahasa Indonesia.

- Satuan waktu yang lebih besar harus dikeluarkan sebelum yang lebih kecil.
Maka, "1 detik dan 1 tahun" adalah SALAH, tapi "1 tahun dan 1 detik" adalah BENAR.

// return num === 1 ? 1 : num + numberSum(num - 1);

// let output = 0;
// for(let i = 1; i <= num; i++){
//   output += i;    
// }
// return output;
- Satuan waktu harus digunakan sebanyak mungkin. Contohnya adalah function tidak boleh
mengembalikan nilai "61 detik", tapi "1 menit dan 1 detik" sebagai gantinya.

- DILARANG ada satuan waktu yang duplikat seperti "5 detik dan 1 detik"

- DILARANG menampilkan satuan waktu yang isinya adalah 0 seperti "2 jam, 1 menit dan 0 detik"

Untuk soal ini, asumsikan bahwa 1 tahun = 365 hari, dan 1 hari = 24 jam

Urutan satuan waktu dari terbesar ke terkecil:
 - Tahun Hari Jam Menit Detik

*/

function formatDuration(seconds) {
    const YEAR = 31536000, DAY = 86400, HOUR = 3600, MINUTES = 60;
    let temp = seconds;
    const time = [0, 0, 0, 0];
    let year = 0;
    let day = 0;
    let hour = 0;
    let minutes = 0;
    if(temp === 0){
        return "Sekarang"
    }
    if(temp > YEAR){
        let doLoop = true
        while(doLoop){
            temp = temp - YEAR;
            time[0] += 1;
            if(temp < YEAR){
                doLoop = false;
            }
        }
    }

    if(temp > DAY){
        let doLoop = true
        while(doLoop){
            temp = temp - DAY;
            time[1] += 1;
            if(temp < DAY){
                doLoop = false;
            }
        }
    }

    if(temp > HOUR){
        let doLoop = true
        while(doLoop){
            temp = temp - HOUR;
            time[2] += 1;
            if(temp < HOUR){
                doLoop = false;
            }
        }
    }

    if(temp >= MINUTES){
        let doLoop = true
        while(doLoop){
            temp = temp - MINUTES;
            time[3] += 1;
            if(temp < MINUTES){
                doLoop = false;
            }
        }
    }

    let str = "";
    if(time[0] != 0){ 
        str += time[0]+" tahun"
        if(time[1] != 0){
            str += ","
        } 
    }
    if(time[1] != 0){ 
        str +=  `${time[1]} hari`
        if(time[2] != 0){
            str += ","
        }
    }
    if(time[2] != 0){ 
        str += ` ${time[2]} jam`
        if(time[3] != 0){
            str += ","
        }
    }
    if(time[3] != 0){ 
        str += ` ${time[3]} menit` 
        if(temp != 0){
            str += ","
        }
    }
    if(temp != 0){ 
        str += temp+" detik" 
    }

    let a = "";
    for (let i = 0; i < time.length; i++) {
        if(time[i] != 0){
            if(i == 0){
                a += `${time[i]} tahun`
            }else if(i == 1){
                a += `${time[i]} hari`
            }else if(i == 2){
                a += `${time[i]} jam`
            }else if(i == 3){
                a += `${time[i]} menit`
            }
        }else if(time[i+1] != 0){
            a += ", "
        }

    }

    return a

}

console.log(formatDuration(10000)); // 2 jam, 46 menit dan 40 detik
console.log(formatDuration(3662)); // 1 jam, 1 menit dan 2 detik
console.log(formatDuration(62)); // 1 menit dan 2 detik
console.log(formatDuration(500000)); // 5 hari, 18 jam, 53 menit dan 20 detik
console.log(formatDuration(2000000)); // 23 hari, 3 jam, 33 menit dan 20 detik
console.log(formatDuration(94608000)); // 3 tahun
console.log(formatDuration(126144060)); // 4 tahun dan 1 menit
console.log(formatDuration(0)); // Sekarang
