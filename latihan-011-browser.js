// Tantangan Praktik Mandiri – Toko Kelontong Pak Wisesa
//💻 Jawaban – Versi Browser
let belanjaan = [];
let tambah = "y";

while (tambah.toLowerCase() === "y") {
  let namaBarang = prompt("Masukkan nama barang:");
  let harga = Number(prompt("Masukkan harga barang:"));
  let jumlah = Number(prompt("Masukkan jumlah barang:"));

  belanjaan.push({ nama: namaBarang, harga: harga, jumlah: jumlah });
  tambah = prompt("Tambah barang lagi? (y/n)");
}

let total = 0;
console.log("📋 Daftar Belanja:");
for (let item of belanjaan) {
  let subtotal = item.harga * item.jumlah;
  console.log(
    `${item.nama} - ${item.jumlah} x Rp${item.harga} = Rp${subtotal}`
  );
  total += subtotal;
}
console.log(`Total Belanja: Rp${total}`);
if (total > 100000) {
  console.log("💡 Belanja besar!");
}
