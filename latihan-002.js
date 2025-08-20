/*
1. ini adalah penamaan variabel yang tidak boleh, contohnya
let 123nama = "Duden"
let nama depan = "Duden"

2. yang diperbolehkan
let nama_depan = "Duden"
let namaDepanSiswa = "Duden" ==> camelCase


3. yang harus dihindari:
let x1
let abc123
*/

// Tipe data

// Tipe data string
let nama = "Rina";

// Tipe data number
let usia = 27;
let tinggi_badan = 65.3;

// Tipe data boolean => True/False
let isActive = true;

// Tipe data undefined => belum diberi nilai
let email;

// Tipe data null => nilai kosong
let alamat = null;

nama = "Gunawan";
// nama = 1000;

console.log("Nama Siswa: ", nama);
console.log("Usia : ", usia, typeof usia);
console.log("Tinggi badang : " + tinggi_badan + " Cm", typeof tinggi_badan);
console.log("Apakah siswa aktif? ", isActive, typeof isActive);
console.log("Email: ", email, typeof email);
console.log("Alamat: ", alamat, typeof email);

// struktur data => array & object
let siswa = { nama: "Asep", usia: 18 }; // object
let nilai = [80, 90, 100]; // array
console.log(typeof siswa);
console.log(typeof nilai);

console.log(Array.isArray(nilai));
console.log(Array.isArray(siswa));
