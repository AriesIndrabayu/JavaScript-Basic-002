let tugas = [];
async function ambilPengguna() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await response.json();
  return users;
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
  console.clear();
  console.log("📄 Daftar Tugas:");
  tugas.forEach((t, i) => {
    console.log(`${i + 1}. ${t.judul} [${t.status}] - ${t.ditugaskan}`);
  });
  if (tugas.length > 5) console.log("🎯 Produktif sekali hari ini!");
}

tambahTugas("Belajar JS", "Menyelesaikan latihan Bab 20", "Sedang Berlangsung");
tambahTugas(
  "Belajar Python",
  "Menyelesaikan latihan Bab 20",
  "Sedang Berlangsung"
);
