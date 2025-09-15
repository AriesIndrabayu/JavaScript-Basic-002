const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let daftarHadir = [];

function tambahHadir() {
  rl.question("Masukkan nama siswa: ", (nama) => {
    try {
      if (!nama) throw "Nama tidak boleh kosong!";
      if (daftarHadir.includes(nama)) throw "Nama sudah ada dalam daftar!";
      daftarHadir.push(nama);
      console.log("✅ siswa ditambahkan!");
    } catch (error) {
      console.log("⚠ Error:", error);
    }
    tampilkanHadir();
  });
}

function tampilkanHadir() {
  if (daftarHadir.length === 0) {
    console.log("Belum ada siswa yang hadir.");
  } else {
    console.log("Daftar hadir:");
    daftarHadir.forEach((siswa, i) => console.log(`${i + 1}. ${siswa}`));
  }

  rl.close;
}

tambahHadir();
