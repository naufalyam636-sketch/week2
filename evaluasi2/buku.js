let daftarBuku = [];

let idBerikutnya = 1;

// Fungsi untuk menambah satu buku
function tambahBuku(judul, penulis, tahun) {
  if (!judul || !penulis) {
    console.log("judul dan penulis tidak boleh kosong.");
    return;
  }

  const bukuBaru = {
    id: idBerikutnya++,
    judul: judul, 
    penulis: penulis, 
    tahun: tahun,
    tersedia: true,
  };

  daftarBuku.push(bukuBaru); 
  console.log("buku berhasil ditambahkan:", bukuBaru);
}


function lihatBuku() {
  if (daftarBuku.length === 0) {
    console.log("belum ada buku.");
    return;
  }

  console.log("daftar Buku:");
  for (const buku of daftarBuku) {
    console.log(
      `ID: ${buku.id} | Judul: ${buku.judul} | Penulis: ${buku.penulis} | Tahun: ${buku.tahun} | Tersedia: ${buku.tersedia}`
    );
  }
}


function updateBuku(id, dataBaru) {
  const index = daftarBuku.findIndex((b) => b.id === id);

  if (index === -1) {
    console.log("buku dengan ID tersebut tidak ditemukan.");
    return;
  }

  // Gunakan spread dan destructuring
  daftarBuku[index] = {
    ...daftarBuku[index], 
    ...dataBaru, 
  };

  console.log("buku berhasil diupdate:", daftarBuku[index]);
}

function hapusBuku(id) {
  const index = daftarBuku.findIndex((b) => b.id === id);

  if (index === -1) {
    console.log("buku dengan ID tersebut tidak ditemukan.");
    return;
  }

  const bukuDihapus = daftarBuku.splice(index, 1); 
  console.log("buku berhasil dihapus:", bukuDihapus[0]);
}


function cariBuku(kataKunci) {
  const hasil = daftarBuku.filter(
    (b) =>
      b.judul.toLowerCase().includes(kataKunci.toLowerCase()) ||
      b.penulis.toLowerCase().includes(kataKunci.toLowerCase())
  );

  console.log("hasil pencarian:");
  console.log(hasil);
}

// Fungsi tambahan: tampilkan hanya buku yang tersedia
function lihatBukuTersedia() {
  const tersedia = daftarBuku.filter((b) => b.tersedia);
  console.log("buku yang tersedia:");
  console.log(tersedia);
}

// Fungsi tambahan: tambah banyak buku sekaligus
function tambahBanyakBuku(...bukuArray) {
  for (const buku of bukuArray) {
    tambahBuku(buku.judul, buku.penulis, buku.tahun);
  }
}

// Ekspor semua fungsi
export {
  tambahBuku,
  lihatBuku,
  updateBuku,
  hapusBuku,
  cariBuku,
  lihatBukuTersedia,
  tambahBanyakBuku,
};

