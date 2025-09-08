// Kasus ke-1: Program kasir mini dengan modularisasi

function inputBarang(nama, harga, jumlah) {
  // return {nama: nama, harga:harga, jumlah:jumlah}
  return { nama, harga, jumlah };
}

function hitungTotal(barang) {
  return barang.harga * barang.jumlah;
}

function tampilkanStruk(belanjaan) {
  let totalAkhir = 0;
  console.log("📃 Daftar Belanja:");
  for (let item of belanjaan) {
    let subTotal = hitungTotal(item);
    console.log(
      `${item.nama} - ${item.jumlah} x Rp${item.harga} = Rp${subTotal}`
    );
    totalAkhir += subTotal;
    // totalAkhir = totalAkhir + subTotal;
  }
  console.log("Total Belanja:", totalAkhir);
}

// Implementasi
console.log("\n.:: KASUS 1 ::.");
let belanjaan = [];
belanjaan.push(inputBarang("Beras", 50000, 2));
belanjaan.push(inputBarang("Gula", 20000, 1));
tampilkanStruk(belanjaan);

// Kasus 2: Pendaftaran kelas koding

function tambahPeserta(nama, usia, minat) {
  return { nama, usia, minat };
}

function tampilkanPeserta(peserta) {
  console.log("📃 Daftar Peserta:");
  for (let s of peserta) {
    console.log(`${s.nama} (${s.usia} th) - Minat: ${s.minat}`);
  }
}

// Implementasi:
console.log("\n.:: KASUS 2 ::.");
let peserta = [];
peserta.push(tambahPeserta("Ajat", 17, "Frontend"));
peserta.push(tambahPeserta("Cecep", 18, "Backend"));
peserta.push(tambahPeserta("Yana", 19, "UI/UX"));

tampilkanPeserta(peserta);
