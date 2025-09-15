/*
function hitungDiskon(harga, diskon) {
  let potongan = harga * (diskon / 100);
  let total = harga - potongan;
  return total;
}

console.log(hitungDiskon(200_000, 20));
try {
  let angka = Number(prompt("Masukkan angka:"));
  if (isNaN(angka)) {
    throw "Input bukan angka!";
  }
  alert(`Angka valid: ${angka}`);
} catch (error) {
  alert("Terjadi erro: " + error);
}

function inputUsia() {
  try {
    let usia = Number(prompt("Masukkan usia:"));
    if (isNaN(usia) || usia <= 0) {
      throw "Usia tidak valid!";
    }
    alert(`Usia Anda: ${usia}`);
  } catch (error) {
    alert("Terjadi error: " + error);
  }
}

inputUsia();
*/

let peserta = [];

function daftarPeserta() {
  try {
    let nama = prompt("Masukkan nama:");
    let usia = Number(prompt("Masukkan usia:"));
    let email = prompt("Masukkan email:");

    let polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!nama) throw "Nama wajib diisi!";
    if (isNaN(usia) || usia < 15) throw "Usia minimal 15 tahun";
    if (!polaEmail.test(email)) throw "Email tidak valid";

    peserta.push({ nama, usia, email });
    alert("Pendaftaran berhasil!");
  } catch (error) {
    alert("Terjadi error: " + error);
  }
}

daftarPeserta();
console.log(peserta);
