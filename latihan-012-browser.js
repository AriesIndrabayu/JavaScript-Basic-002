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

tambahTugas(prompt("Masukkan tugas pertama:"));
tambahTugas(prompt("Masukkan tugas kedua:"));
lihatTugas();
hapusTugas(Number(prompt("Hapus tugas nomor berapa?")));
lihatTugas();
