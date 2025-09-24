const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tugas = [];

async function ambilPengguna() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
}

async function tambahTugas(judul, deskripsi, status) {
  if (!judul || !deskripsi) {
    console.log("Judul dan deskripsi tidak boleh kosong!");
    return;
  }

  let users = await ambilPengguna();
  let randomUser = users[Math.floor(Math.random() * users.length)];

  let dataTugas = { judul, deskripsi, status, ditugaskan: randomUser.name };
  tugas.push(dataTugas);
  tampilkanTugas();
}

function tampilkanTugas() {
  console.log("\n📄 Daftar Tugas:");
  tugas.forEach((t, i) => {
    console.log(`${i + 1}. ${t.judul} [${t.status}] - ${t.ditugaskan}`);
  });
  if (tugas.length > 5) console.log("🎯 Produktif sekali hari ini!");
}

rl.question("Masukkan judul tugas:", function (judul) {
  rl.question("Masukkan deskripsi:", function (deskripsi) {
    rl.question("Masukkan status (Belum/Sedang/Selesai):", function (status) {
      tambahTugas(judul, deskripsi, status);
      rl.close();
    });
  });
});
