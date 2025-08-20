let warna = ["Merah", "Hijau", "Biru"];

// Akses array
console.log(warna[0]); // Merah
console.log(warna[2]); // Biru

console.log(warna);
warna[1] = "Kuning";
console.log(warna);

// index = element - 1
warna.push("Hitam");
console.log(warna);
warna.push("Coklat");

let JumlahElemen = warna.length;
console.log(JumlahElemen);
console.log("====== Daftar Buah-Buahan =====");
for (let index = 0; index < JumlahElemen; index++) {
  let noUrut = index + 1;
  console.log(noUrut + ". " + warna[index]);
}

console.log("Variabel Warna: ", typeof warna);
let obj = {
  nama: "Oded",
  usia: 20,
};
console.log("Variabel Obj: ", typeof obj);
console.log("Variabel Warna: ", Array.isArray(warna));
console.log("Variabel Obj: ", Array.isArray(obj));

let nama = "Oded";
let usia = 20;
let isAdmin = true;
console.log(typeof nama);
console.log(typeof usia);
console.log(typeof isAdmin);
