let nama = prompt("Masukkan nama Anda:");
let usia = prompt("Masukkan usia Anda:");
let email = prompt("Masukkan email Anda:");
usia = Number(usia);

// Validasi input kosong
if (!nama) {
  alert("Nama wajib diisi!");
}
// Validasi tipe data angka
else if (isNaN(usia) || usia <= 0) {
  alert("Usia harus angka positif!");
} else {
  //  Validasi alamat email. oded123@gmail.com
  //   a@b.c
  /*
  TLD = Top-Level Domain
  jenisnya:
  1. gTLD (Generic Top-Level Domain) = bersifat umum : .com, .org, .net, .info dll
  2. ccTLD (Country Code Top-Level Domain) = kode negara: .id(Indonesia), .us(Amerika), .jp(Jepang) dll
  3. sTLD (Sponsored Top-Level Domain) = dikelola oleh organisasi tertentu: .edu(pendidikan), .gov(pemerintahan).mil(militer) dll
  */
  let polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!polaEmail.test(email)) {
    alert("Email tidak valid!");
  } else {
    alert("Pendaftaran berhasil!");
  }
}
