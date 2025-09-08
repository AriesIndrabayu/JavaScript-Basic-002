/*
// contoh nested object
let pengguna = {
  nama: "Asep",
  kontak: {
    email: "asep@mail.com",
    telepon: "08123456789",
  },
};

console.log(pengguna.kontak.email);

// contoh object di dalam array
let siswa = [
  { nama: "Wati", usia: 17 },
  { nama: "Indra", usia: 18 },
  { nama: "Nita", usia: 16 },
];

console.log(siswa[0].nama);

// cetak semua data
for (let i = 0; i < siswa.length; i++) {
  console.log(siswa[i].nama + " - " + siswa[i].usia + " tahun");
}

*/

let siswa = [
  {
    nama: "Wisesa",
    usia: 17,
    kontak: {
      hp: "081234567890",
      email: "wisesa@mail.com",
    },
  },
  {
    nama: "Yana",
    usia: 18,
    kontak: {
      hp: "082345678901",
      email: "yana@mail.com",
    },
  },
];

// Menampilkan nama dan email semua siswa
console.log("📚 Daftar Siswa:");
for (let i = 0; i < siswa.length; i++) {
  console.log(`Nama: ${siswa[i].nama}`);
  console.log(`Email: ${siswa[i].kontak.email}`);
}

// Mengubah nomor HP Wisesa
siswa[0].kontak.hp = "089999999999";

console.log("📞 Nomor HP Wisesa terbaru:", siswa[0].kontak.hp);
