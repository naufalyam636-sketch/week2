// Import semua fungsi dari buku.js
import {
  tambahBuku,
  lihatBuku,
  updateBuku,
  hapusBuku,
  cariBuku,
  lihatBukuTersedia,
  tambahBanyakBuku,
} from "./buku.js";

// Contoh penggunaan
tambahBuku("Fiqh Islam", "Ust. Amin", 2010);
tambahBuku("Tafsir Al-Qur'an", "Ust. Khodir", 2015);
tambahBuku("Hadits Pilihan", "Ust. Amin", 2018);

lihatBuku(); // Menampilkan semua buku

updateBuku(2, { tersedia: false, penulis: "Ust. Khodir" });

hapusBuku(3); // Menghapus buku dengan ID 3

cariBuku("fiqih"); // Cari berdasarkan kata kunci

lihatBukuTersedia(); // Tampilkan hanya buku yang tersedia

// Tambah banyak buku sekaligus
tambahBanyakBuku(
  { judul: "Sirah Nabawiyah", penulis: "Ust. Zain", tahun: 2020 },
  { judul: "Tauhid", penulis: "Ust. Hasan", tahun: 2019 }
);

lihatBuku(); // Lihat semua buku lagi
