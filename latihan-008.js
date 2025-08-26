// Contoh Objek
let siswa = {
  nama: "Rina",
  usia: 17,
  hobi: "membaca",
};

// console.log(siswa.nama);

let buku = {
  judul: "Belajar JavaScript",
  penulis: "Yesi",
  tahun: 2024,
};

// console.log(buku);
buku.halaman = 150;
// console.log(buku);
buku.tahun = 2025;
// console.log(buku);

for (let kunci in buku) {
  console.log(kunci + ": " + buku[kunci]);
}

// Ekperimen Mini: Kartu Identitas Ajat

// Membuat object identitas Ajat
let identitas = {
  nama: "Ajat",
  usia: 17,
  asal: "Bandung",
  minat: "Programming",
};

// Menampilkan seluruh isi object
console.log("📇 Kartu Identitas Ajat:");
console.log("Nama:", identitas.nama);
console.log(`Usia: ${identitas.usia}`);
console.log("Asal: " + identitas.asal);
console.log("Minat:", identitas.minat);

// Update minat
identitas.minat = "Frontend Web";
console.log("🎯 Minat terbaru:", identitas.minat);
