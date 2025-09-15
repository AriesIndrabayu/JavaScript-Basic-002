let daftarHadir = [];

function tambahHadir() {
  try {
    let nama = prompt("Masukkan nama siswa:");
    if (!nama) throw "Nama tidak boleh kosong!";
    if (daftarHadir.includes(nama)) throw "Nama sudah ada dalam daftar!";
    daftarHadir.push(nama);
    alert("Siswa ditambahkan!");
  } catch (error) {
    alert("Error: " + error);
  }
}

function tampilkanHadir() {
  if (daftarHadir.length === 0) {
    alert("Belum ada siswa yang hadir.");
  } else {
    alert("Daftar hadir:\n" + daftarHadir.join("\n"));
  }
}

tambahHadir();
tampilkanHadir();
console.log(daftarHadir);
