// inisialisasi input
const input1 = ["Abc", "bCd"];
const input2 = ["Pendanaan", "Terproteksi", "Untuk", "Dampak", "Berarti"];

// fungsi untuk sorting, parameter array
function groupSort(arr) {
  let map = new Map()             // inisialisasi map
  let strFull = arr.join('');     // merubah array ke string

  // memasukkan setiap karakter/huruf ke map beserta jumlah kemunculannya,
  // jika sudah ada di dalam map, maka value sebelumnya ditambah 1
  [...strFull].forEach(s =>  map.has(s) ? map.set(s, map.get(s) + 1) : map.set(s,1))

  // sorting setiap key yang ada di dalam map
  let strArr = [...map.keys()].sort((a, b) => {
    // jika nilai kemunculan dari kedua huruf sama, maka akan dibandingkan berdasarkan karakter terbesar
    if (map.get(a) === map.get(b)) {
      // jika nilai huruf kedua lebih besar, maka urutan huruf pertama dan kedua ditukar
      // nilai huruf besar lebih kecil dibanding nilai huruf kecil dalam unicode
      return a < b ? -1 : 1;
    
    // jika kemunculan pertama lebih besar, maka urutan huruf pertama tetap
    // jika kemunculan kedua lebih besar, maka urutan huruf kedua ditukar dengan huruf pertama
    } else if (map.get(a) > map.get(b)) {
      return -1
    } else {
      return 1
    }

  });
  // console.log(strFull)
  // console.log(strArr.join(''))

  return strArr.join('')
}

// print output
console.log(groupSort(input1))
console.log(groupSort(input2))
