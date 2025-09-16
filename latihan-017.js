// Contoh ke-1 kode synchronous
/*
console.log("Mulai tugas sinkon");
for (let i = 1; i <= 3; i++) {
  // Simulasi pekerjaan singkat
  console.log(`Proses sinkron ${i}`);
}
console.log("Selesai tugas sinkron");

*/

// Contoh ke-2 asynchronous setTimeout()
/*
console.log("Mulai...");
setTimeout(() => {
  console.log("Pesan ini muncul setelah 2 detik");
}, 2000);
console.log("Selesai");
*/

// Contoh ke-3 Sequential Asynchronous (async/await)
/*

function pekerjaanSingkat(i, delay = 300) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(
        `(Proses ke-${i} setelah ${delay} ms) Proses asinkron await ${i}`
      );
      resolve(i);
    }, delay);
  });
}

async function runSequential() {
  console.log("Mulai tugas asinkron(sequential await)");
  for (let i = 1; i <= 3; i++) {
    await pekerjaanSingkat(i, 2000);
  }
  console.log("Selesai tugas asinkron(squential await)");
}

runSequential();
*/

// Contoh ke-4 setInterval
/*
let hitung = 1;
let interval = setInterval(() => {
  console.log(`Detik ke-${hitung}`);
  hitung++;
  if (hitung > 5) clearInterval(interval);
}, 1000);
*/

//Contoh ke-5 Callback Function
/*
function sapa(nama, callback) {
  console.log("Halo, " + nama);
  callback();
}
sapa("Yana", () => {
  console.log("Selamat datang di kelas JavaScript!");
});
*/

// Contoh ke-6 Callback dengan setTimeout (Asynchronous)
/*
console.log("Mulai");
setTimeout(function () {
  console.log("Tugas selesai setelah 2 detik");
}, 2000);

console.log("Selesai duluan");

*/

// Eksperimen Mini
/*
Tema: Timer Pengingat Belajar
Cerita:
Yana sering lupa waktu belajar. Kita akan buat timer yang setiap 3 detik
memberi pengingat "Jangan lupa belajar!" tapi berhenti setelah 3 kali.
*/
let hitung = 1;
let interval = setInterval(() => {
  console.log(`⏰ Pengingat ${hitung}: Jangan lupa belajar!`);
  hitung++;
  if (hitung > 3) {
    clearInterval(interval);
    console.log("Peringatan selesai ✅");
  }
}, 3000);
