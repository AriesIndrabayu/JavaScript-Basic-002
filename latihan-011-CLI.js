// Tantangan Praktik Mandiri – Toko Kelontong Pak Wisesa
//🖥 Jawaban – Versi CLI
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let belanjaan = [];

function tanyaBarang() {
  rl.question("Masukkan nama barang: ", function (namaBarang) {
    rl.question("Masukkan harga barang: ", function (harga) {
      rl.question("Masukkan jumlah barang: ", function (jumlah) {
        belanjaan.push({
          nama: namaBarang,
          harga: Number(harga),
          jumlah: Number(jumlah),
        });

        rl.question("Tambah barang lagi? (y/n): ", function (jawab) {
          if (jawab.toLowerCase() === "y") {
            tanyaBarang();
          } else {
            let total = 0;
            console.log("\n📋 Daftar Belanja:");
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
            rl.close();
          }
        });
      });
    });
  });
}

tanyaBarang();
