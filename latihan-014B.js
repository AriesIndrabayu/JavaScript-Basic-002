// Registrasi Anggota Perpustakaan versi Terminal (CLI)
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let data = {};
rl.question("Nama: ", (nama) => {
  if (!nama) {
    console.log("❌ Nama wajib diisi!");
    return rl.close();
  }
  data.nama = nama;
  rl.question("Usia: ", (usia) => {
    usia = Number(usia);
    if (isNaN(usia) || usia < 10) {
      console.log("❌ Usia minimal 10 tahun!");
      return rl.close();
    }
    data.usia = usia;
    rl.question("Email: ", (email) => {
      let polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!polaEmail.test(email)) {
        console.log("❌ Email tidak valid!");
        return rl.close();
      }
      data.email = email;
      rl.question("Nomor HP: ", (hp) => {
        if (isNaN(hp) || hp.length < 10) {
          console.log("❌Nomor HP minimal 10 digit!");
          return rl.close();
        }
        data.hp = hp;

        console.log(
          `✅ Anggota terdaftar: ${data.nama}, ${data.usia}, ${data.email}, HP: ${data.hp}`
        );
        rl.close();
      });
    });
  });
});
