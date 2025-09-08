// Eksperimen Mini – Pendaftaran Kelas Coding
let peserta = [];
let nama = prompt("Masukkan nama:");
let usia = Number(prompt("Masukkan usia:"));
let minat = prompt("Masukkan minat:");

peserta.push({ nama: nama, usia: usia, minat: minat });

for (let i = 0; i < peserta.length; i++) {
  console.log(
    `${peserta[i].nama} (${peserta[i].usia}) - Minat: ${peserta[i].minat}`
  );
}
