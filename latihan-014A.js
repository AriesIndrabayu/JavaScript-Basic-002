// Registrasi Anggota Perpustakaan versi Browser (GUI)

let nama = prompt("Nama:");
let usia = Number(prompt("Usia:"));
let email = prompt("Email:");
let hp = prompt("Nomor HP:");

if (!nama) {
  alert("Nama wajib diisi!");
} else if (isNaN(usia) || usia < 10) {
  alert("Usia minimal 10 tahun!");
} else {
  let polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!polaEmail.test(email)) {
    alert("Email tidak valid!");
  } else if (isNaN(hp) || hp.length < 10) {
    alert("Nomor HP minimal 10 digit!");
  } else {
    alert(`Anggota terdaftar: ${nama}, ${usia}, ${email}, HP: ${hp}`);
  }
}
