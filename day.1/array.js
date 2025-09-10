let teman = ["ryian", "dien", "lexy", "jaisy", "ayyas"];
console.table(teman);
teman.unshift("rehan");
teman.push("zaki");
console.table(teman);
teman.pop();
teman.shift();
teman.splice(2, 0, "baja");
console.table(teman);

//1
let buah = ["semangka", "anggur", "apel", "pir"];
buah.unshift("durian");
buah.push("nanas");
console.table(buah);

let belanjaan = ["susu", "buah", "baju"];
belanjaan.push("celana", "topi");
console.table(belanjaan);

let film = ["unyil", "otan", "bolang"];
film.push("merah putih one for all");
console.table(film);

let warna = ["ungu", "pink", "hijau"];
//2
let mainan = ["yoyo", "mobilan", "robot", "hp"];
mainan.shift();
console.table(mainan);

let baju = ["baju biru", "baju merah", "baju putih"];
baju.pop();
console.log(baju);

let tugas = ["mtk", "ipa", "it"];
tugas.shift();
console.log(tugas);

let antri = [1, 2, 3, 4, 5, 6, 7];
antri.shift();
console.table(antri);

//3
console.log(teman.length);
console.log(buah.length);
console.log(belanjaan.length);
console.log(antri.length);

//4
warna.splice(2, 0, "biru");
console.table(warna);

teman.splice(3, 1);
console.table(teman);

antri.splice(3, 1, 30);
console.table(antri);

let benda = ["buku","pensil","penghapus"]
benda.splice(0,1,"pulpen")
console.log(benda)


