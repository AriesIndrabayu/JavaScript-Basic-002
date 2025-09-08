// Mini Project 1: Sistem Pengunjung Toko Milik Pak Engkos
let pengunjung = [
  { nama: "Ajat", waktu: "10:00", status: "belanja" },
  { nama: "Yana", waktu: "10:30", status: "lihat-lihat" },
  { nama: "Wisesa", waktu: "11:00", status: "belanja" },
];

// Tampilkan seluruh pengunjung
console.log("=== Data Pengunjung Toko ===");
for (let i = 0; i < pengunjung.length; i++) {
  console.log(
    `${pengunjung[i].nama} datang pukul ${pengunjung[i].waktu} untuk ${pengunjung[i].status}`
  );
}

// Mini Project 2: To-Do List Harian Oded
let tugas = [
  { aktivitas: "Cuci motor", status: "belum" },
  { aktivitas: "Belanja sayur", status: "sedang" },
  { aktivitas: "Kerjakan PR", status: "selesai" },
];

console.log("=== Daftar Tugas Oded ===");
for (let i = 0; i < tugas.length; i++) {
  let item = tugas[i];
  let ikon = "";

  if (item.status === "belum") ikon = "⏳";
  else if (item.status === "sedang") ikon = "🔄";
  else if (item.status === "selesai") ikon = "✅";

  console.log(`${ikon} ${item.aktivitas} [${item.status}]`);
}
