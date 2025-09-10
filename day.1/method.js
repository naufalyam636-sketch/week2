let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let kaliLima = angka.map(function (i) {
  return i * 5;
});
console.log(kaliLima);

//2
let genap = angka.filter(function (n) {
  return n % 2 === 0;
});
console.log(genap);

//4
let jumlah = angka.reduce(function(total,x){
    return total + x
})
console.log(jumlah)

//5
let nyari = angka.find(function(z){
    return z > 8
})
console.log(nyari)

