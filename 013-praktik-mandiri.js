function tambahBuku(judul, penulis, tahun) {
  return { judul, penulis, tahun };
}

function tampilkanBuku(daftarBuku) {
  console.log("📚 Daftar Buku:");
  for (let buku of daftarBuku) {
    console.log(`${buku.judul} - ${buku.penulis} (${buku.tahun})`);
  }
}

function cariBuku(daftarBuku, judul) {
  let hasil = daftarBuku.find((b) => b.judul === judul);
  if (hasil) {
    console.log(
      `✅ Ditemukan: ${hasil.judul} - ${hasil.penulis} (${hasil.tahun})`
    );
  } else {
    console.log("❌ Buku dengan judul '" + judul + "' tidak ditemukan!");
  }
}

// Implementasi:
let daftarBuku = [];
daftarBuku.push(tambahBuku("Belajar JS", "Engkos", 2023));
daftarBuku.push(tambahBuku("Dasar Web", "Ajat", 2022));
daftarBuku.push(tambahBuku("JavaScript Basic Jilid-1", "Oded", 2024));

tampilkanBuku(daftarBuku);
cariBuku(daftarBuku, "Belajar JS");
cariBuku(daftarBuku, "Algoritma");
