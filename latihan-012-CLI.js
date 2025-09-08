/*
Tantangan Praktik Mandiri
Tema: To-Do List Sederhana
Instruksi:
- Buat array tugas kosong.
- Fungsi tambahTugas(namaTugas) untuk menambah tugas.
- Fungsi lihatTugas() untuk menampilkan semua tugas.
- Fungsi hapusTugas(index) untuk menghapus tugas.
- Gunakan prompt & console.log.

*/
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tugas = [];

function tambahTugas(namaTugas) {
  tugas.push(namaTugas);
}

function lihatTugas() {
  console.log("📋 Daftar Tugas:");
  for (let i = 0; i < tugas.length; i++) {
    console.log(`${i + 1}. ${tugas[i]}`);
  }
}

function hapusTugas(index) {
  tugas.splice(index - 1, 1);
}

rl.question("Masukkan tugas pertama: ", (t1) => {
  tambahTugas(t1);
  rl.question("Masukkan tugas kedua: ", (t2) => {
    tambahTugas(t2);
    lihatTugas();
    rl.question("Hapus tugas nomor berapa? ", (num) => {
      hapusTugas(Number(num));
      lihatTugas();
      rl.close();
    });
  });
});
