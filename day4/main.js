import { luasPersegi } from "./persegi.js"; // Ambil alat hitung persegi
import { luasLingkaran } from "./lingkaran.js"; // Ambil alat hitung lingkaran

console.log("Luas Persegi 5x5:", luasPersegi(5)); // Cetak hasil: 25
console.log("Luas Lingkaran r=7:", luasLingkaran(7)); // Cetak hasil: ~153.94

import { besar } from "./teks.js";

console.log(besar("belajar modular"));
import { jamSekarang } from "./waktu.js";

console.log("Jam saat ini:", jamSekarang());
import sapa from './salam.js'; 

console.log(sapa("mas dani")); 